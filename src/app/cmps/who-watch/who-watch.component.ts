import { Component } from '@angular/core';
import { User } from '../../../app/models/user.model';

@Component({
  selector: 'who-watch',
  templateUrl: './who-watch.component.html',
  styleUrls: ['./who-watch.component.scss']
})

export class WhoWatchComponent {
  users: User[] = [
    {
      id: 'p101',
      name: 'Brian',
      tvShows: ['Familly Guy', 'The Simpsons', 'Southpark'],
    },
    {
      id: 'p102',
      name: 'groovyUser',
      tvShows: ['Survivor', 'The Witcher', 'To Be With Her 4'],
    },
    {
      id: 'p103',
      name: 'Parents',
      tvShows: ['1 vs 100', 'Game of Thrones', 'You'],
    },
    {
      id: 'p104',
      name: 'Walter Jr',
      tvShows: ['1 vs 100', 'Game of Thrones', 'You'],
    },
    {
      id: 'p105',
      name: 'For the Wife',
      tvShows: ['Family Guy', 'Rick and Morty', 'The Good Place'],
    },
  ]

  currUser: User | null=null

 
  onRemoveUser (userId: string)  {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  onAddUser () {
    const user = {
      id: (Date.now() % 1000).toString(),
      name: prompt('please enter name') as string,
      tvShows: ['Family Guy', 'Rick and Morty', 'The Good Place']
    }
    this.users.push(user)
  }

  trackByUserId(index: number, user: User): string {
    return user.id
  }
}
