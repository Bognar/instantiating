import { Component } from '@angular/core';
import { ljudi } from '../app/test.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'perica';
 name2:string;
 lastname2:string;

}
let k = new ljudi("josip","bognar");
