const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist', 'cd-futuro13');
const indexPath = path.join(distPath, 'index.html');
const custom404Path = path.join(__dirname, 'src', '404.html');
const output404Path = path.join(distPath, '404.html');

console.log('🔧 Procesando archivo 404.html...');

try {
  // Verificar si el directorio de distribución existe
  if (!fs.existsSync(distPath)) {
    console.error('❌ El directorio de distribución no existe:', distPath);
    process.exit(1);
  }

  // Verificar si existe el archivo 404.html personalizado
  if (fs.existsSync(custom404Path)) {
    fs.copyFileSync(custom404Path, output404Path);
    console.log('✅ 404.html personalizado copiado exitosamente');
  } else if (fs.existsSync(indexPath)) {
    // Fallback: copiar index.html como 404.html
    fs.copyFileSync(indexPath, output404Path);
    console.log('✅ index.html copiado como 404.html (fallback)');
  } else {
    console.error('❌ No se encontró index.html en el directorio de distribución');
    process.exit(1);
  }

  console.log('🎉 Proceso completado correctamente');
} catch (error) {
  console.error('❌ Error al procesar 404.html:', error.message);
  process.exit(1);
}
