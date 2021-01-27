<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>¿Cómo vas con tu tesis?</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-item slot="primary">
          <ion-select :interface-options="options" v-model="pais" interface="alert" placeholder="Pais">
            <ion-item id="background-select">
              <ion-select-option :key="pais" v-for="pais of paises" :value="pais.name">{{pais.name}}</ion-select-option>
            </ion-item>
          </ion-select>
        </ion-item><br>
        <ion-item slot="primary">
          <ion-select :interface-options="options" v-model="sexoMF" interface="alert" placeholder="Género">
            <ion-item id="background-select">
              <ion-select-option :key="sex" v-for="(sx,sex) in genero" :value="sx">{{sx}}</ion-select-option>
            </ion-item>
          </ion-select>
        </ion-item><br>
        <ion-item slot="primary">
          <ion-select :interface-options="options" v-model="level" interface="alert" placeholder="Nivel educativo">
            <ion-item id="background-select">
              <ion-select-option :key="escolaridad" v-for="(lvl,escolaridad) in levels" :value="escolaridad">{{lvl}}</ion-select-option>
            </ion-item>
          </ion-select>
        </ion-item><br>
        <ion-input id="tema" v-model="tema" placeholder="Área de conocimiento"></ion-input><br>
      </div>
      <div id="boton">
        <ion-button shape="round" color="warning" @click="passData()">Entrar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import { ServeData } from "../services/ServeData";
const servedata = new ServeData();

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSelect, 
    IonSelectOption
  },
  async beforeMount(){
    await axios.get("https://restcountries.eu/rest/v2/lang/es").then(resp =>{ this.paises=resp.data }),
    this.levels = servedata.getLevels(),
    this.genero = servedata.getGenero()
  },
  data(){
    return {
      pais: '',
      sexoMF: '',
      level: '',
      tema: '',
      levels: [],
      genero: [],
      paises: [],
    }
  },
  methods: {
    passData() {
      console.log("Pais: ", this.pais);
      console.log("Genero: ", this.sexoMF);
      console.log("Nivel: ", this.levels[this.level]);
      console.log("Tema: ", document.getElementById("tema").value);
      servedata.setInfo(this.pais, this.sexoMF, this.levels[this.level], document.getElementById("tema").value);
      servedata.setLevel(this.level);
      console.log(this.level);
      this.$router.push('/opciones') ;
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

#container {
  text-align: left;
  margin: 40px;
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);
}

#boton {
  text-align: center;
  margin: 40px;
  position: absolute;
  left: 0;
  right: 0;
  top: 63%;
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
  opacity: 0.4;
  border-radius: 5%;
}

ion-input {
  --background: white;
  --color: black;
  border: 3px solid#00A79D;
  border-radius: 10px;
  width: 200px;
  height: 45px;
  margin: auto;
}

ion-button{
  border-radius: 20px;
  height: 45px;
  text-transform: inherit;
}

ion-item {
  --background: white;
  color: black;
  border: 3px solid#00A79D;
  border-radius: 10px;
  width: 200px;
  height: 45px;
  margin: auto;
}


</style>

