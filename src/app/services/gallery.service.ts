import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

interface GalleryData {
  [key: string]: {
    images: string[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getAllGalleryData(): Observable<GalleryData> {
    return this.http.get<GalleryData>('assets/data/gallery.json');
  }

  getImagesByYear(year: string): Observable<string[]> {
    return this.getAllGalleryData().pipe(
      map(data => data[year]?.images || [])
    );
  }
}
