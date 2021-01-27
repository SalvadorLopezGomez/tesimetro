import { data } from './data';

export class ServeData {
    constructor() {}
    getGenero(){
        return data.Genero;
    }
    getLevels() {
        let levels = []
        for (const lv of data.Lvl_Investigacion) {
            levels.push(lv.Nivel)
        }
        return levels
    }
    getInvestigaciones() {
        return data.Investigaciones
    }
    getTask() {
        return data.select.task
    }
    getColorButton(){
        return data.Color;
    }
    getResults(){
        return data.resultados;
    }
    getTiempo(){
        return data.select.inv.Tiempo;
    }
    getDBdata(){
        let datos = []
        datos.push(data.datos.pais)
        datos.push(data.datos.genero)
        datos.push(data.datos.nivel)
        datos.push(data.datos.conocimiento)
        datos.push(data.select.investigacion)
        datos.push(data.resultados.parcent)
        datos.push(data.resultados.hours)

        return datos;
    }
    setLevel(index) {
        data.select.inv = data.Lvl_Investigacion[index]
        if (index < 1) {
            data.select.task = data.Tareas[0]
            data.select.portcent = data.Porcentajes[0]
        } else {
            data.select.task = data.Tareas[1]
            data.select.portcent = data.Porcentajes[1]
        }
    }
    setTotalHoras(horas_torales){
        data.select.hours = horas_torales
    }
    setInv(index) {
        data.select.investigacion = data.Investigaciones[index]
        data.select.inv.Tiempo = data.select.inv.Tiempo[index]
    }
    setInfo(pais, genero, nivel, tema){
        data.datos.pais = pais;
        data.datos.genero = genero;
        data.datos.nivel = nivel;
        data.datos.conocimiento = tema;
    }
    setResults(porcentaje, hora, consejo){
        data.resultados.parcent = porcentaje;
        data.resultados.hours = hora;
        data.resultados.message =consejo;
    }
    Calculate(YesorNot) {
        console.log("Hola");
        console.log(data.select.inv.Tiempo);
        let porcent = 0
        let hours = 0
        let consejo = ""
        for (let i = 0; i < YesorNot.length; i++) {
            if (YesorNot[i]) {
                porcent += data.select.portcent[i]
            } else {
                hours += data.select.inv.Tiempo[i]
            }
        }
        if (porcent < 21 && porcent > 0)
            consejo = data.Consejos[0]
        if (porcent < 41 && porcent > 20)
            consejo = data.Consejos[1]
        if (porcent < 61 && porcent > 40)
            consejo = data.Consejos[2]
        if (porcent < 81 && porcent > 60)
            consejo = data.Consejos[3]
        if (porcent < 101 && porcent > 80)
            consejo = data.Consejos[4]
        return [porcent, hours, consejo]
    }
}