import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
