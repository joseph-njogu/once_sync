import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from './blog';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

blogs: Blog[];
  constructor(private blogService: BlogService, private router: Router ) {

  }
allblogs(){
  this.blogService.retrieveBlog().subscribe(
    blog => {
      this.blogs=blog;
      // console.log(blog);
});

}
createblog(){
  this.router.navigate(['/createblog']);

}
}
interface TextareaChangeEventDetail {
  value?: string | null;
}
interface TextareaCustomEvent extends CustomEvent {
  detail: TextareaChangeEventDetail;
  target: HTMLIonTextareaElement;
}
