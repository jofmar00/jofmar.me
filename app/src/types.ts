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