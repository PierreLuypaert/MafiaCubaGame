import { Component, OnInit } from '@angular/core';

export class user {
  username : string
  rank: number
  icon : string
}

const FRIENDS : user[] = [
  {
    username : "Destroyars",
    rank     : 1,
    icon     : "user.png"
  },
  {
    username : "Sneawy",
    rank     : 4,
    icon     : "user.png"
  },
  {
    username : "ENA",
    rank     : 2,
    icon     : "user.png"
  },
  {
    username : "GdzlNoire",
    rank     : 3,
    icon     : "user.png"
  }
]

const GLOBAL : user[] = [
  {
    username : "BARFauy",
    rank     : 1,
    icon     : "user.png"
  },
  {
    username : "KAYLyidude",
    rank     : 4,
    icon     : "user.png"
  },
  {
    username : "BARGOTA",
    rank     : 2,
    icon     : "user.png"
  },
  {
    username : "PIGroty",
    rank     : 3,
    icon     : "user.png"
  }
]
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {

  friends       = FRIENDS;
  global        = GLOBAL;
  selected_sort = [];
  selected_user : user = null

  constructor() {
    this.selected_sort = this.friends
    this.selected_user = this.friends[0]
  }

  ngOnInit(): void {
    this.friends = this.friends.sort ( (a,b) => a.rank - b.rank);
    this.global  = this.global.sort ( (a,b) => a.rank - b.rank);
  }

  /**
   * affichage des informations en fonction du classement ou du profil sélectionné
   */
  showGlobal()              { this.selected_sort = this.global }
  showFriends()             { this.selected_sort = this.friends }
  showUser( index : number ){ this.selected_user = this.selected_sort[index]; }

  /**
   * Accesseurs , récupération des infos du joueur sélectionné
   */
  get username() { return this.selected_user.username }
  get rank()     { return this.selected_user.rank }
  get icon()     { return this.selected_user.icon }

}
