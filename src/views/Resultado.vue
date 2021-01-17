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
            Hasta el momento presentas un --% de avance en tu tesis. 
            Estimamos que requieres -- horas de trabajo para terminarla.
          </h2>
        </ion-label>
      </div>

      <div id="Consejo"><ion-label><h1 id="letra">Consejo</h1></ion-label></div>
      
      <div id="advice">
        <ion-label>
          <h2 id="letra_1">
            Una revisión a la coherencia estructural te vendría bien. De ella depende 
            que los antecedentes y el marco teórico estén articulados con tu planteamiento inicial.
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
      dataForm : {
        pais:""
      }
    }
  }
});
</script>

<style scoped>

#Resultado {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 10%;
  transform: translateY(-50%);
}

#Consejo {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 35%;
  transform: translateY(-50%);
}

#result {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 15%;
  margin: 40px;
  transform: translateY(-50%);
}

#advice {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 42%;
  margin: 40px;
  transform: translateY(-50%);
}

#boton {
  position: absolute;
  left: 5%;
  right: 5%;
  text-align: center;
  top: 70%;
  transform: translateY(-50%);
}

#letra {
  font-weight: bold;
  color: #00A79D;
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
  border: 2px solid #00A79D;
  border-radius: 16px;

  text-align: center;
}
</style>