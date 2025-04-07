/*
export default class Canvas {
    backgroundColor = "rgb(12, 12, 12)";
    cellSize = 5;

    resizeCanvas = () => {
        this.element.width = window.innerWidth;
        this.element.height = window.innerHeight;
        this.rows = Math.floor(this.element.height / this.cellSize);
        this.cols = Math.floor(this.element.width / this.cellSize);
    }

    drawGrid = () => {
        this.context.strokeStyle = "rgb(9, 9, 9)";
        
        for (let i = 0; i <= this.cols; i++) {
            let x = i * this.cellSize;
            this.context.beginPath();
            this.context.moveTo(x, 0);
            this.context.lineTo(x, this.element.height);
            this.context.stroke();
        }
        
        for (let j = 0; j <= this.rows; j++) {
            let y = j * this.cellSize;
            this.context.beginPath();
            this.context.moveTo(0, y);
            this.context.lineTo(this.element.width, y);
            this.context.stroke();
        }
    }

    initialize = () => {
        this.rain = new Rain(this.cellSize);
        this.element = document.createElement("canvas");
        this.element.id = "background";
        this.context = this.element.getContext("2d");
        
        document.body.appendChild(this.element);

        window.addEventListener("resize", this.resizeCanvas);
        this.resizeCanvas();
        
        this.loop();
    }

    loop = (timestamp) => {
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, this.element.width, this.element.height);
        
        this.drawGrid(); // Draw the new grid
        this.rain.update(this.context, this.cellSize, timestamp);

        requestAnimationFrame(this.loop);
    }
}

class Rain {
    drops = [];
    raindropLengthMin = 1;
    raindropLengthMax = 5;
    raindropOpacityEnd = 0.1;
    raindropOpacityStart = 0.8;
    lastTime = 0;
    deltaTime = 0;

    constructor(cellSize) {
        this.cellSize = cellSize;
    }

    createRaindrop = () => {
        return {
            x: Math.floor(Math.random() * (window.innerWidth / this.cellSize)),
            y: 0,
            length: Math.floor(Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin),
        };
    }

    updateRaindropMovement = (drop) => {
        drop.y += 1; // Move one grid unit downward
    }

    drawLineUsingGrid = (start, end, context) => {
        let x1 = start[0], y1 = start[1];
        let x2 = end[0], y2 = end[1];
        
        let dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1);
        let sx = x1 < x2 ? 1 : -1, sy = y1 < y2 ? 1 : -1;
        let p = dx - dy;
        
        while (true) {
            // Calculate the relative position along the drop's length to determine opacity
            let distance = y1 - start[1];
            let opacity = this.raindropOpacityEnd + (distance / (end[1] - start[1])) * (this.raindropOpacityStart - this.raindropOpacityEnd);

            // Set the fill color with the calculated opacity
            context.fillStyle = `rgba(100, 100, 100, ${opacity})`;
            
            // Draw the raindrop pixel
            context.fillRect(x1 * this.cellSize, y1 * this.cellSize, this.cellSize, this.cellSize);
            
            if (x1 === x2 && y1 === y2) break;
            let e2 = 2 * p;
            if (e2 > -dy) { p -= dy; x1 += sx; }
            if (e2 < dx) { p += dx; y1 += sy; }
        }
    }

    update = (context, cellSize, timestamp) => {
        this.deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;

        if (Math.random() < 0.05) {
            this.drops.push(this.createRaindrop());
        }

        for (let i = this.drops.length - 1; i >= 0; i--) {
            let drop = this.drops[i];
            this.updateRaindropMovement(drop);

            let endY = drop.y + drop.length;
            this.drawLineUsingGrid([drop.x, drop.y], [drop.x, endY], context);

            if (drop.y > Math.floor(window.innerHeight / cellSize)) {
                this.drops.splice(i, 1);
            }
        }
    }
}
*/

class Cloud {
    height = 50;
    width = 10;
    position = {
        x: 0,
        y: 0
    };

    constructor(cellSize = 0) {
        if(cellSize === 0) {
            throw new Error('Cell size must be set for clouds');
        }

        this.cellSize = cellSize;
    }

    // Draw the cloud
    draw(context) {
        context.fillStyle = "rgba(255, 255, 255)";
    
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                const x = i * this.cellSize;
                const y = j * this.cellSize;

                context.fillRect(
                    x,
                    y,
                    this.cellSize,
                    this.cellSize
                 );
            }
        }
    }
}


class Clouds {
    // constructor(cellSize, maxWidth = 5, maxHeight = 2) {
    constructor(cellSize) {
        this.cellSize = cellSize;

        this.clouds = [new Cloud(this.cellSize)];
        
        // this.maxWidth = maxWidth;
        // this.maxHeight = maxHeight;
        // this.moveInterval = 500; // Default move interval for clouds
    }

    /*
    // Add a new cloud, but check for overlap first
    addCloud() {
        let newCloud;
        let overlap = true;
        
        // Try adding a cloud until we get a non-overlapping position
        while (overlap) {
            newCloud = new Cloud(
                this.cellSize,
                this.maxWidth,
                this.maxHeight,
                this.moveInterval
            );

            overlap = this.clouds.some(existingCloud => newCloud.isOverlapping(existingCloud));

            // Debugging: print when a cloud is successfully added or skipped
            if (!overlap) {
                console.log("Added a new cloud:", newCloud);
            }
        }
        
        // Add the non-overlapping cloud
        this.clouds.push(newCloud);
    }
    */

    // Update all clouds and move them across the screen
    update(context, cols, timestamp) {
        // Ensure the clouds are added automatically
        // If no clouds have been added, we add them
        // if (this.clouds.length === 0) {
        //     this.addCloud(); // Add at least one cloud on start
        // }

        for (const cloud of this.clouds) {
            cloud.draw(context);
        }

        /*
        if (this.clouds.length === 0) {
            this.clouds.push();

            console.log("DEBUG::this.clouds", this.clouds);

            this.clouds.forEach(cloud => {
                // cloud.update(cols, timestamp); // Update cloud's position with the timestamp
                cloud.draw(context); // Draw the cloud
            });
        }
        */
    }
}

class Rain {
    drops = [];
    raindropLengthMin = 1;
    raindropLengthMax = 5;
    raindropOpacityEnd = 0.1;
    raindropOpacityStart = 0.8;
    lastTime = 0;
    deltaTime = 0;

    constructor(cellSize) {
        this.cellSize = cellSize;
    }

    createRaindrop = () => {
        return {
            x: Math.floor(Math.random() * (window.innerWidth / this.cellSize)),
            y: 0,
            length: Math.floor(Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin),
        };
    }

    updateRaindropMovement = (drop) => {
        drop.y += 1; // Move one grid unit downward
    }

    drawLineUsingGrid = (start, end, context) => {
        let x1 = start[0], y1 = start[1];
        let x2 = end[0], y2 = end[1];
        
        let dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1);
        let sx = x1 < x2 ? 1 : -1, sy = y1 < y2 ? 1 : -1;
        let p = dx - dy;
        
        while (true) {
            // Calculate the relative position along the drop's length to determine opacity
            let distance = y1 - start[1];
            let opacity = this.raindropOpacityEnd + (distance / (end[1] - start[1])) * (this.raindropOpacityStart - this.raindropOpacityEnd);

            // Set the fill color with the calculated opacity
            context.fillStyle = `rgba(100, 100, 100, ${opacity})`;
            
            // Draw the raindrop pixel
            context.fillRect(x1 * this.cellSize, y1 * this.cellSize, this.cellSize, this.cellSize);
            
            if (x1 === x2 && y1 === y2) break;
            let e2 = 2 * p;
            if (e2 > -dy) { p -= dy; x1 += sx; }
            if (e2 < dx) { p += dx; y1 += sy; }
        }
    }

    update = (context, cellSize, timestamp) => {
        this.deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;

        if (Math.random() < 0.05) {
            this.drops.push(this.createRaindrop());
        }

        for (let i = this.drops.length - 1; i >= 0; i--) {
            let drop = this.drops[i];
            this.updateRaindropMovement(drop);

            let endY = drop.y + drop.length;
            this.drawLineUsingGrid([drop.x, drop.y], [drop.x, endY], context);

            if (drop.y > Math.floor(window.innerHeight / cellSize)) {
                this.drops.splice(i, 1);
            }
        }
    }
}

class Drawing {
    cells = new Set();           // All currently drawn cells
    undoStack = [];              // Stack of past actions
    redoStack = [];              // Stack of undone actions
    maxHistorySize = 3;
    drawing = false;
    isAltPressed = false;

    constructor(element, context, cellSize) {
        this.element = element;
        this.context = context;
        this.cellSize = cellSize;

        this.element.addEventListener("mousedown", this.handleMouseDown);
        this.element.addEventListener("mouseup", this.handleMouseUp);
        this.element.addEventListener("mousemove", this.handleMouseMove);
        this.element.addEventListener("mouseout", this.handleMouseOut);
        window.addEventListener("keydown", this.handleKeyDown);
    }

    handleMouseDown = (event) => {
        this.drawing = true;
        this.isAltPressed = event.altKey;
        const timestamp = Date.now();

        // New action begins: push a new entry to undoStack
        this.undoStack.push({ timestamp, cells: [] });

        // Enforce undo history size
        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }

        // Clear redo history (new action invalidates redo)
        this.redoStack = [];
    };

    handleMouseUp = () => {
        this.drawing = false;
    };

    handleMouseOut = () => {
        this.drawing = false;
    };

    handleMouseMove = (event) => {
        if (!this.drawing) return;

        const [x, y] = this.getPosition(event);
        const key = `${x},${y}`;

        if (this.isAltPressed) {
            if (this.cells.has(key)) {
                this.cells.delete(key);
                this.context.clearRect(
                    x * this.cellSize,
                    y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );
            }
        } else {
            if (!this.cells.has(key)) {
                this.cells.add(key);
                this.context.fillStyle = "white";
                this.context.fillRect(
                    x * this.cellSize,
                    y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );

                // Add to most recent action
                const latestAction = this.undoStack[this.undoStack.length - 1];

                latestAction?.cells.push(key);
            }
        }
    };

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === "z") {
            this.undo();
        }

        if (event.ctrlKey && event.key === "y") {
            this.redo();
        }
    };

    undo = () => {
        if (this.undoStack.length === 0) return;

        const lastAction = this.undoStack.pop();

        lastAction.cells.forEach(key => {
            this.cells.delete(key);

            const [x, y] = key.split(',').map(Number);

            this.context.clearRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
        });

        this.redoStack.push(lastAction);

        if (this.redoStack.length > this.maxHistorySize) {
            this.redoStack.shift();
        }
    };

    redo = () => {
        if (this.redoStack.length === 0) return;

        const action = this.redoStack.pop();

        action.cells.forEach(key => {
            if (!this.cells.has(key)) {
                this.cells.add(key);

                const [x, y] = key.split(',').map(Number);

                this.context.fillStyle = "white";

                this.context.fillRect(
                    x * this.cellSize,
                    y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );
            }
        });

        this.undoStack.push(action);

        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }
    };

    getPosition = (event) => {
        const rect = this.element.getBoundingClientRect();

        const x = Math.round((event.clientX - rect.left) / this.cellSize);
        const y = Math.round((event.clientY - rect.top) / this.cellSize);

        return [x, y];
    };

    render = () => {
        this.cells.forEach(key => {
            const [x, y] = key.split(',').map(Number);

            this.context.fillStyle = "white";

            this.context.fillRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
        });
    };
}

export default class Canvas {
    drawing = false;
    backgroundColor = "rgb(12, 12, 12)";
    cellSize = 5;
    drawn = new Set();

    resizeCanvas = () => {
        this.element.width = window.innerWidth;
        this.element.height = window.innerHeight;
        this.rows = Math.floor(this.element.height / this.cellSize);
        this.cols = Math.floor(this.element.width / this.cellSize);
    }

    drawGrid = () => {
        this.context.strokeStyle = "rgb(9, 9, 9)";
        
        for (let i = 0; i <= this.cols; i++) {
            let x = i * this.cellSize;
            this.context.beginPath();
            this.context.moveTo(x, 0);
            this.context.lineTo(x, this.element.height);
            this.context.stroke();
        }
        
        for (let j = 0; j <= this.rows; j++) {
            let y = j * this.cellSize;
            this.context.beginPath();
            this.context.moveTo(0, y);
            this.context.lineTo(this.element.width, y);
            this.context.stroke();
        }
    }

    initialize = () => {
        this.element = document.createElement("canvas");
        this.element.id = "background";

        this.context = this.element.getContext("2d");
        
        document.body.appendChild(this.element);

        window.addEventListener("resize", this.resizeCanvas);
        this.resizeCanvas();

        this.rain = new Rain(
            this.cellSize
        );

        this.clouds = new Clouds(
            this.cellSize
        );

        this.drawing = new Drawing(
            this.element,
            this.context,
            this.cellSize
        );

        this.loop();
    }

    loop = (timestamp) => {
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, this.element.width, this.element.height);
        
        this.drawGrid();

        // TODO : DRAW CLOUDS, GET THEIR DATA, AND CREATE A SET OF CLOUDS TO DRAW AND SCROLL
        // this.clouds.update(this.context, this.cols, timestamp);
        this.rain.update(this.context, this.cellSize, timestamp);
        this.drawing.render();

        requestAnimationFrame(this.loop);
    }
}



// ---

/*
update(cols, timestamp) {
    context.fillStyle = "rgba(255, 255, 255)";

    for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
            context.fillRect(
                i * this.cellSize,
                j * this.cellSize,
                this.cellSize,
                this.cellSize
                );
        }
    }

}
*/

// Check if this cloud overlaps with another cloud
/*
isOverlapping(otherCloud) {
    // Allow for some space between clouds (e.g., 10% of their width)
    const overlapBuffer = 0.1 * this.width;

    return !(this.x + this.width + overlapBuffer <= otherCloud.x || // this is to the left of other
                this.x - overlapBuffer >= otherCloud.x + otherCloud.width || // this is to the right of other
                this.y + this.height <= otherCloud.y || // this is above other
                this.y >= otherCloud.y + otherCloud.height); // this is below other
}
*/

/*
const timeDiff = timestamp - this.lastMoveTime;

if (timeDiff >= this.moveInterval) { // Move after the specified moveInterval
    this.x += this.speed; // Move right by one cell
    this.lastMoveTime = timestamp; // Update last move time

    // Reset the cloud when it goes off the screen
    if (this.x > cols * this.cellSize) {
        this.x = -this.width; // Place cloud off-screen to the left
        this.y = Math.floor(Math.random() * 5) * this.cellSize; // Reset y position randomly
    }
}
*/