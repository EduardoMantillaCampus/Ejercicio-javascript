function Listar(nota) {
 let rango
 if (nota >= 90 && nota <= 100) {
  rango = 'rango90-100'
 } else if (nota >= 80 && nota <= 89) {
  rango = 'rango80-89'
 } else if (nota >= 70 && nota <= 79) {
  rango = 'rango70-79'
 } else if (nota >= 60 && nota <= 69) {
  rango = 'rango60-69'
 } else if (nota < 60 && nota >= 1) {
  rango = 'rangoMenos60'
 } else if (nota === 0) {
  rango = 'Dato no valido'
 } else {
  console.log('Dato no valido')
 }
 const filas = document.getElementsByTagName('tr')
 for (let i = 1; i < filas.length; i++) {
  const fila = filas[i]
  if (fila.id !== rango) {
   fila.style.display = 'none'
  } else {
   fila.style.display = ''
  }
 }
}

const nombre = prompt('Digite su nombre: ')
const nota = parseInt(prompt('Digite su nota: '))

const saludo = `¡Hola ${nombre}!`
document.getElementById('titulo').textContent = saludo
Listar(nota)
