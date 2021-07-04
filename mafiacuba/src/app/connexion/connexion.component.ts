import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animations';
import { global } from '../../shared/global';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],

  // attach the slide in/out animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})
export class ConnexionComponent implements OnInit {
  sitename: string = global.sitename;
  constructor() { }

  ngOnInit(): void {
  }

}
