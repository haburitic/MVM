import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Data } from '../dto/data';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control' : 'no-cache'
},
)
};
@Injectable()
export class CargaService {

  private Url = environment.host;


  constructor(
    private http: HttpClient,
    private toastrService: ToastrService
  ) { }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.toastrService.error(error.status + ' ' + error.error, 'validación');

      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  private log(message: string) {
  }



  /* GET  whose name contains search term */
  search(term: string): Observable<any> {
    return this.http.get<any>(this.Url).pipe(
      catchError(this.handleError<any>('search'))
    );
  }

}
