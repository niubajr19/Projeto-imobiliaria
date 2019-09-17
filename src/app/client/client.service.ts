import { Injectable } from '@angular/core';

import { Client } from './client';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  lastId = 0;

  clients: Client[] = [
    { name: 'Junior', dateOfBirth: '04/05/1999', cpf: '12345678901', profession: 'Contador', rg: '5437623', address: {street: 'Rua Qualquer', number: 43, district: 'centro'}, email: 'Junior...', telephone: 111111111 ,id: ++this.lastId},
    { name: 'João', dateOfBirth: '20/07/1997', cpf: '12354321123', profession: 'Estudante', rg: '3214323', address: {street: 'Rua Logo ali', number: 88, district: 'campo'}, email: 'João...', telephone: 333333333 ,id: ++this.lastId},
    { name: 'Maria', dateOfBirth: '05/01/2000', cpf: '12345678906', profession: 'Analista de Sistemas', rg: '1232122', address: {street: 'Rua Nova', number: 9876, district: 'areal'}, email: 'Maria...', telephone: 222222222 ,id: ++this.lastId},];

  constructor(private appService: AppService) { }

  add(client: Client) {
    if (!client.id){
      client.id = ++this.lastId;
    };
    this.clients.push(client);
    return client;
  };

  update(client: Client) {

    const old = this.getById(client.id);
    if (!old){
      return;
    };

    Object.assign(old, client);
    return old;
  };

  delete(id: number) {
    this.clients = this.clients.filter(find => find.id !== id);
  };

  getById(id: number) {
    return this.clients
    .filter(find => find.id === id)
    .pop();
  };

  getAll(){
    return this.clients;
  };

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }

}
