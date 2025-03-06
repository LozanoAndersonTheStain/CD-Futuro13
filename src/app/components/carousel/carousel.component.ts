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
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290307/Futuro13/Carrousel-home/cap1.jpg', name: 'Image 1' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290306/Futuro13/Carrousel-home/cap2.jpg', name: 'Image 2' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290306/Futuro13/Carrousel-home/cap3.jpg', name: 'Image 3' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290306/Futuro13/Carrousel-home/cap4.jpg', name: 'Image 4' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290305/Futuro13/Carrousel-home/cap5.jpg', name: 'Image 5' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290305/Futuro13/Carrousel-home/cap6.jpg', name: 'Image 6' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290305/Futuro13/Carrousel-home/cap7.jpg', name: 'Image 7' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290304/Futuro13/Carrousel-home/cap8.jpg', name: 'Image 8' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290304/Futuro13/Carrousel-home/cap9.jpg', name: 'Image 9' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290304/Futuro13/Carrousel-home/cap10.jpg', name: 'Image 10' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290303/Futuro13/Carrousel-home/cap11.jpg', name: 'Image 11' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290303/Futuro13/Carrousel-home/cap12.jpg', name: 'Image 12' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290303/Futuro13/Carrousel-home/cap13.jpg', name: 'Image 13' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290302/Futuro13/Carrousel-home/cap14.jpg', name: 'Image 14' },
    { image: 'https://res.cloudinary.com/dy6jglszo/image/upload/v1741290302/Futuro13/Carrousel-home/cap15.jpg', name: 'Image 15' },
  ];
  visibleSlides: { image: string, name: string }[] = [];
  currentIndex: number = 0;
  slidesToShow: number = 6;

  isModalOpen = false;
  selectedImage: { image: string, name: string } | null = null;

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

  openModal(slide: { image: string, name: string }): void {
    this.selectedImage = slide;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
  }
}
