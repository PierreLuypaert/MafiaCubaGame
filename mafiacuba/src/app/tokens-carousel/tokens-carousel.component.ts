import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

const TOKENS = [
  "driver-token.png",
  "fbi-token.png",
  "loyal-token.png",
  "driver-token.png",
  "fbi-token.png",
  "loyal-token.png",
  "driver-token.png",
  "fbi-token.png",
  "loyal-token.png",
  "driver-token.png",
  "fbi-token.png",
  "loyal-token.png",
  "driver-token.png",
  "fbi-token.png",
  "loyal-token.png",
  "driver-token.png",
  "fbi-token.png",
  "loyal-token.png"
];

@Component({
  selector: 'app-tokens-carousel',
  templateUrl: './tokens-carousel.component.html',
  styleUrls: ['./tokens-carousel.component.css']
})
export class TokensCarouselComponent implements OnInit {

  tokens = TOKENS

  constructor() { }

  ngOnInit(): void {
  }


  getTransform( index : number ){

    var transform = "transform :"
    var half = this.tokens.length/2

    if ( index == half )
      transform += " translate(-50%, -50%) scale(1.6); "

    if ( index < half ) {
      transform += " translate(calc(-38vh - 50% - (16vh + 20px) *" + (half-index-1) + "),-50%) scale(0.8)"
    }

    if ( index > half ) {
      transform +=  " translate(calc(38vh - 50% + (16vh + 20px) *" + (index-half-1) + "),-50%) scale(0.8)"
    }
    
    return transform
  }
}
