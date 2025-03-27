/*
class Rain {
    raindropBaseColor = "rgba(100, 100, 100, ";
    drops = [];
    raindropSpeed = 800; // Pixels per second (base fall speed)
    raindropLengthMin = 10;
    raindropLengthMax = 40;
    raindropOpacityMin = 0.1;
    raindropOpacityMax = 0.4;
    raindropThickness = 2; // Thickness of the raindrop line (in pixels)
    lastTime = 0;
    deltaTime = 0;

    // Function to create a new raindrop within the grid
    createRaindrop = (grid) => {
        const cell = grid.getRandomCell(); // Get a random grid cell

        return {
            x: cell.x + Math.random() * grid.cell.size, // Offset within the cell
            y: -10, // Start slightly above the top
            length: Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin,
            opacity: Math.random() * (this.raindropOpacityMax - this.raindropOpacityMin) + this.raindropOpacityMin,
        };
    }

    // Update raindrop movement within the grid
    updateRaindropMovement = (drop, deltaTime) => {
        // Fall vertically, adjust this if needed for horizontal movement or wind
        drop.y += this.raindropSpeed * deltaTime; // Vertical movement (fall speed)
    }

    update = (context, canvas, grid, timestamp) => {
        this.deltaTime = (timestamp - this.lastTime) / 1000; // Time difference in seconds
        this.lastTime = timestamp;

        if (Math.random() < 0.05) { // Adjust the chance for new raindrops
            this.drops.push(this.createRaindrop(grid));
        }

        // Update and render raindrops within the grid
        for (let i = this.drops.length - 1; i >= 0; i--) {
            let drop = this.drops[i];

            // Update raindrop position based on grid
            this.updateRaindropMovement(drop, this.deltaTime);

            // Draw raindrop within the grid
            context.lineWidth = this.raindropThickness;
            context.strokeStyle = this.raindropBaseColor + drop.opacity + ")";
            context.beginPath();
            context.moveTo(drop.x, drop.y);
            context.lineTo(drop.x, drop.y + drop.length); // Vertical line (with tilt)
            context.stroke();

            // Remove raindrops that go off the grid
            if (drop.y > grid.rows * grid.cell.size) {
                this.drops.splice(i, 1); // Remove drop from array if it exceeds grid boundary
            }
        }
    }
}
*/
class Rain {
    raindropBaseColor = "rgba(100, 100, 100, ";
    drops = [];
    raindropSpeed = 800; // Pixels per second (base fall speed)
    raindropLengthMin = 10;
    raindropLengthMax = 40;
    raindropOpacityMin = 0.1;
    raindropOpacityMax = 0.4;
    raindropThickness = 2; // Thickness of the raindrop line (in pixels)
    lastTime = 0;
    deltaTime = 0;

    // Function to create a new raindrop within the grid
    createRaindrop = (grid) => {
        const cell = grid.getRandomCell(); // Get a random grid cell

        return {
            x: cell.x + Math.random() * grid.cell.size, // Offset within the cell
            y: -10, // Start slightly above the top
            length: Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin,
            opacity: Math.random() * (this.raindropOpacityMax - this.raindropOpacityMin) + this.raindropOpacityMin,
        };
    }

    // Update raindrop movement within the grid
    updateRaindropMovement = (drop, deltaTime) => {
        // Fall vertically, adjust this if needed for horizontal movement or wind
        drop.y += this.raindropSpeed * deltaTime; // Vertical movement (fall speed)
    }

    update = (context, canvas, grid, timestamp) => {
        this.deltaTime = (timestamp - this.lastTime) / 1000; // Time difference in seconds
        this.lastTime = timestamp;

        if (Math.random() < 0.05) { // Adjust the chance for new raindrops
            this.drops.push(this.createRaindrop(grid));
        }

        // Update and render raindrops within the grid
        for (let i = this.drops.length - 1; i >= 0; i--) {
            let drop = this.drops[i];

            // Update raindrop position based on grid
            this.updateRaindropMovement(drop, this.deltaTime);

            // Draw raindrop within the grid
            context.lineWidth = this.raindropThickness;
            context.strokeStyle = this.raindropBaseColor + drop.opacity + ")";
            context.beginPath();
            context.moveTo(drop.x, drop.y);
            context.lineTo(drop.x, drop.y + drop.length); // Vertical line (with tilt)
            context.stroke();

            // Remove raindrops that go off the grid
            if (drop.y > grid.rows * grid.cell.size) {
                this.drops.splice(i, 1); // Remove drop from array if it exceeds grid boundary
            }
        }
    }
}

class Grid {
    cell = {
        size: 5 // Size of each grid cell (in pixels)
    };

    // Calculate the number of columns and rows based on canvas dimensions
    get columns() {
        return Math.ceil(window.innerWidth / this.cell.size);
    }

    get rows() {
        return Math.ceil(window.innerHeight / this.cell.size);
    }

    /*
    constructor() {
        // Calculate the number of columns and rows based on the window size
        this.columns = Math.ceil(window.innerWidth / this.cell.size);
        this.rows = Math.ceil(window.innerHeight / this.cell.size);

        // Create a 2D array to hold the grid cells
        this.gridCells = [];
        for (let i = 0; i < this.columns; i++) {
            this.gridCells[i] = [];
            for (let j = 0; j < this.rows; j++) {
                this.gridCells[i][j] = { x: i * this.cell.size, y: j * this.cell.size };
            }
        }
    }
    */

    // Method to get a random grid cell
    getRandomCell = () => {
        const columns = this.columns;
        const rows = this.rows;

        const randomCol = Math.floor(Math.random() * columns);
        const randomRow = Math.floor(Math.random() * rows);

        return {
            x: randomCol * this.cell.size,
            y: randomRow * this.cell.size
        };
    };

    // Method to get a specific grid cell based on row and column index
    /*
    getCell = (colIndex, rowIndex) => {
        if (colIndex < 0 || colIndex >= this.columns || rowIndex < 0 || rowIndex >= this.rows) {
            return null; // Out of bounds
        }
        return this.gridCells[colIndex][rowIndex];
    }
    */

   // Method to offer nearby cells (optional)
   /*
    getNearbyCells = (x, y) => {
        const colIndex = Math.floor(x / this.cell.size);
        const rowIndex = Math.floor(y / this.cell.size);

        // Get the current cell and its 4 neighboring cells
        const cells = [
            this.getCell(colIndex, rowIndex),  // Current cell
            this.getCell(colIndex - 1, rowIndex),  // Left cell
            this.getCell(colIndex + 1, rowIndex),  // Right cell
            this.getCell(colIndex, rowIndex - 1),  // Top cell
            this.getCell(colIndex, rowIndex + 1)   // Bottom cell
        ];

        return cells.filter(cell => cell !== null); // Filter out any null cells (out of bounds)
    };
    */

    // Draw the grid on the canvas
    draw = (context, canvas) => {
        const columns = this.columns;
        const rows = this.rows;

        context.strokeStyle = "#101010"; // Grid line color
        context.lineWidth = 1;

        // Draw vertical lines (columns)
        for (let i = 0; i <= columns; i++) {
            const x = i * this.cell.size;

            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, canvas.height);
            context.stroke();
        }

        // Draw horizontal lines (rows)
        for (let j = 0; j <= rows; j++) {
            const y = j * this.cell.size;

            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(canvas.width, y);
            context.stroke();
        }
    }
}

export default class Canvas {
    backgroundColor = "rgb(12, 12, 12)";

    resizeCanvas = () => {
        this.element.width = window.innerWidth;
        this.element.height = window.innerHeight;
    }

    initialize = () => {
        this.grid = new Grid();
        this.rain = new Rain();

        this.element = document.createElement("canvas");
        this.element.id = "background";
        this.context = this.element.getContext("2d");

        document.body.appendChild(this.element);

        // NOTE : RESIZE TO FILL THE VIEWPORT
        window.addEventListener("resize", this.resizeCanvas);
        this.resizeCanvas();

        this.loop();
    }

    loop = (timestamp) => {
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, this.element.width, this.element.height);

        // Draw grid
        this.grid.draw(this.context, this.element);

        // Update and render rain
        this.rain.update(this.context, this.element, this.grid, timestamp);

        requestAnimationFrame(this.loop);
    };
}
