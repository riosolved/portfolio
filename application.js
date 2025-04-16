import Background from './background';

class Application {
    background = new Background();

    constructor() {
        this.background.initialize();
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
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
                    image: 'https://mattwilldev.com/img/thumb-2.jpg'
                },
                {
                    title: 'Enlightenment',
                    description: 'A webcrawler designed to fetch educational resources',
                    image: 'https://mattwilldev.com/img/slides/powur-1.jpg'
                },
                {
                    title: 'Rush',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
                    image: 'https://mattwilldev.com/img/thumb-6.jpg'
                },
                {
                    title: 'Portals',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
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
