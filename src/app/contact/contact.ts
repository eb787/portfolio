import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, RouterModule],
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
  messageSent = false;

  mailTest = false;

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

    if (this.mailTest) {
      this.messageSent = true;
      ngForm.resetForm();
      this.checkboxAccepted = false;
      this.autoHideMessage();
      return;
    }


    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          this.messageSent = true;
          ngForm.resetForm();
          this.checkboxAccepted = false;
          this.autoHideMessage();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }
}

autoHideMessage() {
  setTimeout(() => {
    this.messageSent = false;
  }, 5000);
}

}
