/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/tab3/blog';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.page.html',
  styleUrls: ['./createblog.page.scss'],
})
export class CreateblogPage implements OnInit {
  title: string;
  image: string;
  content: string;
  posted_date: Date;
  user: string;

  blog: Blog;

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
  }
submit(){

this.blog={
  title: this.title,
  image: this.image,
  content:this.content,
  user: this.user,
  posted_date: new Date()
};
// this.blog.title = this.title;
// this.blog.image = this.image;
// this.blog.content = this.content;
// this.blog.posted_date = new Date();
// this.blog.user = this.user;

this.blogService.createBlog(this.blog).subscribe(
  blog => {
    //this.blogs=blog;
    console.log(blog);
},
error => {
  console.log("Error creating blog");
}


);

  console.log(this.title);
  console.log(this.content);
}
home(){
  this.router.navigate(['/']);

}
}
