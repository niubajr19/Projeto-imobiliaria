import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-list',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})

export class ListClientComponent{
  messege: string;

  constructor(
    private router: Router,
    private service: ClientService) {
  }

    get clients(): Client[]{
        return this.service.getAll();
    }

    show(id) {
      this.service.clearMessage();
      this.router.navigate(['/client', id]);
      return false;
    }

    edit(id){
      this.router.navigate(['/client', id, 'edit']);
      return false;
    }

    delete(id){
      if(confirm('Are you sure about this?')) {
        this.service.delete(+id);
      }
      return false;
    }
}
