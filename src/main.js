import './input.scss'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('portfolio', () => ({
    filter: 'all',
    categories: ['Static', 'Web App', 'Collaborative'],
    projects: [
        {
            title: 'Slack App Clone',
            description: 'A simple Slack clone UI using React JS and Chakra UI.',
            link: 'src/pages/slack-app-clone.html',
            image: '/assets/chat-bg.png',
            techStack: ['HTML','React JS','SASS', 'Chakra UI'],
            category: ['Web App']
        },
        {
            title: 'Product Landing Page',
            description: 'A responsive landing page with smooth scrolling and features.',
            link: 'https://product-landing-page-mc.vercel.app/',
            image: '/assets/home-hero-dlines@2x.png',
            techStack: ['HTML', 'JavaScript', 'SASS'],
            category: ['Static']
        },
        {
            title: 'Momentum Clone',
            description: 'A minimalist new tab clone inspired by Momentum.',
            link: 'https://momentum-snowy.vercel.app/',
            image: '/assets/momentum-bg.png',
            techStack: ['HTML', 'JavaScript', 'CSS', 'SASS'],
            category: ['Web App']
        },
        {
            title: 'Tic Tac Toe Game',
            description: 'A classic Tic Tac Toe game built with JavaScript.',
            link: 'https://tic-tac-toe-nu-ivory.vercel.app/',
            image: '/assets/tic-tac-toe.png',
            techStack: ['HTML', 'SASS', 'JavaScript'],
            category: ['Web App']
        },
        {
            title: 'Task Manager',
            description: 'A full‑stack task management web application built with Ruby on Rails',
            link: 'src/pages/task-manager.html',
            image: '/assets/task-man.png',
            techStack: ['Ruby on Rails', 'PostgreSQL', 'Tailwind CSS', 'Devise Auth'],
            category: ['Web App']
        },
        {
            title: 'SkillSetGo - Booking App',
            description: 'A full-stack appointment scheduling app for freelancers and clients.',
            link: 'src/pages/booking-app.html',
            image: '/assets/skillsetgo-logo.png',
            techStack: ['Ruby on Rails', 'PostgreSQL', 'Tailwind CSS', 'Devise Auth'],
            category: ['Collaborative','Web App']
        },
        {
            title: 'AvionFi - Trading App',
            description: 'A full‑stack stock trading application with real-world data.',
            link: 'src/pages/trading-app.html',
            image: '/assets/trading.png',
            techStack: ['Ruby on Rails'],
            category: ['Collaborative','Web App']
        },
    ],
    get filteredProjects() {
        return this.filter === 'all'
            ? this.projects
            : this.projects.filter(p =>
                p.category.some(c => c.toLowerCase() === this.filter.toLowerCase())
            );
    },
    canScrollLeft: false,
    canScrollRight: true,

    scrollLeft() {
        this.$refs.projectScroll.scrollBy({ left: -300, behavior: 'smooth' });
        setTimeout(() => this.checkScroll(), 350);
    },

    scrollRight() {
        this.$refs.projectScroll.scrollBy({ left: 300, behavior: 'smooth' });
        setTimeout(() => this.checkScroll(), 350);
    },

    checkScroll() {
        const el = this.$refs.projectScroll;
        if (!el) return;

        const scrollLeft = Math.round(el.scrollLeft);
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        this.canScrollLeft = scrollLeft > 5;
        this.canScrollRight = scrollLeft < maxScrollLeft - 5;
    },

    init() {
        this.$nextTick(() => {
            this.checkScroll();
        });
    }
}))

Alpine.start()
