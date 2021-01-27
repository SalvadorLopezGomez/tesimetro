<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div>
        <div class="mb-3" >
          <ion-label><h1 id="letra">¿cuántas horas te faltan?</h1></ion-label>
        </div>
        <div id="horas" class="d-flex justify-content-end">Horas</div>

        <div id="tabla">
          <div class="d-flex justify-content-between mb-1" :key="index" v-for="(a,index) in task">
            <ion-label >{{task[index]}}</ion-label>
            <ion-label >{{tiempo[index]}}</ion-label>
          </div>
        </div>
        <div id="total" >
          <div class="d-flex justify-content-end">Total: {{horas_totales}} Hrs</div>
        </div>
        
        <div id="altura">
          <ion-button shape="round" color="warning" @click="$router.push('/nota')">Continuar</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ServeData } from '../services/ServeData';

const servedata = new ServeData();

export default defineComponent({
  name: 'Tiempo',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel
  },
  data(){
    return {
        task: [],
        tiempo: [],
        total: 138,
        horas_totales: 0,
    }
  },
  beforeMount(){
    this.task=servedata.getTask(),
    this.tiempo=servedata.getTiempo()
    this.horas_totales=servedata.getResults().hours;
  },
  methods: {
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

#tabla {
  font-size: 18px;
  margin: 60px;
  margin-top: 0px;
  margin-bottom: 0px;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  padding: 20px 40px 20px 40px;
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
#lista {
    margin: 5px;
}

#altura {
  text-align: center;
  margin: 5px;
}

#altura_1 {
    color: black;
    position: absolute;
    left: 78%;
    top: 67%;
}

#text-horas {
  color: black;
  top: 11%;
  right: 17%;
  position: absolute;
  transform: translateY(-50%);
}

#label-text {
  position: absolute;
  left: 0;
  transform: translateY(-50%);
}

#horas {
  font-weight: bold;
  text-align: right;
  margin: 20px;
  margin-right: 60px;
  margin-top: 5px;
  margin-bottom: 5px;
}

#boton {
  text-align: center;
  position: absolute;
  top: 120%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
}

#text-question {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 5%;
  transform: translateY(-50%);
}

#tipo-investigacion {
  text-align: left;
  position: absolute;
  left: 5%;
  right: 30%;
  top: 18%;
  transform: translateY(-50%);
}

#label-text strong {
  font-size: 20px;
  line-height: 26px;
}

ion-input {
  --color: black;
}

#total {
  text-align: right;
  font-weight: bold;
  margin: 20px;
  margin-right: 60px;
  margin-bottom: 0px;
}

#letra {
  text-align: center;
  color: #00A79D;
  margin: 10px;
  font-weight: bold;
}

#letra_1 {
  text-align: left;
  color: black;
}

#label-text p {
  font-size: 16px;
  line-height: 22px;
  margin: 12px;
}

#button-boolean p {
  font-size: 16px;
  line-height: 22px;
  margin: 12px;
}

#label-text a {
  text-decoration: none;
}

ion-content.background{
    --background: url(../../imagenes/fondo.jpeg) 0 0/100% 100% no-repeat;
}

ion-button{
  height: 45px;
  border-radius: 20px;
  text-transform: inherit;
}
</style>