import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  readonly days = 30;
  
  selectedDay = 0;

  onDaySelect(day: number) {
    this.selectedDay = day;
  }
}
