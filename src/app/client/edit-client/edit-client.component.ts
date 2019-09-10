import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  public cliente: Client;

  constructor(private service: ClientService, 
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap( (params: Params) => this.loadClient(+params['id']) )
    ).subscribe( (cliente: Client) => this.cliente = cliente );
  }

  onSubmit(form: any) {

    this.cliente.name = form.name;
    this.cliente.cpf = form.CPF;
    this.cliente.address = form.address;
    this.cliente.email = form.email;
    this.cliente.profession = form.profession;
    this.cliente.dateOfBirth = form.dateOfBirth;
    this.cliente.rg = form.RG;
    this.cliente.telephone = form.telephone;

    this.router.navigate(['/books', this.cliente.id]);
  }

  loadClient(id: number): Promise<Client> {
    return new Promise( (resolve) => resolve(this.service.getById(id)));
  }

  show(){
    this.router.navigate(['/client', this.cliente.id]);
    return false;
  }

  back(){
    this.router.navigate(['/client/list']);
    return false;
  }


}
