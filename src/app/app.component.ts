import {Component} from '@angular/core';
import {MessagesProviderService} from './messages-provider.service';
import {Observable} from 'rxjs/Observable';
import {Message} from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessagesProviderService]
})
export class AppComponent {
  public messages: Observable<Array<Message>> = null;

  constructor(private dataService: MessagesProviderService) {
    this.messages = this.dataService.getStream();
  }
}
