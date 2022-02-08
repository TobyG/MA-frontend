import { Component, OnInit } from "@angular/core";
import { SnackService } from "src/app/services/snack.service";
import { UploadService } from "src/app/services/upload.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: string = "below";

  colorScheme = {
    domain: ["#005293", "#64A0C8", "#A2AD00", "#E37222"],
  };

  constructor(
    public uploadService: UploadService,
    private snackService: SnackService
  ) {}

  ngOnInit(): void {}

  onRefresh(): void {
    this.uploadService.clearData();
    this.snackService.openSnackBar("restarted app", "ok");
  }

  onExport(): void {
    this.uploadService.downloadCSV();
    this.snackService.openSnackBar("exported CSV", "ok");
  }
}
