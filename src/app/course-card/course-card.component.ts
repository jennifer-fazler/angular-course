import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course:Course;

  @Input()
  cardIndex:number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  // @ContentChild('container')  -- this will not work. scope is restricted to content part of the component

  // @ContentChild('courseImage')
  // image;

  // @ContentChild(CourseImageComponent)
  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>;

  constructor() { }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {
    console.log(this.images);

  }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    // console.log("card component - button clicked ...");
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

  cardStyles() {
    return {
      'font-style': (this.course.description.charAt(0) == "A") ? 'italic' : 'inherit',
      'color': (this.course.description.charAt(0) == "R") ? 'green' : 'inherit'
    };
  }

}
