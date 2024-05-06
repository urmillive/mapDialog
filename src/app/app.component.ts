import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'access-element';
  open = false;
  @ViewChild(DialogComponent) dialogComponent!: DialogComponent;
  @ViewChild('dialogH1') dialogH1!: ElementRef;
  constructor(private elementRef: ElementRef) {}
  toggle() {
    this.open = !this.open;
    if (this.open) {
      setTimeout(() => {
        const h1Element =
          this.elementRef.nativeElement.querySelector('#helloWorld');
        h1Element.textContent = 'Hello, updated world!';
      }, 1000);
    }
  }
}
