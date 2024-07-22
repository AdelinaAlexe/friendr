import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  postDescription: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (!this.postDescription) {
      return;
    }

    const postData = {
      description: this.postDescription
    };

    this.http.post('your-api-endpoint', postData).subscribe(response => {
      console.log('Post created successfully:', response);
    }, error => {
      console.error('Error creating post:', error);
    });
  }
}
