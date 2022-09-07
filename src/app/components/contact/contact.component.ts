import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuild: FormBuilder, private contact: ContactService) {
  }

  ngOnInit(): void {
    this.contactEDC = this.formBuild.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      msgMatter: new FormControl('', [Validators.required]),
      descrip: new FormControl('', [Validators.maxLength(500)])
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

}
