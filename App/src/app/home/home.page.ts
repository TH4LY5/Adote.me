import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltrosModelPage } from '../filtros-model/filtros-model.page';
import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto.page';
import { Patrocinio } from 'src/models/Patrocinio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  patro: Patrocinio[]
  slideOpt;
  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.patro = [
      { id: 1, nome: "Bicho Vivo", img: "https://irga.rs.gov.br/upload/recortes/201811/09151236_30797_GD.jpg", link: "link site ou rede" },
      { id: 2, nome: "Cat Dog", img: "https://irga.rs.gov.br/upload/recortes/201811/09151236_30797_GD.jpg", link: "link site ou rede" },
      { id: 3, nome: "Auquimia", img: "https://irga.rs.gov.br/upload/recortes/201811/09151236_30797_GD.jpg", link: "link site ou rede" },
      { id: 4, nome: "SOS Minas Pet", img: "https://irga.rs.gov.br/upload/recortes/201811/09151236_30797_GD.jpg", link: "link site ou rede" },
      { id: 5, nome: "Shopping Rural", img: "https://irga.rs.gov.br/upload/recortes/201811/09151236_30797_GD.jpg", link: "link site ou rede" },
  
    ]
    this.slideOpt = {
      loop: true,
      autoplay:true,
      slidesPerView: 'auto',
      zoom: false,
      grabCursor: true,
    };
  }


  async abrirFiltro() {

    let modal = await this.modalCtrl.create({
      component: FiltrosModelPage,
      // cssClass: 'cart-model'
    });

    modal.present();

  }

  todos(){
    this.router.navigate(['/lista-todos'])
  }

  async abriDescricao() {

    let modal = await this.modalCtrl.create({
      component: DetalheProdutoPage,
      // cssClass: 'cart-model'
    });

    modal.present();
  }

}
