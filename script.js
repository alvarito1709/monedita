// URL de la API
const apiUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

// Realiza una solicitud GET a la API
fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("No se pudo obtener la información de la API");
    }
  })
  // ...

  .then((data) => {
    // Función para mostrar información
    function mostrarInformacion(nombre, compra, venta) {
      const resultados = data.filter((item) =>
        item.casa.nombre.includes(nombre)
      );

      if (resultados.length > 0) {
        const resultadoElement = document.createElement("div");
        resultadoElement.classList.add("card");
        resultadoElement.innerHTML = `<h2>${nombre}</h2>`;
        resultadoElement.innerHTML +=
          "<p><strong>Compra:</strong> " +
          resultados.map((resultado) => resultado.casa.compra).join(", ") +
          "</p>";
        resultadoElement.innerHTML +=
          "<p><strong>Venta:</strong> " +
          resultados.map((resultado) => resultado.casa.venta).join(", ") +
          "</p>";

        document.getElementById("resultados").appendChild(resultadoElement);
      } else {
        // No se encontró información
      }
    }

    // Selecciona todas las palabras clave que deseas buscar
    const palabrasClave = ["Blue", "Oficial", "Bolsa"];

    // Mostrar información para cada palabra clave
    palabrasClave.forEach((palabra) => {
      mostrarInformacion(palabra);
    });
  })
  .catch((error) => {
    console.error("Ocurrió un error: " + error.message);
  });

document.addEventListener("DOMContentLoaded", function () {
  const titularesBoton = document.getElementById("titularesBoton");
  const titularesDestino = document.getElementById("titularesDestino");

  titularesBoton.addEventListener("click", function () {
    titularesDestino.scrollIntoView({ behavior: "auto" });
  });
});
//     (item) => item.casa.nombre === "Dolar Bolsa"
//   );
//   if (dolarBolsaInfo) {
//     // Muestra la información del Dólar Bolsa
//     document.getElementById("compraBolsa").textContent =
//       dolarBolsaInfo.casa.compra;
//     document.getElementById("ventaBolsa").textContent =
//       dolarBolsaInfo.casa.venta;
//   } else {
//     // No se encontró información para "Dolar Bolsa"
//     document.getElementById("dolarBolsa").textContent = console.log(
//       "No se encontró información para 'Dolar Bolsa'"
//     );
//   }
// })
// .catch((error) => {
//   console.error("Ocurrió un error: " + error.message);
// });
//  });
//     const dolarBlueInfo = data.find(
//       (item) => item.casa.nombre === "Dolar Blue"
//     );

//     if (dolarBlueInfo) {
//       // Se encontró la información del "Dolar Blue"
//       const compra = dolarBlueInfo.casa.compra;
//       const venta = dolarBlueInfo.casa.venta;

//       // Crea un mensaje con la información seleccionada
//       const mensaje = `Dolar Blue<br>Compra: ${compra}<br>Venta: ${venta}`;

//       // Actualiza el contenido del elemento HTML "info" con el mensaje
//       infoElement.innerHTML = mensaje;
//     }
//   })
//   .catch((error) => {
//     console.error("Ocurrió un error: " + error.message);
//   });
