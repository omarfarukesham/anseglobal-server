export interface ISEO {
  pageSlug: string;
  canonicalUrl?: string;
  title: string;
  description: string;
  keywords?: string[];
  robotsDirectives?: string;
  structuredData?: string;
  alternateLanguages?: string[];
  hreflang?: string;
  lastModified?: Date;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
