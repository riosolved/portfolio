import Background from './background';
import Logoer from './logoer';

const LANGUAGES = 'LANGUAGES';
const CLIENT = 'CLIENT';
const SERVER = 'SERVER';
const PERSISTENCE = 'PERSISTENCE';
const CLOUD = 'CLOUD';
const FRAMEWORKS = 'FRAMEWORKS';
const QUALITY = 'QUALITY';
const CI_CD = 'CI_CD';

const skills_by_capabilities = {
    [LANGUAGES]: [
        {
            label: 'C++'
        },
        {
            label: 'C#'
        },
        {
            label: 'Java'
        },
        {
            label: 'Python'
        },
        {
            label: 'PHP'
        },
        {
            label: 'Lua'
        },
        {
            label: 'Rust'
        },
        {
            label: 'TypeScript'
        },
        {
            label: 'JavaScript'
        }
    ],
    [CLIENT]: [
        {
            label: 'Bootstrap'
        },
        {
            label: 'Less'
        },
        {
            label: 'Tailwind'
        },
        {
            label: 'Sass'
        },
        {
            label: 'CSS'
        },
        {
            label: 'HTML'
        },
        {
            label: 'HTMX'
        },
        {
            label: 'Angular'
        },
        {
            label: 'React'
        },
        {
            label: 'React Native'
        },
        {
            label: 'Vue.js'
        },
    ],
    [SERVER]: [
        {
            label: 'GraphQL'
        },
        {
            label: 'Node.js'
        },
        {
            label: 'NGINX'
        },
        {
            label: 'Internet Information Services'
        },
    ],
    [PERSISTENCE]: [
        {
            label: 'MySQL'
        },
        {
            label: 'PostgreSQL'
        },
        {
            label: 'MariaDB'
        },
        {
            label: 'Microsoft SQL Server'
        },
        {
            label: 'DynamoDB'
        },
        {
            label: 'MongoDB'
        },
        {
            label: 'Snowflake'
        },
        {
            label: 'Teradata'
        },
        {
            label: 'Elasticsearch'
        },
        {
            label: 'Redis'
        },
    ],
    [CLOUD]: [
        {
            label: 'Amazon Web Services'
        },
        {
            label: 'Google Cloud Platform'
        },
        {
            label: 'Pivotal Cloud Foundry'
        }
    ],
    [FRAMEWORKS]: [
        {
            label: '.NET'
        },
        {
            label: 'Spring'
        },
        {
            label: 'ColdFusion'
        },
    ],
    [QUALITY]: [
        {
            label: 'Playwright',
        },
        {
            label: 'Mocha',
        },
        {
            label: 'Jest',
        },
        {
            label: 'New Relic'
        },
        {
            label: 'Loggly'
        },
        {
            label: 'Datadog'
        },
    ],
    [CI_CD]: [
        {
            label: 'Git'
        },
        {
            label: 'Docker'
        },
        {
            label: 'TFS'
        },
        {
            label: 'Jenkins'
        },
        {
            label: 'Kubernetes'
        },
        {
            label: 'Webpack'
        },
        {
            label: 'Gulp'
        },
        {
            label: 'Grunt'
        },
    ],
};

let scroll_about_last_timestamp = 0, scroll_about_accumulated_time = 0;

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
            about: {
                collapsed: true,
            },
            capabilities: [
                {
                    label: 'Languages',
                    key: LANGUAGES
                },
                {
                    label: 'Client',
                    key: CLIENT
                },
                {
                    label: 'Server',
                    key: SERVER
                },
                {
                    label: 'Persistence',
                    key: PERSISTENCE
                },
                {
                    label: 'Cloud',
                    key: CLOUD
                },
                {
                    label: 'Frameworks',
                    key: FRAMEWORKS
                },
                {
                    label: 'Quality',
                    key: QUALITY
                },
                {
                    label: 'CI/CD',
                    key: CI_CD
                }
            ],
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
        controller: {
            navigate: (route) => {
                this.state.route = route;
            },
            skills: (capability, application) => {
                if (!capability) return -1;
                if (!application) return -1;

                application.state.capability = capability;

                const skills = skills_by_capabilities[capability].map(skill => `<u>${(skill?.label ?? '').toUpperCase()}</u>`);

                switch (skills.length) {
                    case 0: {
                        application.state.skills = '';
                    }
                    case 1: {
                        application.state.skills = `${skills[0]}.`;
                    }
                    case 2: {
                        application.state.skills = `${skills.join(' and ')}.`;
                    }
                    default: {
                        const last = skills.pop();

                        application.state.skills = `${skills.join(', ')}, and ${last}.`;
                    }
                }
            },
            toggle_expand_about: (application) => {
                application.state.about.collapsed = !application.state.about.collapsed;
            },
            initialize: {
                capabilities: (application) => {
                    application.controller.skills(LANGUAGES, application);
                },
                scroll_about: () => {
                    const about = document.getElementById('about');
                    const element = about.querySelector('#story');
                    const units = 2;
                    const duration = 150;
                
                    if (element._scrolling) {
                        window.cancelAnimationFrame(element._scrolling);
                        element._scrolling = null;
                    }
                
                    const scroll = (timestamp) => {
                        if (!scroll_about_last_timestamp) {
                            scroll_about_last_timestamp = timestamp;

                            return;
                        }


                        const deltaTime = timestamp - scroll_about_last_timestamp;

                        if (deltaTime <= 0) {
                            return;
                        }

                        scroll_about_last_timestamp = timestamp;
                        scroll_about_accumulated_time += deltaTime;

                        const steps = Math.floor(scroll_about_accumulated_time / duration) * units;

                        if (steps > 0) {
                            if(element.scrollTop + element.clientHeight >= element.scrollHeight) {
                                setTimeout(() => {
                                    element.scrollTop = 0;
                                    scroll_about_last_timestamp = null;
                                    scroll_about_accumulated_time = 0;
                                }, 1000);
                            } else {
                                element.scrollTop += units;
    
                                scroll_about_accumulated_time -= steps * duration;
                            }
                        }
                    }

                    const loop = (timestamp) => {
                        scroll(timestamp);

                        element._scrolling = window.requestAnimationFrame(loop);
                    };

                    setTimeout(() => {
                        scroll_about_last_timestamp = null;
                        scroll_about_accumulated_time = 0;

                        loop();
                    }, 1000);
                },
            }
        }
    })
}

window.application = new Application();

export default window.application;
