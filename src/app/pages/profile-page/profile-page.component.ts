import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProfileService } from 'src/app/_services/profle/profile.service';
import { Profile } from 'src/app/_models/profile.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profileData = new Profile();
  modalRef: BsModalRef;
  constructor(private route: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {

    this.profileData = this.route.snapshot.data['userProfile'].userProfile;

 }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}


