import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';

function courseServiceProvider(http:HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: COURSES_SERVICE,
      useFactory: courseServiceProvider,
      deps: [HttpClient]
    }
  ]
})
export class AppComponent implements OnInit {

  courses$ : Observable<Course[]>;

  constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {

  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course:Course) {
    if (course == undefined) return;
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course saved!')
      );
  }

}
