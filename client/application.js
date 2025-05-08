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

const RESUME = 'RESUME';
const CONTACT = 'CONTACT';
const OPPORTUNITY = 'OPPORTUNITY';

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
            label: 'Material UI'
        },
        {
            label: 'Bootstrap'
        },
        {
            label: 'Tailwind'
        },
        {
            label: 'SASS'
        },
        {
            label: 'LESS'
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
            label: 'Vue.js'
        },
        {
            label: 'Angular'
        },
        {
            label: 'NGRX'
        },
        {
            label: 'React'
        },
        {
            label: 'Redux'
        },
        {
            label: 'Thunk'
        },
        {
            label: 'React Native'
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
        {
            label: 'Gatsby'
        },
        {
            label: 'Svelte'
        },
        {
            label: 'WordPress'
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
            label: 'Chai',
        },
        {
            label: 'Karma',
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

const TOAST = {
    TYPES: {
        INFORMATION: 'INFORMATION',
        SUCCESS: 'SUCCESS',
        ERROR: 'ERROR',
    }
}

const determine_toast_class = (type) => {
    switch (type) {
        case TOAST.TYPES.INFORMATION: {
            return 'information';
        }
        case TOAST.TYPES.SUCCESS: {
            return 'success';
        }
        case TOAST.TYPES.ERROR: {
            return 'error';
        }
    }
}

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
            messaging: false,
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
            ],
            footer: {
                source: 'Retrieving latest data...'
            },
            modal: {
                opened: false,
                context: '',
                placeholder_for_message: '',
                form: {
                    name: '',
                    email: '',
                    message: '',
                    is_valid: false,
                }
            },
            toasts: []
        },
        controller: {
            navigate: (route) => {
                this.state.route = route;
            },
            skills: (capability, application) => {
                if (!capability) return -1;
                if (!application) return -2;

                application.state.capability = capability;

                const skills = skills_by_capabilities[capability].map(skill => skill.label);

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
            initialize: {
                capabilities: (application) => {
                    application.controller.skills(LANGUAGES, application);
                },
                scroll_about: () => { // TODO : DEPRECATE
                    let id,
                        animating = false,
                        scroll_about_last_timestamp = null,
                        scroll_about_accumulated_time = 0;

                    const about = document.getElementById('about');
                    const element = about.querySelector('#story');
                    const units = 2;
                    const duration = 150;

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
                            if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
                                window.setTimeout(() => {
                                    element.scrollTop = 0;
                                    scroll_about_last_timestamp = null;
                                    scroll_about_accumulated_time = 0;
                                }, 2500);
                            } else {
                                element.scrollTop += units;

                                scroll_about_accumulated_time -= steps * duration;
                            }
                        }
                    }

                    const loop = (timestamp) => {
                        scroll(timestamp);

                        id = window.requestAnimationFrame(loop);
                    };

                    const resume = () => {
                        if (animating) return;

                        animating = true;

                        scroll_about_last_timestamp = null;
                        scroll_about_accumulated_time = 0;

                        loop();
                    };

                    const pause = () => {
                        animating = false;

                        window.cancelAnimationFrame(id);
                    }

                    const handleVisibilityChange = () => {
                        if (document.visibilityState === "visible") {
                            resume();
                        } else {
                            pause();
                        }
                    };

                    window.addEventListener("visibilitychange", handleVisibilityChange);

                    resume();
                },
                footer: (application) => {
                    Promise.all([
                        fetch('https://raw.githubusercontent.com/riosolved/portfolio/main/client/package.json').then(res => res.json()),
                        fetch('https://api.github.com/repos/riosolved/portfolio/commits').then(res => res.json()),
                    ]).then((data = []) => {
                        const [
                            Information,
                            commits
                        ] = data;

                        const latest_commit = commits[0];
                        const sha = latest_commit.sha.substring(0, 7);

                        application.state.footer.source = `Version: ${Information.version} - Latest: ${sha} @ ${new Date(latest_commit.commit.author.date).toLocaleDateString()}`;
                    });
                },
            },
            modal: {
                submit: (application) => {
                    application.controller.toast.add(
                        TOAST.TYPES.INFORMATION,
                        "Sending message...",
                        undefined,
                        application
                    );

                    const {
                        context
                    } = application.state.modal ?? {};

                    const {
                        name,
                        email,
                        message
                    } = application.state.modal.form ?? {};

                    application.state.messaging = true;

                    window.grecaptcha.ready(() => {
                        window.grecaptcha.execute('6LcOojArAAAAAMZuyCFMNDDZHX_txzCJgs0yP_XC', { action: 'CONTACT' }).then((google_recaptcha_token) => {
                            fetch(`${__environment_variables__.API}/contact`, { // NOTE : Value of "__API__" is defined in "vite.configuration.development" - string is overwritten on build of client.
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    name,
                                    email,
                                    message,
                                    context,
                                    google_recaptcha_token
                                })
                            }).then(response => {
                                if (!response.ok) throw response;

                                return response.json();
                            }).then(data => {
                                application.state.messaging = false;

                                application.controller.modal.close(application);

                                application.controller.toast.add(
                                    TOAST.TYPES.SUCCESS,
                                    data.message,
                                    undefined,
                                    application
                                );
                            }).catch(async error => {
                                application.state.messaging = false;

                                application.controller.modal.form.reset(application);

                                let data = {};

                                try {
                                    data = await error.json();
                                } catch (error) {}

                                application.controller.toast.add(
                                    TOAST.TYPES.ERROR,
                                    data?.message ?? 'Unexpected error occurred.',
                                    undefined,
                                    application
                                );
                            });
                        });
                    });
                },
                close: (application) => {
                    application.state.modal.opened = false;
                    application.state.modal.context = '';
                    application.state.modal.placeholder_for_message = '';
                    application.controller.modal.form.reset(application);
                },
                form: {
                    reset: (application) => {
                        application.state.modal.form.name = '';
                        application.state.modal.form.email = '';
                        application.state.modal.form.message = '';
                        application.state.modal.form.is_valid = false;
                    },
                    validate: (application) => {
                        const {
                            form
                        } = application.state.modal;

                        const name = form.name;
                        const email = form.email;
                        const message = form.message;

                        const email_is_valid = /\S+@\S+\.\S+/.test(email);

                        const is_valid = (
                            name &&
                            email &&
                            message &&
                            email_is_valid
                        );

                        application.state.modal.form.is_valid = is_valid;
                    }
                },
                open_for_resume: (application) => {
                    application.state.modal.placeholder_for_message = "Before I send my resume over, please provide some more information on how I can help!";
                    application.state.modal.context = RESUME;
                    application.state.modal.opened = true;

                },
                open_for_contact: (application) => {
                    application.state.modal.placeholder_for_message = '"Free Your Mind" — Morpheus (The Matrix)';
                    application.state.modal.context = CONTACT;
                    application.state.modal.opened = true;
                },
                open_for_opportunity: (application) => {
                    application.state.modal.placeholder_for_message = "I'm currently looking for new opportunities. Got a match? Let's chat!";
                    application.state.modal.context = OPPORTUNITY;
                    application.state.modal.opened = true;
                },
            },
            toast: {
                add: (
                    type,
                    message,
                    time_to_live = 4000,
                    application
                ) => {
                    const id = Date.now();

                    const toast = {
                        id: Date.now(),
                        type,
                        message,
                        class: determine_toast_class(type)
                    };

                    application.state.toasts.push(toast);

                    window.setTimeout(() => {
                        application.controller.toast.remove(
                            id,
                            application
                        );
                    }, time_to_live);
                },
                remove: (
                    id,
                    application
                ) => {
                    application.state.toasts = application.state.toasts.filter(toast => toast.id !== id);
                }
            }
        }
    })
}

window.application = new Application();

export default window.application;
