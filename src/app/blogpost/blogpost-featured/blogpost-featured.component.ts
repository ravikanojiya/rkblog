import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {
  featuredlist: Array<any>[];
  bid = 0;
  Difference_In_Time;
  Difference_In_Days;

  constructor(private service: BlogpostService, private route: ActivatedRoute, private blogservice: BlogService) { }

  ngOnInit() {
    var dat = new Date();

    this.service.getfeaturedblog().then(res => {
      console.log(res);
      this.featuredlist = res;
      console.log("d" + res[0].created_at);
      for (var i = 0; i <= res.length; i++) {
        var dt = new Date(res[i].created_at);
        this.Difference_In_Time = dat.getTime() - dt.getTime();
        this.Difference_In_Days = Math.round(this.Difference_In_Time / (1000 * 3600 * 24));
        if (this.Difference_In_Days > 3) {
          this.blogservice.deleteBlogs(res[i].bid).subscribe(res => {
            console.log("aaasd" + res + "deleted")
          })
          this.ngOnInit();
        }
      }
    })
    // console.log(res[0].created_at);

  }

}
