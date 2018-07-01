import { Component } from '@angular/core';

@Component({
  selector: 'app-root',/**This is the name to be used*/
  templateUrl: './app.component.html', /**This is the components template*/
  styleUrls: ['./app.component.scss']/**This is the style for this template*/
})
export class AppComponent {
    /**This is the logic part*/
  title = 'app';
}
