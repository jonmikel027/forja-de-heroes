export async function cargarDatos(url) {
    try {
        const respuestaAPI = await fetch(url);
        if (respuestaAPI.ok !== true) {
            const mensajeError = "Error HTTP: " + respuestaAPI.status;
            const error = new Error(mensajeError);
            throw error;
        }

        const datosAPI = await respuestaAPI.json();
        return {
            error: null,
            data: datosAPI
        };
    }
    catch (error) {
        return {
            error: error,
            data: null
        }
    }
}


