import type { Site, Route } from '@/types';

export const SITE: Site = {
    TITLE: 'Jofmar.me',
    DESCRIPTION: { es: 'Bienvenidos a jofmar.me, mi pequeño weblog donde intento documentar y compartir con el mundo una pequeña parte de mí y de aquello por lo que vivo. Espero que os guste :)!', en: 'Welcome to jofmar.me, my silly little weblog where I share with the internet a piece of myself' },
    AUTHOR: 'Jorge Fernández',
    URL: 'jofmar.me'
}

export const ROUTES: Route[] = [
    {
        TITLE: { es: 'Acerca de mí', en: 'About me' },
        DESCRIPTION: { es: 'Conóceme un poco mejor', en: 'Know me a little better' },
        COLOR: '#467A56' ,
        URL: '/about',
        ICON: '/icons/todo.svg',
        NEW: true,
        HIDDEN: true
    },
    {
        TITLE: { es: 'Blog', en: 'blog' },
        DESCRIPTION: { es: 'Sobre mi vida y aquello en lo que creo', en: 'Random ideas and bits of reflection' },
        COLOR: '#6DD4F0' ,
        URL: '/blog',
        ICON: '/icons/blog.svg',
        NEW: false
    },
    {
        TITLE: { es: 'Logros', en: 'achievements' },
        DESCRIPTION: { es: 'Hay veces que merece la pena pararse un momento a ver lo que uno ha logrado.', en: 'Everything that deserves to be recognized' },
        COLOR: '#FFB830' ,
        URL: '/achievements',
        ICON: '/icons/achievements.svg',
        NEW: true
    },
    {
        TITLE: { es: 'Música', en: 'music' },
        DESCRIPTION: { es: 'TODO', en: 'TODO' },
        COLOR: '#467A56' ,
        URL: '/music',
        ICON: '/icons/todo.svg',
        HIDDEN: true
    },
    {
        TITLE: { es: 'proyectos', en: 'projects' },
        DESCRIPTION: { es: 'TODO', en: 'TODO' },
        COLOR: '#467A56' ,
        URL: '/projects',
        ICON: '/icons/todo.svg',
        HIDDEN: true
    },
    {
        TITLE: { es: 'Portafolio', en: 'portfolio' },
        DESCRIPTION: { es: 'TODO', en: 'Everything that deserves to be recognized' },
        COLOR: '#FF6B6B' ,
        URL: '/portfolio',
        ICON: '/icons/portfolio.svg',
        HIDDEN: true
    },
    {
        TITLE: { es: '404', en: '404' },
        DESCRIPTION: { es: 'Esta ruta no existe', en: 'Page not found' },
        COLOR: '#FF6B6B' ,
        URL: '/404',
        ICON: '/icons/link.svg',
        HIDDEN: true
    }
]