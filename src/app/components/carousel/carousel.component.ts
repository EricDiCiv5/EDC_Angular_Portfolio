import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public ytLinks = [
    'https://www.youtube.com/watch?v=YFa8ESCu-6o',
    'https://www.youtube.com/watch?v=HOcgFs_ds3M',
    'https://www.youtube.com/watch?v=uZwPo5bNhoI',
    'https://www.youtube.com/watch?v=uFPUps2ipok',
    'https://www.youtube.com/watch?v=mnXpWmSe7Q8',
    'https://www.youtube.com/watch?v=eiJuQIcw9aY',
    'https://www.youtube.com/watch?v=8I5OGLwRQXE',
    'https://www.youtube.com/watch?v=RrPcvluy1u0',
    'https://www.youtube.com/watch?v=LUsVQ12frrQ',
    'https://www.youtube.com/watch?v=iiZqFuRs2eY',
    'https://www.youtube.com/watch?v=FPvaPGCyaSs',
    'https://www.youtube.com/watch?v=64ZFYazDZbo',
    'https://www.youtube.com/watch?v=Z45t7p4pR0s',
    'https://www.youtube.com/watch?v=1PwNierjk_k'
  ]

  public images = [
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_1.png',
    imgAlt: 'Miniatura número 1'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_2.png',
    imgAlt: 'Miniatura número 2'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_3.png',
    imgAlt: 'Miniatura número 3'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_2.png',
    imgAlt: 'Miniatura número 4'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_5.png',
    imgAlt: 'Miniatura número 5'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_6.png',
    imgAlt: 'Miniatura número 6'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_7.png',
    imgAlt: 'Miniatura número 7'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_8.png',
    imgAlt: 'Miniatura número 8'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_9.png',
    imgAlt: 'Miniatura número 9'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_10.png',
    imgAlt: 'Miniatura número 10'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_11.png',
    imgAlt: 'Miniatura número 11'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_12.png',
    imgAlt: 'Miniatura número 12'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_13.png',
    imgAlt: 'Miniatura número 13'
  },
  {
    imgSrc: '../../../assets/images/youtube_Thumbnails/MiniaturaYoutube_14.png',
    imgAlt: 'Miniatura número 14'
  }
]

}
