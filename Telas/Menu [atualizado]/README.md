## 🎨 Layout
![menu](https://github.com/CEJJStudios/O_Gestor_Louco_The_Game/assets/90199276/de5a36dc-2a2a-4459-92f1-78deafb2f308)

# **Projeto Escolha de Personagem**

##  **HTML**

## index.html

 A página apresenta uma seleção de personagens de um jogo, permitindo que os jogadores escolham seus personagens para jogar.

A página tem um cabeçalho com o título "Player Select". Abaixo dele, há uma seção "seleção de personagens" que contém duas partes principais: uma imagem grande que mostra o personagem selecionado pelo jogador .

A seleção de personagens em si é apresentada como uma lista de personagens, cada um representado por uma imagem. 

O código HTML inclui links para vários arquivos CSS, que são usados para estilizar a página. Além disso, há um arquivo JavaScript incluído na página, que será usado para implementar a funcionalidade da seleção de personagens.

```html
    <main>
      <!-- cabeçalho -->
      <header class="cabecalho">
        <h1 class="titulo">Escolha um jogador</h1>
      </header>
      <!-- fim do cabeçalho -->

      <!-- container onde todos os itens estão agrupados -->
      <div class="selecaoDePersonagem">
        <!-- personagem grande player 1  e personagem selecionado grande-->
        <div class="personagemJogador1 personagemGrande">
          <!-- imagem grande do jogador selecionado -->
          <img
            src="./src/img/Sol.png"
            alt="personagem selecionado jogador 1"
            id="personagemJogador1"
          />
          <!-- fim da imagem grande -->

          <!-- container com o nome do personagem selecionado em baixo -->
          <div class="nome">
            <h3>Sol</h3>
          </div>
        </div>
        <!-- fim da classe personagemJogador1 e personagemGrande -->

        <!-- inicio do container com  a lista de personagem a ser escolhido no centro -->
        <ul class="listaDePersonagem">
          <!-- classe  personagem e personagem selecionado -->
          <a href="./solGame/fase1.html" class="personagem selecionado" id="sol" data-name="sol">
            <!-- classe tag com o player 1 ou 2 -->
            <span class="tag"></span>
            <img src="./src/img/Sol.png" alt="Personagem sol" />
          </a>

          <a href="./YumeGame/fase1.html" class="personagem" id="yumi" data-name="yumi"> 
            <span class="tag"></span>
            <img
              src="./src/img/yumi.png"
              alt="Personagem Yumi"
            />
          </a>
          <a href="./jotaGame/fase1.html"
            class="personagem"
            id="Jota"
            data-name="Jota"
          >
            <span class="tag"></span>
            <img
              src="./src/img/Jota.png"
              alt="Personagem Jota"
            />
        </a>

          <a href="./laraGame/fase1.html" class="personagem" id="lara" data-name="lara">
            <span class="tag"></span>
            <img src="./src/img/Lara.png" alt="Personagem Lara" />
          </a>

        </ul>
      </div>

      <!-- fim da main -->
    </main>

```

# **CSS**

## reset.css

Este é um trecho de código CSS que define alguns estilos padrão para elementos HTML.

O primeiro conjunto de estilos redefine as propriedades padrão de margem, preenchimento, borda, tamanho da fonte, alinhamento vertical e dimensionamento de caixa para todos os elementos.
O segundo conjunto de estilos define a propriedade de estilo de lista de elementos de lista (ul) não ordenados como "nenhum", o que significa que os marcadores de lista (marcadores) não serão exibidos.

```css
* {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
vertical-align: baseline;
box-sizing: border-box;
}

ul {
    list-style: none;
}
```

## variaves.css

Este é um arquivo CSS que define variáveis personalizadas para cores usadas no design de um site. O arquivo declara 9 variáveis de cor diferentes, com nomes como --cor-vermelha-principal (cor vermelha primária), --cor-azul-fraca (cor azul fraca) e --cor-secundaria (cor secundária). Os nomes das variáveis estão em português, e o arquivo é chamado de "veriaveis.css".

```css
:root {
    --cor-vermelha-principal: #D60223;
    --cor-vermelha-media: #f89284;
    --cor-vermelha-fraca: #ffbebe;

    --cor-marrom-fraco: #ebd5d2;

    --cor-azul-principal: #0271F7;
    --cor-azul-media: #d3ffff;
    --cor-azul-fraca: #8fbff8;

    --cor-roxa-fraca: #c2c2f1;

    --cor-titulo-fraco: #faefd8;
    --cor-titulo-forte: #f77a2c;

    --cor-padrao: #ffffff;
    --cor-secundaria: #000000;
}
```



## ⚙️ Funcionalidades

- [x] O usuário pode visualizar o personagem ao passar o mouse sobre o ícone do personagem.

 
---


## 🛠 Como funciona o projeto

A página funciona com um mouseover, ou seja, ao passar o mouse sobre os ícones dos personagens como player, uma imagem e o nome do persongem aparece para melhor visualização.

---

## 🛠 Tecnologias

As seguintes ferramentas e utiliários foram usadas na construção do projeto:

-   **HTML:** para estrutura do conteúdo da página.
-   **CSS:** para a estilização da página.
-   **Javascript:** para a interação com o usuário. O script conta com funções para interação do usuário com a exibição de imagens, nomes e classes.

---


