export interface GalleryData {
  [key: string]: {
    images: string[];
    videos?: string[];
  };
}

export interface MediaRow {
  type: 'image' | 'video';
  urls: string[];
}
