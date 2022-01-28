(()=>{

    const fullName = (firstName:string, ...restoCosas:string[] ):string => {

        return `${firstName } ${restoCosas.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');

    console.log(superman);

})()