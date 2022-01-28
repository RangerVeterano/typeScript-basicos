(()=>{

    /*
    Basicamente una tupla es como un array pero con la diferencia
    de que se tiene que especificar el orden de los datos como se introducen
    de esa forma en el caso de abajo sabemos que se tiene que mandar como primer
    parametro un string seguido de un number y para el ultimo dato se tiene 
    que mandar un boolean
    */ 
    const hero: [string, number,boolean] = ['Dr. Strange', 100, true];
    
    hero[0] = 'Iron man'
    hero[1] = 50;
    hero[2] = false;
    

})()