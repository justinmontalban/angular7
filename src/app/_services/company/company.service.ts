import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Company } from 'src/app/_models/company.model';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  getCompanies() {
    return this.http.get<Company[]>('http://localhost:3000/companies')
                    .pipe(map(response => new Company().deserialize(response)
                    ,catchError(x => { return throwError(x); })));
  };
}
