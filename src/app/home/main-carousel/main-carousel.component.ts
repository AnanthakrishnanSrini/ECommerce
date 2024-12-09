import { Component } from '@angular/core';
import { homecarouselData } from '../../../Data/mainCarousel';
import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [NgFor,CommonModule,RouterLink],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})
export class MainCarouselComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  carouselData:any

  currentSlide=0;
  interval:any;
  
  ngOnInit(){
    this.carouselData=homecarouselData;
    this.autoPlay()
  }

  autoPlay(){
    if (isPlatformBrowser(this.platformId)) {
      setInterval(()=>{
        // this.nextSlide();
      },2000)
    }
    
  }
  nextSlide(){
    this.currentSlide=(this.currentSlide+1) % this.carouselData.length;
  }

}
