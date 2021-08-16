import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.isButtonDisable = true;
    }, 99000);
    this.isButtonDisable = false;
  }

  ngOnInit(): void {
  }


  txt: String = 'string interoperability binding ';
  inbinding: String = 'achieving interoperability binding by using property binding';

  insidefn: String = "button is not clicked";

  isButtonDisable = false;//property bindings


  onload() {
    // const xmlhttp = new XMLHttpRequest();
    // const myobj = JSON.parse(this.responseText);
    // console.log(myobj.model);
    // xmlhttp.open("GET","./SrvFiles/connect.php",true);
    // xmlhttp.send();

    this.insidefn = "button is clicked";
  }

  dummy: String = "dummy for text box";

  whileWrite(event: any) {
    this.dummy = (<HTMLInputElement>event.target).value;
  }

}
