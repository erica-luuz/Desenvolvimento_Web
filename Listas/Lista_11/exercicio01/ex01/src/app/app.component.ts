import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mensagem: string = "Bom-Bolo"

  public produtos: Produto[] = new Array<Produto>();

  constructor() {
    this.produtos.push(new Produto("Bolo de morango","Humm bolo de morango","https://boloaniversario.com/wp-content/uploads/bolo-de-morango-aniversario.jpg", 100))
    this.produtos.push(new Produto("Bolo de chocolate","O melhor cacau 100%","https://th.bing.com/th/id/OIP.xIjz1x333glE6ksZuwHjGAHaFT?pid=ImgDet&rs=1", 135))
    this.produtos.push(new Produto("Bolo de coco", "O melhor","https://th.bing.com/th/id/OIP.kgrJ8HdrVtkQ_T9777QLMQHaF2?w=220&h=180&c=7&r=0&o=5&pid=1.7", 160 ))
  }

}


