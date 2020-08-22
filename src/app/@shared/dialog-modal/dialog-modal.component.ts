import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent implements OnInit {
  displayURL = 'https://www.youtube.com/embed/AFmJ8jVRsgo';
  safeUrl: any;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.displayURL);
  }
}
