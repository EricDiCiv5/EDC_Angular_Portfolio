import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('eng');
    translate.use('eng');
  }

  ngOnInit(): void {
  }

  moveNav(): void {
    if(document.getElementById(`burgerButton`)!.style.left === `0%`) {
      document.getElementById('burgerButton')!.style.transition = '0.5s ease-in';
      document.getElementById('burgerButton')!.style.left = '-40.5%';
    } else {
      document.getElementById('burgerButton')!.style.position = 'absolute';
      document.getElementById('burgerButton')!.style.transition = '0.5s ease-out';
      document.getElementById('burgerButton')!.style.left = '0%';
    } 
    
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
