export interface Category {
  id: string;
  title: string;
  description: string;
  imageCategory: string;
  images?: string[];
  videos?: string[];
  showFullDescription: boolean;
}
