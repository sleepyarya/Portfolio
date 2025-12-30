import cryptoExchange1 from '../assets/crypto-exchange-1.png';
import cryptoExchange2 from '../assets/crypto-exchange-2.png';
import musicRecommendationSystemImg from '../assets/MusicRecommendationSystem.jpeg';
import stockMarketDashboardImg from '../assets/stock-market-dashboard.png';
import socialMediaDashboardImg from '../assets/social-media-dashboard.png';
import utilityImg from '../assets/utility-web-app.png';
import staticCatalogImg from '../assets/static-catalog.png';


export const projects = [
    {
        id: 1,
        title: 'Cryptocurrency Exchange',
        description: 'A robust crypto exchange platform featuring real-time market data, secure trading engine, and dynamic charts.',
        tags: ['Vue.js', 'Web3', 'Real-time'],
        link: 'https://cryptocurrency-exchange-mauve.vercel.app/',
        image: cryptoExchange1, // Fallback/Thumbnail
        images: [cryptoExchange1, cryptoExchange2] // For slider
    },
    {
        id: 2,
        title: 'Music Recommendation System',
        description: 'A smart music recommendation engine that analyzes user preferences to suggest personalized playlists and artists.',
        tags: ['Web App', 'API', 'Algorithm'],
        link: 'https://music-recommendation-system-silk.vercel.app/',
        image: musicRecommendationSystemImg
    },
    {
        id: 3,
        title: 'Stock Market Dashboard',
        description: 'A comprehensive stock market dashboard featuring portfolio tracking, real-time market data visualization, and responsive dark mode design.',
        tags: ['Vue.js', 'CSS', 'Charts'],
        link: 'https://stock-market-dashboard-delta.vercel.app/',
        image: stockMarketDashboardImg
    },
    {
        id: 4,
        title: 'Social Media Dashboard',
        description: 'A modern, aesthetic social media dashboard featuring dark mode and real-time analytics overview.',
        tags: ['Vue.js', 'CSS', 'Responsive'],
        link: 'https://social-media-dashboard-self-one.vercel.app/',
        image: socialMediaDashboardImg
    },
    {
        id: 5,
        title: 'Utility Web App',
        description: 'A versatile collection of web-based utility tools for everyday tasks.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://utility-web-app-eta.vercel.app/',
        image: utilityImg
    },
    {
        id: 6,
        title: 'Static Catalog',
        description: 'A responsive and static web-based catalog system to showcase products or items.',
        tags: ['CSS', 'JavaScript', 'HTML'],
        link: 'https://static-catalog.vercel.app/',
        image: staticCatalogImg
    },

];
