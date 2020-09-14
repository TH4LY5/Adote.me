import { Component, OnInit } from '@angular/core';
import { Animais } from 'src/models/Animais';
import { ModalController } from '@ionic/angular';
import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto.page';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.page.html',
  styleUrls: ['./lista-todos.page.scss'],
})
export class ListaTodosPage implements OnInit {
Animais: Animais[]
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.listaAnimais(1);
  }

listaAnimais(tipo){
  if(tipo == 1 ){
    this.Animais = [ 
      {id:1, nome:"Bob", idade:"1 mes", tipo:1, sexo:"M", cor: "branco",porte:"medio"},
      {id:2, nome:"Rex", idade:"1 mes", tipo:1, sexo:"M", cor: "branco",porte:"medio"},
      {id:3, nome:"Bob", idade:"1 mes", tipo:1, sexo:"M", cor: "branco",porte:"medio"},
      {id:4, nome:"Bob", idade:"1 mes", tipo:1, sexo:"M", cor: "branco",porte:"medio"}
    ]
  } if (tipo == 2 ){
    this.Animais = [ 
      {id:1, nome:"Preto", idade:"1 mes", tipo:2, sexo:"M", cor: "branco",porte:"medio"},
      {id:2, nome:"Lulu", idade:"1 mes", tipo:2, sexo:"M", cor: "branco",porte:"medio"},
      {id:3, nome:"Tom", idade:"1 mes", tipo:2, sexo:"M", cor: "branco",porte:"medio"},
      {id:4, nome:"Bob", idade:"1 mes", tipo:2, sexo:"M", cor: "branco",porte:"medio"}
    ]
  }
}


async abriDescricao() {

  let modal = await this.modalCtrl.create({
    component: DetalheProdutoPage,
    // cssClass: 'cart-model'
  });

  modal.present();
}

}
