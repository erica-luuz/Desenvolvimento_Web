export default class Menu {
  home: string;
  produtos: string;
  sobreNos: string;
  contato: string;
  login: String;


  constructor(home: string, produtos: string, sobreNos: string, contato: string, login: String){
    this.home = home;
    this.produtos = produtos;
    this.sobreNos = sobreNos;
    this.contato = contato;
    this.login = login;
  }
}
