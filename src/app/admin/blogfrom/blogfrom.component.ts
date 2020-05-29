import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-blogfrom',
  templateUrl: './blogfrom.component.html',
  styleUrls: ['./blogfrom.component.css']
})
export class BlogfromComponent implements OnInit {
  blogForm: FormGroup;
  imagePath: string;
  fileToUpload: File = null;
  uploadedFiles = [];
  cat: {};
  pageTitle: String
  id = 0;
  updateblog: {}
  constructor(private blogservice: BlogService, private route: ActivatedRoute, private messageService: MessageService,
    private rut: Router) { }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id)
    if (this.id) {
      // this.pageTitle="Edit Blog"
      this.blogservice.getBlogById(this.id).then(res => {
        this.updateblog = res;
        this.blogForm = new FormGroup({
          bid: new FormControl(this.updateblog[0].bid, Validators.required),
          title: new FormControl(this.updateblog[0].title, Validators.required),
          id: new FormControl(this.updateblog[0].id, Validators.required),
          cid: new FormControl(this.updateblog[0].cid, Validators.required),
          description: new FormControl(this.updateblog[0].description, Validators.required),
          image: new FormControl(this.uploadedFiles),
          is_featured: new FormControl(this.updateblog[0].is_featured, Validators.required),
          is_active: new FormControl(this.updateblog[0].is_active, Validators.required),
          created_at: new FormControl(new Date()),
        })
        this.imagePath = this.updateblog[0].image;
      })
    }
    this.blogservice.getcategories().then(res => {
      this.cat = res;
    });

    this.blogForm = new FormGroup({
      title: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      cid: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl(this.uploadedFiles),
      is_featured: new FormControl('', Validators.required),
      is_active: new FormControl('', Validators.required),
      created_at: new FormControl(new Date()),
    })
  }
  handleFileInput(files: FileList) {
    if (files.length > 0) { // a file was selected
      this.fileToUpload = files.item(0);
      this.blogservice.postFile(files.item(0)).subscribe(i => {
        console.log("imagename" + i["name"]);
        this.uploadedFiles.push(i["name"]);
      });
    }
  }


  onSubmit() {
    if (this.id) {
      this.blogservice.updateblogs(this.blogForm.value).subscribe(res => {
        console.log('updated');
      })
      this.messageService.add({ severity: 'success', summary: 'Blog Update', detail: 'Blog Updated Successfully...' });
      this.rut.navigateByUrl('/admin/blogs');

    } else {
      this.blogservice.addblog(this.blogForm.value).subscribe(res => {
        console.log("Blog Created:-" + res);
      })
      this.messageService.add({ severity: 'success', summary: 'Blog Create', detail: 'Blog Created Successfully...' });
      this.rut.navigate(["/admin/blogs"]);

    }

  }

  // cleanform() {
  //   if (this.blogForm.value) {
  //     return true;
  //   }
  //   return false;
  // }

}
