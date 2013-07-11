function status() {
    var d = new Date();
    var h = ('0' + (d.getHours() % 12)).substr(-2);
    var m = ('0' + d.getMinutes()).substr(-2);
    var s = ('0' + d.getSeconds()).substr(-2);
    var ms = ('00' + d.getMilliseconds()).substr(-3);
    var text = h + ':' + m + ':' + s + '.' + ms;
    
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.fillStyle = '#000000';
    context.font = 'Arial 20px';
    context.beginPath();
    context.fillRect(context.canvas.width - 90, context.canvas.height - 40, 80, 30);
    context.fill();
    context.fillStyle = '#ffffff';
    context.fillText(text, context.canvas.width - 82, context.canvas.height - 21);
    context.restore();
}