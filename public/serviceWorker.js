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
  '/logo192.png',
  '/logo512.png',
  '/favicon.ico',
  'static/js/bundle.js',
  'static/js/0.chunk.js',
  'static/js/1.chunk.js',
  'static/js/main.chunk.js',
  'static/media/',
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

