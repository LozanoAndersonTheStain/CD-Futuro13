import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  public slidesData: { image: string; name: string }[] = [
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290307/Futuro13/Carrousel-home/cap1.jpg',
      name: 'Image 1',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290306/Futuro13/Carrousel-home/cap2.jpg',
      name: 'Image 2',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290306/Futuro13/Carrousel-home/cap3.jpg',
      name: 'Image 3',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290306/Futuro13/Carrousel-home/cap4.jpg',
      name: 'Image 4',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290305/Futuro13/Carrousel-home/cap5.jpg',
      name: 'Image 5',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290305/Futuro13/Carrousel-home/cap6.jpg',
      name: 'Image 6',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290305/Futuro13/Carrousel-home/cap7.jpg',
      name: 'Image 7',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290304/Futuro13/Carrousel-home/cap8.jpg',
      name: 'Image 8',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290304/Futuro13/Carrousel-home/cap9.jpg',
      name: 'Image 9',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290304/Futuro13/Carrousel-home/cap10.jpg',
      name: 'Image 10',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290303/Futuro13/Carrousel-home/cap11.jpg',
      name: 'Image 11',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290303/Futuro13/Carrousel-home/cap12.jpg',
      name: 'Image 12',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290303/Futuro13/Carrousel-home/cap13.jpg',
      name: 'Image 13',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290302/Futuro13/Carrousel-home/cap14.jpg',
      name: 'Image 14',
    },
    {
      image:
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290302/Futuro13/Carrousel-home/cap15.jpg',
      name: 'Image 15',
    },
  ];
  visibleSlides: { image: string; name: string }[] = [];
  currentIndex: number = 0;
  slidesToShow: number = 6;

  currentSlide = 0;
  translateX = 0;
  slideWidth = 180;

  ngOnInit(): void {}

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Desktop Swiper
      const desktopSwiper = document.querySelector('.desktop-slider') as any;
      if (desktopSwiper) {
        const desktopParams = {
          slidesPerView: 6,
          spaceBetween: 10,
          navigation: true,
          pagination: {
            clickable: true,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop: true,
        };
        Object.assign(desktopSwiper, desktopParams);
        desktopSwiper.initialize();
      }

      // Mobile Swiper
      const mobileSwiper = document.querySelector('.mobile-slider') as any;
      if (mobileSwiper) {
        const mobileParams = {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: true,
          pagination: {
            clickable: true,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop: true,
        };
        Object.assign(mobileSwiper, mobileParams);
        mobileSwiper.initialize();
      }
    }
  }
}
