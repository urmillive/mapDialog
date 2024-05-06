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

  toggle() {
    this.open = !this.open;
    if (this.open) {
      setTimeout(() => {
        const h1Element = this.dialogH1.nativeElement;
        h1Element.textContent = 'Hello, updated world!';
      });
    }
  }
}
