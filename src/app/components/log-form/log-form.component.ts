import { Component, OnInit } from "@angular/core";

import { Log } from "../../models/Log";
import { LogService } from "src/app/services/log.service";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.scss"],
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    //Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe((log) => {
      // console.log(log);
      if (log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }
  onSubmit() {
    console.log(123);
  }
}
