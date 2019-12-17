import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    students: StudentService[] = [];
	numbers: number[] = [];

    constructor(private studentservice: StudentService) {


  
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
	
	}
  
    ngOnInit() {
        const studentsObservable = this.studentservice.getStudents();
        studentsObservable.subscribe((studentsData: StudentService[]) => {
            this.students = studentsData;
        });
    }
}
	