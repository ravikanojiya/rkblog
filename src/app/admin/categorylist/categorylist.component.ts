import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  catlist: {};
  constructor(private service: BlogService) { }

  ngOnInit() {
    this.service.getcategories().then(res => {
      this.catlist = res;
    })
  }

}
