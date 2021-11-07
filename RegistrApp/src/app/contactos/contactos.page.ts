import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto.model';
import { ContactosService } from './contactos.service';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  listaContactos = [];
  contactoService: ContactosService;
  
  constructor( contactoService: ContactosService ) {
    this.contactoService=contactoService;
  }
  
  ngOnInit() {
    this.listaContactos=this.contactoService.getContactos();
  }
  ionViewWillEnter() {
    
   this.listaContactos=this.contactoService.getContactos();
  }
}






/* en este archivo del componente, se establecen las serie de variables que serán empleadas dentro del modulo */  