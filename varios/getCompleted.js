// Reto 26: 🎯 Calcula el porcentaje completado
// ¡Santa Claus ya ha repartido todos los regalos!
// Ahora está revisando los informes de productividad de los elfos.
// Pero hay un problema: la Product Owner, Mrs. Claus 🧑‍🎄✨,
// necesita entender rápidamente si los elfos cumplieron con los tiempos estimados.
// Están haciendo Agile Scream.

// Para ayudar a Mrs. Claus, tu tarea es calcular el porcentaje completado de cada tarea y
//  devolverlo redondeado al número entero más cercano.
// Esto le permitirá planificar mejor para la próxima Navidad y mantener a todos contentos.

// Esta es la función que espera:
/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
  //   console.log(timeWorked);
  //   console.log(totalTime);
  let horaW = 0,
    minW = 0,
    segW = 0;
  let arrayWorked = timeWorked.split(":");
  [horaW, minW, segW] = arrayWorked;
  horaW = parseInt(horaW);
  minW = parseInt(minW);
  segW = parseInt(segW);

  let totalMinW = 0;
  totalMinW = horaW * 60 + minW;

  let horaT = 0,
    minT = 0,
    segT = 0;
  let arrayTotal = totalTime.split(":");
  [horaT, minT, segT] = arrayTotal;

  horaT = parseInt(horaT);
  minT = parseInt(minT);
  segT = parseInt(segT);

  totalMinT = horaT * 60 + minT;

  let total = Math.round((totalMinW / totalMinT) * 100);
  //   Math.ro
  console.log(`${total}%`);
}
// getCompleted("01:00:00", "03:00:00"); // 33%
// getCompleted("02:00:00", "04:00:00"); // 50%
// getCompleted("01:00:00", "01:00:00"); // 100%
// getCompleted("00:10:00", "01:00:00"); // 17%
// getCompleted("01:10:10", "03:30:30"); // 33%
// getCompleted("03:30:30", "05:50:50"); // 60%
