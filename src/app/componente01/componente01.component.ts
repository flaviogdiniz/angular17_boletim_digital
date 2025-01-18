import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aluno } from '../modelo/Aluno';
import { CommonModule } from '@angular/common';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MediaPipe],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  //Objeto de Formulário
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required,Validators.minLength(3)]),
    nota1: new FormControl(null, [Validators.required,Validators.min(0),Validators.max(10)]),
    nota2: new FormControl(null, [Validators.required,Validators.min(0),Validators.max(10)]),
  });

  //Visibilidade dos Botôes
  btnCadastrar : boolean =true;

  //Armazenar índice do Aluno selecionado
  indice:number = -1;

  //Vetor
  vetor:Aluno[] = [];

  //Função de cadastro
  cadastrar(){

    //Cadastro no vetor
    this.vetor.push(this.formulario.value as Aluno);

    //Limpeza dos inputs
    this.formulario.reset();

    
  }

  //Função de seleção
  selecionar(indice:number){
    this.indice = indice;

  //Atribuir os dados do Aluno no formulário
  this.formulario.setValue({
    nome : this.vetor[indice].nome,
    nota1 : this.vetor[indice].nota1,
    nota2 : this.vetor[indice].nota2

  });

  //Visibilidade dos botôes
  this.btnCadastrar = false;

  }

  //Alterar vetor
  alterar(){
    //Alterar vetor
    this.vetor[this.indice] = this.formulario.value as Aluno;

     //Limpeza dos inputs
     this.formulario.reset();

     //Alterar as visibilidade dos botôes
     this.btnCadastrar = true;
  }

  //Remover
  remover(){

    //removendo pessoa do vetor
    this.vetor.splice(this.indice, 1);

    //Limpeza dos inputs
    this.formulario.reset();
    
    //Alterar as visibilidade dos botôes
    this.btnCadastrar = true;


  }

  //Cancelar
  cancelar(){

    //Limpeza dos inputs
    this.formulario.reset();

    //Alterar as visibilidade dos botôes
    this.btnCadastrar = true;
  }
  

  
  

}
