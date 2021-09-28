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

  // @ViewChildren(CourseCardComponent, {read: ElementRef})
  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.cards.first);
    this.cards.changes.subscribe((cards) => console.log(cards));
  }

  onCourseSelected(course: Course) {}
}
