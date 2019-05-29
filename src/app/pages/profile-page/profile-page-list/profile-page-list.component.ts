import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/_models/company.model';

@Component({
  selector: 'app-profile-page-list',
  templateUrl: './profile-page-list.component.html',
  styleUrls: ['./profile-page-list.component.scss']
})
export class ProfilePageListComponent implements OnInit {
  companiesData: Company[] = [];
  companiesDatasource: any[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  //   this.route.data.subscribe(value=>{
  //     this.companiesData=value.userProfile.companies;
  //     console.log(value.userProfile.companies);
   
  // });

  this.route.data.subscribe(data => this.companiesData = data['userProfile'].companies);
console.log(this.companiesData)
  //not observable
//  console.log(this.route.snapshot.data.userProfile.companies);

  //  //convert object to array.
  // Object.entries(this.companiesData).forEach(
  //   ([key, value]) => this.companiesDatasource.push(value)
  // );
    
  }



}
