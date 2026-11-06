
import { supabase } from './supabase.js';

// Comprobar conexión consultando carreras
async function probarConexion() {

    const { data, error } = await supabase
        .from('carrera')
        .select('*');

    if (error) {
        console.error('Error de conexión:', error.message);
        document.getElementById('resultado').textContent =
            'Error: ' + error.message;
        return;
    }

    console.log('Conexión exitosa:', data);

    document.getElementById('resultado').textContent =
        '¡Conexión exitosa! Carreras encontradas: ' + data.length;
}

document
    .getElementById('btnConectar')
    .addEventListener('click', probarConexion);
