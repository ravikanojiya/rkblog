import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
title='Blogs';
activelist:{}
  constructor(private blogservice:BlogpostService) { }

  ngOnInit() {
    this.blogservice.getactiveblog().then(res=>{
      this.activelist=res;
    })
  }

}
