//JavaScript Algorithms and Data Structures.
//PRIMER EJERCICIO


function getAverage(scores) {
  // Verificar si el array está vacío
  if (scores.length === 0) {
    return 0;
  }

  // Sumar todos los elementos del array
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  // Calcular el promedio
  let average = sum / scores.length;

  return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // Resultado es: 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // Resultado es: 85.4

//SEGUNDO EJERCICIO ACONTINUACION

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  } else {
    return "Invalid score";
  }
}
//Resultados es de 96: A, el segundo 82 es: B, el tercero 56 es: F.
console.log(getGrade(96)); 
console.log(getGrade(82)); 
console.log(getGrade(56)); 



//TERCER EJERCICIO ACONTINUACION

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

//el resultado es: el primero de 100 es: true, el segundo 53 es: false, el tercero 87 es: true.
console.log(hasPassingGrade(100)); 
console.log(hasPassingGrade(53));  
console.log(hasPassingGrade(87));  


//CUARTO EJERCICIO

// Verifica si el estudiante aprobó (cualquier nota distinta de F)
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// Genera el mensaje para el estudiante
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores); // Promedio de la clase
  const grade = getGrade(studentScore);    // Nota del estudiante (letra)
  const passed = hasPassingGrade(studentScore); // Si aprobó o no

  // Construcción del mensaje
  let message = "Class average: " + average.toFixed(1) + ". Your grade: " + grade + ". ";

  if (passed) {
    message += "You passed the course.";
  } else {
    message += "You failed the course.";
  }

  return message;
}

// RESPUESTA:
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

