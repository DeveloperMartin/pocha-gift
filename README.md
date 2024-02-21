> [!IMPORTANT]
> Este proyecto fue creado por Zatge, si tienes alguna duda o necesitas ayuda, no dudes en contactarme a través de mis redes sociales: [Instagram](https://www.instagram.com/martinsktordie/), [Twitter](https://twitter.com/PatinetaLove), [Youtube](https://www.youtube.com/channel/UCSYonw54zWp4xGfVuvYItsQ) [Twitch](https://www.twitch.tv/zatge)


> [!NOTE]
> Por favor, apoyame con una estrella en el repositorio si te ha sido de ayuda este proyecto y seguime en mis redes. Gracias! 🌟

# Guía de Inicio Rápido para Angular 17 🚀

Bienvenido a tu nueva aplicación Angular 17. Este documento te guiará a través de los requisitos previos, la instalación y los pasos necesarios para levantar y correr tu proyecto Angular.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js**: Angular 17 requiere una versión reciente de Node.js. Recomendamos la última versión LTS que puedes encontrar en [Node.js Downloads](https://nodejs.org/en/download/).

- **npm (Node Package Manager)**: Viene con Node.js, pero es bueno verificar que tienes la última versión. Puedes actualizarlo ejecutando `npm install -g npm` en tu terminal.

## Instalación de Angular CLI

Angular CLI es una herramienta poderosa que te permite iniciar, desarrollar, escalar y mantener aplicaciones Angular desde la línea de comando. Para instalarlo globalmente en tu sistema, ejecuta el siguiente comando en tu terminal:

```bash
npm install -g @angular/cli
```


## Crear un Nuevo Proyecto

Con Angular CLI ya instalado, estás listo para crear tu primer proyecto Angular. Abre tu terminal y ejecuta:

```bash
ng new mi-app-angular
```

Sigue las instrucciones en la terminal para configurar tu proyecto.

## Levantar tu Aplicación

Una vez que tu proyecto haya sido creado, navega al directorio del proyecto:

```bash
cd mi-app-angular
```


Y levanta el servidor de desarrollo de Angular:

```bash
ng serve
```


Abre tu navegador en http://localhost:4200 para ver tu nueva aplicación corriendo.


Tambien puede correr el siguiente comando para abrir la aplicación en el navegador por defecto automáticamente:

```bash
ng serve -o
```


## Próximos Pasos

- **Explora el Código**: Abre el directorio del proyecto en tu editor de código favorito y comienza a explorar.
- **Aprende Angular**: Visita la [documentación oficial de Angular](https://angular.io/docs) para profundizar en cómo desarrollar aplicaciones con Angular.
- **Únete a la Comunidad**: Angular tiene una comunidad muy activa y amigable. Únete a foros, grupos en redes sociales o asiste a meetups para conectar con otros desarrolladores.


## Queres preparar tu propio juego customizado?

Los archivos importantes estan en:

- `src\assets` - Este directorio contiene tus recursos estáticos como las imágenes de las cartas.
- `src\app\quote\quote.component.ts` - Este archivo contiene la lógica que muestra las frases en la pantalla.
- `src\app\services\confetti.service.ts` - Este archivo contiene la lógica que muestra el efecto de confetti en la pantalla.
- `src\app\board\board.component.ts` - Este archivo contiene la lógica que muestra el tablero del juego en la pantalla.
- `src\app\timer\timer.component.ts` - Este archivo contiene la lógica que muestra el temporizador en la pantalla.


Sin embargo, te aconsejo que leas todo el codigo y cualquier duda que tengas me la hagas saber.
