import { Component, OnInit } from "@angular/core";
import { slideInOutAnimation } from "../animations";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],

  // attach the slide in/out animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})
export class HomepageComponent implements OnInit {

  isConnected : boolean = false;
  
  ngOnInit(): void {
  } 

}