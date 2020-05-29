import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {
  listblog: {};
  img: {}
  id = 0;
  path: {};

  constructor(private blogservice: BlogService, private rout: ActivatedRoute) { }

  ngOnInit() {
 
    this.id = this.rout.snapshot.params.id;
    this.blogservice.getallblogs().then(res => {
      this.listblog = res;
      // var dy=res[0].created_at.getMinutes();
     
    })
  }

  ondelete(value) {
    if (confirm('delete?' + value)) {
      this.blogservice.deleteBlogs(value).subscribe(res => {
      })
      this.ngOnInit();
    }

  }

}
