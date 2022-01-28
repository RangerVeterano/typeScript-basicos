(() => {

    /*
    Para esta actividad tenemos que ser lo más específicos posibles a la hora de 
    detallar los tipos de variables que tenemos
    */

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    /*
    En esta casi todo mal, básicamente había que crear dengue (muy bien)
    Luego teníamos que asignar los valores de dengue a las constantes correspondientes
    Aparte se tiene que indicar que las constantes son de tipo (Dengue en este caso)
    */

    enum Dengue {
      acuaman = 0,
      batman = 1,
      flash = 5,
      superman = 100
    }

    const fuerzaFlash:Dengue = Dengue.flash;
    const fuerzaSuperman:Dengue = Dengue.superman;
    const fuerzaBatman:Dengue = Dengue.batman;
    const fuerzaAcuaman:Dengue = Dengue.acuaman;
  
    

    // console.log(Dengue)

    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (<string>poder).length; //En esta tenías fallo, es hacer que el any sea string para poder ver el . length
    console.log( largoDelPoder );
  
  })()
