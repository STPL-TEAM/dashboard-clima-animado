const input = document.getElementById("ciudad-input");
const boton = document.getElementById("btn-buscar");
const nombreCiudad = document.getElementById("nombre-ciudad");
const descripcion = document.getElementById("descripcion");
const numero = document.getElementById("numero");
const sensacion = document.getElementById("sensacion");
const humedad = document.getElementById("humedad");
const viento = document.getElementById("viento");
const visibilidad = document.getElementById("visibilidad");
const presion = document.getElementById("presion");
const iconoClima = document.getElementById("icono-clima");
 
const API_KEY = "0727584fd3e867fb9a28aca15bd83d86";
 
boton.addEventListener("click", buscarClima);
 
input.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    buscarClima();
  }
});
 
function buscarClima() {
  const ciudad = input.value.trim();
 
  if (ciudad === "") {
    alert("Escribe una ciudad");
    return;
  }
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
 
  fetch(url)
    .then(respuesta =>
      respuesta.json().then(datos => ({
        status: respuesta.status,
        ok: respuesta.ok,
        datos
      }))
    )
    .then(resultado => {
      if (!resultado.ok) {
        alert("Error " + resultado.status + ": " + resultado.datos.message);
        return;
      }
 
      const datos = resultado.datos;
 
      nombreCiudad.textContent = `${datos.name}, ${datos.sys.country}`;
      descripcion.textContent = datos.weather[0].description;
      numero.textContent = Math.round(datos.main.temp);
      sensacion.textContent = `Sensación: ${Math.round(datos.main.feels_like)}°C`;
      humedad.textContent = `${datos.main.humidity}%`;
      viento.textContent = `${Math.round(datos.wind.speed * 3.6)} km/h`;
      visibilidad.textContent = `${Math.round(datos.visibility / 1000)} km`;
      presion.textContent = `${datos.main.pressure} hPa`;
 
      const clima = datos.weather[0].main;
 
      if (clima === "Rain") {
        iconoClima.textContent = "🌧️";
      } else if (clima === "Clouds") {
        iconoClima.textContent = "☁️";
      } else if (clima === "Snow") {
        iconoClima.textContent = "❄️";
      } else if (clima === "Thunderstorm") {
        iconoClima.textContent = "⛈️";
      } else if (clima === "Drizzle") {
        iconoClima.textContent = "🌦️";
      } else if (clima === "Mist" || clima === "Fog") {
        iconoClima.textContent = "🌫️";
      } else {
        iconoClima.textContent = "☀️";
      }
    })
    .catch((error) => {
      alert("Error exacto: " + error.message);
      console.error("Detalle:", error);
    });
}
 