function run() {
    setup();
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
    window.onresize = setup;
}

function loop() {
    clear();
    smiley();
    originalAxes();
    transformedAxes();
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