<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="text-question">
        <ion-label><h1 id="letra">¿Cuánto tiempo te falta para terminar tu tesis?</h1></ion-label>
      </div>
      <div id="tipo-investigacion">
        <ion-item slot="primary">
          <ion-select :interface-options="options" id="tareas" interface="alert" placeholder="Selecciona el tipo de investigación">
            <ion-item id="background-select">
              <ion-select-option :key="tarea" v-for="tarea of tipo_investigacion" :value="tarea.investigacion">
                {{tarea.investigacion}}
              </ion-select-option>
            </ion-item>
          </ion-select>
        </ion-item>
      </div>
      <div id="container">
        <p id="lista" v-for="(tema,index) in themes" :key="index">
          <ion-label>
            <div id="label-text">
              <h3 id="letra_1">{{tema.task}}</h3>
            </div>
            <div>
              <ion-button class="btntime" @click="cambiar(index)" id="boton" :color="tema.color" shape="round" size="small"><h3>{{tema.msg}}</h3></ion-button>
            </div>
            <br>
          </ion-label>
        </p>
      </div>
      <div id="calcular_boton">
        <ion-button id="forma" shape="round" color="warning" @click="enviar()">Calcular</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { environment } from '@/services/data';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { db } from '../firebase';

export default defineComponent({
  name: 'Tiempo',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data(){
    return {
      tareas: '',
      porcentaje_done: '',
      horas_faltantes: '',
      datos_full: {
      pais: 'MX',
      genero: 'Masculino',
      nivel: 'Pregrado - Licenciatura',
      conocimiento: 'Inteligencia Artificial',
      investigacion: 'Investigación téorica',
      porcentaje: '',
      horas: ''
    },

      themes: [
            { task: "Conformación del grupo", hours: "2",  porcentaje: "2",  done: false, msg: "No", color: 'medium' },
            { task: "Resumen",                hours: "3",  porcentaje: "2",  done: false, msg: "No", color: 'medium' },
            { task: "Introducción",           hours: "4",  porcentaje: "4",  done: false, msg: "No", color: 'medium' },
            { task: "Problema",               hours: "8",  porcentaje: "8",  done: false, msg: "No", color: 'medium' },
            { task: "Justificación",          hours: "6",  porcentaje: "8",  done: false, msg: "No", color: 'medium' },
            { task: "Antecedentes",           hours: "8",  porcentaje: "12", done: false, msg: "No", color: 'medium' },
            { task: "Marco teórico",          hours: "8",  porcentaje: "12", done: false, msg: "No", color: 'medium' },
            { task: "Metodología",            hours: "6",  porcentaje: "6",  done: false, msg: "No", color: 'medium' },
            { task: "Resultados",             hours: "15", porcentaje: "14", done: false, msg: "No", color: 'medium' },
            { task: "Discusión",              hours: "8",  porcentaje: "12", done: false, msg: "No", color: 'medium' },
            { task: "Conclusiones",           hours: "2",  porcentaje: "6",  done: false, msg: "No", color: 'medium' },
            { task: "Recomendaciones",        hours: "2",  porcentaje: "5",  done: false, msg: "No", color: 'medium' },
            { task: "Referencias",            hours: "2",  porcentaje: "4",  done: false, msg: "No", color: 'medium' },
            { task: "Formato con normas",     hours: "2",  porcentaje: "5",  done: false, msg: "No", color: 'medium' }
        ],
      
      tipo_investigacion: environment.investigaciones,
    }
  },
  methods:{
    cambiar(index){
      this.themes[index].done = !this.themes[index].done
      if(this.themes[index].done){
        this.themes[index].msg = "Si"
        this.themes[index].color = "success"
      }else{
        this.themes[index].msg = "No"
        this.themes[index].color = "medium"
      }
    },
    passData(){
      console.log("Investigacion: ",document.getElementById("tareas").value);
      
      
      //this.$router.push('/resultado')
    },
    calcular_horas(){
      this.horas_faltantes = 0;
      for (let i = 0; i < this.themes.length; i++) {
        if(this.themes[i].done == false){
          //console.log(this.themes[i].hours);
          this.horas_faltantes = this.horas_faltantes + parseInt(this.themes[i].hours);
        }
      }
      environment.datos.horas = this.horas_faltantes;
      //console.log("Horas: ",this.horas_faltantes);
    },
    calcular_porcentaje(){
      this.porcentaje_done = 0;
      for (let i = 0; i < this.themes.length; i++) {
        if(this.themes[i].done == true){
          //console.log(this.themes[i].porcentaje);
          this.porcentaje_done = this.porcentaje_done + parseInt(this.themes[i].porcentaje);
        }
      }
      environment.datos.porcentaje = this.porcentaje_done;
      //console.log("Porcentaje ",this.porcentaje_done);
    },
    enviar(){
      environment.datos.investigacion = document.getElementById("tareas").value;
      this.calcular_horas();
      this.calcular_porcentaje();
      console.log(environment.datos);

     db.collection("entradas").add({
        pais: environment.datos.pais,
        genero: environment.datos.genero,
        nivel: environment.datos.nivel,
        conocimiento: environment.datos.conocimiento,
        investigacion: environment.datos.investigacion,
        porcentaje: environment.datos.porcentaje,
        horas: environment.datos.horas
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          this.$router.push('/resultado')
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    }
  }
});
</script>

<style scoped>

.btntime{
  width: 35px;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 35%;
  margin: 60px;
  margin-top: 90px;
  transform: translateY(-50%);
}

#label-text {
  text-align: left;
  color:black;
  position: absolute;
  transform: translateY(-50%);
}

#lista {
    margin: 7px;
    text-align: center;
}

#boton {
  text-align: right;
  position: absolute;
  font-weight: bold;
  right: 0;
  border-radius: 15px;
  height: 22px;
  transform: translateY(-50%);
}

#forma {
  text-align: center;
  position: absolute;
  font-weight: bold;
  text-transform: inherit;
  right: 0;
  height: 45px;
  border-radius: 20px;
  transform: translateY(-50%);
}

#calcular_boton {
  text-align: center;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  width: 120px;
  top: 80%;
  text-transform: inherit;
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
  font-weight: bold;
  color: #00A79D;
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

#label-text a {
  text-decoration: none;
}

ion-content.background{
    --background: url(../../imagenes/fondo.jpeg) 0 0/100% 100% no-repeat;
}

ion-item {
  font-size: 14px;
  --background: white;
  color: black;
  border: 3px solid#00A79D;
  border-radius: 10px;
  width: 200px;
  margin: auto;
}
</style>