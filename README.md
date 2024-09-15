



# Localiza Doação

## O Localiza Doação foi um aplicativo criado com a intenção de facilitar a localização de pontos de doação pelo usuário. A sua criação se deu durante a observação de que, no começo do ano, com as trajédias que ocorreram no Rio Grande do Sul. Ao observarmos a situação do estado, vimos que muitas pessoas que possuiam a intenção de doar produtos para ajudar na situação das vitimas tinham dificuldades de encotnrar pontos oficiais onde poderiam realizar essas doações. A função do aplicativo é ser um método simples, onde um usuário poderia encontrar facilmente um ponto de doação próximo de si, assim como ajudar a combater a desinformação e evitar golpes, que infelizmente se tornam comuns nesse tipo de situação de crise. 



---

## Code

Inline `code`

Aqui está um exemplo do código feito no aplicativo, esse é o código da página inicial:

<ion-header>
  <ion-toolbar>
    <ion-title class="titulo"> Home </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  
  <div class="conteudo animate__animated animate__fadeIn">
    <img 
    class="img-item"
    src="https://conteudo.solutudo.com.br/wp-content/uploads/2019/07/caridade.jpg"
    alt="Doações"
    />

    <p>
      Depois das tragédias que se passaram no país, muitas pessoas precisam da sua ajuda! Conte conosco para poder realizar doações!
    </p>

    <ion-card [routerLink] ="['/tabs/tab2']">
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="https://cdn-icons-png.flaticon.com/512/2642/2642502.png"/>
        </ion-thumbnail>
        <ion-label>
          Onde Doar
        </ion-label>
      </ion-item>
    </ion-card>


    <ion-card [routerLink] ="['/tabs/tab3']">
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Heart-hand-shake.svg/4274px-Heart-hand-shake.svg.png"/>
        </ion-thumbnail>
        <ion-label>
          Preciso de Doações
        </ion-label>
      </ion-item>
    </ion-card>
  </div>

</ion-content>
---

