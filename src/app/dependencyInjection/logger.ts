import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class logger {
    writeCount(count:number){
        console.warn(count);
    }
}


