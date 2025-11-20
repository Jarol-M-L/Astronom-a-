function clasificar() {
    let mag = parseFloat(document.getElementById("magnitud").value);
    let mensaje = "";

    if (mag <= 0) {
      mensaje = "Extremadamente brillante";
    } else if (mag <= 2) {
      mensaje = "Muy brillante";
    } else if (mag <= 4) {
      mensaje = "Brillante";
    } else if (mag <= 6) {
      mensaje = "Débil";
    } else {
      mensaje = "No visible a simple vista";
    }

    document.getElementById("resultadoBrillo").innerHTML = mensaje;
  }
  function pedirDistancias() {
    const n = parseInt(document.getElementById("numPlanetas").value);
    const contenedor = document.getElementById("distanciasInputs");
    contenedor.innerHTML = "";

    for (let i = 0; i < n; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = `Distancia del planeta ${i + 1} (millones km)`;
      input.id = `planeta${i}`;
      contenedor.appendChild(input);
      contenedor.appendChild(document.createElement("br"));
    }

    const botonCalcular = document.createElement("button");
    botonCalcular.textContent = "Calcular Promedio";
    botonCalcular.onclick = calcularPromedio;
    contenedor.appendChild(botonCalcular);
  }

  function calcularPromedio() {
    const n = parseInt(document.getElementById("numPlanetas").value);
    let suma = 0;

    for (let i = 0; i < n; i++) {
      const valor = parseFloat(document.getElementById(`planeta${i}`).value);
      suma += valor;
    }

    const promedio = suma / n;
    document.getElementById("resultadoPromedio").innerHTML = 
      `El promedio de las distancias es ${promedio.toFixed(2)} millones de km`;
  }

  let contadorGrandes = 0;

  function agregarCrater() {
    let diametroActual = parseFloat(document.getElementById("diametro").value);

    while (diametroActual !== 0) {
      if (diametroActual > 50) {
        contadorGrandes++;
      }
      document.getElementById("resultadoCrater").innerHTML = `Cráteres > 50 km: ${contadorGrandes}`;
      break; 
    }

    if (diametroActual === 0) {
      document.getElementById("resultadoCrater").innerHTML = 
        `Lectura finalizada. Total de cráteres > 50 km: ${contadorGrandes}`;
    }

    document.getElementById("diametro").value = "";
    document.getElementById("diametro").focus();
  }

  function identificarCuerpo() {
    const codigo = parseInt(document.getElementById("codigo").value);
    let mensaje = "";

    switch(codigo) {
      case 1: mensaje = "Estrella"; break;
      case 2: mensaje = "Planeta"; break;
      case 3: mensaje = "Cometa"; break;
      case 4: mensaje = "Asteroide"; break;
      case 5: mensaje = "Galaxia"; break;
      default: mensaje = "Código no válido. Ingresa un número del 1 al 5.";
    }

    document.getElementById("resultadoCuerpo").innerHTML = mensaje;
  }

  let valoresLuz = [];

  function registrarLuz() {
    let entrada;
    do {
      entrada = document.getElementById("nivelLuz").value;

      if (entrada.toLowerCase() === "no") {
        document.getElementById("resultadoLuz").innerHTML = 
          `Registro finalizado. Valores ingresados: ${valoresLuz.join(", ")}`;
        break;
      }

      let valor = parseFloat(entrada);

      if (!isNaN(valor)) {
        valoresLuz.push(valor);
        if (valor < 5) {
          document.getElementById("resultadoLuz").innerHTML = "Noche profunda";
        } else {
          document.getElementById("resultadoLuz").innerHTML = `Nivel registrado: ${valor} lux`;
        }
      } else {
        document.getElementById("resultadoLuz").innerHTML = "Entrada inválida. Ingresa un número o 'no'.";
      }

      document.getElementById("nivelLuz").value = "";
      document.getElementById("nivelLuz").focus();
      break; 
    } while (true);
  }