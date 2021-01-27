<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="Resultado">
        <ion-label><h1 id="letra_1">Herramientas</h1></ion-label>
      </div>


    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Herramientas',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data(){
    return {
      
    }
  }
});
</script>

<style scoped>
body {
    font-size: calc(1.525rem+3.3vw);
    color: white;
}

@media (min-width: 1200px) {
    body {
        font-size: 4rem;
    }
}

#Resultado {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 10%;
  transform: translateY(-50%);
}

#result {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  margin: 40px;
  transform: translateY(-50%);
}

#image {
  width: 200px;
  margin: auto;
}

#boton {
  position: absolute;
  left: 30%;
  right: 30%;
  top: 80%;
  text-align: center;
  transform: translateY(-50%);
}

#letra {
  color: black;
}

#letra_1 {
  font-weight: bold;
    color: #00A79D;
}

#container {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 40%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-content.background{
    --background: url(../../imagenes/fondo.jpeg) 0 0/100% 100% no-repeat;
}
.bg-transparent {
  opacity: 0.6;
}
.a {
    color: #00A79D;
}

ion-button{
  border-radius: 20px;
  height: 45px;
  text-transform: inherit;
}
</style>