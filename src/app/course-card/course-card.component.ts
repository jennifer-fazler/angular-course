import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  @Input()
  cardIndex:number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component - button clicked ...");
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    // There is only one so can return string instead of array.
    if (this.course.category == "BEGINNER") {
      return 'beginner';
    }

    // Other options:
    // if (this.course.category == "BEGINNER") {
    //   return ['beginner'];
    // }
    // return {
    //   'beginner': this.course.category == "BEGINNER"
    // }
  }

}
