import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  count={}
  activecount={}
featuredcount={}
  constructor(private service:BlogService) { }

  ngOnInit() {
  this.service.countblog().then(res=>{
    this.count=res[0].blogcount;
    console.log("blogs"+res[0].blogcount)
  });
  this.service.countactiveblog().then(res=>{
    this.activecount=res[0].activeblogcount;
   console.log(res[0].activeblogcount)
  })
  this.service.countfeaturedblog().then(res=>{
    this.featuredcount=res[0].featuredblogcount;
   console.log(res[0].featuredblogcount)
  })
  }

}
