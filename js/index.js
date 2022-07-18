const title_educanding =
    "El sitio web <strong>Educanding</strong>"+"\n"+ "se abrirá en una pestaña nueva."+"\n"+ " ¿Desea continuar?",
  title_bebe =
    "El sitio web <strong>CreacionesBuho</strong>"+"\n"+ "se abrirá en una pestaña nueva." +"\n"+ "¿Desea continuar?",
  title_remera =
    "El sitio web <strong>Frontend Store</strong>"+"\n"+ "se abrirá en una pestaña nueva." +"\n"+ "¿Desea continuar?",
  title_becas =
    "El sitio web <strong>Prosecretaría de asuntos estudiantiles</strong>"+"\n"+ "se abrirá en una pestaña nueva."+"\n"+ " ¿Desea continuar?",
  title_boleta =
    "El sitio web <strong>Lista de productos</strong>"+"\n"+ "se abrirá en una pestaña nueva." +"\n"+ "¿Desea continuar?",
  title_evento =
    "El sitio web <strong>Generar Conciencia</strong>"+"\n"+ "se abrirá en una pestaña nueva." +"\n"+ "¿Desea continuar?",
  title_taekwondo =
    "El sitio web <strong>Asociación de TAE KWON DO y HAPKIDO de La Plata</strong>"+"\n"+ "se abrirá en una pestaña nueva."+"\n"+ " ¿Desea continuar?",
  
  
EDUCANDING = "http://educanlink7.herokuapp.com/",
  BEBE = "https://bebetiendas.netlify.app//",
  REMERA = "https://tiendaremera.netlify.app/",
  BECAS = "https://prosecretaria-nuevo-site.netlify.app/",
  BOLETA = "https://boleta-de-productos.netlify.app/",
  EVENTO = "https://expo-generar-conciencia.herokuapp.com/";
  TAEKWONDO= "https://laplatatkd.herokuapp.com/";
var e;
function custom_popup(e, t, n) {
  Swal.fire({
    customClass: {
      confirmButton: "alert-btn confirm-btn",
      denyButton: "alert-btn cancel-btn",
      closeButton: "cancel-btn",
      popup: "swal2-pop-style",
    },
    buttonsStyling: !1,
    text:e,
    icon: "warning",
    iconColor: "#E10000",
    showCloseButton: !0,
    showDenyButton: !0,
    focusConfirm: !1,
    confirmButtonText: "Si.",
    denyButtonText: "No.",
    confirmButtonAriaLabel: "Si.",
    denyButtonAriaLabel: "No.",
    width: "auto",
    height: "auto",
    color: "#000",
    background:
      "#FBFFF0 url(./static/images/greeb.jpg) no-repeat left center/contain",
    backdrop:
      '\n      rgba(0,0,123,0.4)\n      url("./static/images/demo-142x170.gif")\n      left top\n      no-repeat\n    ',
  }).then((e) => {
    e.isConfirmed && t(n);
  });
}
function custom_popup_2(e) {
  Swal.fire({
    title: e,
    imageUrl: "./static/images/ansiedad.png",
    imageWidth: 80,
    imageHeight: 256,
    imageAlt: "oh no",
    backdrop:
      '\n      rgba(0,0,123,0.4)\n      url("./static/images/demo-142x170.gif")\n      left top\n      no-repeat\n    ',
  });
}
function abri_website(e) {
  window.open(e, "_blank");
}
null != (e = document.getElementById("educanding")) &&
  e.addEventListener("click", (e) => {
    custom_popup(title_educanding, abri_website, EDUCANDING),
      console.log("entre educanding");
  }),
  null != (e = document.getElementById("bebe")) &&
    e.addEventListener("click", (e) => {
      custom_popup(title_bebe, abri_website, BEBE);
    }),
  null != (e = document.getElementById("remera")) &&
    e.addEventListener("click", (e) => {
      custom_popup(title_remera, abri_website, REMERA);
    }),
  null != (e = document.getElementById("becas")) &&
    e.addEventListener("click", (e) => {
      custom_popup(title_becas, abri_website, BECAS);
    }),
  null != (e = document.getElementById("boleta")) &&
    e.addEventListener("click", (e) => {
      custom_popup(title_boleta, abri_website, BOLETA);
    }),
  null != (e = document.getElementById("evento")) &&
    e.addEventListener("click", (e) => {
      custom_popup(title_evento, abri_website, EVENTO);
    }),
    null != (e = document.getElementById("taekwondo")) &&
    e.addEventListener("click", (e) => {
      custom_popup(title_taekwondo, abri_website, TAEKWONDO);
    }),
  "serviceWorker" in navigator &&
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
        function (e) {
          console.log(
            "ServiceWorker registration successful with scope: ",
            e.scope
          );
        },
        function (e) {
          console.log("ServiceWorker registration failed: ", e);
        }
      );
    });
