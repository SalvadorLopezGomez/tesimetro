<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="Resultado">
        <ion-label><h1 id="letra_1">Nota</h1></ion-label>
      </div>

      <div id="result">
        <ion-label>
          <h3 id="letra">
            Las horas en las que estimamos puedes concluir tu tesis proviene de nuestra experiencia 
            en procesos de investigación colaborativa con estudiantes e investigadores.

            Reconocemos que el ejercicio de escrituraes una construcción individual o grupal que 
            involucra factores internos y externos, los cuales pueden hacer que el proceso se delimite o amplíe. 
            Aun así, te compartimos algunos elementos que resultan importantes para lograrlo:
          </h3>
          <ul id="letra">
              <li><h3>Motivación por el tema</h3></li>
              <li><h3>Claridad y coherencia en la estructurade los planteamientos que sustentantu propuesta</h3></li>
              <li><h3>Apropiación metodológica</h3></li>
              <li><h3>Disposición</h3></li>
              <li><h3>Trabajo continuo y dedicado</h3></li>
          </ul>
        </ion-label>
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
  top: 5%;
  transform: translateY(-50%);
}

#result {
  text-align: justify;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 35%;
  margin: 40px;
  transform: translateY(-50%);
}

#boton {
  position: absolute;
  left: 30%;
  right: 30%;
  top: 80%;
  text-align: center;
  transform: translateY(-50%);
}

#letra {
  color: black;
  font-weight: bold;
}

#letra_1 {
    color: #00A79D;
    font-weight: bold;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 5%;
  right: 5%;
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
  border-radius: 20px;
  height: 45px;
  text-transform: inherit;
}
</style>