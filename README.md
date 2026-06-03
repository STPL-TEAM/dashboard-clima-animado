# 🌦️ Dashboard del Clima Animado

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?style=flat)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat)

Dashboard interactivo del clima con animaciones CSS puras que reaccionan al estado del tiempo en tiempo real. Lluvia, nieve, sol y tormentas cobran vida con animaciones fluidas.

## ✨ Características

- 🎨 **Animaciones CSS puras** — sol girando, gotas de lluvia, copos de nieve, relámpagos
- 🌈 **Fondos dinámicos** — el fondo cambia según el clima (soleado, lluvioso, nevado...)
- 📍 **Búsqueda de ciudades** — cualquier ciudad del mundo via OpenWeather API
- 📊 **Estadísticas completas** — temperatura, humedad, viento, visibilidad y presión
- 📅 **Pronóstico 5 días** — íconos y temperaturas por día
- 🌙 **Modo nocturno automático** — detecta la hora local y ajusta los íconos
- 📱 **Responsive** — funciona en móvil y desktop
- 🎮 **Modo demo** — prueba con ciudades preconfiguradas sin API key

## 🚀 Demo

> Prueba el proyecto en vivo: [Ver Demo](https://tu-usuario.github.io/dashboard-clima-animado)

![Screenshot del proyecto](screenshot.png)

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica |
| CSS3 | Animaciones, glassmorphism, fondos dinámicos |
| JavaScript (ES6+) | Lógica, llamadas API, DOM manipulation |
| OpenWeatherMap API | Datos del clima en tiempo real |

## ⚡ Cómo usar

### 1. Clona el repositorio
```bash
git clone https://github.com/TU_USUARIO/dashboard-clima-animado.git
cd dashboard-clima-animado
```

### 2. Obtén tu API key gratuita
1. Ve a [openweathermap.org](https://openweathermap.org/api)
2. Crea una cuenta gratuita
3. Copia tu API key (1,000 llamadas gratis por día)

### 3. Configura la API key
Abre `index.html` y reemplaza en la línea ~200:
```javascript
const API_KEY = "TU_API_KEY_AQUI"; // <- pega tu key aquí
```

### 4. Abre en el navegador
```bash
# Opción simple: abre index.html en tu navegador
# Opción con servidor local:
npx serve .
```

## 📁 Estructura del proyecto

```
dashboard-clima-animado/
├── index.html          # Código principal (HTML + CSS + JS)
├── README.md           # Este archivo
├── screenshot.png      # Captura del proyecto
└── .gitignore
```

## 🌍 Ciudades de ejemplo (modo demo)

| Ciudad | País | Condición |
|---|---|---|
| Cuenca | 🇪🇨 Ecuador | Parcialmente nublado |
| Quito | 🇪🇨 Ecuador | Llovizna |
| Miami | 🇺🇸 USA | Soleado |
| Londres | 🇬🇧 UK | Lluvia |
| Moscú | 🇷🇺 Rusia | Nevada |

## 🔮 Próximas mejoras

- [ ] Geolocalización automática
- [ ] Modo oscuro/claro manual
- [ ] Gráfica de temperatura por horas
- [ ] Alertas de clima severo
- [ ] PWA (instalar como app)

## 👨‍💻 Autor

**Legend Fernandez**
- GitHub: arifernandezn@gmail.com
- Universidad: UCACUE — Cuenca, Ecuador

## 📄 Licencia

MIT License — libre para usar, modificar y distribuir.

---
⭐ Si te gustó el proyecto, ¡dale una estrella en GitHub!
