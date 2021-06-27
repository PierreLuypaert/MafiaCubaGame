import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],

})
export class HomepageComponent implements OnInit, AfterViewInit {

  imgs : any[] = [
    { link : "assets/images/news/new1.jpg"},
    { link : "assets/images/news/new2.jpg"},
    { link : "assets/images/news/new2.jpg"},
    { link : "assets/images/news/new1.jpg"},
  ];
  listImgs : any[] = [];
  lastSelectedElement : number = 0;
  autoRadioBtnIndex   : number =  0;
  constructor() { }

  ngOnInit(): void {
  } 
  
  ngAfterViewInit(): void {
    for (let i = 0 ; i < this.imgs.length ; i++)
    {
      this.listImgs.push (document.getElementById("choice"+(i+1)));
    }
    let count = this.listImgs.length;
    setInterval(() => { this.autoChange() }, 8000);
    
  }

  
  autoChange()
  {
    this.autoRadioBtnIndex = ( this.autoRadioBtnIndex >= this.listImgs.length-1 ? 0 : this.autoRadioBtnIndex+1);
    var element = <HTMLInputElement>  document.getElementById( "radio" + this.autoRadioBtnIndex);
    element.checked = true;
    this.change( this.autoRadioBtnIndex);
  }

  change(index : number)
  {
    this.autoRadioBtnIndex = index;
    for (let i = 0 ; i < this.listImgs.length ; i++)
    {
      if (i == index)
        this.listImgs[i].classList.remove("transparent");
      else
        this.listImgs[i].classList.add("transparent");
    }
    this.lastSelectedElement = index;

  }



}
