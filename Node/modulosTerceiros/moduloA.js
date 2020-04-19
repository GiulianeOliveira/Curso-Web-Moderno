/* Para instalar dependências de terceiros, como bibliotecas, deve-se rodar o node no terminal e utilizar
o comando npm (é o gerenciador de pacotes do node), por exemplo:
npm i nomedabiblioteca
*/
const _ = require('lodash')  // importa a biblioteca lodash para este arquivo

setInterval(() => console.log(_.random(0,1000)), 6000)

/*npm i lodash 
Se der erro na instalação, faz o seguinte:
1. Apaga o package.json
2. (se tiver) Apaga o package-lock.json
3. Roda os seguinte comandos:
npm init -y
npm i -s lodash

As pastas criadas pelo lodash não precisam ir para o repositório, pois podem facilmente serem reproduzidas
utilizando o npm i e utilizando o lodash na pasta do repositório.
*/

/* npm i -g nodemon -> -g pra instalar de forma global e ela poder ser acessada no prompt de comando
nodemon serve para que você execute seu código em tempo real, se você alterá-lo o nodemon dá refresh
e segue executando o código.
utilizando o nodemon:
vá no diretório onde está o arquivo que deseja executar e digite no terminal nodemon nomedoarquivo
*/