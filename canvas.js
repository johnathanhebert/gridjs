function run() {
    setup();
    help();
    loop();
}

function setup() {
    var body = document.body;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    body.innerHTML = '';
    body.style.margin = '0px';
    body.style.padding = '0px';
    body.style.width = window.innerWidth + 'px';
    body.style.height = window.innerHeight + 'px';
    body.style.overflow = 'hidden';
    body.appendChild(canvas);
    window.sin = Math.sin;
    window.cos = Math.cos;
    window.pi = Math.PI;
    window.slice = Array.prototype.slice.call.bind(Array.prototype.slice);
    window.context = context;
    window.transformation = [1, 0, 0, 1, 0, 0];
    window.showGrid = true;
    window.onresize = setup;
}

function help() {
    console.log('*************************************************');
    console.log('Transform the canvas like this:');
    console.log('  translate(300, 100)   <-- 300px along the X axis and 100px along the Y axis');
    console.log('  scale(3, 2)           <-- 3 times bigger along the X axis and 2 times bigger along the Y axis');
    console.log('  rotate(30)            <-- 30 degrees from the X axis towards the Y axis');
    console.log('');
    console.log('Combine operations with a dot:');
    console.log('  rotate(10).translate(200, 0).scale(3, 1)');
    console.log('');
    console.log('Reset everything:');
    console.log('  reset()');
    console.log('*************************************************');
}

function loop() {
    clear();
    smiley();
    if (showGrid) {
        originalAxes();
        transformedAxes();
    }
    status();
    requestAnimationFrame(loop);
}

function reset() {
    console.clear();
    context.setTransform(1, 0, 0, 1, 0, 0);
    return window.transformation = [1, 0, 0, 1, 0, 0];
}

function clear() {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.restore();
}

function nogrid() {
    showGrid = false;
}

function grid() {
    showGrid = true;
}