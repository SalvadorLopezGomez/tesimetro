<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <div class="mb-3" >
          <ion-label><h1 id="letra">Destinación horaria</h1></ion-label>
        </div>
        <div class="container-fluid text-end mb-3">Horas</div>
        <div class="d-flex justify-content-between mb-1" v-for="tema in themes" :key="tema">
          <ion-label class="fw-bold">{{tema.task}}</ion-label>
          <ion-label class="fw-bold">{{tema.hours}}</ion-label>
        </div>
        <div class="container-fluid text-end mt-4">Total: {{horas_totales}} Hrs</div>
        <div class="my-4"><ion-button shape="round" color="warning" @click="$router.push('/nota')">Continuar</ion-button></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

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
        themes: [
            { task: "Conformación del grupo", hours: "5",   done: false, msg: "No", color: 'medium' },
            { task: "Resumen",                hours: "5",   pending: true },
            { task: "Introducción",           hours: "5",   pending: true },
            { task: "Problema",               hours: "15",  pending: true },
            { task: "Justificación",          hours: "7",   pending: true },
            { task: "Antecedentes",           hours: "10",  pending: true },
            { task: "Marco teórico",          hours: "20",  pending: true },
            { task: "Metodología",            hours: "25",  pending: true },
            { task: "Resultados",             hours: "15",  pending: true },
            { task: "Discusión",              hours: "8",   pending: true },
            { task: "Conclusiones",           hours: "10",  pending: true },
            { task: "Recomendaciones",        hours: "6",   pending: true },
            { task: "Referencias",            hours: "4",   pending: true },
            { task: "Formato con normas",     hours: "8",   pending: true }
        ],
        total: 138,
        horas_totales: 0,
    }
  },
  methods: {
      calcular(){
          this.horas_totales = 0;
          for (let i = 0; i < this.themes.length; i++) {
              console.log(this.themes[i].hours);
              this.horas_totales = this.horas_totales + parseInt(this.themes[i].hours);
          }
          console.log(this.horas_totales);
          document.getElementById("altura_1").innerHTML = this.horas_totales.toString();
      }
  }
});
</script>

<style scoped>
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
    color: black;
    font-weight: bold;
    position: absolute;
    left: 60%;
    top: 67%;
}

#altura_1 {
    color: black;
    font-weight: bold;
    position: absolute;
    left: 78%;
    top: 67%;
}

#text-horas {
  color: black;
  font-weight: bold;
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
  color: black;
  border-radius: 20%;
  text-align: right;
  position: absolute;
  font-weight: bold;
  right: 0;
  transform: translateY(-50%);
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
  left: 25%;
  right: 0;
  color: #00A79D;
  font-weight: bold;
}

#letra {
  color: #00A79D;
  font-weight: bold;
}

#letra_1 {
  text-align: left;
  font-weight: bold;
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