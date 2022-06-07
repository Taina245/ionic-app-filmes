import { Component } from '@angular/core';
import { ISeries } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

// eslint-disable-next-line @typescript-eslint/member-ordering
listaSeries: ISeries[] = [
{
nome: 'Criando Dion (202)',
lancamento: '15/04/2021',
duracao: '1h50m',
classificacao: 9,
cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
generos: ['Ação', 'Fantasia', 'Aventura'],
pagina: '/mortal-kombat',
favorito: true
},
{
nome: 'Vingadores: Ultimato (2019)',
lancamento: '25/04/2019',
duracao: '3h01m',
classificacao: 6,
cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
generos: ['Aventura', 'Ficção científica', 'Ação'],
pagina: '/avengers',
favorito: false
},
{
nome: 'Crepúsculo (2008)',
lancamento: '21/11/2008',
duracao:'2h01min',
classificacao: 9,
cartaz:'https://www.themoviedb.org/t/p/original/sgxHeCZE3H9n5jQFumQPs9HBnTV.jpg',
generos:['Fantasia','Romance'],
pagina:'/crepusculo',
favorito: false
},
{
nome: 'Gente Grande (2010)',
lancamento: '24/09/2010',
duracao:'1h42min',
classificacao: 6,
cartaz:'https://www.themoviedb.org/t/p/original/3NqLgW0xqp6mpj1OUTNdvxHZ71g.jpg',
generos:['Comédia','Buddy'],
pagina:'/Gente-Grande',
favorito: false
},
{
nome: 'Cidade Dos Homens (2008)',
lancamento: '31/08/2008',
duracao:'1h50min',
classificacao: 9,
cartaz:'https://www.themoviedb.org/t/p/w220_and_h330_face/7fNhBXNhqd6AVRHMcVvAF1py4Mh.jpg',
generos:['Drama','Ficcção policial'],
pagina:'/cidade-dos-homens',
favorito: false
}
];
exibirFilme(filme: ISeries){
const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
this.router.navigate(['filme-detalhe'],navigationExtras);
}

async exibirAlertaFavorito(filme: ISeries) {
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


