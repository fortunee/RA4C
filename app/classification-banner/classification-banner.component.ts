import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nb-classification-banner',
    templateUrl: 'app/classification-banner/classification-banner.template.html',
    styleUrls: ['app/classification-banner/classification-banner.component.css']
})
export class ClassificationBannerComponent implements OnChanges {

    public pageTitle: string = 'Classifiction Banner Component';
    @Input() acmObject: any;
    @Input() canSetLevel: boolean;
    @Input() environment: string = 'dev'; // Set dev by default
    @Output() onLevelChanged: EventEmitter<string> = new EventEmitter<string>();
    @Input() position: string;
    backgroundColor: string = 'black';

    constructor() {
        
    }

    ngOnChanges(): void {
        if(this.acmObject.classif === 'U') {
            this.backgroundColor = 'green';
        } else if (this.acmObject.classif === 'TS') {
            this.backgroundColor = 'yellow';
        }
    }

    onClick(): void {
        // Something needs to happen
        this.onLevelChanged.emit(`This is gonna emit this value ${this.acmObject.version} to the parent component`);
    }
}
