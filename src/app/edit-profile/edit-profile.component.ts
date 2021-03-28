import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LawyerInt } from '../models/lawyer.model copy';
import { CaseService } from '../services/case.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;
  submitted = false;
  maxDate = new Date();
  public lawyerData : LawyerInt;

  constructor(private router: Router, private caseService : CaseService, private notifyService : NotificationService) {
   }

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm():void {
    this.caseService.getProfile().subscribe(res=>{
      this.lawyerData = res;
      this.profileForm = new FormGroup({
        'firstname': new FormControl({value: res.firstname, disabled: false},Validators.required),
        'lastname': new FormControl({value: res.lastname, disabled: false},Validators.required),
        'birthdate': new FormControl({value: res.birthdate, disabled: true}, Validators.required),
        'email': new FormControl({value: res.email, disabled: true}, Validators.required),
        'phnno': new FormControl({value: res.phnno, disabled: false}, [Validators.required, Validators.pattern(/^\d{10}$/)]),
        'city': new FormControl(res.city, Validators.required),
        'address': new FormControl(res.address, Validators.required),
        'uni': new FormControl(res.uni, Validators.required),
        'nationality': new FormControl({value: res.nationality, disabled: true}, Validators.required),
        'prac': new FormControl(res.prac, Validators.required),
        'year': new FormControl(res.year, Validators.required),
        'bcn': new FormControl({value: res.bcn, disabled: true}, Validators.required)
      })
    })
  }

  onSubmit(formData){
    this.caseService.editLawyerProfile(formData).subscribe();
    this.notifyService.showInfo("", "Profile Updated");
    this.router.navigate(['/dashboard']);
  }
}
