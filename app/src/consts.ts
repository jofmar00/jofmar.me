import type { Site, Route } from '@/types';

export const SITE: Site = {
    TITLE: 'Jofmar.me',
    DESCRIPTION: 'My silly little weblog on the internet',
    AUTHOR: 'Jorge Fernández',
    URL: 'jofmar.me'
}

export const ROUTES: Route[] = [
    {
        TITLE: 'about',
        URL: '/about',
        ICON: '/icons/todo.svg',
        DESCRIPTION: 'Know me a little better'
    },
    {
        TITLE: 'portfolio',
        URL: '/portfolio',
        ICON: '/icons/todo.svg'
    },
    {
        TITLE: 'blog',
        URL: '/blog',
        ICON: '/icons/todo.svg'
    },
    {
        TITLE: 'music',
        URL: '/music',
        ICON: '/icons/todo.svg'
    },
    {
        TITLE: 'projects',
        URL: '/projects',
        ICON: '/icons/todo.svg'
    },
    {
        TITLE: 'achievements',
        URL: '/achievements',
        ICON: '/icons/todo.svg'
    }
]