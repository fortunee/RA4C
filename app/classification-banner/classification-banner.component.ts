import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nb-classification-banner',
    templateUrl: 'app/classification-banner/classification-banner.template.html',
    styleUrls: ['app/classification-banner/classification-banner.component.css']
})
export class ClassificationBannerComponent {

    public pageTitle: string = 'Classifiction Banner Component';
    @Input() acmObject: any;
    @Input() canSetLevel: boolean;
    @Input() environment: string = 'dev'; // Set dev by default

    constructor() {
        
    }

    onLevelChanged(): void {
        // Something needs to happen
        console.log(this.acmObject);
        console.log(this.canSetLevel);
        console.log(this.environment);
    }

    
}
