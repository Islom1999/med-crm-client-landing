import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../shared/services/profile.service';
import { IPatient } from '../../../../../interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent implements OnInit {
  $user_data!: Observable<IPatient>
  user!: IPatient

  constructor(
    private _profileService: ProfileService
  ){}

  ngOnInit(): void {
    this._profileService.getProfile().subscribe((profile: IPatient) => {
      this.user = profile
    })
    this.$user_data = this._profileService.getProfile()
  }

  getImage(id:string){
    return `https://med.api.topsites.uz/api/files/view/${id}`
  }



}
