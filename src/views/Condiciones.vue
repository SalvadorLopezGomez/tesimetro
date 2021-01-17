<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="Resultado">
        <ion-label><h1 id="letra_1">Condiciones y privacidad</h1></ion-label>
      </div>

      <div id="result">
        <ion-label>
          <h2 id="letra">
            Esta aplicación fue creada por la empresa Impúlsate Consultoría®.
          </h2>
          <br>
          <br>
          <h2 id="letra">
            Haciendo click puedes informarte sobre las 
            <route-link url=""><a href="">condiciones de uso</a></route-link> y 
            <route-link><a href="">política de privacidad</a></route-link>.
          </h2>
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
  top: 10%;
  transform: translateY(-50%);
}

#result {
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 30%;
  margin: 40px;
  transform: translateY(-50%);
}

#boton {
  position: absolute;
  left: 30%;
  right: 30%;
  top: 70%;
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
.a {
    color: #00A79D;
}

ion-button{
  border: 2px solid #00A79D;
  border-radius: 20px;
  height: 45px;
  text-transform: inherit;
}
</style>