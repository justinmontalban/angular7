import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profle/profile.service';
import { Profile } from 'src/app/_models/profile.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Company } from 'src/app/_models/company.model';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

@Component({
  selector: 'app-profile-page-edit',
  templateUrl: './profile-page-edit.component.html',
  styleUrls: ['./profile-page-edit.component.scss']
})
export class ProfilePageEditComponent implements OnInit {
  profileData: Profile;
  companiesData: Company[] = [];
  profileForm: FormGroup;
  submitted = false;
  selectedValue: string;
  selectedOption: any;
  companiesDatasource: any[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.profileData = this.route.snapshot.data['userProfile'].userProfile;
    this.companiesData = this.route.snapshot.data['userProfile'].companies;
    
  

    this.profileForm = this.fb.group({
      firstName: [this.profileData.firstName, Validators.required],
      lastName: [this.profileData.lastName, Validators.required],
      email: [this.profileData.email, [Validators.required, Validators.email]],
      position: [this.profileData.position, Validators.required],
      companyId: [this.profileData.companyId, Validators.required],
      address: [this.profileData.address, Validators.required],
      description: [this.profileData.description, Validators.required],
      image: [this.profileData.image, Validators.required]
    });

 //convert object to array.
  Object.entries(this.companiesData).forEach(
    ([key, value]) => this.companiesDatasource.push(value)
  );
    
  console.log(this.companiesData);
  console.log(this.companiesDatasource);
    // this.profileService.getProfileByUserID(values.id).subscribe(data => {
    //   this.profileData = data;
    // });
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    console.log(this.selectedOption.companyId);
   
  }
  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (!this.profileForm.invalid) {
      this.profileForm.controls['companyId'].setValue(this.selectedOption.companyId);
      console.log('1');
      this.profileService.udpateProfileByUserID(this.profileData.id, this.profileForm.value)
        .subscribe(res => {
          console.log('2');
          // this.isLoadingResults = false;
          // this.router.navigate(['/product-details', id]);
          this.router.navigate(['/profile']);
        }, (err) => {
          console.log(err);
          // this.isLoadingResults = false;
        }
        );
      // return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.profileForm.value))
  }
}
