import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Blog} from '../tab3/blog';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://159.223.147.113:8000';

  constructor(private http: HttpClient) { }

  retrieveBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.baseUrl +'/api/blog/');

}

createBlog(blog: Blog): Observable<Blog> {
  return this.http.post<Blog>(this.baseUrl +'/api/create/', blog);
}
}
