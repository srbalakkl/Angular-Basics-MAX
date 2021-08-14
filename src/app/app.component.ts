import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Max';
  txt :String = 'ts text';

  isButtonDisable = false;//property bindings

  constructor() {
    setTimeout(() => {
      this.isButtonDisable = true;
    }, 3000);
    this.isButtonDisable = false;
  }

  onload() {
    // const xmlhttp = new XMLHttpRequest();
    // const myobj = JSON.parse(this.responseText);
    // console.log(myobj.model);
    // xmlhttp.open("GET","./SrvFiles/connect.php",true);
    // xmlhttp.send();

  }
}
