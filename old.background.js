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

/*
        const gridSize = 20;
        const rows = Math.floor(this.element.height / gridSize);
        const cols = Math.floor(this.element.width / gridSize);

        function drawGrid(ctx, canvas) {
            ctx.strokeStyle = "#ddd";
            for (let i = 0; i <= cols; i++) {
                let x = i * gridSize;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let j = 0; j <= rows; j++) {
                let y = j * gridSize;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        }
        
        function drawLineUsingGrid(start, end, ctx) {
            ctx.fillStyle = "black";
            
            let x1 = start[0], y1 = start[1];
            let x2 = end[0], y2 = end[1];
            
            let dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1);
            let sx = x1 < x2 ? 1 : -1, sy = y1 < y2 ? 1 : -1;
            let err = dx - dy;
            
            while (true) {
                ctx.fillRect(x1 * gridSize, y1 * gridSize, gridSize, gridSize);
                if (x1 === x2 && y1 === y2) break;
                let e2 = 2 * err;
                if (e2 > -dy) { err -= dy; x1 += sx; }
                if (e2 < dx) { err += dx; y1 += sy; }
            }
        }
        
        this.element.width = 400;
        this.element.height = 400;
        drawGrid(this.context, this.element);
        drawLineUsingGrid([2, 3], [8, 6], this.context);
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

    // constructor() {
    //     // Calculate the number of columns and rows based on the window size
    //     this.columns = Math.ceil(window.innerWidth / this.cell.size);
    //     this.rows = Math.ceil(window.innerHeight / this.cell.size);

    //     // Create a 2D array to hold the grid cells
    //     this.gridCells = [];
    //     for (let i = 0; i < this.columns; i++) {
    //         this.gridCells[i] = [];
    //         for (let j = 0; j < this.rows; j++) {
    //             this.gridCells[i][j] = { x: i * this.cell.size, y: j * this.cell.size };
    //         }
    //     }
    // }

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
    // getCell = (colIndex, rowIndex) => {
    //     if (colIndex < 0 || colIndex >= this.columns || rowIndex < 0 || rowIndex >= this.rows) {
    //         return null; // Out of bounds
    //     }
    //     return this.gridCells[colIndex][rowIndex];
    // }

   // Method to offer nearby cells (optional)
    // getNearbyCells = (x, y) => {
    //     const colIndex = Math.floor(x / this.cell.size);
    //     const rowIndex = Math.floor(y / this.cell.size);

    //     // Get the current cell and its 4 neighboring cells
    //     const cells = [
    //         this.getCell(colIndex, rowIndex),  // Current cell
    //         this.getCell(colIndex - 1, rowIndex),  // Left cell
    //         this.getCell(colIndex + 1, rowIndex),  // Right cell
    //         this.getCell(colIndex, rowIndex - 1),  // Top cell
    //         this.getCell(colIndex, rowIndex + 1)   // Bottom cell
    //     ];

    //     return cells.filter(cell => cell !== null); // Filter out any null cells (out of bounds)
    // };

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
*/




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


    /*
    update() {
        const width = this.element.width;

        // Move clouds
        this.clouds.forEach(cloud => {
            cloud.x -= this.velocity;
        });

        // Remove offscreen clouds
        this.clouds = this.clouds.filter(cloud => cloud.x + cloud.prefab[0].length * this.cellSize > 0);

        // Add new clouds if there's room on the right
        const lastCloud = this.clouds[this.clouds.length - 1];
        if (lastCloud) {
            const lastRightEdge = lastCloud.x + lastCloud.prefab[0].length * this.cellSize;
            if (lastRightEdge < width + 100) {
                this.clouds.push(this.generateRandomCloud());
            }
        }
    }
    */

    class Clouds {
        constructor(cellSize, context, element, paddingRange = { min: 1, max: 5 }) {
            this.cellSize = cellSize;
            this.context = context;
            this.element = element;
            this.paddingRange = paddingRange;
    
            this.clouds = [];
            this.rows = Math.floor(this.element.height / this.cellSize);
            this.cols = Math.floor(this.element.width / this.cellSize);
            this.velocity = 0.05;
    
            this.prefabs = [
            ];
    
            this.spawnInitialClouds();
        }
    
        spawnInitialClouds() {
            let xOffset = 0;
            while (xOffset < this.element.width + 200) { // fill screen + buffer
                const cloud = this.generateRandomCloud(xOffset);
                this.clouds.push(cloud);
                xOffset += cloud.prefab[0].length * this.cellSize + this.randomPadding();
            }
        }
    
        randomPadding() {
            const { min, max } = this.paddingRange;
            return this.cellSize * (Math.floor(Math.random() * (max - min + 1)) + min);
        }
    
        cloudsOverlap(a, b) {
            const aRight = a.x + a.prefab[0].length * this.cellSize;
            const aBottom = a.y + a.prefab.length * this.cellSize;
            const bRight = b.x + b.prefab[0].length * this.cellSize;
            const bBottom = b.y + b.prefab.length * this.cellSize;
        
            return !(aRight + this.cellSize < b.x ||
                     a.x > bRight + this.cellSize ||
                     aBottom + this.cellSize < b.y ||
                     a.y > bBottom + this.cellSize);
        }
    
        generateRandomCloud(xStart = null, maxTries = 10) {
            for (let attempt = 0; attempt < maxTries; attempt++) {
                const prefab = this.prefabs[Math.floor(Math.random() * this.prefabs.length)];
                if (!prefab || prefab.length === 0) continue;
        
                const y = Math.floor(Math.random() * (this.rows - prefab.length)) * this.cellSize;
                const x = xStart !== null ? xStart : this.element.width + this.randomPadding();
        
                const newCloud = { x, y, prefab };
        
                // Check for overlap
                const isOverlapping = this.clouds.some(cloud => this.cloudsOverlap(newCloud, cloud));
                if (!isOverlapping) return newCloud;
            }
        
            // If no spot found, return something offscreen to try again later
            return {
                x: this.element.width + 50,
                y: 0,
                prefab: this.prefabs[0] || [[1]]
            };
        }
    
        update() {
            const width = this.element.width;
    
            // Move clouds
            this.clouds.forEach(cloud => {
                cloud.x -= this.velocity;
            });
    
            // Remove offscreen clouds
            this.clouds = this.clouds.filter(cloud => cloud.x + cloud.prefab[0].length * this.cellSize > 0);
    
            // Add new clouds if there's room on the right
            const lastCloud = this.clouds[this.clouds.length - 1];
            if (lastCloud) {
                const lastRightEdge = lastCloud.x + lastCloud.prefab[0].length * this.cellSize;
                if (lastRightEdge < width + 100) {
                    this.clouds.push(this.generateRandomCloud());
                }
            }
        }
    
        draw() {
            this.clouds.forEach(cloud => {
                this.drawCloud(cloud);
            });
        }
    
        drawCloud(cloud) {
            const { x, y, prefab } = cloud;
            prefab.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    if (cell) {
                        this.context.fillStyle = "rgba(62, 62, 62, 0.5)";
    
                        this.context.fillRect(
                            x + colIndex * this.cellSize,
                            y + rowIndex * this.cellSize,
                            this.cellSize,
                            this.cellSize
                        );
                    }
                });
            });
        }
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
                this.cellSize,
                this.context,
                this.element,
            );
    
            // this.drawing = new Drawing(
            //     this.element,
            //     this.context,
            //     this.cellSize
            // );
    
            this.loop();
        }
    
        loop = (timestamp) => {
            this.context.fillStyle = this.backgroundColor;
            this.context.fillRect(0, 0, this.element.width, this.element.height);
    
            this.rain.update(this.context, this.cellSize, timestamp);
            // this.clouds.render();
            this.clouds.update();
            this.clouds.draw();
            // this.drawing.render();
            this.drawGrid();
    
            requestAnimationFrame(this.loop);
        }
    }
    
    /*
    class Clouds {
        constructor(cellSize, context, element, paddingRange = { min: 1, max: 5 }) {
            this.cellSize = cellSize;
            this.context = context;
            this.element = element;
            this.paddingRange = paddingRange; // Padding between clouds
    
            this.clouds = []; // Precomputed cloud positions
            this.grid = null; // Grid state
            this.rows = Math.floor(this.element.height / this.cellSize);
            this.cols = Math.floor(this.element.width / this.cellSize);
            this.velocity = 0.5; // Speed of cloud movement
    
            this.prefabs = [
                [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
                [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]],
                [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
                [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]],
                [[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0]],
                [[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0]],
                [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
                [[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
                [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]],
                [[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]],
                [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
                [[0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
                [[0,0,1,1,1,1,0,0,0,0],[0,1,1,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1]],
                [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
            ];
    
            this.sky(); // Generate clouds once during initialization
        }
    
        calculateBoundingBox(prefab) {
            let minRow = prefab.length - 1;
            let maxRow = 0;
            let minCol = prefab[0].length - 1;
            let maxCol = 0;
    
            for (let i = 0; i < prefab.length; i++) {
                for (let j = 0; j < prefab[i].length; j++) {
                    if (prefab[i][j] === 1) {
                        minRow = Math.min(minRow, i);
                        maxRow = Math.max(maxRow, i);
                        minCol = Math.min(minCol, j);
                        maxCol = Math.max(maxCol, j);
                    }
                }
            }
    
            return { minRow, maxRow, minCol, maxCol };
        }
    
        sky = () => {
            const topThirdRows = Math.floor(this.rows / 3);
            this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0)); // Initialize grid
        
            let currentRow = 0;
            let currentCol = 0;
        
            while (currentRow < topThirdRows) { // Only iterate over the top third rows
                while (currentCol < this.cols) {
                    const prefab = this.prefabs[Math.floor(Math.random() * this.prefabs.length)];
                    const { minRow, maxRow, minCol, maxCol } = this.calculateBoundingBox(prefab);
        
                    const prefabHeight = maxRow - minRow + 1;
                    const prefabWidth = maxCol - minCol + 1;
        
                    const padding = Math.floor(
                        Math.random() * (this.paddingRange.max - this.paddingRange.min + 1) + this.paddingRange.min
                    );
        
                    let canPlace = true;
        
                    // Ensure prefab and padding fit within the restricted top-third grid
                    if (
                        currentRow + prefabHeight + padding <= topThirdRows &&
                        currentCol + prefabWidth + padding <= this.cols
                    ) {
                        for (let i = -padding; i < prefabHeight + padding; i++) {
                            for (let j = -padding; j < prefabWidth + padding; j++) {
                                const gridX = currentCol + j;
                                const gridY = currentRow + i;
        
                                if (
                                    gridX < 0 || // Out-of-bounds left
                                    gridY < 0 || // Out-of-bounds top
                                    gridX >= this.cols || // Out-of-bounds right
                                    gridY >= topThirdRows || // Out-of-bounds bottom
                                    this.grid[gridY]?.[gridX] === 1 // Check overlap with existing clouds
                                ) {
                                    canPlace = false;
                                    break;
                                }
                            }
                            if (!canPlace) break;
                        }
                    } else {
                        canPlace = false;
                    }
        
                    if (canPlace) {
                        for (let i = 0; i < prefabHeight; i++) {
                            for (let j = 0; j < prefabWidth; j++) {
                                if (prefab[minRow + i][minCol + j] === 1) {
                                    const gridX = currentCol + j;
                                    const gridY = currentRow + i;
        
                                    if (gridX < this.cols && gridY < topThirdRows) {
                                        this.grid[gridY][gridX] = 1;
                                        this.clouds.push({
                                            x: gridX,
                                            y: gridY,
                                            color: "rgba(62, 62, 62, 0.5)", // Debugging: 50% opacity
                                        });
                                    }
                                }
                            }
                        }
        
                        // Move to next position with padding
                        currentCol += prefabWidth + padding;
                    } else {
                        currentCol++;
                    }
                }
        
                currentCol = 0;
                currentRow++;
            }
        };
    
        render = () => {
            this.clouds.forEach((cloud) => {
                this.context.fillStyle = cloud.color;
                this.context.fillRect(
                    cloud.x * this.cellSize,
                    cloud.y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );
            });
        };
    }
    */
    
    
    
    // ---
    /*
    const offsetX = 0;
    const offsetY = 0;
    
    for(const cloud of this.prefabs) {
        cloud.forEach((row, y) => {
            row.forEach((val, x) => {
                if (val === 1) {
                    const cellX = x + offsetX;
                    const cellY = y + offsetY;
    
                    this.context.fillStyle = "white";
                    this.context.fillRect(
                        cellX * this.cellSize,
                        cellY * this.cellSize,
                        this.cellSize,
                        this.cellSize
                    );
                }
            });
        });
    }
    */
    
    /*
    const maxY = 0; // top row only
    let currentX = 0;
    
    while (currentX < this.element.width) {
        const cloud = this.prefabs[Math.floor(Math.random() * this.prefabs.length)];
        const cloudWidth = cloud[0].length;
    
        // Random gap between clouds
        const gap = Math.floor(Math.random() * 5) + 1;
        currentX += gap;
    
        // If cloud would overflow the grid, break early
        if (currentX + cloudWidth > this.element.width) break;
    
        const positions = [];
    
        for (let y = 0; y < cloud.length; y++) {
            for (let x = 0; x < cloud[y].length; x++) {
                if (cloud[y][x] === 1) {
                    const gridX = currentX + x;
                    const gridY = maxY + y;
                    if (gridX < this.element.width && gridY < this.element.height) {
                        positions.push({ x: gridX, y: gridY });
                    }
                }
            }
        }
    
        clouds.push({ positions });
        currentX += cloudWidth;
    }
    */
    
    /*
    const offsetX = 0;  // Horizontal offset for cloud positioning
    let offsetY = 0;  // Vertical offset for cloud positioning
    
    // Iterate through each cloud prefab
    for (const cloud of this.prefabs) {
        // For each row in the cloud prefab
        cloud.forEach((row, y) => {
            // For each column in the row
            row.forEach((val, x) => {
                if (val === 1) {
                    // If the cell value is 1, draw a filled square representing a cloud pixel
                    this.context.fillStyle = '#ffffff'; // Color for cloud pixel (white)
                    this.context.fillRect(
                        offsetX + x * this.cellSize,  // Horizontal position
                        offsetY + y * this.cellSize,  // Vertical position
                        this.cellSize,                // Width of the cloud pixel
                        this.cellSize                 // Height of the cloud pixel
                    );
                }
            });
        });
    
        // Update the vertical offset for the next cloud (optional, to avoid overlap)
        offsetY += cloud.length * this.cellSize;
    }
    */
    // // a = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0],[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0]];
    // // a = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
    // [[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0],[0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]],
    
    
    
    class Rain {
        drops = [];
        raindropLengthMin = 1;
        raindropLengthMax = 7;
        raindropOpacityStart = 0.1;  // Maximum opacity (start of the raindrop)
        raindropOpacityEnd = 0.8;  // Minimum opacity (end of the raindrop)
        lastTime = 0;
        deltaTime = 0;
        windForce = 0.2;  // Wind force (negative for left, positive for right)
    
        constructor(gridSize) {
            this.gridSize = gridSize;
        }
    
        // Function to create a new raindrop
        createRaindrop = () => {
            return {
                x: Math.floor(Math.random() * (window.innerWidth / this.gridSize)),
                y: 0,
                length: Math.floor(Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin),
            };
        }
    
        // Update the raindrop's movement (includes wind effect)
        updateRaindropMovement = (drop) => {
            const speed = 1; // Speed in grid units per frame
    
            // Calculate horizontal movement based on windForce (windForce = 1 moves right, -1 moves left)
            const dx = this.windForce * speed;  
            drop.x += dx;  // Apply horizontal wind effect
    
            drop.y += speed; // Move downward (fall)
    
            // Ensure raindrop stays within the bounds of the screen
            if (drop.x < 0) drop.x = 0;
            if (drop.x >= Math.floor(window.innerWidth / this.gridSize)) drop.x = Math.floor(window.innerWidth / this.gridSize) - 1;
            if (drop.y < 0) drop.y = 0;
            if (drop.y >= Math.floor(window.innerHeight / this.gridSize)) drop.y = Math.floor(window.innerHeight / this.gridSize) - 1;
        }
    
        // Draw the raindrop with wind effect (affects the raindrop's line angle)
        drawLineUsingGrid = (start, end, context) => {
            console.log('DEBUG:drawLineUsingGrid::start', start);
            console.log('DEBUG:drawLineUsingGrid::end', end);
            console.log('DEBUG:drawLineUsingGrid::context', context);
    
            let x1 = start[0], y1 = start[1];
            let x2 = end[0], y2 = end[1];
    
            // Calculate the difference between the start and end points
            let dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1);
            let sx = x1 < x2 ? 1 : -1, sy = y1 < y2 ? 1 : -1;
            let p = dx - dy;
            
            // Bresenham's line algorithm
            while (true) {
                /*
                // Calculate the relative distance from the start to the current point
                let distance = y1 - start[1];
                let maxDistance = end[1] - start[1];  // Total length of the raindrop
                let opacity = this.raindropOpacityStart - (distance / maxDistance) * (this.raindropOpacityStart - this.raindropOpacityEnd);
    
                // Set the fill color with the calculated opacity
                context.fillStyle = `rgba(100, 100, 100, ${opacity})`; // Raindrop color with opacity
    
                // Draw the raindrop pixel
                context.fillRect(x1 * this.gridSize, y1 * this.gridSize, this.gridSize, this.gridSize);
    
                if (x1 === x2 && y1 === y2) break;
                let e2 = 2 * p;
                if (e2 > -dy) { p -= dy; x1 += sx; }
                if (e2 < dx) { p += dx; y1 += sy; }
                */
            }
        }
    
        // Update the rain (including wind effect)
        update = (context, gridSize, timestamp) => {
            this.deltaTime = (timestamp - this.lastTime) / 1000;
            this.lastTime = timestamp;
    
            // Create new raindrops occasionally
            if (Math.random() < 0.05) {
                this.drops.push(this.createRaindrop());
            }
    
            // Update the movement of each raindrop
            for (let i = this.drops.length - 1; i >= 0; i--) {
                let drop = this.drops[i];
                this.updateRaindropMovement(drop);
    
                // Calculate the endpoint of the raindrop's fall
                let endY = drop.y + drop.length;
    
                /*
                // Calculate the horizontal offset based on the wind force
                let endX = drop.x + (this.windForce * drop.length);  // Wind effect on horizontal displacement
    
                // Draw the raindrop (now with angle based on wind force)
                this.drawLineUsingGrid([drop.x, drop.y], [endX, endY], context);
                */
                // Calculate the horizontal offset based on the wind force
    
                // TODO : ISSUE HERE
                // Calculate the horizontal offset based on the wind force
                let endX = Math.round((drop.x + (this.windForce * drop.length)) * 100) / 100;  // Wind effect on horizontal displacement
    
                // Ensure endX stays within the bounds of the screen
                const maxX = Math.floor(window.innerWidth / gridSize) - 1;
                // if (endX < 0) endX = 0;  // Prevent going past the left side
                // if (endX >= maxX) endX = maxX;  // Prevent going past the right side
    
                // Draw the raindrop (now with angle based on wind force)
                this.drawLineUsingGrid(
                    [
                        drop.x,
                        drop.y
                    ],
                    [
                        endX,
                        endY
                    ],
                    context
                );
    
                // Remove raindrops that fall below the screen (out of bounds)
                // if (drop.y + drop.length >= Math.floor(window.innerHeight / gridSize)) {
                //     this.drops.splice(i, 1); // Remove raindrop if it has gone past the bottom of the screen
                // }
            }
        }
    }
    

    class Clouds {
        prefabs = [
            [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
            [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
        ]
    
        constructor(
            cellSize,
            context,
            element
        ) {
            this.cellSize = cellSize;
            this.context = context;
            this.element = element;
    
            this.clouds = [];
        }
    
        render = () => {
    
        };
    }
    
    class Clouds {
        prefabs = [
            [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
            [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
        ]
    
        constructor(
            cellSize,
            context,
            element
        ) {
            this.cellSize = cellSize;
            this.context = context;
            this.element = element;
    
            this.clouds = [];
        }
    
        render = () => {
            /*
            const offsetX = 0;
            const offsetY = 0;
    
            for(const cloud of this.prefabs) {
                cloud.forEach((row, y) => {
                    row.forEach((val, x) => {
                        if (val === 1) {
                            const cellX = x + offsetX;
                            const cellY = y + offsetY;
            
                            this.context.fillStyle = "white";
                            this.context.fillRect(
                                cellX * this.cellSize,
                                cellY * this.cellSize,
                                this.cellSize,
                                this.cellSize
                            );
                        }
                    });
                });
            }
            */
    
            /*
            const maxY = 0; // top row only
            let currentX = 0;
    
            while (currentX < this.element.width) {
                const cloud = this.prefabs[Math.floor(Math.random() * this.prefabs.length)];
                const cloudWidth = cloud[0].length;
    
                // Random gap between clouds
                const gap = Math.floor(Math.random() * 5) + 1;
                currentX += gap;
    
                // If cloud would overflow the grid, break early
                if (currentX + cloudWidth > this.element.width) break;
    
                const positions = [];
    
                for (let y = 0; y < cloud.length; y++) {
                    for (let x = 0; x < cloud[y].length; x++) {
                        if (cloud[y][x] === 1) {
                            const gridX = currentX + x;
                            const gridY = maxY + y;
                            if (gridX < this.element.width && gridY < this.element.height) {
                                positions.push({ x: gridX, y: gridY });
                            }
                        }
                    }
                }
    
                clouds.push({ positions });
                currentX += cloudWidth;
            }
            */
    
            const offsetX = 0;  // Horizontal offset for cloud positioning
            let offsetY = 0;  // Vertical offset for cloud positioning
    
            // Iterate through each cloud prefab
            for (const cloud of this.prefabs) {
                // For each row in the cloud prefab
                cloud.forEach((row, y) => {
                    // For each column in the row
                    row.forEach((val, x) => {
                        if (val === 1) {
                            // If the cell value is 1, draw a filled square representing a cloud pixel
                            this.context.fillStyle = '#ffffff'; // Color for cloud pixel (white)
                            this.context.fillRect(
                                offsetX + x * this.cellSize,  // Horizontal position
                                offsetY + y * this.cellSize,  // Vertical position
                                this.cellSize,                // Width of the cloud pixel
                                this.cellSize                 // Height of the cloud pixel
                            );
                        }
                    });
                });
        
                // Update the vertical offset for the next cloud (optional, to avoid overlap)
                offsetY += cloud.length * this.cellSize;
            }
        };
    }

    export default class Canvas {
        backgroundColor = "rgb(12, 12, 12)";
        gridSize = 5;
    
        resizeCanvas = () => {
            this.element.width = window.innerWidth;
            this.element.height = window.innerHeight;
            this.rows = Math.floor(this.element.height / this.gridSize);
            this.cols = Math.floor(this.element.width / this.gridSize);
        }
    
        drawGrid = () => {
            this.context.strokeStyle = "rgb(9, 9, 9)";
            
            for (let i = 0; i <= this.cols; i++) {
                let x = i * this.gridSize;
                this.context.beginPath();
                this.context.moveTo(x, 0);
                this.context.lineTo(x, this.element.height);
                this.context.stroke();
            }
            
            for (let j = 0; j <= this.rows; j++) {
                let y = j * this.gridSize;
                this.context.beginPath();
                this.context.moveTo(0, y);
                this.context.lineTo(this.element.width, y);
                this.context.stroke();
            }
        }
    
        initialize = () => {
            this.rain = new Rain(this.gridSize);
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
            this.rain.update(this.context, this.gridSize, timestamp);
    
            requestAnimationFrame(this.loop);
        }
    }
    
    class Rain {
        drops = [];
        raindropLengthMin = 1;
        raindropLengthMax = 5;
        lastTime = 0;
        deltaTime = 0;
        windForce = 1;  // Wind force (negative for left, positive for right)
    
        constructor(gridSize) {
            this.gridSize = gridSize;
        }
    
        // Function to create a new raindrop
        createRaindrop = () => {
            return {
                x: Math.floor(Math.random() * (window.innerWidth / this.gridSize)),
                y: 0,
                length: Math.floor(Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin),
            };
        }
    
        // Update the raindrop's movement (includes wind effect)
        updateRaindropMovement = (drop) => {
            const speed = 1; // Speed in grid units per frame
    
            // Calculate horizontal movement based on windForce (windForce = 1 moves right, -1 moves left)
            const dx = this.windForce * speed;  
            drop.x += dx;  // Apply horizontal wind effect
    
            drop.y += speed; // Move downward (fall)
    
            // Ensure raindrop stays within the bounds of the screen
            if (drop.x < 0) drop.x = 0;
            if (drop.x >= Math.floor(window.innerWidth / this.gridSize)) drop.x = Math.floor(window.innerWidth / this.gridSize) - 1;
            if (drop.y < 0) drop.y = 0;
            if (drop.y >= Math.floor(window.innerHeight / this.gridSize)) drop.y = Math.floor(window.innerHeight / this.gridSize) - 1;
        }
    
        // Draw the raindrop with wind effect (affects the raindrop's line angle)
        drawLineUsingGrid = (start, end, context) => {
            let x1 = start[0], y1 = start[1];
            let x2 = end[0], y2 = end[1];
    
            // Calculate the difference between the start and end points
            let dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1);
            let sx = x1 < x2 ? 1 : -1, sy = y1 < y2 ? 1 : -1;
            let p = dx - dy;
            
            // Bresenham's line algorithm
            while (true) {
                context.fillStyle = `rgba(100, 100, 100, 1)`; // Simple color for raindrop
                context.fillRect(x1 * this.gridSize, y1 * this.gridSize, this.gridSize, this.gridSize);
    
                if (x1 === x2 && y1 === y2) break;
                let e2 = 2 * p;
                if (e2 > -dy) { p -= dy; x1 += sx; }
                if (e2 < dx) { p += dx; y1 += sy; }
            }
        }
    
        // Update the rain (including wind effect)
        update = (context, gridSize, timestamp) => {
            this.deltaTime = (timestamp - this.lastTime) / 1000;
            this.lastTime = timestamp;
    
            // Create new raindrops occasionally
            if (Math.random() < 0.05) {
                this.drops.push(this.createRaindrop());
            }
    
            // Update the movement of each raindrop
            for (let i = this.drops.length - 1; i >= 0; i--) {
                let drop = this.drops[i];
                this.updateRaindropMovement(drop);
    
                // Calculate the endpoint of the raindrop's fall considering wind (windForce affects horizontal movement)
                let endY = drop.y + drop.length;
    
                // Calculate the endpoint for the raindrop line considering wind force (affects horizontal position)
                let endX = drop.x + this.windForce * drop.length;  // Adjust the horizontal displacement by wind force
    
                // Draw the raindrop (now with angle based on wind force)
                this.drawLineUsingGrid([drop.x, drop.y], [endX, endY], context);
    
                // Remove raindrops that fall below the screen
                if (drop.y > Math.floor(window.innerHeight / gridSize)) {
                    this.drops.splice(i, 1);
                }
            }
        }
    
        // Change the wind force (can be called periodically or based on user input)
        setWindForce = (force) => {
            this.windForce = force;
        }
    }

    class Clouds {
        constructor(cellSize) {
            this.cellSize = cellSize;
            this.clouds = [];  // Stores cloud objects
            this.cloudSpeed = 0.3;  // Adjusted cloud speed (moderately slow)
            this.maxRetries = 5;  // Limit the number of retries to prevent infinite recursion
        }
    
        // Generates a random, intricate cloud with a starting position and irregular shape
        generateCloud(cols, rows, retries = 0) {
            const startX = -Math.floor(Math.random() * 150 / this.cellSize) * this.cellSize;  // Start off-screen to the left, aligned to grid
            const startY = Math.floor(Math.random() * 20);    // Random height
                 y: startY,
                width: width,
                height: height,
                alpha: Math.random() * 0.5 + 0.5, // Semi-transparent effect
                pixels: []
            };
    
            // Create a more intricate, irregular cloud shape by adding random offsets
            for (let i = 0; i < width; i++) {
                for (let j = 0; j < height; j++) {
                    if (Math.random() < 0.6) { // Chance to add a "pixel" to the cloud (controls density)
                        cloud.pixels.push({
                            x: i + startX,
                            y: j + startY,
                        });
                    }
                }
            }
    
            this.clouds.push(cloud);
        }
    
        // Updates cloud positions and draws them on the canvas using pixel grid
        update(context, cols, rows) {
            // Generate new clouds randomly, but not too often
            if (Math.random() < 0.02) { // Adjust the probability to control cloud generation rate
                this.generateCloud(cols, rows);
            }
    
            // Clear old clouds and move them rightward
            context.fillStyle = "rgba(255, 255, 255, 0.8)"; // Cloud color with transparency
            for (let cloud of this.clouds) {
                cloud.x += this.cloudSpeed * this.cellSize; // Move by grid size steps
    
                // Draw the cloud using pixel grid (cellSize) as the basic drawing unit
                for (let pixel of cloud.pixels) {
                    // Ensure cloud "pixels" are drawn according to the grid
                    context.fillRect(pixel.x * this.cellSize, pixel.y * this.cellSize, this.cellSize, this.cellSize);
                }
            }
    
            // Remove clouds that are off the screen
            this.clouds = this.clouds.filter(cloud => cloud.x < cols * this.cellSize);
    
            // Optional: Remove clouds that are off-screen completely for efficiency
            // this.clouds = this.clouds.filter(cloud => cloud.x + cloud.width * this.cellSize > 0);
        }
    }
    
    
    
    
    
    
    
            console.log("DEBUG::new cloud added")
    
            // this.cellSize = cellSize;
            // this.x = 0; // Cloud starts at the left edge
            // this.y = Math.floor(Math.random() * 5) * this.cellSize; // Random y position near the top
            // this.width = Math.floor(Math.random() * maxWidth + 1) * this.cellSize; // Random width from 1 to maxWidth
            // this.height = Math.floor(Math.random() * maxHeight + 1) * this.cellSize; // Random height from 1 to maxHeight
            // this.speed = 1; // Speed of horizontal movement (1 cell per move)
            // this.lastMoveTime = 0; // Time of last movement
            // this.moveInterval = moveInterval; // Private variable for move interval (in ms)
    
            return {
                height: 100,
                width: 100,
                position: {
                    x: 0,
                    y: 0,
                },
            }
            



            ----



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




---


class Clouds {
    constructor(cellSize, context, element) {
        this.cellSize = cellSize;
        this.context = context;
        this.element = element;

        this.clouds = [];
        this.rows = Math.floor(this.element.height / this.cellSize);
        this.columns = Math.floor(this.element.width / this.cellSize);
        this.minimumDistance = 3; // Minimum distance between clouds (in grid cells)

        this.initializeClouds();
    }

    initializeClouds() {
        let grid = [];
        for (let i = 0; i < this.rows; i++) {
            grid.push(new Array(this.columns).fill(false));
        }

        let activeList = [];
        let firstPoint = [
            Math.floor(Math.random() * this.columns),
            Math.floor(Math.random() * this.rows)
        ];
        activeList.push(firstPoint);
        this.clouds.push(firstPoint);
        grid[firstPoint[1]][firstPoint[0]] = true;

        while (activeList.length > 0) {
            const index = Math.floor(Math.random() * activeList.length);
            const point = activeList[index];

            let found = false;
            for (let i = 0; i < 30; i++) { // Try up to 30 attempts for a valid point
                const angle = Math.random() * 2 * Math.PI;
                const distance = this.minimumDistance + Math.random();
                const newX = point[0] + Math.floor(Math.cos(angle) * distance);
                const newY = point[1] + Math.floor(Math.sin(angle) * distance);

                if (
                    newX >= 0 && newX < this.columns &&
                    newY >= 0 && newY < this.rows &&
                    !grid[newY][newX] &&
                    this.isFarEnough(newX, newY)
                ) {
                    activeList.push([newX, newY]);
                    this.clouds.push([newX, newY]);
                    grid[newY][newX] = true;
                    found = true;
                    break;
                }
            }

            if (!found) {
                activeList.splice(index, 1);
            }
        }
    }

    isFarEnough(x, y) {
        for (let [cloudX, cloudY] of this.clouds) {
            const dx = x - cloudX;
            const dy = y - cloudY;
            if (Math.sqrt(dx * dx + dy * dy) < this.minimumDistance) {
                return false;
            }
        }
        return true;
    }

    draw() {
        this.context.fillStyle = "white";
        for (let [x, y] of this.clouds) {
            this.context.fillRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
        }
    }

    update() {
        // Optionally, add logic here to animate or change clouds
    }
}


