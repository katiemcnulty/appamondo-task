export interface Topic {
    title: string;
    description: string;
    articles: string[];
    icon: string;
    articleCount: number;
}

export interface CardIcon {
    id: string;
    component: any;
}

export interface Article {
    title: string;
    lastUpdated: string;
    readTime: string;
    tags: string[];
    sections: Section[];
    excerpt: string;
    slug: string;
}

interface Section {
    id: number;
    heading: string;
    content: string;
}

export interface RelatedArticle {
    id: number;
    title: string;
    categorySlug: string;
}

export interface Breadcrumb {
    label: string;
    url: string | null;
}