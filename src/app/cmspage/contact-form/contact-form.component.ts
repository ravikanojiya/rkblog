import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CmspageService } from '../cmspage.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contform: FormGroup;

  constructor(private contservice: CmspageService) { }

  ngOnInit() {
    this.contform = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required)
      
      }
    )
  }

  sendmail() {
    console.log('ssss')
    this.contservice.sendemail(this.contform.value).subscribe(res => {
      console.log("mail sent....");
    })
  }
}
