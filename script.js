const ingresaNum = (numero) => {
  if (!isNaN(numero) && typeof numero === 'number' && numero != null && numero != "") {
    return numero;
  } else {
    alert("Ingrese un Valor Numerico Valido");
  }
}

const ingresOpe = (operacion) => {
  if (operacion === "/" || operacion === "*" || operacion === "+" || operacion === "-") {
    return operacion;
  } else {
    alert("Ingrese una operacion Valida");
    recarga();
  }
}

function calcular(){
  switch (operacion) {
    case "+":
      if (tot===0) {
        tot = tot + (num + num1);
        operacion = ingresOpe(prompt(`El resultado de la suma es ${tot} Seleccione que operacion quiere hacer ahora / * + -`));
        num1 = ingresaNum(Number(prompt("Ingrese Otro Numero")));
      }else{
        tot = (tot + num1);
        operacion = ingresOpe(prompt(`El resultado de la suma es ${tot} Seleccione que operacion quiere hacer ahora / * + -`));
        num1 = ingresaNum(Number(prompt("Ingrese Otro Numero")));
        num = 0;
      }
       break;
    case "-":
      if (tot===0) {
        tot = tot + (num - num1);
        operacion = ingresOpe(prompt(`El resultado de la resta es ${tot} Seleccione que operacion quiere hacer ahora / * + -`));     
        num1 = ingresaNum(Number(prompt("Ingrese Otro Numero")));        
      } else {
        tot = (tot - num1);
        operacion = ingresOpe(prompt(`El resultado de la resta es ${tot} Seleccione que operacion quiere hacer ahora / * + -`));     
        num1 = ingresaNum(Number(prompt("Ingrese Otro Numero")));    
        num = 0;
      }
      break;
    case "*":
      if (tot === 0) {
        tot = tot + (num * num1);
        operacion = ingresOpe(prompt(`El resultado de la multiplicacion es ${tot} Seleccione que operacion quiere hacer ahora / * + -`));
        num1 = ingresaNum(Number(prompt("Ingrese Otro Numero")));
      }else{
        tot = (tot * num1);
        operacion = ingresOpe(prompt(`El resultado de la multiplicacion es ${tot} Seleccione que operacion quiere hacer ahora / * + -`));
        num1 = ingresaNum(Number(prompt("Ingrese Otro Numero")));
        num = 0;
      }
      break;
    case "/":
      if (tot === 0) {
        tot = tot + (num / num1);
        operacion = ingresOpe(prompt(`El resultado de la Division es ${tot} Seleccione que operacion quiere hacer ahora / * + -`));
        num1 = ingresaNum(Number(prompt("Ingrese Otro Numero")));
      }else{
        tot = (tot / num1);
        operacion = ingresOpe(prompt(`El resultado de la Division es ${tot} Seleccione que operacion quiere hacer ahora / * + -`));
        num1 = ingresaNum(Number(prompt("Ingrese Otro Numero")));
        num = 0;
      }
      break;
    default:
      tot = 0;
  }
}



function recarga(){
  location.reload();
}

  let num;
  let operacion;
  let num1;
  let tot = 0;   


  num = ingresaNum(Number(prompt("Ingrese un numero")));
  operacion = ingresOpe(prompt("Ingrese la operacion que desea realizar / * + -"));
  num1 = ingresaNum(Number(prompt("Ingrese Otro Numero")));
 
let i = false;
if (i===false) {
  msj = '!isNaN(num) && num != null && num != ""';
}else{
  i = true;
  msj = 'i===true';
}


while (num !== "ESC" || operacion !== "ESC" || num1 !== "ESC") {
        if (!isNaN(num1) && num1 != null && num1 != "") {
        calcular();
        } else {
          break;
        }//cierre if segundo numero

}//Cierre WHILE







