function originalAxes() {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    gridlines('#eeeeee', '#eeeeee');
    context.restore();
}

function transformedAxes() {
    gridlines('#6E7AD4', '#ff0000');
}

function gridlines(gridColor, axisColor) {
    var max = 1e4;
    var step = 100;
    context.save();
    context.font = 'Arial 10px';
    context.strokeStyle = gridColor;
    context.fillStyle = gridColor;
    context.lineWidth = 1;
    
    context.beginPath();
    for (var x = -max; x <= max; x += step) {
        context.fillText(x, x + 3, 12);
        context.moveTo(x, -max);
        context.lineTo(x, max);
    }
    for (var y = -max; y <= max; y += step) {
        if (y === 0) continue;
        context.fillText(y, 3, y - 3);
        context.moveTo(-max, y);
        context.lineTo(max, y);
    }
    context.stroke();
    
    context.beginPath();
    context.strokeStyle = axisColor;
    context.lineWidth = 2;
    context.moveTo(0, -max);
    context.lineTo(0, max);
    context.moveTo(-max, 0);
    context.lineTo(max, 0);
    context.stroke();
    
    context.restore();
}