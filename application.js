import Background from './background';
import Logoer from './logoer';

class Application {
    background = new Background();
    logoer = new Logoer();

    constructor() {
        this.background.initialize();
        this.logoer.initialize();
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
