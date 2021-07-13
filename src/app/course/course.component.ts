import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  catalogs = [
    {'id':1, 'name':'Watch FirstArts', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/angular.jpg'},
    {'id':2, 'name':'Watch SecondArts', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/typescript.png'},
    {'id':3, 'name':'Watch ThirdArds', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/node.js.jpg'},
    {'id':4, 'name':'Watch FourthArts', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/react.js.jpg'},
  ]
}
