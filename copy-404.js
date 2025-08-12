const fs = require('fs');
const path = require('path');

// Actualizar rutas para nueva estructura de Angular 17+
const distPath = path.join(__dirname, 'dist', 'cd-futuro13', 'browser');
const indexPath = path.join(distPath, 'index.html');
const custom404Path = path.join(__dirname, 'src', '404.html');
const output404Path = path.join(distPath, '404.html');
const cnameSourcePath = path.join(__dirname, 'src', 'CNAME');
const cnameOutputPath = path.join(distPath, 'CNAME');
const nojekyllSourcePath = path.join(__dirname, 'src', '.nojekyll');
const nojekyllOutputPath = path.join(distPath, '.nojekyll');

console.log('🔧 Procesando archivos para deploy...');

try {
  // Verificar si el directorio de distribución existe
  if (!fs.existsSync(distPath)) {
    console.error('❌ El directorio de distribución no existe:', distPath);
    process.exit(1);
  }

  // Copiar 404.html
  if (fs.existsSync(custom404Path)) {
    fs.copyFileSync(custom404Path, output404Path);
    console.log('✅ 404.html personalizado copiado exitosamente');
  } else if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, output404Path);
    console.log('✅ 404.html creado desde index.html');
  } else {
    console.warn('⚠️ No se pudo crear 404.html - archivos fuente no encontrados');
  }

  // Copiar CNAME
  if (fs.existsSync(cnameSourcePath)) {
    fs.copyFileSync(cnameSourcePath, cnameOutputPath);
    console.log('✅ CNAME copiado exitosamente');
  } else {
    // Crear CNAME si no existe
    fs.writeFileSync(cnameOutputPath, 'corporaciondeportivafuturo13.com');
    console.log('✅ CNAME creado exitosamente');
  }

  // Copiar .nojekyll
  if (fs.existsSync(nojekyllSourcePath)) {
    fs.copyFileSync(nojekyllSourcePath, nojekyllOutputPath);
    console.log('✅ .nojekyll copiado exitosamente');
  } else {
    // Crear .nojekyll si no existe
    fs.writeFileSync(nojekyllOutputPath, '');
    console.log('✅ .nojekyll creado exitosamente');
  }

  console.log('🎉 Todos los archivos procesados correctamente');
  console.log('📁 Archivos en:', distPath);

} catch (error) {
  console.error('❌ Error procesando archivos:', error.message);
  process.exit(1);
}
