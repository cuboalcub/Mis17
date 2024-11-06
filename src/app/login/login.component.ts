import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  token: string = '';
  message: string = '';
  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.username, this.password ,this.token).subscribe({
      next: response => {
        this.message = 'Inicio de sesión exitoso.';
        // Aquí puedes redirigir al usuario a otra página o guardar un token
        // Ejemplo: Redirigir al dashboard
        // this.router.navigate(['/dashboard']);
      },
      error: error => {
        this.message = error.error?.error || 'Error al iniciar sesión.';
      }
    });
  }
}
