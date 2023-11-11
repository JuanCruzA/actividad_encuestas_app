
import React, { useState } from 'react';
function Encuestas({ encuestas }) {
//rastrear preguntas 
const [respuestas, setRespuestas] = useState([]);
//seleccion de respuesta
const handleSeleccionRespuesta = (preguntaId, respuestaSeleccionada) => {
        // Verificar si ya hay una respuesta para la pregunta
        const preguntaExistente = respuestas.find(respuesta => respuesta.preguntaId === preguntaId);

        // Actualizar o agregar la respuesta según corresponda
        if (preguntaExistente) {
          // Actualizar la respuesta existente
          const nuevasRespuestas = respuestas.map(respuesta =>
            respuesta.preguntaId === preguntaId
              ? { ...respuesta, respuestaSeleccionada }
              : respuesta
          );
          setRespuestas(nuevasRespuestas);
        } else {
          // Agregar una nueva respuesta
          setRespuestas([...respuestas, { preguntaId, respuestaSeleccionada }]);
        }
};



return (
    <div>
      <h2>Encuestas Disponibles</h2>
      {encuestas.map(encuesta => (
        <div key={encuesta.id}>
          <p>{encuesta.pregunta}</p>
          <ul>
            {encuesta.opciones.map(opcion => (
              <li key={opcion}>
                <label>
                  <input
                    type="radio"
                    name={`pregunta-${encuesta.id}`}
                    value={opcion}
                    onChange={() => handleSeleccionRespuesta(encuesta.id, opcion)}
                  />
                  {opcion}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Respuestas:</h2>
      {respuestas.map(respuesta => (
        <div key={respuesta.preguntaId}>
          <p>
            Pregunta {respuesta.preguntaId}: {respuesta.respuestaSeleccionada}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Encuestas;