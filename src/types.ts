export interface Topic {
    id: number;
    title: string;
    description: string;
    articles: string[];
    icon: string;
    articleCount: number;
}

export interface Article {
    id: number;
    slug: string;
    title: string;
    lastUpdated: string;
    readTime: string;
    tags: string[];
    excerpt: string;
    sections: Section[]
    relatedArticles: RelatedArticle[];
    breadcrumbs: Breadcrumb[];
}

interface Section {
    id: string;
    heading: string | null;
    content: string;
}

export interface RelatedArticle {
    id: number;
    title: string;
    categorySlug: string;
}

export interface Breadcrumb {
    id: number;
    label: string;
    url: string ;
}