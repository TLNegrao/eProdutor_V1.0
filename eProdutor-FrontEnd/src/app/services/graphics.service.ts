import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';

import { Commodity, Commodities } from '../model/commodity.interface';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  

  private URL_WEB_MANAGER = environment.URL_WEB_MANAGER;

  constructor(
    private httpClient: HttpClient
  ) { }

  obterDados(): Observable<any> {
    return this.httpClient.get<any>(`${this.URL_WEB_MANAGER}/dashFazendeiros/`).pipe(catchError(this.handleError));
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
