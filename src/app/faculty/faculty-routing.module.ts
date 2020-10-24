import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DocumentsComponent } from './documents/documents.component';
import { AboutComponent } from '../about/about/about.component';
import { AboutModule } from '../about/about.module';
import { ConventionalModule } from '../conventional/conventional.module';
import { MydutiesModule } from '../myduties/myduties.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { InfrastructureOutletComponent } from '../infrastructure/infrastructure-outlet/infrastructure-outlet.component';
import { ProfileComponent } from '../conventional/profile/profile.component';
import { StudentComponent } from '../hod/student/student.component';
import { HodModule } from '../hod/hod.module';
import { TimetableComponent } from '../conventional/timetable/timetable.component';
import { LibraryComponent } from '../myduties/library/library/library.component';
import { MydutiesNavigationComponent } from '../myduties/myduties-navigation/myduties-navigation.component';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent,
        loadChildren: () => AboutModule
      },
      {
        path: 'infrastructure',
        component: InfrastructureOutletComponent,
        loadChildren: () => InfrastructureModule
      },
      {
        path:'myduties',
        component: MydutiesNavigationComponent,
        loadChildren: () => MydutiesModule
      },
      {
        path : 'attendance',
        component: AttendanceComponent
      },
      {
        path : 'documents',
        component : DocumentsComponent
      },
      
      {
        path : 'profile',
        component : ProfileComponent,
        loadChildren: () => ConventionalModule 
      },
      {
        path : 'complaints',
        loadChildren : '../complaints/complaints.module#ComplaintsModule'
      },
      {
        path : 'timetable', 
        component : TimetableComponent, 
        loadChildren:() => ConventionalModule
      },
      {
        path : 'students',
        component : StudentComponent,
        loadChildren:()  => HodModule
      },
      {
        path: 'notification',
        component : AlertsComponent, 
      }
      
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
