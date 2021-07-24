import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CoursService {
  baseUrl= environment.baseUrl
  constructor(private httpClient: HttpClient) { }

  getAllCours(): Observable<any[]> {
    return this.httpClient.get<any []>(`${this.baseUrl}/cours`);
  }

  deleteCours(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/cours/${id}`);
  }

  saveUpdate(id: number, formValue: any) {
    return this.httpClient.put(`${this.baseUrl}/cours/${id}`,formValue);
  }

  getCoursById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/cours/${id}`);
  }
  
  addCours(formValue: any) {
  return this.httpClient.post(`${this.baseUrl}/cours`,formValue);
  }
}