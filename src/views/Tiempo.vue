<template>
  <ion-page>
    <ion-header :translucent="true" >
    </ion-header>
    
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <div id="text-question">
        <ion-label><h1 id="letra">¿Cuánto tiempo te falta para terminar tu tesis?</h1></ion-label>
      </div>
      
      <div>
        <div id="lista" class="d-flex justify-content-start">
          <ion-select v-model="selectinv" interface="popover" placeholder="Tipo de investigacion">
            <ion-select-option :key="index" v-for="(n,index) in investigaciones" :value="index">{{n}}</ion-select-option>
          </ion-select>
        </div>
          <div>
            <div id="tabla_general" class="d-flex justify-content-between"  :key="index" v-for="(a,index) in answers">
              <ion-label><h6>{{task[index]}}</h6></ion-label>
              <ion-button id="boton" :color="colores[index]" class="btn-sm" @click="change(index)">{{mensaje(a)}}</ion-button>
            </div>
          </div>
          <div id="calcular_boton">
            <ion-button id="forma" shape="round" color="warning" @click="calcular()">Calcular</ion-button>
          </div>   
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonLabel } from '@ionic/vue';
import { db } from '../firebase';
import { ServeData } from '../services/ServeData';

const servedata = new ServeData();

export default({
  name: 'Tiempo',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSelect, 
    IonSelectOption,
    IonButton,
    IonLabel
  },
  data(){
    return {
      task: [],
      investigaciones: [],
      answers:[],
      selectinv: '',
      color: '',
      colores: [],
      porcentaje: '',
      horas: '',
      consejo: '',
      resultados:[],
      db_data: [],
  }
  },beforeMount(){
    this.task=servedata.getTask()
    this.investigaciones=servedata.getInvestigaciones()
    this.color=servedata.getColorButton();
    this.db_data=servedata.getDBdata();
    for(let i=0;i<this.task.length;i++){
      this.answers.push(false);
      this.colores.push(this.color);
    }
  },
  methods:{
    change(index){
      this.answers[index] = !this.answers[index]
      if(this.answers[index]){
        this.colores[index]="success"
      }else{
        this.colores[index]="medium"
      }
    },
    mensaje(answer){
      if(answer)
        return "Si"
      return "No"
    },
    calcular(){
      servedata.setInv(this.selectinv)
      this.resultados = servedata.Calculate(this.answers)
      this.porcentaje = this.resultados[0];
      this.horas      = this.resultados[1];
      this.consejo    = this.resultados[2];
      servedata.setResults(this.porcentaje, this.horas, this.consejo);

      db.collection("entradas").add({
        pais: this.db_data[0],
        genero: this.db_data[1],
        nivel: this.db_data[2],
        conocimiento: this.db_data[3],
        investigacion: this.db_data[4],
        porcentaje: this.db_data[5],
        horas: this.db_data[6]
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          this.$router.push('/resultado')
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      this.$router.push('/resultado')
    },
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

h6{
  font-size: 15px;
}

.btntime{
  width: 35px;
}

#container {
  margin: 60px;
  margin-top: 0px;
}

#lista{
  padding: 10px;
  padding-top: 0px;
}

#label-text {
  text-align: left;
  color:black;
  position: absolute;
  transform: translateY(-50%);
}

#boton {
  text-transform: capitalize;
  width: 50px;
}

#forma {
  text-align: center;
  text-transform: inherit;
  right: 0;
  height: 45px;
  border-radius: 20px;
}

#calcular_boton {
  text-align: center;
  margin: auto;
  display: block;
  left: 0;
  right: 0;
  width: 120px;
  text-transform: inherit;
}

#text-question {
  text-align: left;
  margin: 15px;
  margin-left: 0px;
  font-size: bold;
}

#button-boolean {
  margin: 0 auto;
  text-align: right;
  position: absolute;
  left: 75%;
  right: 10%;
  top: 56.5%;
  transform: translateY(-50%);
}

#tipo-investigacion {
  text-align: left;
  position: absolute;
  left: 19%;
  right: 30%;
  top: 13%;
  transform: translateY(-50%);
}

#label-text strong {
  font-size: 20px;
  line-height: 26px;
}

ion-input {
  font-size: 10px;
  --background: white;
  --color: black;
  border: 3px solid#00A79D;
  border-radius: 10px;
}

#letra {
  color: #00A79D;
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

#label-text a {
  text-decoration: none;
}

#tabla_general {
  margin-top: -10px;
}

ion-content.background{
    --background: url(../../imagenes/fondo.jpeg) 0 0/100% 100% no-repeat;
}

ion-select {
  font-size: 14px;
  --background: white;
  color: black;
  border: 3px solid#00A79D;
  border-radius: 10px;
  width: 200px;
  margin-bottom: 20px;
  margin-left: -10px;
}
</style>