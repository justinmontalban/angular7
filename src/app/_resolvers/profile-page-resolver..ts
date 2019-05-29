import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Profile } from '../_models/profile.model';
import { ProfileService } from '../_services/profle/profile.service';
import { Observable, EMPTY, throwError, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CompanyService } from '../_services/company/company.service';
@Injectable({
  providedIn: 'root'
})
export class ProfilePageResolver implements Resolve<any>  {


  constructor(private profileService: ProfileService,private companyService: CompanyService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
    const user = { username: 'justin', id: '1' };
    localStorage.setItem('currentUser', JSON.stringify(user));
    const values = JSON.parse(localStorage.getItem('currentUser'));

    let join = forkJoin(
                this.profileService.getProfileByUserID(values.id), 
                this.companyService.getCompanies())
              .pipe(map((allResponses) => {
                return {
                  userProfile: allResponses[0],
                  companies: allResponses[1]
                };
              }));
              
    return join;

  }
}
