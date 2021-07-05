import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOnTop = true;
  isConnected : boolean = false;

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

  connect(){
    this.isConnected = true
  }

  disconnect(){
    this.isConnected = false
  }
}
