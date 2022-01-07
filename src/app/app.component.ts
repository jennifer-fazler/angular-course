import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {

  // courses$:Observable<Course[]>;

  courses: Course[];

  loaded = false;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef) {

  }

  ngDoCheck(): void {
    console.log("ngDoCheck");

    if (this.loaded) {
      this.cd.markForCheck();
      console.log("called cd.markForCheck");
      this.loaded = undefined;
    }



  }

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();
    this.coursesService.loadCourses()
      .subscribe(courses => {
        this.courses = courses;
        // this.cd.markForCheck();
        this.loaded = true;

      });

  }

  onEditCourse() {

    // const course = this.courses[0];
    // const newCourse:any = {...course};
    // newCourse.description = 'new value!';
    // // this.courses[0].description = "new value!"; // does not work with OnPush change detection
    // this.courses[0] = newCourse;
  }

  save(course:Course) {
    if (course == undefined) return;
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course saved!')
      );
  }

}
