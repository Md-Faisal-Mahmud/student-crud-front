import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../Components/student/student.component';
import { StudentDialogComponent } from '../Components/student-dialog/student-dialog.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'add-student', component: StudentDialogComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
