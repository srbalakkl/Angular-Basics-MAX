import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: './helloWorld.html'
})
export class helloWorld {
    message = 'I\'m read only!';
    canEdit = false;

    onEditClick() {
        this.canEdit = !this.canEdit;
        // this.canEdit = !true;
        if (this.canEdit) {
            this.message = 'You can edit me!';
        } else {
            this.message = 'I\'m read only!';
        }
    }
}
