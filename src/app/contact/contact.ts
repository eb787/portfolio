import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  checkboxAccepted = false;

  mailTest = true;

  post = {
    endPoint: 'https://contact@eric-braun.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.valid && this.checkboxAccepted) {
      console.log('Form Data:', this.contactData);
      // Weiteres Processing hier
    }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
