import { Component, OnInit } from '@angular/core';

export class user {
  username : string
  rank: number
  icon : string
}

const USERS : user[] = [
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
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {

  users = USERS;

  constructor() {

  }

  ngOnInit(): void {
    this.users = this.users.sort ( (a,b) => a.rank - b.rank);
  }

}
