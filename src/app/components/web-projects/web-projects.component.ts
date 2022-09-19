import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit {
  @ViewChild('nav') slider!: NgImageSliderComponent;

  public wide:number = 1000;
  public link!:string;
  public isMobile:boolean = false;

  constructor(private breakpointObs: BreakpointObserver, private route: Router ) {}


  

  ngOnInit(): void {
    this.breakpointObs.observe(['(max-width: 800px)', '(max-width: 360px)']).subscribe(() => this.threeBreakpoints());
  }

  threeBreakpoints(){
    if(this.breakpointObs.isMatched('(max-width: 800px)')){
      this.wide = 700;
    }
    else if(this.breakpointObs.isMatched('(max-width: 360px)')){
      this.wide = 300;
    }
    else {
      this.wide = 1000;
    }
  }

  imageOnClick(index: number) {
    switch(index){
      case 0:
        window.open('http://edc-portfolio.web.app/', '_blank');
        break;
      case 1:
        window.open('http://calc-desgravacion-app-ericdiaz.herokuapp.com/', '_blank');
        break;
      case 2:
        window.open('http://layout-goldenstatewarriors-edc.herokuapp.com/', '_blank');
        break;
      default: console.log("Web Project Not found");
    }
  }

  webDesigns: Array<object> = [
      {
        image: '../../../assets/images/figma_designs/EDCsPortfolio_Design.jpg',
        thumbImage: '../../../assets/images/figma_designs/EDCsPortfolio_Design.jpg',
        alt: 'EDCs First Portfolio',
        title: 'EDCs First Portfolio'
      }, {
        image: '../../../assets/images/figma_designs/Calc_Desgrav_Design.jpg',
        thumbImage: '../../../assets/images/figma_designs/Calc_Desgrav_Design.jpg',
        alt: 'Online Desgrav Calculator',
        title: 'Online Desgrav Calculator'
      }, {
        image: '../../../assets/images/figma_designs/GSW_Roster_Design.jpg',
        thumbImage: '../../../assets/images/figma_designs/GSW_Roster_Design.jpg',
        alt: 'Golden State Warriors Roster',
        title: 'Golden State Warriors Roster'
      }
  ];

  prevImageClick(){
    this.slider.prev();
  }

  nextImageClick(){
    this.slider.next();
  }
}
