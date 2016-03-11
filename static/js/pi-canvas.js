var canvas = document.getElementById('drawingBoard'),
    context = canvas.getContext('2d')

// Parameters
var INTERVAL = 90,
    FONTSIZE = 14,
    CHARACTER = "π",
    rows = canvas.height / FONTSIZE,
    traces = []

// Initialize traces
for (var i = 1; i < rows; i++) {
    traces[i] = Math.floor(Math.random() * canvas.width)
}

// Line style
context.lineWidth = 1;
context.lineJoin = context.lineCap = "round"

function draw() {
    // Transparency
    context.fillStyle = "rgba(0, 0, 0, 0.05)"
    context.fillRect(0, 0, canvas.width, canvas.height)

    // Green letters
    context.fillStyle = "#0F0"; //green text
    context.font = FONTSIZE + "px arial"

    for (var i = 0; i < traces.length; i++) {
        context.fillText(CHARACTER, traces[i] * FONTSIZE, i * FONTSIZE)

        // Move trace
        traces[i]++

        // Bring traces back to start
        if (traces[i] * FONTSIZE > canvas.width && Math.random() > 0.9) {
            traces[i] = 0
        }
    }
}

setInterval(draw, INTERVAL);