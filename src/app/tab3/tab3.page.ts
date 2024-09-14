import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  whats() {
    window.open('https://api.whatsapp.com/send?phone=554384835984&text=Olá vim atraves do seu App Gostaria de receber doacoes').focus();
  }

}
