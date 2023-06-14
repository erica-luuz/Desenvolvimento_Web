import { Component } from '@angular/core';
import Produto from './models/produto';
import Menu from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public link1: string = "HOME"
  public link2: string = "PRODUTOS"
  public link3: string = "SOBRE NÓS"
  public link4: string = "CONTATO"
  public link5: string = "LOGIN"

  public detalhes(){
    alert('Ir para a página de detalhes');
  }
  public comprar(){
    alert('Ir para a página de compras');
  }

  public mensagem: string = "Bom-Bolo"

  public produtos: Produto[] = new Array<Produto>();

  constructor() {
    this.produtos.push(new Produto("Bolo de morango"," Humm bolo de morango","https://boloaniversario.com/wp-content/uploads/bolo-de-morango-aniversario.jpg", 100))
    this.produtos.push(new Produto("Bolo de chocolate"," O melhor cacau 100%","https://th.bing.com/th/id/OIP.xIjz1x333glE6ksZuwHjGAHaFT?pid=ImgDet&rs=1", 135))
    this.produtos.push(new Produto("Bolo de coco", " O melhor","https://th.bing.com/th/id/OIP.kgrJ8HdrVtkQ_T9777QLMQHaF2?w=220&h=180&c=7&r=0&o=5&pid=1.7", 160))
    this.produtos.push(new Produto("Bolo de Limão"," Bom demais","https://th.bing.com/th/id/OIP.6MbT2PIg-xld9vAiMTOx7wHaFj?w=230&h=180&c=7&r=0&o=5&pid=1.7",120))
  }

}


