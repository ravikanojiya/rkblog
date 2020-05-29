import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  catForm: FormGroup;
  constructor(private blogservice: BlogService, private route: Router) { }

  ngOnInit() {
    this.catForm = new FormGroup({
      category_name: new FormControl('', Validators.required)
    })
  }
  onSubmit() {
    this.blogservice.addcategory(this.catForm.value).subscribe(res => {
      console.log("addedd");
    })
  }

}
