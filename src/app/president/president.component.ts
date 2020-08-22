import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.scss'],
})
export class PresidentComponent implements OnInit {
  constructor(private _sanitizer: DomSanitizer) {}

  displayURL = 'https://www.youtube.com/embed/i1Z7P8S4Omg';
  safeUrl: any;

  ngOnInit() {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.displayURL);
  }
}
