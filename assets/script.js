const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');


//Evento do card 1
const btnCapuz1 = document.querySelector('.btnCapuz1');

btnCapuz1.addEventListener('click', function(event) {
    event.preventDefault();

    container1.classList = 'displayContainerOff';
    container2.classList = 'displayContainerOn';
    container3.classList = 'displayContainerOff';
});

//Evento do card 1
const btnCoringa1 = document.querySelector('.btnCoringa1');

btnCoringa1.addEventListener('click', function(event) {
    event.preventDefault();

    container1.classList = 'displayContainerOn';
    container2.classList = 'displayContainerOff';
    container3.classList = 'displayContainerOff';
});

//Evento do card 1
const btnSpawn1 = document.querySelector('.btnSpawn1');

btnSpawn1.addEventListener('click', function(event) {
    event.preventDefault();

    container1.classList = 'displayContainerOff';
    container2.classList = 'displayContainerOff';
    container3.classList = 'displayContainerOn';
});



//Evento do card 2
const btnCapuz2 = document.querySelector('.btnCapuz2');

btnCapuz2.addEventListener('click', function(event) {
    event.preventDefault();

    container1.classList = 'displayContainerOff';
    container2.classList = 'displayContainerOn';
    container3.classList = 'displayContainerOff';
});

//Evento do card 2
const btnCoringa2 = document.querySelector('.btnCoringa2');

btnCoringa2.addEventListener('click', function(event) {
    event.preventDefault();

    container1.classList = 'displayContainerOn';
    container2.classList = 'displayContainerOff';
    container3.classList = 'displayContainerOff';
});

//Evento do card 2
const btnSpawn2 = document.querySelector('.btnSpawn2');

btnSpawn2.addEventListener('click', function(event) {
    event.preventDefault();

    container1.classList = 'displayContainerOff';
    container2.classList = 'displayContainerOff';
    container3.classList = 'displayContainerOn';
});



//Evento do card 3
const btnCapuz3 = document.querySelector('.btnCapuz3');

btnCapuz3.addEventListener('click', function(event) {
    event.preventDefault();

    container1.classList = 'displayContainerOff';
    container2.classList = 'displayContainerOn';
    container3.classList = 'displayContainerOff';
});

//Evento do card 3
const btnCoringa3 = document.querySelector('.btnCoringa3');

btnCoringa2.addEventListener('click', function(event) {
    event.preventDefault();

    container1.classList = 'displayContainerOn';
    container2.classList = 'displayContainerOff';
    container3.classList = 'displayContainerOff';
});

//Evento do card 3
const btnSpawn3 = document.querySelector('.btnSpawn3');

btnSpawn3.addEventListener('click', function(event) {
    event.preventDefault();

    container1.classList = 'displayContainerOff';
    container2.classList = 'displayContainerOff';
    container3.classList = 'displayContainerOn';
});




