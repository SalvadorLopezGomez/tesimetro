<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-button shape="round" color="warning" @click="$router.push('/tiempo')">Tesímetro</ion-button><br>
        <ion-button shape="round" color="warning" @click="$router.push('/firma')">Legal</ion-button><br>
        <ion-button shape="round" color="warning" @click="$router.push('/publicidad')">Publicidad</ion-button><br>
        <ion-button shape="round" color="warning" @click="$router.push('/herramientas')">Herramientas de investigacion</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Opciones',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
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

#container {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 50%;
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

ion-button{
  border-radius: 20px;
  height: 45px;
  text-transform: inherit;
  width : 250px;
}
</style>