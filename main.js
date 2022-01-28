"use strict";
var Validations;
(function (Validations) {
    Validations.validarTexto = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validarFecha = (fecha) => {
        return (isNaN(fecha.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validarTexto('Igis'));
//# sourceMappingURL=main.js.map