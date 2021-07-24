import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl= environment.baseUrl
  constructor(private httpClient: HttpClient) { }

  getAllUser(): Observable<any[]> {
    return this.httpClient.get<any []>(`${this.baseUrl}/user`);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/user/${id}`);
  }

  saveUpdate(id: number, formValue: any) {
    return this.httpClient.put(`${this.baseUrl}/user/${id}`,formValue);
  }

  getUserById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/user/${id}`);
  }
  
  addUser(formValue: any) {
  return this.httpClient.post(`${this.baseUrl}/user`,formValue);
  }
}
