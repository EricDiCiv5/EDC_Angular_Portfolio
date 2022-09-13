import { Component, OnInit } from '@angular/core';
import { BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit {

  public wide:number = 1000;
  public isMobile:boolean = false;

  constructor(private breakpointObs: BreakpointObserver ) {}

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

}
