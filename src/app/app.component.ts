import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChild('cardRef1', { read: ElementRef})
  card1: CourseCardComponent;

  // @ViewChild('cardRef2')
  // card2: CourseCardComponent;

  @ViewChild('container')
  containerDiv: ElementRef;

  @ViewChild('courseImage')
  courseImage: ElementRef;


  // constructor() {
  //   console.log("containerDiv", this.card1);
  // }

  ngAfterViewInit() {
    console.log("courseImage", this.courseImage)

    // console.log("containerDiv", this.card1);

    // avoid synchronous change to data. you can setup an async action which will not create same error.
    // setTimeout(() => { this.courses[0].description = 'Modified after init'; });
  }

  onCourseSelected(course:Course) {
    console.log(this.card1);
    // console.log(this.card2);
    console.log("containerDiv", this.containerDiv);
  }

}
