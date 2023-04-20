## :memo: Descrição:
➥ Tela de home já com o link do jogo.

## :books: Funcionalidades
➥ <b>Menu De Personagens</b>: Com ele, é possível escolher o jogador que você deseja jogar;<br>
➥ <b>Reiniciar O Jogo</b>: Se você não estiver satisfeito com o seu desempenho ou morrer, clique "Enter" para reiniciar o jogo.

➤ Código para Reiniciar o Jogo:

```html
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    location.reload();
  }
});
```

➤ <b>Morte do Personagem</b>:Ao cair da plataforma, GAME OVER.

## :wrench: Tecnologias utilizadas:
<div align="center">
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
</div>

## :rocket: Executar o Projeto:
➥ Para rodar o repositório é necessário clonar o mesmo e upar no VSCODE, utilizando o Live Server, ou apenas clicando no "Index.html" dentro da pasta.

## :soon: Implementação Futura:
➥ Quando o personagem estiver no final da fase, ele vai poder seguir para as próximas.
