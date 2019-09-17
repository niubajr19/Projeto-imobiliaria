// import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public client: Client;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService
    ) { }

  ngOnInit() {
    
  this.route.paramMap.subscribe(parameterMap =>{
    const id = +parameterMap.get('id');
      this.loadClient(id);
    });
  }
  loadClient(id: number): Promise<Client> {
    return new Promise( (resolve) => resolve(this.clientService.getById(id)) );
  }
  back() {
    this.router.navigate(['client']);
    return false;
  }

  edit() {
    this.router.navigate(['/client', this.client.id, 'edit']);
    return false;
  }
}