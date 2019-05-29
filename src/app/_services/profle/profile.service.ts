import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Profile } from 'src/app/_models/profile.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }
  getProfileByUserID(id: string) {
    return this.http.get<Profile>('http://localhost:3000/users/' + id)
                    .pipe(map(response => new Profile().deserialize(response)
                    ,catchError(x => { return throwError(x); })));
  };
  udpateProfileByUserID(id: string,profile:Profile) {
    return this.http.put<Profile>('http://localhost:3000/users/' + id,profile)
                    .pipe(
                      tap(_ => console.log(`fetched product id=${id}`)),
                      catchError(x => { return throwError(x); }));
  }
}


