import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

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
  styleUrls: ['./tokens-carousel.component.scss'],
})
export class TokensCarouselComponent implements OnInit {

  tokens : token[] = []
  selectedToken : number = 0
  transitionEffect : boolean = true;

  titleVisible : boolean = false;
  

  constructor() {

   }

  ngOnInit(): void {
    this.tokens = this.tokens.concat(TOKENS,TOKENS,TOKENS,TOKENS,TOKENS,TOKENS,TOKENS,TOKENS,TOKENS)
    this.selectedToken = Math.round(this.tokens.length/2)
  }


  /**
   * Gestion des actions pourfaire dérouler le carousel ou sélectionner un jeton particulier,
   */
  slideToRight(){
    if ( this.selectedToken - Math.round(this.tokens.length/2) > 4){
      this.transitionEffect = false
      this.selectedToken =  Math.round(this.tokens.length/2)
    }
    else{
      this.transitionEffect = true
      this.selectedToken ++;
    }
    
  }

  slideToLeft(){
    if (  Math.round(this.tokens.length/2) - this.selectedToken > 4 ){
      this.transitionEffect = false
      this.selectedToken =  Math.round(this.tokens.length/2)
    }
    else{
      this.transitionEffect = true
      this.selectedToken --;
    }
      
  }

  selectToken( index : number ){
    this.transitionEffect = true
    this.selectedToken = index
  }

  /** 
   * Liste des accesseurs , gestions des animations , des textes et de la position des éléments en fonction du jeton sélectionné 
   */

  get role_name() : String { return this.tokens[this.selectedToken].name }
  get role_desc() : String { return this.tokens[this.selectedToken].desc }
  get transition_active() : boolean { return this.transitionEffect }

  getTransform( index : number ){

    var transform = "transform :"

    if ( index == this.selectedToken )
      transform += " translate(-50%, -50%)"

    if ( index < this.selectedToken ) {
      transform += " translate(calc(-38vh - 50% - (16vh + 40px) *" + (this.selectedToken-index-1) + "),-50%)"
    }

    if ( index > this.selectedToken ) {
      transform +=  " translate(calc(38vh - 50% + (16vh + 40px) *" + (index-this.selectedToken-1) + "),-50%)"
    }
    
    return transform
  }

  getScale( index : number){
    return index == this.selectedToken ? "transform : scale(2.2);" : "transform : scale(1);"
  }

  /**
   * 
   */

  onTitleVisible(){
    this.titleVisible = true
  }
}
