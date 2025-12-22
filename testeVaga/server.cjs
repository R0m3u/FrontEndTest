// server.cjs - Servidor para aplicação buildada
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const SSL_ENABLED = process.env.SSL === 'true';

// Configurações de SSL (opcional)
const SSL_OPTIONS = SSL_ENABLED ? {
  key: fs.readFileSync(process.env.SSL_KEY_PATH || './ssl/key.pem'),
  cert: fs.readFileSync(process.env.SSL_CERT_PATH || './ssl/cert.pem')
} : null;

// Caminho para a pasta build (ajuste conforme necessário)
const BUILD_PATH = path.join(__dirname, 'dist'); // Para Vite/React build
// const BUILD_PATH = path.join(__dirname, 'build'); // Para Create React App
// const BUILD_PATH = path.join(__dirname, 'out'); // Para Next.js static export

// Tipos MIME
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.map': 'application/json'
};

// Função para servir arquivos estáticos
function serveStaticFile(req, res) {
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname === '/' ? '/index.html' : parsedUrl.pathname;
  
  // Prevenir directory traversal
  pathname = pathname.replace(/\.\.\//g, '');
  
  const filePath = path.join(BUILD_PATH, pathname);
  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  // Verificar se o arquivo existe
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Se não encontrar o arquivo, serve o index.html (para SPA)
      if (pathname !== '/index.html') {
        const indexPath = path.join(BUILD_PATH, 'index.html');
        fs.readFile(indexPath, (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`<h1>404 - File Not Found</h1><p>${filePath}</p>`);
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        });
        return;
      }
      
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }

    // Ler e servir o arquivo
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Internal Server Error</h1>');
        return;
      }

      // Headers adicionais para cache e segurança
      const headers = {
        'Content-Type': contentType,
        'Cache-Control': extname === '.html' 
          ? 'no-cache, no-store, must-revalidate' 
          : 'public, max-age=31536000',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
      };

      res.writeHead(200, headers);
      res.end(data);
    });
  });
}

// Criar o servidor
const server = SSL_ENABLED 
  ? https.createServer(SSL_OPTIONS, serveStaticFile)
  : http.createServer(serveStaticFile);

// Iniciar servidor
server.listen(PORT, HOST, () => {
  const protocol = SSL_ENABLED ? 'https' : 'http';
  console.log(`
🚀 Servidor rodando em:
   Local: ${protocol}://${HOST}:${PORT}
   Network: ${protocol}://${require('os').hostname()}:${PORT}

📁 Servindo arquivos de: ${BUILD_PATH}
🔍 Verificando se a pasta build existe...
  `);

  // Verificar se a pasta build existe
  fs.access(BUILD_PATH, fs.constants.F_OK, (err) => {
    if (err) {
      console.warn(`⚠️  AVISO: Pasta "${BUILD_PATH}" não encontrada!`);
      console.log(`
Para criar a build da sua aplicação:

1. Para aplicação Vite:
   npm run build

2. Para Create React App:
   npm run build

3. Para Next.js (static export):
   npm run build

4. Verifique se os arquivos estão em: ${BUILD_PATH}
      `);
    } else {
      console.log(`✅ Pasta "${BUILD_PATH}" encontrada com sucesso!`);
    }
  });
});

// Tratamento de erros
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Porta ${PORT} já está em uso!`);
    console.log(`Tente usar: PORT=${Number(PORT) + 1} node server.cjs`);
    process.exit(1);
  } else {
    console.error('❌ Erro no servidor:', error);
    process.exit(1);
  }
});

// Tratamento de sinais do sistema
process.on('SIGINT', () => {
  console.log('\n👋 Servidor encerrado pelo usuário');
  server.close(() => {
    console.log('✅ Servidor finalizado com sucesso');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n🔧 Servidor recebeu sinal de término');
  server.close(() => {
    console.log('✅ Servidor finalizado com sucesso');
    process.exit(0);
  });
});
