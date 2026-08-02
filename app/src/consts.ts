import type { Site, Route } from '@/types';

export const SITE: Site = {
    TITLE: 'Jofmar.me',
    DESCRIPTION: 'Welcome to jofmar.me, my silly little weblog where I share with the internet a piece of myself',
    AUTHOR: 'Jorge Fernández',
    URL: 'jofmar.me'
}

export const ROUTES: Route[] = [
    {
        TITLE: 'about',
        URL: '/about',
        ICON: '/icons/todo.svg',
        DESCRIPTION: 'Know me a little better',
        NEW: true
    },
    {
        TITLE: 'blog',
        URL: '/blog',
        ICON: '/icons/blog.svg',
        DESCRIPTION: 'Ideas y trozitos de reflexión aleatorios',
        NEW: true
    },
    {
        TITLE: 'achievements',
        URL: '/achievements',
        ICON: '/icons/achievements.svg',
        NEW: true
    },
    {
        TITLE: 'music',
        URL: '/music',
        ICON: '/icons/todo.svg',
        HIDDEN: true
    },
    {
        TITLE: 'projects',
        URL: '/projects',
        ICON: '/icons/todo.svg',
        HIDDEN: true
    },
    {
        TITLE: 'portfolio',
        URL: '/portfolio',
        ICON: '/icons/todo.svg',
        HIDDEN: true
    }
]