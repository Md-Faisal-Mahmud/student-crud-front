import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = [ 'image', 'name', 'age',  'fatherName', 'motherName'  ];

  constructor(private studentService: StudentService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
      console.log(this.students);
    });
  }

  openAddStudentDialog(): void {
    this.dialog.open(StudentDialogComponent, {
      width: '400px',
    });
  }
}