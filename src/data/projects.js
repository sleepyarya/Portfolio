import socialMediaDashboardImg from '../assets/social-media-dashboard.png';
import utilityImg from '../assets/utility-web-app.png';
import staticCatalogImg from '../assets/static-catalog.png';
import portfolioNextJsImg from '../assets/portfolio-nextjs.png';

export const projects = [
    {
        id: 1,
        title: 'Social Media Dashboard',
        description: 'A modern, aesthetic social media dashboard featuring dark mode and real-time analytics overview.',
        tags: ['Vue.js', 'CSS', 'Responsive'],
        link: 'https://github.com/sleepyarya/SocialMediaDashboard',
        image: socialMediaDashboardImg
    },
    {
        id: 2,
        title: 'Utility Web App',
        description: 'A versatile collection of web-based utility tools for everyday tasks.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://utility-web-app-eta.vercel.app/',
        image: utilityImg
    },
    {
        id: 3,
        title: 'Static Catalog',
        description: 'A responsive and static web-based catalog system to showcase products or items.',
        tags: ['CSS', 'JavaScript', 'HTML'],
        link: 'https://static-catalog.vercel.app/',
        image: staticCatalogImg
    },
    {
        id: 4,
        title: 'Portfolio With Next.js',
        description: 'A modern, high-performance portfolio website built with Next.js and styled for a premium user experience.',
        tags: ['Next.js', 'React', 'CSS'],
        link: 'https://portfolio-next-js-six-omega.vercel.app/',
        image: portfolioNextJsImg
    }
];
