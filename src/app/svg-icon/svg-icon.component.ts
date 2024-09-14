import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'svg-icon',
  template:
    '<div [innerHTML]="sanitizedSvg" class="svg-icon-container" [style.width]="width" [style.height]="height"></div>',
  styles: [
    '.svg-icon-container{display:flex;align-items:center;justify-content:center} ',
  ],
})
export class SvgIconComponent {
  @Input() iconName: string = '';
  @Input() color: string = '#000';
  @Input() defaultColor: string = '#687196';
  @Input() width: string = '16px';
  @Input() height: string = '16px';

  sanitizedSvg!: SafeHtml;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit() {
    this.loadSvg();
  }

  loadSvg() {
    const iconUrl = `assets/icons/${this.iconName}.svg`;

    firstValueFrom(this.http.get(iconUrl, { responseType: 'text' }))
      .then((svg) => {
        const coloredSvg = svg.replace(
          '<svg',
          `<svg width: ${this.width}; height: ${this.height};"`
        );
        this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(coloredSvg);
      })
      .catch((err) => {
        console.error('Error loading SVG:', err);
      });
  }
}
