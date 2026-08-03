import type { Site, Route } from '@/types';

export const SITE: Site = {
    TITLE: {
        es: 'Jofmar.me',
        en: 'Jofmar.me'
    },
    DESCRIPTION: {
        es: 'Bienvenido a jofmar.me, mi pequeño blog donde comparto con internet un trocito de mí mismo',
        en: 'Welcome to jofmar.me, my silly little weblog where I share with the internet a piece of myself'
    },
    AUTHOR: 'Jorge Fernández',
    URL: 'jofmar.me'
}

export const ROUTES: Route[] = [
    {
        TITLE: {
            es: 'Acerca de mí',
            en: 'About me'
        },
        URL: '/about',
        ICON: '/icons/todo.svg',
        DESCRIPTION: {
            es: 'Conóceme un poco mejor',
            en: 'Know me a little better'
        },
        NEW: true
    },
    {
        TITLE: {
            es: 'blog',
            en: 'blog'
        },
        URL: '/blog',
        ICON: '/icons/blog.svg',
        DESCRIPTION: {
            es: 'Ideas y trozitos de reflexión aleatorios',
            en: 'Random ideas and bits of reflection'
        },
        NEW: true
    },
    {
        TITLE: {
            es: 'logros',
            en: 'achievements'
        },
        URL: '/achievements',
        ICON: '/icons/achievements.svg',
        NEW: true
    },
    {
        TITLE: {
            es: 'música',
            en: 'music'
        },
        URL: '/music',
        ICON: '/icons/todo.svg',
        HIDDEN: true
    },
    {
        TITLE: {
            es: 'proyectos',
            en: 'projects'
        },
        URL: '/projects',
        ICON: '/icons/todo.svg',
        HIDDEN: true
    },
    {
        TITLE: {
            es: 'portafolio',
            en: 'portfolio'
        },
        URL: '/portfolio',
        ICON: '/icons/todo.svg',
        HIDDEN: true
    }
]