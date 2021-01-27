<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="Resultado">
        <ion-label><h1 id="letra">Resultado</h1></ion-label>
      </div>

      <div id="result">
        <ion-label>
          <h2 id="letra_1">
            Hasta el momento presentas un {{porcentaje}}% de avance en tu tesis. 
            Estimamos que requieres {{horas}} horas de trabajo para terminarla.
          </h2>
        </ion-label>
      </div>

      <div id="Consejo"><ion-label><h1 id="letra">Consejo</h1></ion-label></div>
      
      <div id="advice">
        <ion-label>
          <h2 id="letra_1">
            {{consejo}}
          </h2>
        </ion-label>
      </div>

      <div id="boton">
        <ion-button shape="round" color="warning" @click="$router.push('/horario')">Continuar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ServeData } from '../services/ServeData';

const servedata = new ServeData();

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
      porcentaje: '',
      horas: '',
      consejo: ''
    }
  },beforeMount(){
    
    this.porcentaje = servedata.getResults().parcent;
    this.horas = servedata.getResults().hours;
    this.consejo = servedata.getResults().message;
    console.log(this.porcentaje, this.horas, this.consejo)
  },
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
  margin: 30px;
}

#Consejo {
  text-align: center;
  margin: 60px;
  margin-top: 0px;
  margin-bottom: 30px;
}

#result {
  text-align: justify;
  margin: 60px;
  margin-top: 0px;
  margin-bottom: 30px;
}

#advice {
  text-align: justify;
  margin: 60px;
  margin-top: 0px;
  margin-bottom: 30px;
}

#boton {
  text-align: center;
  margin: 40px;
  margin-bottom: 0px;
}

#letra {
  color: #00A79D;
  font-weight: bold;
}

#letra_1 {
  color: black;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0%;
  right: 0%;
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
  text-align: center;
}
</style>