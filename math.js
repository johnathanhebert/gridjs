Array.prototype.translate = translate;
Array.prototype.scale = scale;
Array.prototype.rotate = rotate;

function translate(tx, ty) {
    var translation = [1, 0, 0, 1, tx, ty];
    var transformation = Array.isArray(this) ? mul(this, translation) : translation;
    context.setTransform.apply(context, transformation);
    return transformation;
}

function scale(sx, sy) {
    var scaling = [sx, 0, 0, sy, 0, 0];
    var transformation = Array.isArray(this) ? mul(this, scaling) : scaling;
    context.setTransform.apply(context, transformation);
    return transformation;
}

function rotate(deg) {
    var a = deg * pi / 180;
    var rotation = [cos(a), sin(a), -sin(a), cos(a), 0, 0];
    var transformation = Array.isArray(this) ? mul(this, rotation) : rotation;
    context.setTransform.apply(context, transformation);
    return transformation;
}

function mul() {
    if (arguments.length === 1) return arguments[0];
    var A = arguments[0];
    var B = arguments[1];
    var AB = [];
    
    AB[0] = A[0]*B[0] + A[2]*B[1];
    AB[1] = A[1]*B[0] + A[3]*B[1];
    AB[2] = A[0]*B[2] + A[2]*B[3];
    AB[3] = A[1]*B[2] + A[3]*B[3];
    AB[4] = A[0]*B[4] + A[2]*B[5] + A[4];
    AB[5] = A[1]*B[4] + A[3]*B[5] + A[5];
    
    if (arguments.length === 2) return AB;
    
    var args = [AB].concat(slice(arguments, 2));
    return mul.apply(window, args);
}