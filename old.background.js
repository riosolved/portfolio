/*
    initialize = () => {
        const canvas = document.createElement("canvas");
        canvas.id = "background";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");

        // Control variables for colors
        const backgroundColor = "rgb(12, 12, 12)"; // Dark grey background
        const raindropBaseColor = "rgba(100, 100, 100, "; // Light grey raindrop with varying opacity

        // Variables to control off-screen spawn areas
        const offScreenLeft = 100; // Raindrops can spawn up to 100px left of the canvas
        const offScreenRight = 100; // Raindrops can spawn up to 100px right of the canvas

        // Wind effect variables (tightened)
        const windSpeed = 1; // Horizontal speed of the wind
        const windVariance = 0.2; // Reduced wind variance to tighten the wind effect

        // Rain control
        const dropRate = 0.05; // Probability of a drop appearing (lower value = fewer drops)
        let rainIntensity = 0.4; // Starts at normal rain

        // Resize the canvas to fill the entire viewport
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas(); // Initialize the canvas size

        // Raindrop properties
        const drops = [];

        // Raindrop speed is constant
        const raindropSpeed = 3; // Constant fall speed for all raindrops

        // Control variable for raindrop length
        const minRaindropLength = 40; // Minimum raindrop length
        const maxRaindropLength = 70; // Maximum raindrop length

        // Function to create a new raindrop
        function createRaindrop() {
            return {
                x: Math.random() * (canvas.width + offScreenLeft + offScreenRight) - offScreenLeft, // Spawn off-screen horizontally
                y: -10, // Start just above the canvas
                length: Math.random() * (maxRaindropLength - minRaindropLength) + minRaindropLength, // Random raindrop length between min and max
                wind: Math.random() * windVariance * 2 - windVariance, // Randomized wind effect (tighter variance)
                opacity: Math.random() * 0.6 + 0.1, // Varying opacity
            };
        }

        function updateRainIntensity() {
            // Simulate smooth transitions between heavy and light rain
            rainIntensity += (Math.random() - 0.5) * 0.1; // Small random changes
            rainIntensity = Math.max(0.1, Math.min(2, rainIntensity)); // Clamp between 0.1 (light rain) and 2 (heavy rain)
        }

        function updateRain() {
            // Clear the canvas and set background
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            updateRainIntensity(); // Adjust rain density over time

            // Determine whether to create a new raindrop
            if (Math.random() < dropRate * rainIntensity) {
                drops.push(createRaindrop());
            }

            for (let i = drops.length - 1; i >= 0; i--) {
                let drop = drops[i];

                // Calculate wind effect angle
                let windForce = windSpeed + drop.wind;
                let angle = Math.atan(windForce / raindropSpeed); // Wind effect angle

                // Compute end coordinates based on wind angle
                let endX = drop.x + Math.sin(angle) * drop.length;
                let endY = drop.y + Math.cos(angle) * drop.length;

                // Draw the tilted raindrop
                ctx.strokeStyle = raindropBaseColor + drop.opacity + ")";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(endX, endY); // Apply wind-tilted endpoint
                ctx.stroke();

                // Move drop downwards and apply wind shift
                drop.y += raindropSpeed;
                drop.x += windForce;

                // Remove drops that move off-screen
                if (drop.y > canvas.height) {
                    drops.splice(i, 1);
                }
                if (drop.x < -offScreenLeft) drop.x = canvas.width + offScreenLeft;
                if (drop.x > canvas.width + offScreenRight) drop.x = -offScreenRight;
            }

            requestAnimationFrame(updateRain);
        }

        updateRain(); // Start the rain effect
    }
    */

    /*
    initialize = () => {
        const canvas = document.createElement("canvas");
        canvas.id = "background";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
    
        // Control variables for colors
        const backgroundColor = "rgb(12, 12, 12)";
        const raindropBaseColor = "rgba(100, 100, 100, ";
    
        // Variables to control off-screen spawn areas
        const offScreenLeft = 100;
        const offScreenRight = 100;
    
        // Wind effect variables (now with direction and force)
        const windDirection = 0; // Wind blowing to the right (0 radians -> positive x-axis)
        let windForce = 1; // Base wind force
        let windForceVariation = 0; // Dynamic wind strength fluctuation (±%)
        
        // Rain control
        const dropRate = 0.05;
        let rainIntensity = 0.4;
    
        // Resize the canvas to fill the viewport
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
    
        // Raindrop properties
        const drops = [];
    
        const raindropSpeed = 3;
        const minRaindropLength = 40;
        const maxRaindropLength = 70;
    
        function createRaindrop() {
            return {
                x: Math.random() * (canvas.width + offScreenLeft + offScreenRight) - offScreenLeft,
                y: -10,
                length: Math.random() * (maxRaindropLength - minRaindropLength) + minRaindropLength,
                opacity: Math.random() * 0.6 + 0.1,
            };
        }
    
        function updateRainIntensity() {
            // Smooth transitions between heavy and light rain
            rainIntensity += (Math.random() - 0.5) * 0.1;
            rainIntensity = Math.max(0.1, Math.min(2, rainIntensity));
        }
    
        function updateWind() {
            // Wind force fluctuates by ±5-10% of the base wind force
            windForceVariation = windForce * (Math.random() * 0.2 - 0.1); // Variation between -10% and +10% of base force
        }
    
        function updateRain() {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            updateRainIntensity();
            updateWind();
    
            if (Math.random() < dropRate * rainIntensity) {
                drops.push(createRaindrop());
            }
    
            for (let i = drops.length - 1; i >= 0; i--) {
                let drop = drops[i];
    
                // Wind direction and force affect raindrop movement
                let windX = Math.cos(windDirection) * (windForce + windForceVariation); // Horizontal wind force
                let windY = Math.sin(windDirection) * (windForce + windForceVariation); // Vertical wind force (could add vertical wind if needed)
    
                // Calculate wind angle for tilt
                let angle = Math.atan(windX / raindropSpeed); // Wind effect angle
    
                // Compute end coordinates based on wind angle and wind strength
                let endX = drop.x + Math.sin(angle) * drop.length;
                let endY = drop.y + Math.cos(angle) * drop.length;
    
                ctx.strokeStyle = raindropBaseColor + drop.opacity + ")";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();
    
                drop.y += raindropSpeed;
                drop.x += windX; // Apply horizontal wind force
    
                if (drop.y > canvas.height) drops.splice(i, 1);
                if (drop.x < -offScreenLeft) drop.x = canvas.width + offScreenLeft;
                if (drop.x > canvas.width + offScreenRight) drop.x = -offScreenRight;
            }
    
            requestAnimationFrame(updateRain);
        }
    
        updateRain();
    };
    */

    /*
    initialize = () => {
        const canvas = document.createElement("canvas");
        canvas.id = "background";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");

        // Control variables for colors
        const backgroundColor = "rgb(12, 12, 12)";
        const raindropBaseColor = "rgba(100, 100, 100, ";

        // Variables to control off-screen spawn areas
        const offScreenLeft = 100;
        const offScreenRight = 100;

        // Wind effect variables (now with direction and force)
        let windDirection = 0; // Start with vertical wind (0 radians -> positive x-axis)
        let windForce = 1; // Base wind force
        let windForceVariation = 0; // Dynamic wind strength fluctuation (±%)
        
        // Rain control
        const dropRate = 0.05;
        let rainIntensity = 0.4;

        // Resize the canvas to fill the viewport
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Raindrop properties
        const drops = [];

        const raindropSpeed = 3;
        const minRaindropLength = 40;
        const maxRaindropLength = 70;

        function createRaindrop() {
            return {
                x: Math.random() * (canvas.width + offScreenLeft + offScreenRight) - offScreenLeft,
                y: -10,
                length: Math.random() * (maxRaindropLength - minRaindropLength) + minRaindropLength,
                opacity: Math.random() * 0.6 + 0.1,
            };
        }

        // Easing function for smooth transition (easeInOutQuad)
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        // Update the wind direction smoothly
        let windTransitionTime = 0; // Track the time for the easing function (0 to 1)
        function updateWindDirection() {
            if (windTransitionTime < 1) {
                // Use the easing function to gradually increase the wind direction
                windTransitionTime += 0.005; // Progress time towards 1 (adjust speed of transition)
                let easedTime = easeInOutQuad(windTransitionTime); // Get eased value
                windDirection = easedTime * (Math.PI / 4); // Transition from 0 (vertical) to Math.PI / 4 (diagonal)
            }
        }

        // Function to randomly fluctuate the wind force (±10% variation from base force)
        function updateWindForce() {
            const windFluctuation = Math.random() * 0.2 - 0.1; // Random fluctuation between -0.1 and +0.1
            windForceVariation = windForce + windFluctuation * windForce; // Apply variation to the wind force
        }

        function updateRainIntensity() {
            // Smooth transitions between heavy and light rain
            rainIntensity += (Math.random() - 0.5) * 0.1;
            rainIntensity = Math.max(0.1, Math.min(2, rainIntensity));
        }

        function updateRain() {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            updateRainIntensity();
            updateWindForce(); // Randomize wind force
            updateWindDirection(); // Update wind direction smoothly

            if (Math.random() < dropRate * rainIntensity) {
                drops.push(createRaindrop());
            }

            for (let i = drops.length - 1; i >= 0; i--) {
                let drop = drops[i];

                // Wind direction and force affect raindrop movement
                let windX = Math.cos(windDirection) * windForceVariation; // Horizontal wind force with variation
                let windY = Math.sin(windDirection) * windForceVariation; // Vertical wind force with variation

                // Calculate wind angle for tilt
                let angle = Math.atan(windX / raindropSpeed); // Wind effect angle

                // Compute end coordinates based on wind angle and wind strength
                let endX = drop.x + Math.sin(angle) * drop.length;
                let endY = drop.y + Math.cos(angle) * drop.length;

                ctx.strokeStyle = raindropBaseColor + drop.opacity + ")";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                drop.y += raindropSpeed;
                drop.x += windX;

                if (drop.y > canvas.height) drops.splice(i, 1);
                if (drop.x < -offScreenLeft) drop.x = canvas.width + offScreenLeft;
                if (drop.x > canvas.width + offScreenRight) drop.x = -offScreenRight;
            }

            requestAnimationFrame(updateRain);
        }

        updateRain();
    };
    */

    /*
    initialize = () => {
        const canvas = document.createElement("canvas");
        canvas.id = "background";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
    
        // Control variables for colors
        const backgroundColor = "rgb(12, 12, 12)";
        const raindropBaseColor = "rgba(100, 100, 100, ";
    
        // Variables to control off-screen spawn areas
        const offScreenLeft = 100;
        const offScreenRight = 100;
    
        // Wind effect variables (now with direction and force)
        let windDirection = 0; // Start with vertical wind (0 radians -> positive x-axis)
        let windForce = 1; // Base wind force
        let windForceVariation = 0; // Dynamic wind strength fluctuation (±%)
        
        // Control for the intensity of wind transition
        // let windTransitionSpeed = 0.005; // Control the speed of the wind transition
        let windTransitionSpeed = 1;
        let maxWindDirection = Math.PI / 4; // Max wind direction for diagonal
        let windTransitionTime = 0; // Track the transition time for easing
    
        // Rain control
        const dropRate = 0.05;
        let rainIntensity = 0.4;
    
        // Resize the canvas to fill the viewport
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
    
        // Raindrop properties
        const drops = [];
    
        const raindropSpeed = 3;
        const minRaindropLength = 40;
        const maxRaindropLength = 70;
    
        function createRaindrop() {
            return {
                x: Math.random() * (canvas.width + offScreenLeft + offScreenRight) - offScreenLeft,
                y: -10,
                length: Math.random() * (maxRaindropLength - minRaindropLength) + minRaindropLength,
                opacity: Math.random() * 0.6 + 0.1,
            };
        }
    
        // Easing function for smooth transition (easeInOutQuad)
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
    
        // Update the wind direction smoothly with control for transition speed
        function updateWindDirection() {
            if (windTransitionTime < 1) {
                // Use the easing function to gradually increase the wind direction
                windTransitionTime += windTransitionSpeed; // Progress time towards 1
                let easedTime = easeInOutQuad(windTransitionTime); // Get eased value
                windDirection = easedTime * maxWindDirection; // Transition from 0 (vertical) to maxWindDirection (diagonal)
            }
        }
    
        // Function to randomly fluctuate the wind force (±10% variation from base force)
        function updateWindForce() {
            const windFluctuation = Math.random() * 0.2 - 0.1; // Random fluctuation between -0.1 and +0.1
            windForceVariation = windForce + windFluctuation * windForce; // Apply variation to the wind force
            // Log the wind force for debugging
            console.log(`Wind Force: ${windForceVariation.toFixed(2)}, Wind Direction: ${(windDirection * 180 / Math.PI).toFixed(2)}°`);
        }
    
        function updateRainIntensity() {
            rainIntensity += (Math.random() - 0.5) * 0.1;
            rainIntensity = Math.max(0.1, Math.min(2, rainIntensity));
        }
    
        function updateRain() {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            updateRainIntensity();
            updateWindForce(); // Randomize wind force
            updateWindDirection(); // Update wind direction smoothly
    
            if (Math.random() < dropRate * rainIntensity) {
                drops.push(createRaindrop());
            }
    
            for (let i = drops.length - 1; i >= 0; i--) {
                let drop = drops[i];
    
                // Wind direction and force affect raindrop movement
                let windX = Math.cos(windDirection) * windForceVariation; // Horizontal wind force with variation
                let windY = Math.sin(windDirection) * windForceVariation; // Vertical wind force with variation
    
                // Calculate wind angle for tilt
                let angle = Math.atan(windX / raindropSpeed); // Wind effect angle
    
                // Compute end coordinates based on wind angle and wind strength
                let endX = drop.x + Math.sin(angle) * drop.length;
                let endY = drop.y + Math.cos(angle) * drop.length;
    
                ctx.strokeStyle = raindropBaseColor + drop.opacity + ")";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();
    
                drop.y += raindropSpeed;
                drop.x += windX;
    
                if (drop.y > canvas.height) drops.splice(i, 1);
                if (drop.x < -offScreenLeft) drop.x = canvas.width + offScreenLeft;
                if (drop.x > canvas.width + offScreenRight) drop.x = -offScreenRight;
            }
    
            requestAnimationFrame(updateRain);
        }
    
        updateRain();
    };
    */

    /*
    initialize = () => {
        const canvas = document.createElement("canvas");
        canvas.id = "background";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
    
        // Control variables for colors
        const backgroundColor = "rgb(12, 12, 12)";
        const raindropBaseColor = "rgba(100, 100, 100, ";
    
        // Variables to control off-screen spawn areas
        const offScreenLeft = 100;
        const offScreenRight = 100;
    
        // Wind effect variables (now with direction and force)
        let windDirection = 0; // Start with vertical wind (0 radians -> positive x-axis)
        let windForce = 1; // Base wind force
        let windForceVariation = 0; // Dynamic wind strength fluctuation (±%)
        
        // Control for the intensity of wind transition
        // let windTransitionSpeed = 0.005; // Control the speed of the wind transition
        let windTransitionSpeed = 1;
        let maxWindDirection = Math.PI / 4; // Max wind direction for diagonal
        let windTransitionTime = 0; // Track the transition time for easing
    
        // Rain control
        const dropRate = 0.05;
        let rainIntensity = 0.4;
    
        // Resize the canvas to fill the viewport
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
    
        // Raindrop properties
        const drops = [];
    
        const raindropSpeed = 3;
        const minRaindropLength = 40;
        const maxRaindropLength = 70;
    
        function createRaindrop() {
            return {
                x: Math.random() * (canvas.width + offScreenLeft + offScreenRight) - offScreenLeft,
                y: -10,
                length: Math.random() * (maxRaindropLength - minRaindropLength) + minRaindropLength,
                opacity: Math.random() * 0.6 + 0.1,
            };
        }
    
        // Easing function for smooth transition (easeInOutQuad)
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
    
        // Update the wind direction smoothly with control for transition speed
        function updateWindDirection() {
            if (windTransitionTime < 1) {
                // Use the easing function to gradually increase the wind direction
                windTransitionTime += windTransitionSpeed; // Progress time towards 1
                let easedTime = easeInOutQuad(windTransitionTime); // Get eased value
                windDirection = easedTime * maxWindDirection; // Transition from 0 (vertical) to maxWindDirection (diagonal)
            }
        }
    
        // Function to randomly fluctuate the wind force (±10% variation from base force)
        function updateWindForce() {
            const windFluctuation = Math.random() * 0.2 - 0.1; // Random fluctuation between -0.1 and +0.1
            windForceVariation = windForce + windFluctuation * windForce; // Apply variation to the wind force
            // Log the wind force for debugging
            console.log(`Wind Force: ${windForceVariation.toFixed(2)}, Wind Direction: ${(windDirection * 180 / Math.PI).toFixed(2)}°`);
        }
    
        function updateRainIntensity() {
            rainIntensity += (Math.random() - 0.5) * 0.1;
            rainIntensity = Math.max(0.1, Math.min(2, rainIntensity));
        }
    
        function updateRain() {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            updateRainIntensity();
            updateWindForce(); // Randomize wind force
            updateWindDirection(); // Update wind direction smoothly
    
            if (Math.random() < dropRate * rainIntensity) {
                drops.push(createRaindrop());
            }
    
            for (let i = drops.length - 1; i >= 0; i--) {
                let drop = drops[i];
    
                // Wind direction and force affect raindrop movement
                let windX = Math.cos(windDirection) * windForceVariation; // Horizontal wind force with variation
                let windY = Math.sin(windDirection) * windForceVariation; // Vertical wind force with variation
    
                // Calculate wind angle for tilt
                let angle = Math.atan(windX / raindropSpeed); // Wind effect angle
    
                // Compute end coordinates based on wind angle and wind strength
                let endX = drop.x + Math.sin(angle) * drop.length;
                let endY = drop.y + Math.cos(angle) * drop.length;
    
                ctx.strokeStyle = raindropBaseColor + drop.opacity + ")";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();
    
                drop.y += raindropSpeed;
                drop.x += windX;
    
                if (drop.y > canvas.height) drops.splice(i, 1);
                if (drop.x < -offScreenLeft) drop.x = canvas.width + offScreenLeft;
                if (drop.x > canvas.width + offScreenRight) drop.x = -offScreenRight;
            }
    
            requestAnimationFrame(updateRain);
        }
    
        updateRain();
    };
    */

    
/*
// // Function to manage raindrops (creating and moving them)
// function updateRain() {
//   // Clear the canvas and set the background color to dark grey
//   ctx.fillStyle = backgroundColor; // Dark grey background
//   ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas with the background color

//   // Determine whether to create a new raindrop based on the drop rate
//   if (Math.random() < dropRate + Math.random() * dropRateVariance) {
//     drops.push(createRaindrop()); // Add a new raindrop to the array
//   }

//   // Loop through each raindrop and move it
//   for (let i = drops.length - 1; i >= 0; i--) {
//     let drop = drops[i];

//     // Set the raindrop color with varying opacity
//     ctx.strokeStyle = raindropBaseColor + drop.opacity + ")"; // Apply opacity to the raindrop color

//     // Skinnier raindrops: reduce lineWidth for a thinner appearance
//     ctx.lineWidth = 0.5; // Make the raindrop skinnier

//     // ctx.beginPath();
//     // ctx.moveTo(drop.x, drop.y);
//     // ctx.lineTo(drop.x, drop.y + drop.length); // Use the randomized length for each raindrop
//     // ctx.stroke();

//     // Ensure raindrops stay vertical while moving with wind
//     ctx.beginPath();
//     ctx.moveTo(drop.x, drop.y);
//     ctx.lineTo(drop.x, drop.y + drop.length); // Keep x constant
//     ctx.stroke();

//     // Move raindrop down (constant speed)
//     drop.y += raindropSpeed;

//     // Apply wind to raindrop (horizontal movement)
//     drop.x += windSpeed + drop.wind; // Add wind effect to the horizontal position

//     // Reset raindrop when it goes off the screen
//     if (drop.y > canvas.height) {
//       drops.splice(i, 1); // Remove the raindrop from the array when it reaches the bottom
//     }

//     // Prevent drops from moving too far off the screen horizontally
//     if (drop.x < -offScreenLeft) drop.x = canvas.width + offScreenLeft;
//     if (drop.x > canvas.width + offScreenRight) drop.x = -offScreenRight;
//   }

//   requestAnimationFrame(updateRain); // Keep the animation going
// }
*/

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
            y: -10,
            length: Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin,
            opacity: Math.random() * (this.raindropOpacityMax - this.raindropOpacityMin) + this.raindropOpacityMin,
        };
    }

    // Wind effect function (optional)
    getWindDirection = () => {
        return Math.random() * (Math.PI / 4) - Math.PI / 8; // Random wind angle
    }

    // Update raindrop movement within the grid
    updateRaindropMovement = (drop, deltaTime, canvas) => {
        let windDirection = this.getWindDirection();
        let windX = Math.sin(windDirection) * this.raindropSpeed * deltaTime; // Horizontal movement based on wind
        let windY = Math.cos(windDirection) * this.raindropSpeed * deltaTime; // Vertical fall speed

        drop.x += windX;
        drop.y += windY;

        // Ensure raindrop stays within the grid boundaries
        if (drop.x < 0) drop.x = 0;
        if (drop.x > canvas.width) drop.x = canvas.width;
        if (drop.y > canvas.height) drop.y = -10; // Reset when it goes off screen
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
            this.updateRaindropMovement(drop, this.deltaTime, canvas);

            // Draw raindrop within the grid
            context.lineWidth = this.raindropThickness;
            context.strokeStyle = this.raindropBaseColor + drop.opacity + ")";
            context.beginPath();
            context.moveTo(drop.x, drop.y);
            context.lineTo(drop.x, drop.y + drop.length); // Vertical line (with tilt)
            context.stroke();

            // Remove raindrops that go off screen
            if (drop.y > canvas.height) {
                drops.splice(i, 1);
            }
        }
    }
}
*/

/*
class Grid {
    cell = {
        size: 5
    }

    draw = (context, canvas) => {
        const columns = Math.ceil(canvas.width / this.cell.size); // Calculate the number of columns
        const rows = Math.ceil(canvas.height / this.cell.size); // Calculate the number of rows

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

    // Method to get a random grid cell
    getRandomCell = () => {
        const columns = Math.ceil(window.innerWidth / this.cell.size);
        const rows = Math.ceil(window.innerHeight / this.cell.size);

        const randomCol = Math.floor(Math.random() * columns);
        const randomRow = Math.floor(Math.random() * rows);

        return {
            x: randomCol * this.cell.size,
            y: randomRow * this.cell.size
        };
    };
}

*/



/*
        initialize = () => {
            const canvas = document.createElement("canvas");
            canvas.id = "background";
            document.body.appendChild(canvas);
            const ctx = canvas.getContext("2d");
    
            // Control variables for colors
            const backgroundColor = "rgb(12, 12, 12)";
            const raindropBaseColor = "rgba(100, 100, 100, ";
    
            // Variables to control off-screen spawn areas
            const offScreenLeft = 100;
            const offScreenRight = 100;
    
            // Wind effect variables
            let windForce = 0; // Base wind force (range from -1 to 1), -1 for left, 1 for right, 0 for no wind
    
            // Rain control
            let rainIntensity = 0.4; // Intensity of rain (0 to 1)
    
            // Resize the canvas to fill the viewport
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
    
            window.addEventListener("resize", resizeCanvas);
    
            resizeCanvas();
    
            // Raindrop properties
            const drops = [];
    
            // Speed of raindrops, modified by FPS
            const raindropSpeed = 1.5;
            const raindropLengthMin = 40;
            const raindropLengthMax = 70;
            const raindropOpacityMin = 0.0;
            const raindropOpacityMax = 0.4;
    
            // Create a new raindrop
            function createRaindrop() {
                return {
                    x: Math.random() * (canvas.width + offScreenLeft + offScreenRight) - offScreenLeft,
                    y: -10,
                    length: Math.random() * (raindropLengthMax - raindropLengthMin) + raindropLengthMin,
                    opacity: Math.random() * (raindropOpacityMax - raindropOpacityMin) + raindropOpacityMin,
                };
            }
    
            // Function to calculate wind direction based on windForce
            function getWindDirection() {
                // Clamp windForce between -1 and 1
                let clampedWindForce = Math.max(-1, Math.min(1, windForce));
    
                // Map windForce to angle between -π/4 and π/4 (which is -45° to 45°)
                let windAngle = clampedWindForce * (Math.PI / 4); // -π/4 to π/4
                return windAngle;
            }
    
            // Main rain update loop
            function updateRain() {
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
    
                // Create raindrops based on rainIntensity (0 = no rain, 1 = maximum rain)
                if (Math.random() < rainIntensity) {
                    drops.push(createRaindrop());
                }
    
                // Get the wind direction based on windForce
                let windDirection = getWindDirection();
    
                // Update and render raindrops
                for (let i = drops.length - 1; i >= 0; i--) {
                    let drop = drops[i];
    
                    // Tilt the raindrop based on windDirection (using windForce)
                    let windX = Math.sin(windDirection) * raindropSpeed; // Horizontal wind effect
                    let windY = Math.cos(windDirection) * raindropSpeed; // Vertical fall speed
    
                    // Apply windForce directly to horizontal movement (tilt effect)
                    drop.x += windX;
                    drop.y += windY;
    
                    // Draw raindrop
                    ctx.strokeStyle = raindropBaseColor + drop.opacity + ")";
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(drop.x, drop.y);
                    ctx.lineTo(drop.x + Math.sin(windDirection) * drop.length, drop.y + Math.cos(windDirection) * drop.length); // Tilted line
                    ctx.stroke();
    
                    // Remove raindrops that go off screen
                    if (drop.y > canvas.height) drops.splice(i, 1);
                    if (drop.x < -offScreenLeft) drop.x = canvas.width + offScreenLeft;
                    if (drop.x > canvas.width + offScreenRight) drop.x = -offScreenRight;
                }
    
                requestAnimationFrame(updateRain);
            }
    
            updateRain();
        };
        */

/*
 // const canvas = document.createElement("canvas");
 // canvas.id = "background";
 // document.body.appendChild(canvas);
 // const ctx = canvas.getContext("2d");

 context.imageSmoothingEnabled = false; // Disable smoothing for pixelated effects

 // Control variables for colors
 const backgroundColor = "rgb(12, 12, 12)";
 const raindropBaseColor = "rgba(100, 100, 100, ";

 // Variables to control off-screen spawn areas
 const offScreenLeft = 100;
 const offScreenRight = 100;

 // Wind effect variables
 let windForce = 0; // Base wind force (range from -1 to 1), -1 for left, 1 for right, 0 for no wind

 // Rain control
 let rainIntensity = 1; // Intensity of rain (0 to 1)

 // Resize the canvas to fill the viewport
 function resizeCanvas() {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
 }

 window.addEventListener("resize", resizeCanvas);
 resizeCanvas();

 // Raindrop properties
 const drops = [];

 // Define raindrop speed as pixels per second
 const raindropSpeed = 800; // Pixels per second (this is the base fall speed)

 // const raindropLengthMin = 20;
 // const raindropLengthMax = 80;
 const raindropLengthMin = 15;
 const raindropLengthMax = 60;
 const raindropOpacityMin = 0.1;
 const raindropOpacityMax = 0.4;
 const raindropThickness = 2; // Thickness of the raindrop line (in pixels)

 // Create a new raindrop
 function createRaindrop() {
     return {
         x: Math.random() * (canvas.width + offScreenLeft + offScreenRight) - offScreenLeft,
         y: -10,
         length: Math.random() * (raindropLengthMax - raindropLengthMin) + raindropLengthMin,
         opacity: Math.random() * (raindropOpacityMax - raindropOpacityMin) + raindropOpacityMin,
     };
 }

 // Function to calculate wind direction based on windForce
 function getWindDirection() {
     // Clamp windForce between -1 and 1
     let clampedWindForce = Math.max(-1, Math.min(1, windForce));

     // Map windForce to angle between -π/4 and π/4 (which is -45° to 45°)
     let windAngle = clampedWindForce * (Math.PI / 4); // -π/4 to π/4
     return windAngle;
 }

 // Function to generate random number between min and max
 function getRandom(min, max) {
     return Math.random() * (max - min) + min;
 }

 // Function to change wind force over time using requestAnimationFrame
 function changeWindForce(newWindForce, duration) {
     let startTime = Date.now();
     let initialWindForce = windForce;

     function update() {
         let elapsedTime = Date.now() - startTime;
         let progress = elapsedTime / duration; // Calculate progress (0 to 1)

         if (progress >= 1) {
             windForce = newWindForce; // Set final windForce value
         } else {
             // Calculate the intermediate windForce based on progress
             windForce = initialWindForce + (newWindForce - initialWindForce) * progress;
             requestAnimationFrame(update); // Continue updating until progress reaches 1
         }
     }

     requestAnimationFrame(update); // Start the animation loop
 }

 // Function to handle timed transitions with randomized cycles
 function startWindForceCycle() {
     // Randomize the cycle duration between 2 and 8 seconds
     let cycleDuration = getRandom(2, 8) * 1000; // Convert to milliseconds

     // Randomize the windForce between -1 and 1
     let randomWindForce = getRandom(-1, 1);

     // Change windForce and start a new cycle after the randomized duration
     changeWindForce(randomWindForce, cycleDuration);

     // Recursively call the function to generate new cycles after the randomized duration
     setTimeout(startWindForceCycle, cycleDuration);
 }

 // Function to update raindrops
 function updateRaindropMovement(drop, deltaTime) {
     // Wind effect: Horizontal movement
     let windDirection = getWindDirection();
     let windX = Math.sin(windDirection) * raindropSpeed * deltaTime; // Horizontal movement based on wind
     let windY = Math.cos(windDirection) * raindropSpeed * deltaTime; // Vertical fall speed

     // Update raindrop position
     drop.x += windX;
     drop.y += windY;
 }

 // Track FPS
 let lastTime = 0;
 let deltaTime = 0;

 // Main rain update loop
 function updateRain(timestamp) {
     // Calculate deltaTime (time between frames)
     deltaTime = (timestamp - lastTime) / 1000; // Time difference in seconds
     lastTime = timestamp;

     context.fillStyle = backgroundColor;
     context.fillRect(0, 0, canvas.width, canvas.height);

     // Create raindrops based on rainIntensity (0 = no rain, 1 = maximum rain)
     if (Math.random() < rainIntensity) {
         drops.push(createRaindrop());
     }

     // Update and render raindrops
     for (let i = drops.length - 1; i >= 0; i--) {
         let drop = drops[i];

         // Update raindrop position (move with wind and gravity)
         updateRaindropMovement(drop, deltaTime);

         // Draw raindrop
         // NOTE : NON PIXELATED RAIN
         context.lineWidth = raindropThickness; // Set line thickness
         context.strokeStyle = raindropBaseColor + drop.opacity + ")";
         context.beginPath();
         context.moveTo(drop.x, drop.y);
         context.lineTo(drop.x + Math.sin(getWindDirection()) * drop.length, drop.y + Math.cos(getWindDirection()) * drop.length); // Tilted line
         context.stroke();

         // Remove raindrops that go off screen
         if (drop.y > canvas.height) drops.splice(i, 1);
         if (drop.x < -offScreenLeft) drop.x = canvas.width + offScreenLeft;
         if (drop.x > canvas.width + offScreenRight) drop.x = -offScreenRight;
     }

     requestAnimationFrame(updateRain); // Call updateRain on the next frame
 }

 startWindForceCycle(); // Start the wind force cycle
 requestAnimationFrame(updateRain); // Start the rain update loop
 */
/*
    createRaindrop = (grid) => {
        // const cell = grid.getRandomCell(); // Get a random grid cell
        // const raindropLength = Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin;
        // return {
        //     x: cell.x, // Position within the grid cell (horizontal)
        //     y: -raindropLength, // Start above the canvas
        //     length: raindropLength, // Length of the raindrop
        //     opacity: Math.random() * (this.raindropOpacityMax - this.raindropOpacityMin) + this.raindropOpacityMin,
        // };

        const cell = grid.getRandomCell(); // Get a random grid cell
        return {
            x: cell.x, // Position within the grid cell (horizontal)
            y: -10, // Start above the canvas
            length: Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin,
            opacity: Math.random() * (this.raindropOpacityMax - this.raindropOpacityMin) + this.raindropOpacityMin,
        };
    }
*/
