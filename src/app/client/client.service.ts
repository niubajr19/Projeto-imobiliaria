import { Injectable } from '@angular/core';

import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  lastId = 0;

  clients: Client[] = [
    { name: 'Junior', dateOfBirth: '04/05/1999', cpf: '12345678901', profession: 'Contador', rg: '5437623', adress: 'Rua Qualquer', email: 'Junior...', telephone: 111111111 ,id: ++this.lastId},
    { name: 'João', dateOfBirth: '20/07/1997', cpf: '12354321123', profession: 'Estudante', rg: '3214323', adress: 'Rua Logo ali', email: 'João...', telephone: 333333333 ,id: ++this.lastId},
    { name: 'Maria', dateOfBirth: '05/01/2000', cpf: '12345678906', profession: 'Analista de Sistemas', rg: '1232122', adress: 'Rua Nova', email: 'Maria...', telephone: 222222222 ,id: ++this.lastId},  ];

  constructor() { }

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
    return this.clients.filter(find => find.id == id);
  };

  getAll(){
    return this.clients;
  };

}
