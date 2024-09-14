import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styles: ['img,svg{vertical-align:auto;line-height:1}'],
})
export class SvgIconComponent {
  @Input() iconName: string = '';
  @Input() color: string = 'black';
  @Input() width: string = '16px';
  @Input() height: string = '16px';
}
