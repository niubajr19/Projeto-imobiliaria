import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    public nomeCompleto: String,
    public cpf: String,
    public dataNascimento: String,
    public profissao: String,
    public rg: String,
    public endereco: String,
    public email: String,
    public telefone: number, 
    ) { }

  ngOnInit() {
  }

}
