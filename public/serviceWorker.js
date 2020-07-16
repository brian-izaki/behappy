function instalarServiceWorker(){
  console.log('ServiceWorker instalado com sucesso');
}

self.addEventListener('install', instalarServiceWorker);

const identificador = 'behappy.sw';
const versao = 1;
const idAtual = identificador + '-' + versao;
const idAnterior = identificador + '-' + (versao - 1);
const urls = [
  '/',
  '/manifest.json',

  '/icon-72x72.png',
  '/icon-96x96.png',
  '/icon-128x128.png',
  '/icon-144x144.png',
  '/icon-152x152.png',
  '/icon-192x192.png',
  '/icon-384x384.png',
  '/icon-512x512.png',

  '/favicon.ico',
  'static/js/bundle.js',
  'static/js/0.chunk.js',
  // 'static/js/1.chunk.js',
  'static/js/main.chunk.js',
  'static/media/avatars.4397a006.png',
];

function ativarServiceWorker(){
  caches.open(idAtual).then(cache => {
    console.log(`cache storage ${idAtual} foi ativado com sucesso!`);

    cache.addAll(urls)
      .then(()=>{
        caches.delete(idAnterior)
        console.log(`Cache Storage ${idAnterior} foi excluído`);
      })
  })
}

self.addEventListener('activate', ativarServiceWorker);

function buscarArquivos(event){
  console.log(event.request)
  event.respondWith(
    caches.match(event.request)
      .then( arquivoCache => arquivoCache 
        ? arquivoCache 
        : fetch(event.request) )
  )
}

self.addEventListener('fetch', buscarArquivos);

