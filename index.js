const { exec } = require('youtube-dl-exec');

async function descargarVideo(url) {
  try {
    const options = {
      output: '%(title)s.%(ext)s', // Nombre del archivo de salida
      restrictFilenames: true, // Restringe los caracteres especiales en el nombre del archivo
    };

    const file = await exec(url, options);
    
    console.log('¡Video descargado exitosamente!');
    console.log(file);
  } catch (error) {
    console.error('Ocurrió un error al descargar el video:', error);
  }
}

// URL del video de YouTube que deseas descargar
const videoUrl = 'https://www.youtube.com/watch?v=eOyNWshrOJQ&list=RDeOyNWshrOJQ&start_radio=1';

descargarVideo(videoUrl);
