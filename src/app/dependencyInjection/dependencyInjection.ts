import {Component} from "@angular/core";
import {logger} from "./logger";

@Component({
    selector:'dependencyInjection',
    templateUrl:'dependencyInjection.html'
})
export class dependencyInjection{
    count : number = 0;

    constructor(private log:logger) {
    }


    ocmtd(){
        console.log("yeah");
        this.log.writeCount(this.count);
        this.count++;
    }
}
