import { Component, OnInit } from '@angular/core';
import { JsonToCSVService } from 'src/app/API_Service/json-to-csv.service';
import { StudentService } from 'src/app/API_Service/student.service';
import { SemesterSubjectsService } from './../../API_Service/SemesterSubjectsService';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  courses: any[];
  assignments:any[];
  constructor(private semSubjects: SemesterSubjectsService,private studentService: StudentService,private jsonToCSV: JsonToCSVService) { }
  showCourse :any={};
  ngOnInit() {
    
    // this.subjects = this.semSubjects.getSubjectList();
    this.studentService.getAllCourses().subscribe(data=>{
      this.courses=data;
      this.studentService.getAssignments(this.courses[0].courseId).subscribe(data=>{
        // console.log(data);
        this.showCourse.name=this.courses[0].courseName
      this.showCourse.code=this.courses[0].courseCode
        this.assignments=data;
      })
    })
  }
  getAssignments(courseId){
    this.showCourse={};
    this.showCourse.name=this.courses[courseId].courseName
    this.showCourse.code=this.courses[courseId].courseCode
    courseId=this.courses[courseId].courseId;
    this.studentService.getAssignments(courseId).subscribe(data=>{
      console.log(data);
      this.assignments=data;
    })
  }
  getCSV(){
   
    this.jsonToCSV.downloadFile(this.assignments,`${this.showCourse.name}_${this.assignments}`,["courseCode","courseName","assignmentName","submitted","gradeObtained","gradeMaximum","dateOfCreation","dueDate","dateOfSubmission"])
  }
}
