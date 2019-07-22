// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(  /*Generar una direccion para el host de la aplicación*/
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // El constructor de URL está disponible en todos los navegadores que admiten SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Nuestro trabajador de servicio no funcionará si PUBLIC_URL tiene un origen diferente
      // de lo que se sirve nuestra página. Esto podría suceder si se utiliza un CDN para
      // servir a los bienes; vea https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        
        // Esto se está ejecutando en localhost. Vamos a comprobar si un trabajador de servicios todavía existe o no.
        checkValidServiceWorker(swUrl, config);

        // Agrega algún registro adicional a localhost, apuntando a los desarrolladores a la
        // trabajador de servicio / documentación PWA.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // No es localhost. Solo registre al trabajador de servicio
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              /*
              En este punto, se ha recuperado el contenido precopeado actualizado,
               pero el trabajador de servicio anterior todavía servirá el contenido anterior
                hasta que se cierren todas las pestañas del cliente.*/
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Ejecutar  llamada
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              /*
              En este punto, todo ha sido preestablecido.
               Es el momento perfecto para mostrar un contenido que se almacena 
               en caché para su uso sin conexión.*/
              
              // "" mensaje.
              console.log('Content is cached for offline use.');

              // EEjecutar llamada
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Compruebe si se puede encontrar el trabajador de servicio. Si no puede recargar la página.
  fetch(swUrl)
    .then(response => {
      // Asegúrese de que el trabajador de servicio exista y de que realmente obtengamos un archivo JS.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // Compruebe si se puede encontrar el trabajador de servicio. Si no puede recargar la página.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        //Trabajador de servicio encontrado. Proceda como de costumbre.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
