import { Component, OnInit } from '@angular/core';
import { BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-prog-langs',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.scss']
})
export class ProgrammingLanguagesComponent implements OnInit {
  public colSize=4;
  public isMobile:boolean = false;

  constructor(private breakpointObs: BreakpointObserver ) {}

  ngOnInit(): void {
    this.breakpointObs.observe(['(max-width: 800px)', '(max-width: 360px)']).subscribe(() => this.threeBreakpoints());
  }

  threeBreakpoints(){
    if(this.breakpointObs.isMatched('(max-width: 800px)')){
      this.colSize = 2;
    }
    else if(this.breakpointObs.isMatched('(max-width: 360px)')){
      this.colSize = 1;
    }
    else {
      this.colSize = 4;
    }
  }

}
