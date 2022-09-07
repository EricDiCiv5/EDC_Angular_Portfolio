import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.mailthisURL;

  constructor(private http: HttpClient) {}

  PostMessage(input: FormGroup){
    return this.http.post(this.apiUrl, input, { responseType: 'text' }).pipe(
      map(
        (response: any) => {
          if(response) return response;
        },
        (error: HttpErrorResponse) => {
          return error;
        }
      )
    )
  }
}
