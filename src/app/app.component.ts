import { Component } from '@angular/core';
import {View , EventSettingsModel, Month} from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-root',
  template:`<ejs-schedule height="850" width="1250"  [eventSettings]="eventObject" [selectedDate]="setDate" [currentView]="setView" ></ejs-schedule>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cacal';
  public setView: View='Month';
  public setDate:Date= new Date (2024,1,4);
  public eventObject:EventSettingsModel={
  dataSource :[{
    StartTime : new Date(2024,0,17,4,0),
    EndTime : new Date(2024,0,17,6,0)
 }] 
 }
}
