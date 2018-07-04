import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AvisosProvider, Message, MessageList } from '../../providers/avisos/avisos';
import { DetalhesViewPage } from '../detalhes-view/detalhes-view';
import { ActionSheetController } from 'ionic-angular';
import { DatePipe } from '../../pipes/date/date';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html'
})
export class AvisosPage {
	messages: MessageList[];
	model: Message;
	key: string;	

  constructor(public navParams: NavParams, public navCtrl: NavController, private avisosProvider: AvisosProvider, public actionSheetCtrl: ActionSheetController, private sharing: SocialSharing) {
		
		if(this.navParams.data.message && this.navParams.data.key) {
			this.model = this.navParams.data.message;
			this.key = this.navParams.data.key;
		} else {
			this.model = new Message();
		}
		this.getMenssagens();
		
		
  }

  whatsappshare(whatsappmsg) {
   
    this.sharing.share(whatsappmsg.content , null, null)
      .then(() => {
		    console.log('compartilhando');
      }).catch((error) => {
        console.log(error);
      });
  }

	ionViewDidEnter() {
		this.avisosProvider.getAll()
			.then((resp) => {
				console.log('ionViewDidEnter resp: ' + resp);
				this.messages = resp;
			});
	}

	private insertMessage = () => {
		return this.avisosProvider.insert(this.key, this.model)
	}

	
	private _store = (message) => {
		message.forEach(item => {
			let msg = new Message();
			msg.title = item.title;
			msg.content = item.content;
			msg.author = item.author;
			msg.created_at = item.created_at;
			this.model = msg;
			this.key = item.id;
			this.insertMessage()
				.then(() => {
					console.log('Mensagens salvas');
				})
				.catch((err) => {
					console.log('Erro ao armazenar dados: ' + err);
				})
		});
	}
	
	

 	getMenssagens() {
		console.log('Pegando mensagens');
    this.avisosProvider.getAvisos()
    .then(data => {
			console.info('Persistindo mensagens')
			console.info(data)
		  this._store(data);
		})
		.catch((err) => {
			console.error('Erro ao recuperar mensagens: ' + err);
		});
  }
  
  
  
  public openDetalhes(item){

		this.navCtrl.push('DetalhesViewPage', 
		{
			item: item
		});  
	}
	
	 presentActionSheet(item) {
   let actionSheet = this.actionSheetCtrl.create({
   
     buttons: [
		{
         text: 'Compartilhar',
		     icon: "md-share",
         role: 'Compartilhar',
         handler: () => {
           
           this.whatsappshare(item);
         }
       },
       {
         text: 'Importante',
		 icon: "ios-star-outline",
         role: 'destructive',
         handler: () => {
           
         }
       },
       {
         text: 'Deletar',
		 icon: 'ios-trash-outline',
         handler: () => {
           console.log('deletando');
         }
       },
       {
         text: 'Cancel',
		 icon: 'ios-close-outline',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
	actionSheet.present();

	 }
}
