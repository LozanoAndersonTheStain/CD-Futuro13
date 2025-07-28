import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export interface MetaTagsConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {
  private baseUrl = 'https://corporaciondeportivafuturo13.com';
  private defaultImage = `${this.baseUrl}/assets/logo.svg`;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  updateTags(config: MetaTagsConfig): void {
    // Limpiar meta tags anteriores solo en el browser
    if (isPlatformBrowser(this.platformId)) {
      this.clearPreviousTags();
    }

    // Establecer título
    this.titleService.setTitle(config.title);

    // Meta tags básicos
    const tags = [
      { name: 'description', content: config.description },
      { name: 'keywords', content: config.keywords || 'CD Futuro 13, fútbol, deporte, comuna 13' },
      { name: 'author', content: 'CD Futuro 13' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph
      { property: 'og:type', content: config.type || 'website' },
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:image', content: config.image || this.defaultImage },
      { property: 'og:url', content: config.url || this.baseUrl },
      { property: 'og:site_name', content: 'CD Futuro 13' },
      { property: 'og:locale', content: 'es_CO' },

      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:image', content: config.image || this.defaultImage },

      // Meta tags adicionales
      { name: 'theme-color', content: '#FE7739' },
      { name: 'msapplication-TileColor', content: '#FE7739' }
    ];

    tags.forEach(tag => {
      if (tag.property) {
        this.metaService.updateTag({ property: tag.property, content: tag.content });
      } else {
        this.metaService.updateTag({ name: tag.name!, content: tag.content });
      }
    });
  }

  private clearPreviousTags(): void {
    // Remover meta tags anteriores solo en el browser
    const tagsToRemove: string[] = [
      'description', 'keywords', 'author', 'robots',
      'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'
    ];

    const propertiesToRemove: string[] = [
      'og:type', 'og:title', 'og:description', 'og:image', 'og:url', 'og:site_name', 'og:locale'
    ];

    tagsToRemove.forEach(tagName => {
      const existingTag = this.metaService.getTag(`name="${tagName}"`);
      if (existingTag) {
        this.metaService.removeTag(`name="${tagName}"`);
      }
    });

    propertiesToRemove.forEach(propName => {
      const existingProperty = this.metaService.getTag(`property="${propName}"`);
      if (existingProperty) {
        this.metaService.removeTag(`property="${propName}"`);
      }
    });
  }
}
