import { cargarDatos } from "./api.js";

/* 1. IDENTIDAD DEL PERSONAJE */

/* 1.1 Referencias */
const creadorPersonaje = document.getElementById("formulario-personaje");

const selectorRazas = document.getElementById("raza-personaje");
const selectorClases = document.getElementById("clase-personaje");
const selectorTrasfondos = document.getElementById("trasfondo-personaje");
const selectorAlineamientos = document.getElementById("alineamiento-personaje");


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

async function cargarTrasfondos() {
    const urlTrasfondos = "https://www.dnd5eapi.co/api/2014/backgrounds";
    const trasfondosAPI = await cargarDatos(urlTrasfondos);

    if (trasfondosAPI.error) {
        console.error("No se han podido cargar los trasfondos: ", trasfondosAPI.error);
        return;
    }

    const listaTrasfondos = trasfondosAPI.data.results;

    for (const trasfondo of listaTrasfondos) {
        const opcionTrasfondo = document.createElement("option");

        opcionTrasfondo.value = trasfondo.index;
        opcionTrasfondo.textContent = trasfondo.name;

        selectorTrasfondos.appendChild(opcionTrasfondo);
    }
}

async function cargarAlineamientos() {
    const urlAlineamientos = "https://www.dnd5eapi.co/api/2014/alignments";
    const alineamientosAPI = await cargarDatos(urlAlineamientos);

    if (alineamientosAPI.error) {
        console.error("No se han podido cargar los alineamientos: ", alineamientosAPI.error);
        return;
    }

    const listaAlineamientos = alineamientosAPI.data.results;

    for (const alineamiento of listaAlineamientos) {
        const opiconAlineamiento = document.createElement("option");

        opiconAlineamiento.value = alineamiento.index;
        opiconAlineamiento.textContent = alineamiento.name;

        selectorAlineamientos.appendChild(opiconAlineamiento);
    }
}

/* 1.3 Acciones */
creadorPersonaje.addEventListener("submit", (evento) => {
    evento.preventDefault();
})

cargarRazas();
cargarClases();
cargarTrasfondos();
cargarAlineamientos();