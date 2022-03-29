const CACHE_VERSION = "cache_v1";

const resourceToPrecache = [
  './',

  './index.html',
  
  './css/boton-explota.css',
  './css/stylish-portfolio.css',
  './css/mystyle.css',

  './js/boton-explota.js',
  './js/esconderbarra.js',
  './js/index.js',
  './js/boton-explota.js',
  './js/stylish-portfolio.min.js',
  './js/sweetalert2@11.js',
  './vendor/jquery/jquery.min.js', 
  './vendor/bootstrap/js/bootstrap.bundle.min.js', 
  './vendor/jquery-easing/jquery.easing.min.js',

  './img/',
];

// acciones a realizar durante la intalacion...
self.addEventListener('install', event => {
    // esperar hasta que el pre cache se complete
    event.waitUntil(precache());
});

// acciones a realizar cuando se haga una peticion
self.addEventListener('fetch', event => {
    // 1ro extraemos la peticion
    const request = event.request;
    // solo procesamos peticiones GET
    if (request.method != "GET"){ return; }
    // buscar en cache
    event.respondWith(cachedResponse(request));//respondemos con una respuesta cacheada
    // actualizar el cache
    event.waitUntil(updateCache(request));
});


// 
// FUNCION ENCARGADA DE SUBIR ALGUNOS RECURSOS ESTATICOS A LA CACHE PARA OPTIMIZAR LA CARGA DE RECURSOS
// 
async function precache() {
    // tenemos que trabajar con una api del DOM
    const cache = await caches.open(CACHE_VERSION)
    // waitUntil espera una promesa asi que debemos regresarla
    return cache.addAll(resourceToPrecache)
    .catch(error => {console.log(error.message);})
}


// 
// FUNCION ENCARGADA DE BUSCAR EN CACHE LA PETICION SOLICITADA EN CASO DE NO EXISTIR HACE LA PETICION A LA RED Y LA RETORNA
// 
async function cachedResponse(request) {
    // buscamos la cache
    const cache = await caches.open(CACHE_VERSION);
    // verificamos que la peticion enviada este contenida en la cache
    const response = await cache.match(request);
    // devolvemos la respuesta, si la respuesta es undefined por que no esta en cache devolvemos los que nos de ña red
    return response || fetch(request)
}


// 
// FUNCION ENCARGADA DE ACTUALIZAR LA CACHE PARA USO DEL SERVICEWORKER
// 
async function updateCache(request) {
    // buscamos la cache
    const cache = await caches.open(CACHE_VERSION);
    // buscamos la peticion en la red
    const response = await fetch(request);
    // con la guia de request vamos a guardar el response
    return cache.put(request, response);
    
}