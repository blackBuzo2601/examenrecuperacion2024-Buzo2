## **BitRacing**

### **Objetivo:**

Desarrollar un programa que simule una carrera entre dos dígitos adyacentes de un número ingresado por el usuario. La mecánica de la carrera dependerá de ciertas condiciones.

### **Instrucciones para correr el script**

- NOTA: Esta solución fue realizada usando el entorno de ejecución de Node.js v20.18.0.
- Abrir una nueva terminal y asegurarse de estar en la ruta correspondiente: \Backend1ExamenRecuperacionBuzo\Problema1
- Si se encuentra dentro de \Backend1ExamenRecuperacionBuzo cambie de dirección con el comando: cd Problema1
- Estando en la ruta indicada, escribir: node app.js.
- El script se ejecutará en la terminal.

### **Instrucciones:**

1. **Entrada:**

   - El programa solicitará al usuario ingresar un número entero positivo.

2. **Procesamiento:**

   - **Iteración:** Recorrerá el número dígito por dígito.
   - **Comparación:**
     - Sumará los primeros dos dígitos y los siguientes dos.
     - Comparará los resultados de ambas sumas.
     - Si alguno de los resultados es un número de dos dígitos, sumará sus dígitos individuales, asi sucesivamente hasta llegar al resultado de 1 digito.
   - **Decisión:**
     - Si el resultado de la primera suma es mayor que el de la segunda, el Carro_X "avanza".
     - Si el resultado de la segunda suma es mayor, el Carro_Y "avanza".
     - En caso de empate, ambos pares "avanzan".
   - **Repetición:**
     - El proceso se repetirá hasta que solo quede un dígito o un par de dígitos.

3. **Salida:**
   - El programa mostrará el dígito o par de dígitos "ganador" al final de la carrera/combate, asi como las sumas realizadas para poder validar el resultado final.

### **Ejemplo:**

Si el usuario ingresa el número `2342554354`, el programa podría mostrar el siguiente proceso:

| Carro_X               | Carro_Y | Ganador |
| --------------------- | ------- | ------- |
| 2+3 = 5               | 4+2 = 6 | Carro_Y |
| 5+5 = 10, <br>1+0 = 1 | 4+3 = 7 | Carro_Y |

### **Consideraciones Adicionales:**

- **Manejo de excepciones:** El programa debe validar que el usuario ingrese un número entero positivo.
- **Eficiencia:** Se valorará la eficiencia del algoritmo utilizado.
- **Modularidad:** Se recomienda dividir el programa en funciones más pequeñas para mejorar la legibilidad y mantenibilidad.
- **Documentación:** El código debe estar bien documentado con comentarios explicativos.

### **Entrega:**

- **Repositorio de Git:** Hacer un Fork de este repositorio y dejarlo publico para su entrega.
- **Commits:** Se revisara la frecuencia y calidad de los commits "no se permitira un commit con todo el codigo, debera existir evidencia del desarrollo.
- **Archivos a entregar:**
  - `main.py || main.js` (o el archivo principal en el lenguaje elegido)
  - `README.md`: Un archivo que explique cómo ejecutar el programa y cualquier decisión de diseño tomada, asi como los datos del alumno (Matricula, Nombre Completo, Materia y Fecha).

**Lenguajes de Programación:**

Este ejercicio puede ser implementado en los siguientes lenguajes de programación, como Python, JavaScript, Typescript.
