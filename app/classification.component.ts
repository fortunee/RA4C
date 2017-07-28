import { Component } from '@angular/core';

@Component({
  selector: 'classification',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <div>My First Component</div>
  </div>
  `
})
export class ClassificationComponent {
  pageTitle: string = `Classification Component`;
}
