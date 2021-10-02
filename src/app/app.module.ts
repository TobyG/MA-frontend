import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropFileUploadDirective } from "./directives/file-drop.directive";
import { UploadComponent } from "./components/upload/upload.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { FileSizePipe } from "./pipes/file-size.pipe";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TileComponent } from "./components/tile/tile.component";
import { ImageTileComponent } from "./components/image-tile/image-tile.component";
import { MatTabsModule } from "@angular/material/tabs";
import { ChartContainerComponent } from "./components/chart-container/chart-container.component";
import { ImgViewerComponent } from "./components/img-viewer/img-viewer.component";
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DragDropFileUploadDirective,
    UploadComponent,
    FileSizePipe,
    TileComponent,
    ImageTileComponent,
    ChartContainerComponent,
    ImgViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    //Fontawesome Icons?
    FlexLayoutModule,
    HttpClientModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
