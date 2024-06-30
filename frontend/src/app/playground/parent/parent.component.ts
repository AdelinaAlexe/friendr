import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  posts: any = [
    {
      id: 1,
      date: 'Fri Jun 28 2024 11:48:31 GMT+0300 (Ora de vară a Europei de Est)',
      title: 'post 1',
      description: 'This is my first post'
    },

    {
      id: 2,
      date: 'Fri Jun 28 2024 11:48:31 GMT+0300 (Ora de vară a Europei de Est)',
      title: 'post 2',
      description: 'This is my second post'
    },

    {
      id: 3,
      date: 'Fri Jun 28 2024 11:48:31 GMT+0300 (Ora de vară a Europei de Est)',
      title: 'post 3',
      description: 'This is my third post'
    }
  ];

  title: string = '';
  description: string = '';

  createPost() {
    // console.log(this.title);
    // console.log(this.description);
    this.posts.push({
      id: this.posts.length + 1,
      date: new Date(),
      title: this.title,
      description: this.description
    });
  }

}
