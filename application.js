import Background from './background';

class Application {
    background = new Background();

    constructor() {
        this.background.initialize();
        this.logos();
    }

    logos = () => {
        const canvas = document.getElementById('logos');
        const context = canvas.getContext('2d');

        context.globalAlpha = 0.8;

        const padding = 40;

        const logos = {
            discover: {
                key: "discover",
                src: "./logos/discover.png",
                scale: 0.033,
                offset: {
                    position: {
                        y: 13
                    }
                }
            },
            vivint_solar: {
                key: "vivint_solar",
                src: "./logos/vivint_solar.png",
                scale: 0.075,
                offset: {
                    position: {
                        y: 10.5
                    }
                }
            },
            nice_cxone: {
                key: "nice_cxone",
                src: "./logos/nice_cxone.png",
                scale: 0.25,
                offset: {
                    position: {
                        y: 3
                    }
                }
            }
        }

        const list = [];

        let scrollX = padding;

        const scrollSpeed = 0.05;

        const loadLogos = () => Promise.all([
            logos.discover.key,
            logos.vivint_solar.key,
            logos.nice_cxone.key,
        ].map(key => new Promise(resolve => {
            const image = new Image();

            image.src = logos[key].src;

            image.onload = () => {
                logos[key].image = image;

                list.push(key);

                resolve();
            }
        })));

        const draw = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            let x = -scrollX;
        
            // Draw logos repeatedly across canvas
            while (x < canvas.width) {
                list.forEach(logo => {
                    const { image, scale = 1, offset } = logos[logo] ?? {};
                    const scaledWidth = image.width * scale;
                    const scaledHeight = image.height * scale;
        
                    context.drawImage(image, x, offset.position.y, scaledWidth, scaledHeight);
        
                    x += scaledWidth + padding;
                });
            }
        
            context.save();

            const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
            
            // Sharp fade-in at the beginning
            gradient.addColorStop(0.02, "rgba(0, 0, 0, 0)");
            gradient.addColorStop(0.04, "rgba(0, 0, 0, 0.5)");
            gradient.addColorStop(0.10, "rgba(0, 0, 0, 1)");
            
            // Fully visible middle
            gradient.addColorStop(0.90, "rgba(0, 0, 0, 1)");
            gradient.addColorStop(0.96, "rgba(0, 0, 0, 0.5)");
            gradient.addColorStop(0.98, "rgba(0, 0, 0, 0)");
            
            context.globalCompositeOperation = "destination-in";
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            context.restore();
            context.globalCompositeOperation = "source-over";
        }

        const update = () => {
            scrollX += scrollSpeed;

            // Reset scroll to loop infinitely
            const totalWidth = list.reduce((sum, key) => {
                const logo = logos[key];

                const scaledWidth = logo.image.width * logo.scale;

                return sum + scaledWidth + padding;
            }, 0);
            
            if (scrollX > totalWidth) {
                scrollX = 0;
            }

            draw();

            requestAnimationFrame(update);
        }

        loadLogos().then(() => {
            update();
        });
    }

    alpine = ({
        state: {
            route: '/home',
            projects: [
                {
                    title: 'Wishlist',
                    description: 'A 2D game prototype developed in Unity.',
                    image: 'https://mattwilldev.com/img/thumb-1.jpg'
                },
                {
                    title: 'Doro',
                    description: 'A collaborative drawing experience on an infinite canvas.',
                    image: 'https://mattwilldev.com/img/thumb-2.jpg'
                },
                {
                    title: 'Enlightenment',
                    description: 'A webcrawler designed to fetch educational resources',
                    image: 'https://mattwilldev.com/img/slides/powur-1.jpg'
                },
                {
                    title: 'Rush',
                    description: 'An Unturned plugin for the battle royale experience.',
                    image: 'https://mattwilldev.com/img/thumb-6.jpg'
                },
                {
                    title: 'Portals',
                    description: 'A 2D game prototype developed in Phaser.',
                    image: 'https://www.chnspart.com/_next/image?url=%2Fimages%2Fontariopulse.png&w=640&q=75'
                },
            ]
        },
        navigate(route) {
            this.state.route = route;
        }
    })
}

window.application = new Application();

export default window.application;
