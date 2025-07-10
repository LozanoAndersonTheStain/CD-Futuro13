import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, map, of, catchError } from 'rxjs';
import { GalleryData } from '../interfaces/gallery.interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getAllGalleryData(): Observable<GalleryData> {
    if (!isPlatformBrowser(this.platformId)) {
      // Durante SSR, retornar datos vacíos
      return of({});
    }
    
    return this.http.get<GalleryData>('assets/data/gallery.json').pipe(
      catchError((error) => {
        console.error('Error loading gallery data:', error);
        return of({});
      })
    );
  }

  getMediaByYear(
    year: string
  ): Observable<{ images: string[]; videos: string[] }> {
    if (!isPlatformBrowser(this.platformId)) {
      // Durante SSR, retornar datos vacíos
      return of({ images: [], videos: [] });
    }
    
    return this.http.get<GalleryData>('assets/data/gallery.json').pipe(
      map((data) => ({
        images: data[year]?.images || [],
        videos: data[year]?.videos || [],
      })),
      catchError((error) => {
        console.error('Error loading gallery data for year:', year, error);
        return of({ images: [], videos: [] });
      })
    );
  }
}
