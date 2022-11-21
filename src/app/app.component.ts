import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workspace-proyect-management';
  
}

export default function linkDonation() {
  document.location.href = 'https://pagolink.niubiz.com.pe/pagoseguro/ONGCAMBIANDOVIDAS/449285';
}
