(function() {
    var canvas = document.getElementById('drawingBoard'),
        context = canvas.getContext('2d')

    // Parameters
    var INTERVAL = 70,
        ROW_FONTSIZE = 14,
        COLUMN_END = Math.floor(canvas.width / ROW_FONTSIZE),
        CHARACTER = "π",
        CHARACTER_COLOR = "#FF0000",
        TRANSPARENCY_MASK = "rgba(0, 0, 0, 0.08)",
        rows = Math.floor(canvas.height / ROW_FONTSIZE),
        rowTraces = [],
        rowDirections = []

    // Initialize rowTraces
    for (var i = 1; i < rows; i++) {
        rowTraces[i] = Math.floor(Math.random() * canvas.width)
        rowDirections[i] = 1
    }

    context.font = ROW_FONTSIZE + "px arial"

    function draw() {
        // Transparency
        context.fillStyle = TRANSPARENCY_MASK
        context.fillRect(0, 0, canvas.width, canvas.height)

        // Red letters
        context.fillStyle = CHARACTER_COLOR

        // Render rows
        for (var i = 0; i < rowTraces.length; i++) {
            drawRow(i)
        }
    }

    function drawRow(i) {
        context.fillText(CHARACTER, rowTraces[i] * ROW_FONTSIZE, i * ROW_FONTSIZE)

        // Move trace
        rowTraces[i] += rowDirections[i]

        // Bring rowTraces back to start
        if ((rowTraces[i] > COLUMN_END || rowTraces[i] < 0) && Math.random() > 0.9) {
            if (Math.random() > 0.5) {
                rowTraces[i] = 0
                rowDirections[i] = 1
            } else {
                rowTraces[i] = COLUMN_END
                rowDirections[i] = -1
            }
        }
    }

    setInterval(draw, INTERVAL);
}())