import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CaseService } from '../services/case.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-client-edit-profile',
  templateUrl: './client-edit-profile.component.html',
  styleUrls: ['./client-edit-profile.component.scss']
})
export class ClientEditProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private caseService: CaseService, private notifyService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.InitForm();
  }

  private InitForm():void {
    this.caseService.getClientProfile().subscribe(res=>{
      this.profileForm = new FormGroup({
        'firstname': new FormControl({value: res.firstname, disabled: false},Validators.required),
        'lastname': new FormControl({value: res.lastname, disabled: false},Validators.required),
        'birthdate': new FormControl({value: res.birthdate, disabled: true}, Validators.required),
        'email': new FormControl({value: res.email, disabled: true}, Validators.required),
        'phnno': new FormControl({value: res.phnno, disabled: false}, [Validators.required, Validators.pattern(/^\d{10}$/)]),
        'city': new FormControl(res.city, Validators.required),
      })
    })
  }

  onSubmit(formData){
    console.log("formData::", formData);
    this.caseService.editClientProfile(formData).subscribe();
    this.notifyService.showInfo("", "Profile Updated");
    this.router.navigate(['/clientdashboard']);
  }
}
