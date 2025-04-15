class Drawing {
    cells = new Set();           // All currently drawn cells
    undoStack = [];              // Stack of past actions
    redoStack = [];              // Stack of undone actions
    maxHistorySize = 3;
    drawing = false;
    isAltPressed = false;
    primedForFloodFill = false;

    constructor(element, context, cellSize) {
        this.element = element;
        this.context = context;
        this.cellSize = cellSize;

        this.element.addEventListener("mousedown", this.handleMouseDown);
        this.element.addEventListener("mouseup", this.handleMouseUp);
        this.element.addEventListener("mousemove", this.handleMouseMove);
        this.element.addEventListener("mouseout", this.handleMouseOut);
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    handleMouseDown = (event) => {
        this.drawing = true;
        this.isAltPressed = event.altKey;

        if (this.primedForFloodFill) {
            const [x, y] = this.getPosition(event);

            this.floodFill(x, y);

            return;
        }

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

        this.data();
    };

    handleMouseOut = () => {
        if (!this.drawing) return;

        this.drawing = false;

        this.data();
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

        if (event.key === "f" || event.key === "F") {
            this.primedForFloodFill = true;
        }
    };

    handleKeyUp = (event) => {
        if (event.key === "f" || event.key === "F") {
            this.primedForFloodFill = false;
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

    data = () => {
        // First find bounds of the drawing
        const positions = Array.from(this.cells).map(key => key.split(',').map(Number));

        if (positions.length === 0) {
            console.log("[]");
            return;
        }

        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        positions.forEach(([x, y]) => {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
        });

        const rows = maxY - minY + 1;
        const cols = maxX - minX + 1;

        const grid = Array.from({ length: rows }, () =>
            Array(cols).fill(0)
        );

        positions.forEach(([x, y]) => {
            grid[y - minY][x - minX] = 1;
        });

        console.log(JSON.stringify(grid));
    }

    floodFill = (startX, startY) => {
        const maxCols = Math.floor(this.element.width / this.cellSize);
        const maxRows = Math.floor(this.element.height / this.cellSize);

        const isInsideBounds = (x, y) => x >= 0 && y >= 0 && x < maxCols && y < maxRows;

        const startKey = `${startX},${startY}`;
        if (this.cells.has(startKey)) return;

        const filled = new Set();
        const queue = [[startX, startY]];
        const newCells = [];

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            const key = `${x},${y}`;

            if (!isInsideBounds(x, y) || filled.has(key) || this.cells.has(key)) {
                continue;
            }

            filled.add(key);
            this.cells.add(key);
            newCells.push(key);

            this.context.fillStyle = "white";
            this.context.fillRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );

            queue.push([x + 1, y]);
            queue.push([x - 1, y]);
            queue.push([x, y + 1]);
            queue.push([x, y - 1]);
        }

        const timestamp = Date.now();
        this.undoStack.push({ timestamp, cells: newCells });
        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }

        this.redoStack = [];

        this.data();
    };
};

class PoissonDiskSampler {
    constructor(columns, rows, radius = 2, limit = 30) {
        this.columns = columns;
        this.rows = rows;
        this.radius = radius; // in grid cells, not pixels
        this.limit = limit;

        this.grid = Array.from({ length: rows }, () => Array(columns).fill(null));
        this.samples = [];
    }

    isValid = (row, column) => {
        if (row < 0 || column < 0 || row >= this.rows || column >= this.columns) {
            return false;
        }

        for (let r = -this.radius; r <= this.radius; r++) {
            for (let c = -this.radius; c <= this.radius; c++) {
                const nr = row + r;
                const nc = column + c;

                if (nr < 0 || nc < 0 || nr >= this.rows || nc >= this.columns) continue;

                const neighbor = this.grid[nr][nc];

                if (neighbor !== null) {
                    const dr = nr - row;
                    const dc = nc - column;
                    const distSq = dr * dr + dc * dc;

                    if (distSq < this.radius * this.radius) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    sample = (origin) => {
        const samples = [];
        const active = [];

        if (!this.isValid(origin.position.y, origin.position.x)) return [];

        this.grid[origin.position.y][origin.position.x] = origin;

        samples.push(origin);
        active.push(origin);

        while (active.length > 0) {
            let found = false;

            const id = Math.floor(Math.random() * active.length);
            const point = active[id];

            for (let tries = 0; tries < this.limit; tries++) {
                const angle = Math.random() * 2 * Math.PI;
                const distance = this.radius + Math.random();

                const offsets = {
                    vertical: Math.round(distance * Math.sin(angle)),
                    horizontal: Math.round(distance * Math.cos(angle))
                };

                const candidate = {
                    position: {
                        x: point.position.x + offsets.vertical,
                        y: point.position.y + offsets.horizontal
                    }
                };

                if (this.isValid(candidate.position.y, candidate.position.x)) {
                    this.grid[candidate.position.y][candidate.position.x] = candidate;

                    samples.push({
                        ...candidate,
                        source: point
                    });

                    active.push(candidate);

                    found = true;

                    break;
                }
            }

            if (!found) {
                active.splice(id, 1);
            }
        }

        this.samples = samples;

        return samples;
    }

    place = (point) => {
        const distance = this.radius + Math.random();

        const offsets = {
            vertical: Math.round(distance * Math.sin(angle)),
            horizontal: Math.round(distance * Math.cos(angle))
        };

        return {
            position: {
                x: point.position.x + offsets.vertical,
                y: point.position.y + offsets.horizontal
            }
        };
    }

    plant = (
        seeds,
        offset = { position: { y: 0 } }
    ) => {
        const samples = [];
        const active = [];

        const padding = Math.max(...seeds.map(seed => seed.position.y)) + 1;

        const grid = Array.from({
            length: (this.rows - offset.position.y) + padding
        }, () =>
            Array(this.columns).fill(null)
        );

        const isValid = (row, column, seedling = false) => {
            if (seedling) return true;

            // NOTE : PREVENT NEW CANDIDATES FROM APPEARING ABOVE THE CHUNK
            if (
                row < 0 ||
                column < 0
            ) return false;

            // NOTE : PREVENT NEW CANDIDATES FROM APPEARING BELOW THE CHUNK
            if (row >= this.rows) return false;

            // NOTE : PREVENT NEW CANDIDATES FROM APPEARING TO THE RIGHT OF THE CHUNK
            if (column >= this.columns) return false;

            for (let r = -this.radius; r <= this.radius; r++) {
                for (let c = -this.radius; c <= this.radius; c++) {
                    const nr = row + r;
                    const nc = column + c;

                    if (
                        nr < 0 ||
                        nc < 0
                    ) continue;

                    // NOTE : ALLOW LOW POINTS TO CHECK THE SEED AREA FOR OVERLAP
                    if (nr >= grid.length) continue;

                    if (nc >= this.columns) continue;

                    const neighbor = grid[nr][nc];

                    if (neighbor !== null) {
                        const dr = nr - row;
                        const dc = nc - column;
                        const distSq = dr * dr + dc * dc;

                        if (distSq < this.radius * this.radius) {
                            return false;
                        }
                    }
                }
            }

            return true;
        }

        for (const seed of seeds) {
            seed.position.y = seed.position.y - offset.position.y;

            grid[seed.position.y][seed.position.x] = seed;

            active.push({
                ...seed,
                seedling: true,
            });

            samples.push({
                ...seed,
                seedling: true,
            });
        }

        while (active.length > 0) {
            const id = Math.floor(Math.random() * active.length);
            const point = active[id];

            let found = false;

            for (let index = 0; index < this.limit; index++) {
                const angle = Math.random() * 2 * Math.PI;
                const distance = this.radius + Math.random();

                const offsets = {
                    vertical: Math.round(distance * Math.sin(angle)),
                    horizontal: Math.round(distance * Math.cos(angle))
                };

                const candidate = {
                    position: {
                        x: point.position.x + offsets.vertical,
                        y: point.position.y + offsets.horizontal,
                    },
                };

                if (
                    isValid(candidate.position.y, candidate.position.x)
                ) {
                    grid[candidate.position.y][candidate.position.x] = candidate;

                    samples.push({
                        ...candidate,
                        source: point
                    });

                    active.push(candidate);

                    found = true;

                    break;
                }
            }

            if (!found) {
                active.splice(id, 1);
            }
        }

        this.samples = samples;

        return samples;
    }
};

class Chunker {
    colors = {
        chunk: {
            current: 'rgb(15, 15, 15)',
            next: 'rgb(12, 12, 12)',
        },
        cell: {
            seed: "#ff5722",
            regular: "cornsilk"
        },
        line: "rgba(255, 248, 220, 0.1)"
    };

    fillStyle = this.colors.chunk.current;

    constructor(columns, rows, cellSize) {
        this.columns = columns;
        this.rows = rows;
        this.cellSize = cellSize;

        this.radius = 10;
        this.accumulatedTime = 0;
        this.lastTimestamp = null;
        this.chunks = [];

        const chunk = this.createChunkOnScreen();

        this.createChunkOffScreen_v2(
            chunk,
            {
                position: {
                    y: -this.rows
                }
            }
        );
    }

    chunk(offset = { position: { x: 0, y: 0 } }) {
        const sampler = new PoissonDiskSampler(
            this.columns,
            this.rows,
            this.radius
        );

        const cells = sampler.sample({
            position: {
                x: Math.floor(Math.random() * this.columns),
                y: Math.floor(Math.random() * this.rows),
            }
        });

        for (let cell of cells) {
            cell.position.x += Math.floor(offset?.position?.x ?? 0);
            cell.position.y += Math.floor(offset?.position?.y ?? 0);
            cell.fillStyle = this.colors.cell.regular;
        }

        this.fillStyle = this.fillStyle === this.colors.chunk.current ? this.colors.chunk.next : this.colors.chunk.current;

        return {
            id: Math.random().toString(36).substring(2, 9),
            index: this.chunks.length,
            hasCreatedNewChunk: false,
            width: this.columns,
            height: this.rows,
            cells,
            fillStyle: this.fillStyle,
            offset,
            position: {
                x: Math.floor(offset?.position?.x ?? 0), // In term of grid units.
                y: Math.floor(offset?.position?.y ?? 0) // In term of grid units.
            }
        };
    }

    createChunkOnScreen = () => {
        const chunk = this.chunk();

        this.chunks.push(chunk);

        return chunk;
    }

    createChunkOffScreen = (offset) => {
        const chunk = this.chunk(offset);

        this.chunks.push(chunk);

        this.stitch();
    }

    createChunkOffScreen_v2 = (current, offset) => {
        const seeds = [];

        current.cells.forEach((cell, index) => {
            const target = current.position.y + this.radius;

            if (cell.position.y <= target) {
                cell.fillStyle = "rgba(255, 87, 34, 0.05)";

                seeds.push({
                    index,
                    position: {
                        x: cell.position.x,
                        y: cell.position.y
                    },
                });
            }
        });

        const sampler = new PoissonDiskSampler(this.columns, this.rows, this.radius);

        const cells = sampler.plant(
            seeds,
            offset
        );

        for (let cell of cells) {
            cell.position.x += Math.floor(offset?.position?.x ?? 0);
            cell.position.y += Math.floor(offset?.position?.y ?? 0);
            cell.fillStyle = cell?.seedling ? this.colors.cell.seed : this.colors.cell.regular;
        }

        this.fillStyle = this.fillStyle === this.colors.chunk.current ? this.colors.chunk.next : this.colors.chunk.current;

        const chunk = {
            id: Math.random().toString(36).substring(2, 9),
            index: this.chunks.length,
            hasCreatedNewChunk: false,
            width: this.columns,
            height: this.rows,
            cells,
            fillStyle: this.fillStyle,
            offset,
            position: {
                x: Math.floor(offset?.position?.x ?? 0), // In term of grid units.
                y: Math.floor(offset?.position?.y ?? 0) // In term of grid units.
            }
        };

        this.chunks.push(chunk);

        return chunk;
    }

    removeChunk = (id) => {
        this.chunks = this.chunks.filter(chunk => chunk.id !== id);
    }

    scrollDown = (timestamp, units = 1, duration = 1000) => {
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;

            return;
        }

        const deltaTime = timestamp - this.lastTimestamp;

        if (deltaTime <= 0) {
            return;
        }

        this.lastTimestamp = timestamp;
        this.accumulatedTime += deltaTime;

        const steps = Math.floor(this.accumulatedTime / duration) * units;

        if (steps > 0) {
            if (!(this.chunks.length > 0)) {
                return;
            }

            for (let chunk of this.chunks) {
                // NOTE : REMOVE CHUNKS
                if (chunk.position.y > this.rows) {
                    this.removeChunk(chunk.id);

                    continue;
                }

                // NOTE : CREATE NEW CHUNK
                const bottom = chunk.position.y + chunk.height;
                const half = Math.floor(this.rows / 2);

                if (
                    !chunk.hasCreatedNewChunk &&
                    chunk.index > 0 &&
                    bottom >= half
                ) {
                    chunk.hasCreatedNewChunk = true;

                    this.createChunkOffScreen_v2(
                        chunk,
                        {
                            position: {
                                y: chunk.position.y - chunk.height
                            }
                        }
                    );
                }

                chunk.position.y += units;

                for (let cell of chunk.cells) {
                    cell.position.y += units;
                }
            }

            this.accumulatedTime -= steps * duration;
        }

    }

    draw(context) {
        context.save();

        for (const chunk of this.chunks) {
            context.fillStyle = chunk?.fillStyle || "white";

            // NOTE : ONLY IN HERE FOR DEBUGGING PURPOSES
            context.fillRect(
                Math.floor(chunk.position.x * this.cellSize),
                Math.floor(chunk.position.y * this.cellSize),
                Math.floor(chunk.width * this.cellSize),
                Math.floor(chunk.height * this.cellSize),
            );

            for (const cell of chunk.cells) {
                context.fillStyle = cell.fillStyle;

                context.fillRect(
                    Math.floor(cell.position.x * this.cellSize),
                    Math.floor(cell.position.y * this.cellSize),
                    Math.floor(this.cellSize),
                    Math.floor(this.cellSize),
                );

                this.connect(
                    cell?.source,
                    cell,
                    context
                );
            };

            context.restore();
        }
    }

    connect = (
        source = {},
        target = {},
        context
    ) => {
        if (!source?.position) return;
        if (!target?.position) return;

        let {
            x: x0,
            y: y0,
        } = source?.position ?? {};

        let {
            x: x1,
            y: y1,
        } = target?.position ?? {};

        let deltaX = Math.abs(x1 - x0);
        let deltaY = Math.abs(y1 - y0);
        let stepX = x0 < x1 ? 1 : -1;
        let stepY = y0 < y1 ? 1 : -1;
        let error = deltaX - deltaY;

        let isFirstStep = true;

        while (true) {
            if (
                !isFirstStep && (
                    x0 !== x1 ||
                    y0 !== y1
                )
            ) {
                context.fillStyle = this.colors.line;

                context.fillRect(
                    x0 * this.cellSize,
                    y0 * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );
            }

            isFirstStep = false;

            if (x0 === x1 && y0 === y1) break;

            let e2 = 2 * error;

            if (e2 > -deltaY) {
                error -= deltaY;
                x0 += stepX;
            }

            if (e2 < deltaX) {
                error += deltaX;
                y0 += stepY;
            }
        }
    }
};

export default class Canvas {
    id;
    animating = false;
    drawing = false;
    backgroundColor = "rgb(12, 12, 12)";
    cellSize = 5;

    drawGrid = () => {
        this.context.strokeStyle = "rgb(0, 0, 0)";

        for (let i = 0; i <= this.columns; i++) {
            const x = i * this.cellSize;

            this.context.beginPath();
            this.context.moveTo(x, 0);
            this.context.lineTo(x, this.canvas.height);
            this.context.stroke();
        }

        for (let j = 0; j <= this.rows; j++) {
            const y = j * this.cellSize;

            this.context.beginPath();
            this.context.moveTo(0, y);
            this.context.lineTo(this.canvas.width, y);
            this.context.stroke();
        }
    }

    handleResize = () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.rows = Math.floor(this.canvas.height / this.cellSize);
        this.columns = Math.floor(this.canvas.width / this.cellSize);

        this.chunker = new Chunker(
            this.columns,
            this.rows,
            this.cellSize
        );
    };

    handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
            this.resume();
        } else {
            this.pause();
        }
    };

    resume = () => {
        if (this.animating) return;

        this.chunker = new Chunker(
            this.columns,
            this.rows,
            this.cellSize
        );

        this.animating = true;

        this.loop();
    }

    pause = () => {
        this.animating = false;

        cancelAnimationFrame(this.id);
    }

    initialize = () => {
        this.canvas = document.createElement("canvas");
        this.container = document.createElement("div");
        this.noise = document.createElement("div");
        this.overlay = document.createElement("div");

        this.container.className = "background container";
        this.noise.className = "background noise";
        this.overlay.className = "background overlay";
        this.canvas.className = "background canvas";

        this.context = this.canvas.getContext("2d");
        this.context.imageSmoothingEnabled = false;

        this.container.appendChild(this.overlay);
        this.container.appendChild(this.noise);
        this.container.appendChild(this.canvas);

        document.body.appendChild(this.container);

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.rows = Math.floor(this.canvas.height / this.cellSize);
        this.columns = Math.floor(this.canvas.width / this.cellSize);

        window.addEventListener("resize", this.handleResize);
        window.addEventListener("visibilitychange", this.handleVisibilityChange);

        this.chunker = new Chunker(
            this.columns,
            this.rows,
            this.cellSize
        );

        this.resume();
    }

    loop = (timestamp) => {
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.chunker.scrollDown(timestamp, 5, 100);
        this.chunker.draw(this.context);

        this.drawGrid();

        this.id = requestAnimationFrame(this.loop);
    }
};
