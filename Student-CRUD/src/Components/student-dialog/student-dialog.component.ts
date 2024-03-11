// student-dialog.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { AddStudentService } from '../../services/add-student.service';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder,
     private router: Router,
     private dialogRef: MatDialogRef<StudentDialogComponent>,
     private addstudentService: AddStudentService 
      ) {
    this.studentForm = this.fb.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const studentData = this.studentForm.value;

    this.addstudentService.addStudent(studentData).subscribe(
    (addedStudent) => {
      console.log('Student added successfully: ', addedStudent);
    }
    )
    this.dialogRef.close();
    this.router.navigate(['/students']);
  }
}
