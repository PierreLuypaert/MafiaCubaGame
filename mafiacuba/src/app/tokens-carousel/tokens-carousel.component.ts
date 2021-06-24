import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

interface token {
    link : String
    name : String
    desc : String 
}

const TOKENS : token[] = [
  { link : "driver-token.png", name : "Conducteur", desc : "Le conducteur soutien le joueur à sa droite"},
  { link : "fbi-token.png",    name : "FBI"       , desc : "Le FBI doit se faire tuer par le parrain"},
  { link : "loyal-token.png",  name : "Fidèle"    , desc : "Le fidèle doit aider le parrain à gagner"}

];

@Component({
  selector: 'app-tokens-carousel',
  templateUrl: './tokens-carousel.component.html',
  styleUrls: ['./tokens-carousel.component.scss']
})
export class TokensCarouselComponent implements OnInit {

  tokens : token[] = []
  selectedToken : number = 0
  

  constructor() { }

  ngOnInit(): void {
    this.tokens = this.tokens.concat(TOKENS,TOKENS,TOKENS,TOKENS,TOKENS,TOKENS,TOKENS,TOKENS,TOKENS)
    this.selectedToken = Math.round(this.tokens.length/2)
  }

  getTransform( index : number ){

    var transform = "transform :"

    if ( index == this.selectedToken )
      transform += " translate(-50%, -50%) scale(2.2); "

    if ( index < this.selectedToken ) {
      transform += " translate(calc(-38vh - 50% - (16vh + 40px) *" + (this.selectedToken-index-1) + "),-50%) scale(1)"
    }

    if ( index > this.selectedToken ) {
      transform +=  " translate(calc(38vh - 50% + (16vh + 40px) *" + (index-this.selectedToken-1) + "),-50%) scale(1)"
    }
    
    return transform
  }

  slideToRight(){
    if ( this.selectedToken - Math.round(this.tokens.length/2) > 4)
      this.selectedToken =  Math.round(this.tokens.length/2)
    else
      this.selectedToken ++;
  }

  slideToLeft(){
    if (  Math.round(this.tokens.length/2) - this.selectedToken > 4 )
      this.selectedToken =  Math.round(this.tokens.length/2)
    else
      this.selectedToken --;
  }

  selectToken( index : number ){
    this.selectedToken = index
  }

  get role_name() : String { return this.tokens[this.selectedToken].name }
  get role_desc() : String { return this.tokens[this.selectedToken].desc }
}
