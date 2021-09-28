import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<CourseCardComponent>;

  constructor() {}

  ngAfterViewInit() {
    // console.log(this.cards.first);
    this.cards.changes.subscribe((cards) => console.log(cards));
  }

  onCourseSelected(course: Course) {}

  onCoursesEdited() {
    this.courses.push({
      id: 11,
      description: "Angular Architecture Course",
      longDescription:
        "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png",
      category: "BEGINNER",
    });
  }
}
