import { Component, OnInit, Input } from '@angular/core';
import { CarouselImages } from 'src/app/models/carousel-images';

@Component({
  selector: 'app-YT-videos',
  templateUrl: './youtube-videos.component.html',
  styleUrls: ['./youtube-videos.component.scss']
})
export class YoutubeVideosComponent implements OnInit {
  @Input() images: CarouselImages[] = [];
  @Input() ytLinks: string[] = [];
  @Input() indicators = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  public selectedIndex:number;

  constructor() {
    this.selectedIndex = 0;
  }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void{
    setInterval(() => {this.onNextClick()}, this.slideInterval)
  }

  selectImage(index:number): void{
    this.selectedIndex = index;
  }

  onNextClick(){
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex++;
    }
  }

}
