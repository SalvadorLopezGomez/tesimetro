<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="Resultado">
        <ion-label><h1 id="letra_1">¿Cómo vas con tu tesis?</h1></ion-label>
      </div>
      <div id="container">
        <div id="result">
          <div>
            <ion-img id="image" src="../assets/logo.png"></ion-img>
          </div>
          <ion-label>
            <h1 id="letra">
              App creada por Impúlsate Consultoría®  2021.
            </h1>
          </ion-label>
          <ion-label>
            <h2 id="letra">
              Haciendo click puedes informarte sobre las 
              <route-link url=""><a href="">condiciones de uso</a></route-link> y 
              <route-link><a href="">política de privacidad</a></route-link>.
            </h2>
          </ion-label>
       </div>
      </div>
      <div id="boton">
        <ion-button shape="round" color="warning" @click="$router.push('/opciones')">Volver</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Resultado',
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
  margin: 20px;
}

#result {
  text-align: center;
  margin: 40px;
  margin-top: 0px;
}

#image {
  width: 200px;
  margin: 0 auto;
}

#boton {
  text-align: center;
  margin: 20px;
}

#letra {
  margin: 10px;
}

#letra_1 {
  font-weight: bold;
    color: #00A79D;
}

#container {
  text-align: center;
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