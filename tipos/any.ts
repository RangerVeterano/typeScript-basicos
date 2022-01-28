(()=> {

    let avenger:any = 123 ;
    let exits;
    let power;

    avenger = 'Doctor strange';
     
    // console.log(avenger.charAt(0))
    console.log((avenger as string).charAt(0))

    avenger = 150.1238321;

    console.log(<number>avenger.toFixed(2));

    console.log(exits)

    console.log(power)
})()