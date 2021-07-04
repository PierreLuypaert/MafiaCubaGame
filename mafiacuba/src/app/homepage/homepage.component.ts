import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animations';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  

    // make slide in/out animation available to this component
    animations: [slideInOutAnimation],

    // attach the slide in/out animation to the host (root) element of this component
    host: { '[@slideInOutAnimation]': '' }
})
export class HomepageComponent implements OnInit, AfterViewInit {

  
  imgs : any[] = [
    { link : "assets/images/news/new1.jpg"},
    { link : "assets/images/news/new2.jpg"},
    { link : "assets/images/news/new2.jpg"},
    { link : "assets/images/news/new1.jpg"},
  ];

  isOnTop = true;
  selectedElement : number = 0;
  autoRadioBtnIndex : number = 0;

  constructor(    
    private scrollDispatcher: ScrollDispatcher,
    private zone: NgZone
    ) { }

  ngOnInit(): void {
    this.scrollDispatcher.scrolled().subscribe((event: CdkScrollable) => {
      const scroll = event.measureScrollOffset("top");
      let newIsOnTop = this.isOnTop;

      if (scroll > 80) {
        newIsOnTop = false
      } else {
        newIsOnTop = true;
      }

      if (newIsOnTop !== this.isOnTop) {
        this.zone.run(() => {
          this.isOnTop = newIsOnTop;
        });
      }
    });
  } 
  
  ngAfterViewInit(): void {
  //  setInterval(() => { this.autoChange() }, 8000);
  }

  
  autoChange()
  {
    this.autoRadioBtnIndex = ( this.autoRadioBtnIndex >= this.imgs.length-1 ? 0 : this.autoRadioBtnIndex+1);
    this.change( this.autoRadioBtnIndex);
  }

  change(index : number)
  {
    this.selectedElement = index;
  }
}