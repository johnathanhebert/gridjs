function smiley() {
    var cx = 100;
    var cy = 100;
    
    context.save();
    
    context.setTransform.apply(context, smiley.transformation);
    
    context.lineCap = 'round';
    
    // face
    context.beginPath();
    context.fillStyle = '#FFFB00';
    context.strokeStyle = '#000000';
    context.lineWidth = 4;
    context.arc(cx, cy, 80, 0, 2*pi, true);
    context.fill();
    context.stroke();
    
    // left eye
    context.beginPath();
    context.fillStyle = '#000000';
    context.arc(cx - 30, cy - 40, 10, 0, 2*pi, true);
    context.fill();
    
    // right eye
    context.beginPath();
    context.fillStyle = '#000000';
    context.arc(cx + 30, cy - 40, 10, 0, 2*pi, true);
    context.fill();
    
    // mouth
    context.beginPath();
    context.strokeStyle = '#000000';
    context.lineWidth = 10;
    context.arc(cx, cy, 50, 0, pi, false);
    context.stroke();
    
    context.restore();
}