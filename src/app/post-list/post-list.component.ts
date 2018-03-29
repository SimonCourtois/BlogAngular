import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postlistitems = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus elit, dictum sit amet mattis ut, laoreet iaculis arcu. Quisque lobortis nisi nec mi aliquam, ac cursus felis malesuada. Aliquam tristique libero non sodales pretium.'
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus elit, dictum sit amet mattis ut, laoreet iaculis arcu.'
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus elit, dictum sit amet mattis ut, laoreet iaculis arcu. Quisque lobortis nisi nec mi aliquam.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
