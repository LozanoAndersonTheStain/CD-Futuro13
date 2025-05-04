import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'tournaments/:year',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Return a Promise with an array of year parameters you want to prerender
      return [
        { year: '2023' },
        { year: '2022' },
        { year: '2021' }
      ];
    }
  },
  {
    path: 'gallery/:year',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Return a Promise with an array of year parameters you want to prerender
      return [
        { year: '2023' },
        { year: '2022' },
        { year: '2021' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
