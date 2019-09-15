import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client: Client;

  cliente: FormGroup;

  constructor(private service: ClientService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {

    this.cliente = this.formBuilder.group({
      name: null,
      cpf: null,
      dateOfBirth: null,
      profession: null,
      rg: null,
      address: null,
      email: null,
      telephone: null,
    }, { validators: Validators.required});


    this.route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.loadClient(id);
    });
  }

  onSubmit(form: any) {
    
    this.service.update(new Client(form.name, form.cpf, form.dateOfBirth, form.profession, form.rg, form.address, form.email, form.telephone));
    
    this.router.navigate(['/client/list']);
  }

  loadClient(id: number): Promise<Client> {
    return new Promise( (resolve) => resolve(this.service.getById(id)));
  }

  show(){
    this.router.navigate(['/client', this.client.id]);
    return false;
  }

  back(){
    this.router.navigate(['/client', 'list']);
    return false;
  }

}
