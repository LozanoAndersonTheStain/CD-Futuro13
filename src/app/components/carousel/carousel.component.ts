import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public slidesData: { image: string, name: string }[] = [
    { image: 'assets/img_carousel/image_1.jpg', name: 'Image 1' },
    { image: 'assets/img_carousel/image_2.jpg', name: 'Image 2' },
    { image: 'assets/img_carousel/image_3.jpg', name: 'Image 3' },
    { image: 'assets/img_carousel/image_4.jpg', name: 'Image 4' },
    { image: 'assets/img_carousel/image_5.jpg', name: 'Image 5' },
    { image: 'assets/img_carousel/image_6.jpg', name: 'Image 6' },
    { image: 'assets/img_carousel/image_7.jpg', name: 'Image 7' },
    { image: 'assets/img_carousel/image_8.jpg', name: 'Image 8' },
    { image: 'assets/img_carousel/image_9.jpg', name: 'Image 9' }
  ];
  visibleSlides: { image: string, name: string }[] = [];
  currentIndex: number = 0;
  slidesToShow: number = 6;

  ngOnInit(): void {
    this.updateVisibleSlides();
  }

  updateVisibleSlides(): void {
    this.visibleSlides = this.slidesData.slice(this.currentIndex, this.currentIndex + this.slidesToShow);
    if (this.visibleSlides.length < this.slidesToShow) {
      this.visibleSlides = this.visibleSlides.concat(this.slidesData.slice(0, this.slidesToShow - this.visibleSlides.length));
    }
  }

  getPrev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slidesData.length) % this.slidesData.length;
    this.updateVisibleSlides();
  }

  getNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slidesData.length;
    this.updateVisibleSlides();
  }
}
