import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from './config';
import { CoursesService } from './courses/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // courses$:Observable<Course[]>;

  courses: Course[] = COURSES;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) {
      // console.log("constructor");

  }

  ngOnInit() {
    // console.log("ngOnInit");

    // this.courses$ = this.coursesService.loadCourses();
    // this.coursesService.loadCourses()
    //   .subscribe(courses => {
    //     this.courses = courses;
    //   });

  }

  onEditCourse() {
    // this.courses[0].description = 'ngOnChanges';
    // this.courses = [undefined];

    const course = this.courses[0];
    const newCourse:any = {
      ...course,
      description: 'ngOnChanges',
      cardIndex: 1
    };
    // this.courses[0].description = "new value!"; // does not work with OnPush change detection
    this.courses[0] = newCourse;
  }

  save(course:Course) {
    if (course == undefined) return;
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course saved!')
      );
  }

}
