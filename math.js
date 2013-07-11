Array.prototype.translate = translate;
Array.prototype.scale = scale;
Array.prototype.rotate = rotate;

function translate(tx, ty) {
    var translation = [1, 0, 0, 1, tx, ty];
    transformation = mul(transformation, translation);
    context.setTransform.apply(context, transformation);
    return transformation;
}

function scale(sx, sy) {
    var scaling = [sx, 0, 0, sy, 0, 0];
    transformation = mul(transformation, scaling);
    context.setTransform.apply(context, transformation);
    return transformation;
}

function rotate(deg) {
    var a = deg * pi / 180;
    var rotation = [cos(a), sin(a), -sin(a), cos(a), 0, 0];
    transformation = mul(transformation, rotation);
    context.setTransform.apply(context, transformation);
    return transformation;
}

function mul(A, B) {
    return A && B && [
        A[0]*B[0] + A[2]*B[1],
        A[1]*B[0] + A[3]*B[1],
        A[0]*B[2] + A[2]*B[3],
        A[1]*B[2] + A[3]*B[3],
        A[0]*B[4] + A[2]*B[5] + A[4],
        A[1]*B[4] + A[3]*B[5] + A[5]
    ];
}