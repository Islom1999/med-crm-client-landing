import { Component, OnInit } from '@angular/core';
import { PatientHistoryService } from '../../../../shared/services/patient-history.service';
import { Observable } from 'rxjs';
import { IPatientHistory } from '../../../../../interfaces';
import { PageType } from '../../../../../enumerations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrl: './profile-history.component.scss'
})
export class ProfileHistoryComponent implements OnInit {
  $history!: Observable<IPatientHistory[]>
  $history_detail!: Observable<IPatientHistory>
  page_type?: PageType
  id?: string

  constructor(
    private patientHistoryService: PatientHistoryService,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    this.page_type = this.route.snapshot.data['page_type'];
    this.id = this.route.snapshot.params['id'];

    if(this.page_type && this.id){
      this.$history_detail = this.patientHistoryService.getById(this.id)
    }else{
      this.$history = this.patientHistoryService.getAll()
    }

    this.$history = this.patientHistoryService.getAll()
  }
}
