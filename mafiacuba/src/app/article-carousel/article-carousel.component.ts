import { AfterViewInit, Component, OnInit } from '@angular/core';

const IMAGES : any[] = [
  { link : "new1.jpg"},
  { link : "new2.jpg"},
  { link : "new2.jpg"},
  { link : "new1.jpg"},
]

@Component({
  selector: 'app-article-carousel',
  templateUrl: './article-carousel.component.html',
  styleUrls: ['./article-carousel.component.scss']
})
export class ArticleCarouselComponent implements OnInit, AfterViewInit {


  imgs = IMAGES

  selectedElement : number = 0;
  autoRadioBtnIndex : number = 0;

  constructor() { }

  ngOnInit(): void {
    this.imgs = IMAGES
  }

  ngAfterViewInit(): void {
    // scrolling automatique des articles
    setInterval(() => { this.autoChange() }, 8000);
  }

  autoChange() {
    this.autoRadioBtnIndex = ( this.autoRadioBtnIndex >= this.imgs.length-1 ? 0 : this.autoRadioBtnIndex+1);
    this.change( this.autoRadioBtnIndex);
  }

  change(index : number) {
    this.selectedElement = index;
  }

}
