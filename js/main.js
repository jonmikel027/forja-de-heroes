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


/* 2. CARACTERÍSTICAS */

/* 2.1 Referencias */
const campoFuerza = document.getElementById("fuerza-personaje");
const campoModificadorFuerza = document.getElementById("modificador-fuerza");

const campoDestreza = document.getElementById("destreza-personaje");
const campoModificadorDestreza = document.getElementById("modificador-destreza");

const campoConstitucion = document.getElementById("constitucion-personaje");
const campoModificadorConstitucion = document.getElementById("modificador-constitucion");

const campoInteligencia = document.getElementById("inteligencia-personaje");
const campoModificadorInteligencia = document.getElementById("modificador-inteligencia");

const campoSabiduria = document.getElementById("sabiduria-personaje");
const campoModificadorSabiduria = document.getElementById("modificador-sabiduria");

const campoCarisma = document.getElementById("carisma-personaje");
const campoModificadorCarisma = document.getElementById("modificador-carisma");

/* 2.2 Funciones */
function calcularModificador(valor) {
    const modificador = Math.floor((valor - 10) / 2);
    return modificador;
}

function cambiarModificador(campo, campoModificador) {
    if (campo.value === "") {
        campoModificador.textContent = "";
        return;
    }

    const valor = Number(campo.value);
    const modificador = calcularModificador(valor);
    if (modificador >= 0) {
        campoModificador.textContent = "+" + modificador;
    }
    else {
        campoModificador.textContent = modificador;
    }
}

/* 2.3 Acciones */
campoFuerza.addEventListener("input", () => {
    cambiarModificador(campoFuerza, campoModificadorFuerza)
})

campoDestreza.addEventListener("input", () => {
    cambiarModificador(campoDestreza, campoModificadorDestreza)
})

campoConstitucion.addEventListener("input", () => {
    cambiarModificador(campoConstitucion, campoModificadorConstitucion)
})

campoInteligencia.addEventListener("input", () => {
    cambiarModificador(campoInteligencia, campoModificadorInteligencia)
})

campoSabiduria.addEventListener("input", () => {
    cambiarModificador(campoSabiduria, campoModificadorSabiduria)
})

campoCarisma.addEventListener("input", () => {
    cambiarModificador(campoCarisma, campoModificadorCarisma)
})