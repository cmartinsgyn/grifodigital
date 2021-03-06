import { Component } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sysoscli';

  constructor(
    private toastyConfig: ToastyConfig) {
      this.toastyConfig.theme = 'bootstrap';
      this.toastyConfig.position = 'top-right';
    }

}
