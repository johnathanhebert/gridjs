function rectangle() {
    context.save();
    context.beginPath();
    context.fillStyle = '#ff0000';
    context.strokeStyle = '#000000';
    context.lineWidth = 2;
    context.rect(250, 150, 100, 100);
    context.fill();
    context.stroke();
    context.restore();
}