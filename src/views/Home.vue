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
        <ion-input placeholder="País"></ion-input><br>
        <ion-item slot="primary">
          <ion-select :interface-options="options" interface="alert" placeholder="Género">
            <ion-item id="background-select">
              <ion-select-option :key="sex" v-for="sex of genero" :value="sex.id">{{sex.sexo}}</ion-select-option>
            </ion-item>
          </ion-select>
        </ion-item><br>
        <ion-item slot="primary">
          <ion-select :interface-options="options" interface="alert" placeholder="Nivel educativo">
            <ion-item id="background-select">
              <ion-select-option :key="escolaridad" v-for="escolaridad of educacion" :value="escolaridad.id">{{escolaridad.nivel}}</ion-select-option>
            </ion-item>
          </ion-select>
        </ion-item><br>
        <ion-input placeholder="Área de conocimiento"></ion-input><br>
      </div>
      <div id="boton">
        <ion-button shape="round" color="warning" @click="$router.push('/opciones')">Entrar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

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
  data(){
    return {
      dataForm : {
        pais:""
      },

      genero: [ {id: 1, sexo: "Masculino"}, {id: 2, sexo: "Femenino"} ],
      educacion: [ 
        {id: 1, nivel: "Investigación escolar" },
        {id: 2, nivel: "Técnica - Tecnología" },
        {id: 3, nivel: "Pregrado" },
        {id: 4, nivel: "Especialización" },
        {id: 5, nivel: "Maestría" },
        {id: 6, nivel: "Doctorado" },
      ],
    }
  }
});
</script>

<style scoped>
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
  border: 2px solid #00A79D;
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

