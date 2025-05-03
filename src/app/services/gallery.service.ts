import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GalleryData } from '../interfaces/gallery.interface';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getAllGalleryData(): Observable<GalleryData> {
    return this.http.get<GalleryData>('assets/data/gallery.json');
  }

  getMediaByYear(
    year: string
  ): Observable<{ images: string[]; videos: string[] }> {
    return this.http.get<GalleryData>('assets/data/gallery.json').pipe(
      map((data) => ({
        images: data[year]?.images || [],
        videos: data[year]?.videos || [],
      }))
    );
  }
}
