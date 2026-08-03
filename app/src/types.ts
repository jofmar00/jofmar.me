export type LocalizedString = Record<'es' | 'en', string>;
export type Site = {
    TITLE: LocalizedString;
    DESCRIPTION: LocalizedString;
    AUTHOR: string;
    URL: string;
};

export type Route = {
    URL: string;
    TITLE: LocalizedString;
    ICON: string;
    DESCRIPTION?: LocalizedString;
    HIDDEN?: boolean;
    NEW?: boolean;
}