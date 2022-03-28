const title_veterinaria='El sitio web <strong>Veterinaria Patitas</strong> se abrirá en una pestaña nueva. ¿Desea continuar?';
const title_bebe='El sitio web <strong>CreacionesBuho</strong> se abrirá en una pestaña nueva. ¿Desea continuar?';
const title_remera='El sitio web <strong>Frontend Store</strong> se abrirá en una pestaña nueva. ¿Desea continuar?';
const title_becas='El sitio web <strong>Prosecretaría de asuntos estudiantiles</strong> se abrirá en una pestaña nueva. ¿Desea continuar?';
const title_boleta='El sitio web <strong>Lista de productos</strong> se abrirá en una pestaña nueva. ¿Desea continuar?';
const title_evento='El sitio web <strong>Generar Conciencia</strong> se abrirá en una pestaña nueva. ¿Desea continuar?';


const VETERINARIA="https://veterinariapatitasori.netlify.app/";
const BEBE="https://bebetiendas.netlify.app//";
const REMERA="https://tiendaremera.netlify.app/";
const BECAS="https://prosecretaria-nuevo-site.netlify.app/";
const BOLETA="https://boleta-de-productos.netlify.app/";
const EVENTO="https://expo-generar-conciencia.herokuapp.com/";



var e = document.getElementById("veterinaria");
null != e &&
  e.addEventListener("click", (e) => {
    custom_popup(title_veterinaria, abri_website, VETERINARIA);
    console.log("entre veterinaria")
  });
var e = document.getElementById("bebe");
null != e &&
  e.addEventListener("click", (e) => {
    custom_popup(title_bebe, abri_website, BEBE);
  });
var e = document.getElementById("remera");
null != e &&
  e.addEventListener("click", (e) => {
    custom_popup(title_remera, abri_website, REMERA);
  });
var e = document.getElementById("becas");
null != e &&
  e.addEventListener("click", (e) => {
    custom_popup(title_becas, abri_website, BECAS);
  });
var e = document.getElementById("boleta");
null != e &&
  e.addEventListener("click", (e) => {
    custom_popup(title_boleta, abri_website, BOLETA);
  });
var e = document.getElementById("evento");
null != e &&
  e.addEventListener("click", (e) => {
    custom_popup(title_evento, abri_website, EVENTO);
  });


function custom_popup(titulo, comportamiento, parametro) {
  Swal.fire({
    customClass: {
      confirmButton: "alert-btn confirm-btn",
      denyButton: "alert-btn cancel-btn",
      closeButton: "cancel-btn",
      popup: "swal2-pop-style",
    },
    buttonsStyling: !1,
    title: titulo,
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
    backdrop: `
      rgba(0,0,123,0.4)
      url("./static/images/demo-142x170.gif")
      left top
      no-repeat
    `,
  }).then((result) => {
    if (result.isConfirmed) {
      comportamiento(parametro);
    }
  });
}
function custom_popup_2(titulo1) {
  Swal.fire({
    title: titulo1,
    imageUrl: "./static/images/ansiedad.png",
    imageWidth: 512,
    imageHeight: 256,
    imageAlt: "oh no",
    backdrop: `
      rgba(0,0,123,0.4)
      url("./static/images/demo-142x170.gif")
      left top
      no-repeat
    `,
  });
}


function abri_website(url) {
  window.open(url, "_blank");
}
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function () {
//     navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
//       function (registration) {
//         console.log(
//           "ServiceWorker registration successful with scope: ",
//           registration.scope
//         );
//       },
//       function (err) {
//         console.log("ServiceWorker registration failed: ", err);
//       }
//     );
//   });
// }
