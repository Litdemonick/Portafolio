// protect.js - Protección extendida contra Ctrl+U, F12, inspección, selección, etc.
(function () {
'use strict';

// =====================================
// CONFIGURACIÓN
const devtoolsRedirect = false; // cambia a true si quieres redirigir al detectar DevTools
const redirectUrl = "about:blank";

// =====================================

// Bloquear clic derecho
document.addEventListener("contextmenu", e => e.preventDefault(), { passive: false });
document.addEventListener("contextmenu", e => {
  const target = e.target;
  // Permitir menú contextual en campos de entrada para corrección ortográfica
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
    return true;
  }
  e.preventDefault();
}, { passive: false });

// Bloquear selección y corte SOLO fuera de inputs/textareas
document.addEventListener("selectstart", e => {
  const target = e.target;
  // Permitir selección en campos de entrada
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
    return true;
  }
  e.preventDefault();
}, { passive: false });

document.addEventListener("cut", e => {
  const target = e.target;
  // Permitir cortar en campos de entrada
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
    return true;
  }
  e.preventDefault();
}, { passive: false });

document.addEventListener("paste", e => {
  const target = e.target;
  // Permitir pegar en campos de entrada
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
    return true;
  }
  e.preventDefault();
}, { passive: false });

// Bloquear atajos de teclado (más robusto)
document.addEventListener("keydown", e => {
const key = e.key.toLowerCase();
const code = e.code.toLowerCase();
const target = e.target;

// PERMITIR Ctrl+C, Ctrl+V, Ctrl+X en campos de entrada
if ((target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) && 
    e.ctrlKey && (key === "c" || key === "v" || key === "x")) {
  return true; // Permitir copiar, pegar y cortar en campos
}

// Bloquea Ctrl+U
if (e.ctrlKey && key === "u") {
e.preventDefault();
return false;
    }

// Bloquea Ctrl+S, Ctrl+P (guardar/imprimir)
if (e.ctrlKey && (key === "s" || key === "p")) {
e.preventDefault();
return false;
    }

// Bloquea F12
if (e.keyCode === 123 || code === "f12") {
e.preventDefault();
return false;
    }

// Bloquea Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) {
e.preventDefault();
return false;
    }

// Bloquea Ctrl+Shift+K (Firefox Web Console)
if (e.ctrlKey && e.shiftKey && key === "k") {
e.preventDefault();
return false;
    }

// Bloquea Ctrl+F (buscar)
if (e.ctrlKey && key === "f") {
e.preventDefault();
return false;
    }

// Bloquea Ctrl+H (historial)
if (e.ctrlKey && key === "h") {
e.preventDefault();
return false;
    }

// Bloquea Ctrl+J (descargas)
if (e.ctrlKey && key === "j") {
e.preventDefault();
return false;
    }
  }, { passive: false });

// Detección básica de DevTools (diferencia de tamaños)
setInterval(() => {
const threshold = 160;
if (
Math.abs(window.outerWidth - window.innerWidth) > threshold ||
Math.abs(window.outerHeight - window.innerHeight) > threshold
    ) {
console.warn("NIBARRA: DevTools detectado");
if (devtoolsRedirect) window.location.href = redirectUrl;
    }
  }, 1000);

// Desactiva arrastre de imágenes o texto
document.addEventListener("dragstart", e => e.preventDefault(), { passive: false });

})();