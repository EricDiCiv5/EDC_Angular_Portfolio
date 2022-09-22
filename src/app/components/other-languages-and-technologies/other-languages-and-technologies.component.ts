import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'other-langs-and-techs',
  templateUrl: './other-languages-and-technologies.component.html',
  styleUrls: ['./other-languages-and-technologies.component.scss']
})
export class OtherLanguagesAndTechnologiesComponent implements OnInit {

  public colSize=3;
  public isMobile:boolean = false;

  constructor(private breakpointObs: BreakpointObserver ) {}

  ngOnInit(): void {
    this.breakpointObs.observe(['(max-width: 800px)', '(max-width: 420px)']).subscribe(() => this.threeBreakpoints());
  }

  threeBreakpoints(){
    if(this.breakpointObs.isMatched('(max-width: 800px)')){
      this.colSize = 2;
    }
    else if(this.breakpointObs.isMatched('(max-width: 420px)')){
      this.colSize = 1;
    }
    else {
      this.colSize = 3;
    }
  }

}
