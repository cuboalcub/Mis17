import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  RecaptchaV3Service = inject(ReCaptchaV3Service);
    username: string = '';
    email: string = '';
    password: string = '';
    token: string = '';
    message: string = '';

    constructor(private authService: AuthService) { }

    executeRecaptchavisible() {
      this.RecaptchaV3Service.execute('').subscribe((token)=> {
        this.token = token;
        console.log(this.token);
        this.onSignup();
      });
    }
    onSignup(): void {
      
      this.authService.signup(this.username, this.password, this.token).subscribe({
        next: response => {
          this.message = response.message;
        },
        error: error => {
          this.message = error.error.message;
        }
      });
    }
}
