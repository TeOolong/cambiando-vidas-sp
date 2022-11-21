import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  linkDonation() {
    document.location.href = 'https://pagolink.niubiz.com.pe/pagoseguro/ONGCAMBIANDOVIDAS/449285';
  }
}
