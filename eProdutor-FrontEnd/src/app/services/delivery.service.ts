import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Fazendeiro } from '../model/fazendeiro.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private URL_WEB_MANAGER = environment.URL_WEB_MANAGER;

  constructor(
    private httpClient: HttpClient,
  ) { }


  registerUser(fazendeiro: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'aplication/json');
    return this.httpClient.post(`${this.URL_WEB_MANAGER}/register`, fazendeiro);
  }

  delete(id: any): Observable<any> {
    console.log('DeleteDelivery', id)
    return this.httpClient.delete(`${this.URL_WEB_MANAGER}/delete-fazendeiro/${id}`).pipe(map(retorno => retorno),
      catchError(this.handleError))
  }

  upDateFazendeiro(_id: any, user: any): Observable<any> {
    return this.httpClient.put(`${this.URL_WEB_MANAGER}/update-fazendeiro/${_id}`, user).pipe(catchError(this.handleError));
  }

  getAll(): Observable<Fazendeiro[]> {
    return this.httpClient.get<Fazendeiro[]>(`${this.URL_WEB_MANAGER}/list-fazendeiro`);
  }

  getUserProfile(id: any): Observable<any> {
    return this.httpClient.get(`${this.URL_WEB_MANAGER}/list-fazendeiro/${id}`).pipe(
      map((res) => {
        return res || {};
      }), catchError(this.handleError));
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
  
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else if (error.error && error.error.message) {
      // Handle server error with a message property
      errorMessage = error.error.message;
    } else {
      // Handle other server errors
      errorMessage = 'Erro desconhecido';
    }
  
    return throwError(() => errorMessage);
  }
  
}
