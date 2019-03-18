function handleOrientation(event) {

    let gamma    = event.gamma; // x axis => right (+ve) => left => (-ve)

    if(gamma > 10){
        keyRight = true
        console.log('Gama Changed +ve: ', gamma);
    } else if(gamma >= -10 && gamma <= 10){
        keyLeft = true
        console.log('Gama in range -10 to 10: ', gamma);
    } else if(gamma < -10){
        keyRight = false
        keyLeft = false
        console.log('Game Changed -ve: ', gamma)
    }
}

window.addEventListener('deviceorientation', handleOrientation);
