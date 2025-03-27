import Background from './background';

class Application {
    background = new Background();

    constructor() {
        this.background.initialize();
    }

    alpine = ({
        state: {
            route: '/home',
        },
        navigate(route) {
            this.state.route = route;
        }
    })
}

window.application = new Application();

export default window.application;
