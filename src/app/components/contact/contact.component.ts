import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {
  public contactEDC!: FormGroup;
  public captcha:string;

  constructor(private contact: ContactService) {
    this.captcha = '';
  }

  ngOnInit(): void {
    this.contactEDC = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      msgSubject: new FormControl('', [Validators.required]),
      descrip: new FormControl('', [Validators.maxLength(1000)]),
      recaptcha: new FormControl('', [Validators.required])
    })
  }

  sendToMail(contactEDC: FormGroup){
    console.log(contactEDC);
    this.contact.PostMessage(contactEDC).subscribe(
      response => {
        location.href = "https://mailthis.to/confirm"
        console.log(response)
      },
      error => {
        console.warn(error.responseText);
        console.log({ error });
      }
    )

  }

  captchaClicked(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
  }

}
