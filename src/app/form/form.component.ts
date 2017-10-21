import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessagesProviderService} from "../messages-provider.service";
import {Observable} from "rxjs/Observable";
import {Message} from "../message";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessagesProviderService]
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  private messagesStream: Observable<Array<Message>>;

  constructor (private formBuilder: FormBuilder, private messagesService: MessagesProviderService) {
    this.form = formBuilder.group({
      user: ['', Validators.required],
      content: ['', Validators.required],
    });

    this.messagesStream = this.messagesService.getStream();

  }

  ngOnInit() {
  }

  submitMessage(e) {
    console.log(e)
    e.preventDefault();

    this.messagesStream.next({
      user: 'dupa',
      timestamp: 123123121,
      content: 'asdasdas'
    });
  }

}
