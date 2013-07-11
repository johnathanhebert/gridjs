function smiley() {
    context.save();
    
    context.setTransform.apply(context, smiley.transformation);
    
    context.lineCap = 'round';
    
    // face
    context.beginPath();
    context.fillStyle = '#FFFB00';
    context.strokeStyle = '#000000';
    context.lineWidth = 4;
    context.arc(300, 200, 80, 0, 2*pi, true);
    context.fill();
    context.stroke();
    
    // left eye
    context.beginPath();
    context.fillStyle = '#000000';
    context.arc(270, 160, 10, 0, 2*pi, true);
    context.fill();
    
    // right eye
    context.beginPath();
    context.fillStyle = '#000000';
    context.arc(330, 160, 10, 0, 2*pi, true);
    context.fill();
    
    // mouth
    context.beginPath();
    context.strokeStyle = '#000000';
    context.lineWidth = 10;
    context.arc(300, 200, 50, 0, pi, false);
    context.stroke();
    
    context.restore();
}