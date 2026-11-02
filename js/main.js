import { cargarDatos } from "./api.js";

/* 1. IDENTIDAD DEL PERSONAJE */

/* 1.1 Referencias */

const selectorRazas = document.getElementById("raza-personaje");
const selectorClases = document.getElementById("clase-personaje");


/* 1.2 Funciones de carga */

async function cargarRazas() {
    const urlRazas = "https://www.dnd5eapi.co/api/2014/races";
    const razasAPI = await cargarDatos(urlRazas);

    if (razasAPI.error) {
        console.error("No se han podido cargar las razas:", razasAPI.error);
        return;
    }

    const listaRazas = razasAPI.data.results;
    for (const raza of listaRazas) {
        const opcionRaza = document.createElement("option");

        opcionRaza.value = raza.index;
        opcionRaza.textContent = raza.name;

        selectorRazas.appendChild(opcionRaza);
    }

}

async function cargarClases() {
    const urlClases = "https://www.dnd5eapi.co/api/2014/classes";
    const clasesAPI = await cargarDatos(urlClases);

    if (clasesAPI.error) {
        console.error("No se han podido cargar las clases: ", clasesAPI.error);
        return;
    }

    const listaClases = clasesAPI.data.results;

    for (const clase of listaClases) {
        const opcionClase = document.createElement("option");

        opcionClase.value = clase.index;
        opcionClase.textContent = clase.name;

        selectorClases.appendChild(opcionClase);
    }
}


/* 1.3 Acciones */

cargarRazas();
cargarClases();