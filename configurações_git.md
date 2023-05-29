# GIT - Configurações

### Configurar Usuário

    - Comandos
        git config --global user.name "Nome Sobrenome"
        git config --global user.email "pessoa@gmail.com"


### Baixar o Repositório do GitHub

    - Comandos
        git clone link-repositório


### adicionar e subir alterações no repositório
    - git push   | sobe arquivos mo repositorio
    - git add .  | prepara arquivos para serm subidos no repositorio
    - git commit -m "mensagem"  | adiciona mensagens

### Criar branch e mudar de branch
    - git branch nome-da-branch  | cria uma branch
    - git checkout nome-da-branch  | muda da branch
    - git branch -a  | listar todas as branchs
    - git checkout -b nome-da-branch e troca para a branch criada
    - git branch - d nome-da-branch   | apaga uma branch
    - git pull  | Atualiza repositorio local |  


### Inicializar um repositorio git e gitHub em arquivo ja existente no PC
     Abrir o terminal git na pasta ja existente e:

     - git init    | para inicializar um repositorio
     - git add .  | prepara arquivos para serm subidos no repositorio
     - git commit -m "mensagem"  | adiciona mensagens

     Depois abra o github, Crie um novo repositório clicando no botão "New" (Novo) na página inicial do GitHub. Dê um nome ao repositório e escolha as opções desejadas.

     Depois Vincule o repositório local ao GitHub: No terminal ou prompt de comando, execute o comando:

     - git remote add origin <URL_do_repositório>  || o url vc copia do git criado ex: git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git.

     -  git branch -M main | para ir para a branch main, caso não esteja
     -  git push -u origin main | para subir para o repositorio de origem
     -  depois nas próximas vezes usar os comandos basicos. como, add .,commit, push

     Obs: O nome do repositório no GitHub não precisa ser o mesmo nome da pasta em seu computador. O nome do repositório no GitHub é independente do nome da pasta local.
     Ao criar um novo repositório no GitHub, você pode dar a ele qualquer nome que desejar. Esse nome será usado na URL do repositório no GitHub e pode ser diferente do nome da pasta local em seu computador.
     Por exemplo, se você tem uma pasta chamada "meu-projeto" em seu computador, você pode criar um repositório no GitHub com o nome "projeto-xyz". Não há uma relação direta entre o nome da pasta local e o nome do repositório no GitHub.
    Lembre-se de que, ao vincular o repositório local ao repositório remoto no GitHub usando o comando git remote add origin <URL_do_repositório>, você precisa fornecer a URL correta do repositório no GitHub, independentemente do nome da pasta local.


