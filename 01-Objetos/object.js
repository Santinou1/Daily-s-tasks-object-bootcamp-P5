function setPropsOnObj(obj) {
  obj.p = 5;
  obj["plataforma"] = 5;
  obj.proximo = function (num) {
    return num + 1;
  };
  obj.la = {
    clave: {
      secreta: {
        es: 404,
      },
    },
  };
}

function setPropsOnArr(array) {
  array.hola = function () {
    return "Hola!";
  };
  array.river = "plate";
  array[0] = 5;
  array.doble = function (num) {
    return num * 2;
  };
}

function setPropsOnFunc(functionObjects) {
  functionObject = function () {
    return "Soy una función con propiedades!";
  };
  const año = new Date();
  functionObjects.year = año.getFullYear();
  functionObjects.mitad = function (num) {
    return num / 2;
  };
  functionObjects.prototype["helloWorld"] = function () {
    return "Hello World";
  };
}
