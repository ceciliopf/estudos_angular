import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-message',
  imports: [CommonModule, MessageModule],
  template: `
    <p-message *ngIf="temErro()" severity="error" variant="simple" size="small" [text]="text"></p-message>
  `,
  styles: []
})
export class MessageComponent {

  @Input() control: any;
  @Input() error: string = '';
  @Input() text: string = '';

  temErro(): boolean {
    return this.control ? this.control.hasError(this.error) && this.control.touched : false;
  }

}
