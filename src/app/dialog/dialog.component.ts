import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
