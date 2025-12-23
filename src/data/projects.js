import myWebKosImg from '../assets/my-web-kos.png';
import labSeImg from '../assets/lab-se.png';
import utilityImg from '../assets/utility-web-app.png';
import staticCatalogImg from '../assets/static-catalog.png';
import portfolioNextJsImg from '../assets/portfolio-nextjs.png';

export const projects = [
    {
        id: 1,
        title: 'MyWebKos',
        description: 'A comprehensive web-based management system for boarding houses (Kos).',
        tags: ['PHP', 'CSS'],
        link: 'https://github.com/sleepyarya/MyWebKos',
        image: myWebKosImg
    },
    {
        id: 2,
        title: 'Lab Software Engineering',
        description: 'Official website for Software Engineering Lab built with PHP Native and PostgreSQL, featuring multi-role capabilities.',
        tags: ['PHP', 'PostgreSQL', 'Bootstrap 5'],
        link: 'https://github.com/sleepyarya/labse_web',
        image: labSeImg
    },
    {
        id: 3,
        title: 'Utility Web App',
        description: 'A versatile collection of web-based utility tools for everyday tasks.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://utility-web-app-eta.vercel.app/',
        image: utilityImg
    },
    {
        id: 4,
        title: 'Static Catalog',
        description: 'A responsive and static web-based catalog system to showcase products or items.',
        tags: ['CSS', 'JavaScript', 'HTML'],
        link: 'https://static-catalog.vercel.app/',
        image: staticCatalogImg
    },
    {
        id: 5,
        title: 'Portfolio With Next.js',
        description: 'A modern, high-performance portfolio website built with Next.js and styled for a premium user experience.',
        tags: ['Next.js', 'React', 'CSS'],
        link: 'https://portfolio-next-js-six-omega.vercel.app/',
        image: portfolioNextJsImg
    }
];
