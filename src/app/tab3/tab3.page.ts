import { Component } from '@angular/core';
import { IAtores } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

// eslint-disable-next-line @typescript-eslint/member-ordering
listaAtores: IAtores[] = [
{
  nome:'isabel',
  foto:'https://www.themoviedb.org/t/p/original/zhxpFlwq7osONLo8LhKKjZiNsd0.jpg',
  idade: 28,
  filmes:['A Vida em Si como Shari Dickstein'],
  series:[''],
  favorito: false
},
{
  nome:'isabel',
  foto:'https://www.themoviedb.org/t/p/original/zhxpFlwq7osONLo8LhKKjZiNsd0.jpg',
  idade: 28,
  filmes:['A Vida em Si como Shari Dickstein'],
  series:[''],
  favorito: false
},
{
  nome:'isabel',
  foto:'https://www.themoviedb.org/t/p/original/zhxpFlwq7osONLo8LhKKjZiNsd0.jpg',
  idade: 28,
  filmes:['A Vida em Si como Shari Dickstein'],
  series:[''],
  favorito: false
},
{
  nome:'isabel',
  foto:'https://www.themoviedb.org/t/p/original/zhxpFlwq7osONLo8LhKKjZiNsd0.jpg',
  idade: 28,
  filmes:['A Vida em Si como Shari Dickstein'],
  series:[''],
  favorito: false
},
{
  nome:'isabel',
  foto:'https://www.themoviedb.org/t/p/original/zhxpFlwq7osONLo8LhKKjZiNsd0.jpg',
  idade: 28,
  filmes:['A Vida em Si como Shari Dickstein'],
  series:[''],
  favorito: false
}
];
exibirFilme(filme: IAtores){
const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
this.router.navigate(['filme-detalhe'],navigationExtras);
}

async exibirAlertaFavorito(filme: IAtores) {
const alert = await this.alertController.create({

header: 'Meus Favoritos',
message: 'Deseja realmente favoritar o filme?',
buttons: [
{
text: 'Não',
role: 'cancel',
handler: () => {
filme.favorito=false;
}
}, {
text: 'Sim, favoritar.',
handler: () => {
filme.favorito=true;
this.apresentarToast();
}
}
]
});
await alert.present();
}

async apresentarToast() {
const toast = await this.toastController.create({
message: 'Filme adicionado aos favoritos...',
duration: 2000,
color: 'success',
position: 'top'
});
toast.present();
}
}

