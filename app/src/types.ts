export type LocalizedString = Record<'es' | 'en', string>;
export type Site = {
    TITLE: string;
    DESCRIPTION: LocalizedString;
    AUTHOR: string;
    URL: string;
};

export type Route = {
    URL: string;
    TITLE: LocalizedString;
    ICON: string;
    DESCRIPTION: LocalizedString;
    COLOR: string;
    HIDDEN?: boolean;
    NEW?: boolean;
}

export type Post = {
    id: string;
    title: string;
    description: string;
    date: string;
    miniature: ImageMetadata;
}

export type Achievement = {
    id: string;
    title: string;
    date: string;
    miniature: ImageMetadata;
    isNew: boolean;
}