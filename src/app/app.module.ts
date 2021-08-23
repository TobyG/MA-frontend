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
import { FlexLayoutModule } from '@angular/flex-layout';
import { TileComponent } from './components/tile/tile.component';
import { ImageTileComponent } from './components/image-tile/image-tile.component';
import { MatTabsModule} from '@angular/material/tabs';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';

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
    //Fontawesome Icons?
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
