import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  imgs : any[] = [
    { link : "assets/images/news/new1.jpg"},
    { link : "assets/images/news/new2.jpg"},
    { link : "assets/images/news/new2.jpg"},
    { link : "assets/images/news/new1.jpg"},
  ];
  selectedElement : number = 0;
  autoRadioBtnIndex : number = 0;
  constructor() { }

  ngOnInit(): void {
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