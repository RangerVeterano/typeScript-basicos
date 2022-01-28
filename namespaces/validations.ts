
namespace Validations {

    export const validarTexto = (text:string):boolean => {

        return (text.length > 3)?true:false; //Es el mismo código de abajo

        // if (text.length > 3){
        //     return true
        // }else {
        //     return false
        // }

    }

    const validarFecha = (fecha:Date):boolean => {
        return (isNaN (fecha.valueOf()))?false:true;
    }

}

console.log (Validations.validarTexto('Igis'))