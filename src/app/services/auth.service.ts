import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/register.php';

  constructor(private http: HttpClient) { }

  // Método para registrar un nuevo usuario
  signup(username: string, password: string, token: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('token', token);

    alert(body.toString());

    return this.http.post(`${this.apiUrl}?action=signup`, body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }

  // Método para iniciar sesión
  login(username: string, password: string, token: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('token', token); // Agregar el token de reCAPTCHA si es requerido

    return this.http.post(`${this.apiUrl}?action=login`, body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }
}
