import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = `${environment.API}login/login`
  constructor(private http: HttpClient) { }

  create(login) {
    return this.http.post(this.API, login).pipe(take(1));
  }
}
