<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="text-question">
        <ion-label><h2 id="letra">¿Cuánto tiempo te falta para terminar tu tesis?</h2></ion-label>
      </div>
      
      <div id="tipo-investigacion">
        <ion-input placeholder="Tipo de Investigación"></ion-input>
      </div>
      <div id="label-text">
          <p v-for="tema in temas" :key="tema">
            <ion-label><h2 id="letra_1">{{tema}}</h2></ion-label>
          </p>
      </div>
      <ion-button id="boton" color="warning" @click="$router.push('/opciones')" expand="full">Calcular</ion-button>
      <div id="button-boolean">
        <ion-button color="success" shape="round" size="small" expand="full">SI</ion-button>
        <ion-button color="danger" shape="round" size="small" expand="full">NO</ion-button>
        <ion-button color="danger" shape="round" size="small" expand="full">NO</ion-button>
        <ion-button color="success" shape="round" size="small" expand="full">SI</ion-button>
        <ion-button color="danger" shape="round" size="small" expand="full">NO</ion-button>
        <ion-button color="danger" shape="round" size="small" expand="full">NO</ion-button>
        <ion-button color="danger" shape="round" size="small" expand="full">NO</ion-button> 
        <ion-button color="success" shape="round" size="small" expand="full">SI</ion-button>
        <ion-button color="success" shape="round" size="small" expand="full">SI</ion-button>
        <ion-button color="danger" shape="round" size="small" expand="full">NO</ion-button>
        <ion-button color="danger" shape="round" size="small" expand="full">NO</ion-button>
        <ion-button color="danger" shape="round" size="small" expand="full">NO</ion-button>
        <ion-button color="danger" shape="round" size="small" expand="full">NO</ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

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
      temas: ["Resumen",
              "Introducción",
              "Problema",
              "Justificación",
              "Antecedentes",
              "Marco teórico",
              "Metodología",
              "Resultados",
              "Discusión",
              "Conclusiones",
              "Recomendaciones",
              "Referencias",
              "Formato con normas"],
    }
  }
});
</script>

<style scoped>
#label-text {
  text-align: left;
  color:blue;
  position: absolute;
  left: 2%;
  right: 2%;
  top: 56.5%;
  transform: translateY(-50%);
}

#boton {
  position: absolute;
  left: 5%;
  right: 5%;
  top: 95%;
  transform: translateY(-50%);
}

#text-question {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 8%;
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
  --background: white;
  --color: black;
}

#letra {
  text-transform: uppercase;
  color: #00EEFD;
  text-shadow: 2px 2px 5px rgb(5, 0, 0);
}

#letra_1 {
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgb(255, 247, 0);
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
    --background: url(../../imagenes/office.jpg) 0 0/100% 100% no-repeat;
}

</style>