import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-app-angular';

  public  mensagem: string = 'Olá Angular';
  public nome: string = 'Erica';
  public idade: number = 30;
  public profissao: string = 'Dev Javascript';

  public listaAnimais = [{id: "123", nome: "Félix", raca: "Gato bonito", peso: 5},{id: "456", nome: "Mel", raca: "Peluda ", peso: 7}, 
  {id: "789", nome: "Lolo", raca: "Menino Verde", peso: 2}]
}
