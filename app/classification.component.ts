import { Component } from '@angular/core';

@Component({
  selector: 'classification',
  template: `
    <div>
      <nb-classification-banner 
        acmObject="an object coming through"
        canSetLevel="true"
        environment="testing"
        ></nb-classification-banner>
    </div>
  `
})
export class ClassificationComponent {
  
}
