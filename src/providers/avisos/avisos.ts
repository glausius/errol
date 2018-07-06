import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class AvisosProvider {

  private api = 'https://stark-stream-15622.herokuapp.com/messages';

  constructor(private storage: Storage, public http: HttpClient, public backgroundMode: BackgroundMode, public db: AngularFireDatabase, private localNotifications: LocalNotifications) {
    console.log("Criou avisos service");
    this.backgroundMode.enable();
    const avisos = db.list('/').valueChanges().subscribe((res: any) => {
      console.log(res);
      this.localNotifications.schedule({
        text: res[res.length - 1],
        data: { secret: 'oi' }
      });
    }
    )
  }


  public insert(key: string, message: Message) {
    return this.storage.set(key, message);
  }

  public update(key: string, message: Message) {
    return this.storage.set(key, message);
  }

  public delete(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {
    let messages: MessageList[] = [];

    return this.storage.forEach((value: Message, key: string, iterationNumber: number) => {
      let msg = new MessageList();
      msg.key = key;
      msg.message = value;
      messages.push(msg);
    })
      .then(() => {
        return Promise.resolve(messages)
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });
  }

  getAvisos() {
    return new Promise(resolve => {
      this.http.get(this.api).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}

export class Message {
  title: string;
  author: string;
  content: string;
  created_at: string;
}

export class MessageList {
  key: string;
  message: Message;
}
