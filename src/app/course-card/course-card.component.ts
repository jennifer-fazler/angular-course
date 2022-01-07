import {
    AfterContentInit,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    Self,
    SimpleChanges,
    SkipSelf,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges {

    @Input()
    course: Course;

    // @Input()
    // type: string;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string,
                private cd: ChangeDetectorRef) {

                  console.log("constructor", this.course);


    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges", changes);
    }

    ngOnInit() {
      console.log("ngOnInit", this.course);
    }

    ngOnDestroy(): void {
      console.log("ngOnDestroy");

    }

    onTitleChanged(newTitle:string) {
      this.course.description = newTitle;
    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
