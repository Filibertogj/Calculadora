import { Component } from '@angular/core';
import { link } from 'fs';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CALCULADORA';
  numero1:number;
  numero2:number;
  resultado:number;

  Suma(){
    this.resultado = this.numero1+this.numero2;
  }
  Resta(){
    this.resultado = this.numero1-this.numero2;
  }
  Multiplicacion(){
    this.resultado = this.numero1*this.numero2;
  }

  Division(){

    if (this.numero2==0)
  {
    alert ("No dividiras por cero")
  }
  else
    this.resultado = this.numero1/this.numero2;
  }

  Modulo(){
    this.resultado = (this.numero1 % this.numero2);
  }

  Reset(){
    this.resultado = null;
    this.numero1=null;
    this.numero2=null;
  }




}

