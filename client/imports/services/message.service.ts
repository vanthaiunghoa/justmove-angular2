import {Meteor} from 'meteor/meteor';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {MessageCollection} from '../../../both/collections/message.collection';
import {Message} from '../models/message.model';

@Injectable()
export class MessageService{
  getMessages(){}
  sendMessages(){}
}
