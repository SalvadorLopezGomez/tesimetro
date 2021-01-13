<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-button color="warning" expand="full" @click="$router.push('/tiempo')">Tesímetro</ion-button>
        <br>
        <ion-button color="warning" expand="full">Condiciones y privacidad</ion-button>
        <br>
        <ion-button color="warning" expand="full">Información de la app</ion-button>
        <br>
        <ion-button color="warning" expand="full">Publicidad</ion-button>
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
    --background: url(../../imagenes/office.jpg) 0 0/100% 100% no-repeat;
}
.bg-transparent {
  opacity: 0.6;
}
</style>