const SCROLL_SPEED = 0.05;
const PADDING = 40;

export default class Logoer {
    scrollX = PADDING;

    logos = {
        discover: {
            key: "discover",
            src: "./logos/discover.png",
            scale: 0.033,
            offset: {
                position: {
                    y: 16
                }
            }
        },
        vivint_solar: {
            key: "vivint_solar",
            src: "./logos/vivint_solar.png",
            scale: 0.075,
            offset: {
                position: {
                    y: 15
                }
            }
        },
        nice_cxone: {
            key: "nice_cxone",
            src: "./logos/nice_cxone.png",
            scale: 0.25,
            offset: {
                position: {
                    y: 8
                }
            }
        }
    };

    list = [];

    loadLogos = () => Promise.all([
        this.logos.discover.key,
        this.logos.vivint_solar.key,
        this.logos.nice_cxone.key,
    ].map(key => new Promise(resolve => {
        const image = new Image();

        image.src = this.logos[key].src;

        image.onload = () => {
            this.logos[key].image = image;

            this.list.push(key);

            resolve();
        }
    })));

    draw = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let x = -scrollX;

        // Draw logos repeatedly across canvas
        while (x < this.canvas.width) {
            this.list.forEach(logo => {
                const { image, scale = 1, offset } = this.logos[logo] ?? {};
                const scaledWidth = image.width * scale;
                const scaledHeight = image.height * scale;

                this.context.drawImage(image, x, offset.position.y, scaledWidth, scaledHeight);

                x += scaledWidth + PADDING;
            });
        }

        this.context.save();

        const gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);

        // Sharp fade-in at the beginning
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(0.04, "rgba(0, 0, 0, 0.5)");
        gradient.addColorStop(0.10, "rgba(0, 0, 0, 1)");

        // Fully visible middle
        gradient.addColorStop(0.90, "rgba(0, 0, 0, 1)");
        gradient.addColorStop(0.96, "rgba(0, 0, 0, 0.5)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        this.context.globalCompositeOperation = "destination-in";
        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.restore();
        this.context.globalCompositeOperation = "source-over";
    }

    update = () => {
        scrollX += SCROLL_SPEED;

        // Reset scroll to loop infinitely
        const totalWidth = this.list.reduce((sum, key) => {
            const logo = this.logos[key];

            const scaledWidth = logo.image.width * logo.scale;

            return sum + scaledWidth + PADDING;
        }, 0);

        if (scrollX > totalWidth) {
            scrollX = 0;
        }

        this.draw();

        requestAnimationFrame(this.update);
    }

    initialize = () => {
        try {
            this.canvas = document.getElementById('logos');

            this.context = this.canvas.getContext('2d');
            this.context.globalAlpha = 0.8;

            if (!this.canvas) return;

            this.loadLogos().then(this.update);
        } catch (error) {
            console.warn('LOGOER::Unable to initialize.')
        }
    }
}