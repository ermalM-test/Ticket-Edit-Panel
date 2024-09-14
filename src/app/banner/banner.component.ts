import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <div class="banner">
      <svg-icon iconName="icon-logicpilot"></svg-icon>
      <p>{{ text }}</p>
    </div>
  `,
  styles: [
    `
      .banner {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        margin: 4px 0;
        border-radius: 6px;
        background: rgb(245, 247, 255);
        background: rgb(242, 244, 255);

        background: linear-gradient(
          100deg,
          rgba(242, 244, 255, 1) 0%,
          rgba(255, 240, 253, 1) 100%
        );
        * {
          line-height: 1;
        }
        p {
          margin: 0;
          font-size: 14px;
          color: #687196;
        }
      }
    `,
  ],
})
export class BannerComponent {
  @Input() text: string = '';
}
