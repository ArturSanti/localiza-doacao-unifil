import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  doarAlimentos(){
    window.open('https://www.google.com/maps/search/doa%C3%A7%C3%A3o+alimentos+londrina/@-23.3198557,-51.170614,14.08z?entry=ttu', '_blank').focus();
  }

  doarRoupas(){
    window.open('https://www.google.com/maps/search/coleta+roupas+londrina/@-23.3100428,-51.1781904,13z/data=!3m1!4b1?entry=ttu', '_blank').focus();
  }

  doarSangue(){
    window.open('https://www.google.com/maps/search/doa%C3%A7%C3%A3o+sangue+londrina/@-23.3258339,-51.1433729,15z?entry=ttu', '_blank').focus();
  }
}
