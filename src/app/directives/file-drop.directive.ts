import {
  Directive,
  EventEmitter,
  Output,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[fileDrop]",
})
export class DragDropFileUploadDirective {
  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() {}

  @HostListener("drop", ["$event"])
  onDrop($event: any) {
    // $event object is DragEvent and consists of dataTransfer, target, etc.
    $event.preventDefault();
    let transfer = $event.dataTransfer;
    this.dropped.emit(transfer.files);
    this.hovered.emit(false);
  }

  @HostListener("dragover", ["$event"])
  onDragOver($event: any) {
    //event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener("dragleave", ["$event"])
  onDragLeave($event: any) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
