import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// declare const FEATURE_FLAG: string
import * as monaco from 'monaco-editor';
import "../styles.css";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  // featureFlag = "";
  constructor() {
    // this.featureFlag = FEATURE_FLAG;
    // console.log("Feature Flag: ", this.featureFlag);
    const container = document.getElementById('container');
    if (container) {
      monaco.editor.create(container, {
        value: 'console.log("Hello, world")',
        language: 'javascript'
      });
    }
  }
}
