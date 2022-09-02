import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moveNav(): void {
    if(document.getElementById(`burgerButton`)!.style.left == `-40.5%`) {
      document.getElementById('burgerButton')!.style.position = 'relative';
      document.getElementById('burgerButton')!.style.transition = '0.5s ease-out';
      document.getElementById('burgerButton')!.style.left = '0%';
    } else {
      document.getElementById('burgerButton')!.style.transition = '0.5s ease-in';
      document.getElementById('burgerButton')!.style.left = '-40.5%';
    }
  }

}
