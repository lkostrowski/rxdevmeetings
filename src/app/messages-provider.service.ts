import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Message} from './message';

@Injectable()
export class MessagesProviderService {

  public items: Observable<Array<Message>>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('messages').valueChanges();
  }

  getStream() {
    return this.items;
  }

}
