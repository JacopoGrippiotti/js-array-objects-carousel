const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carousel = document.querySelector('div.carousel')

const previousButton = document.querySelector('div.pre-button')

const carouselContainer = document.querySelector('main')





images.forEach( element => {

    
    let carouselElement = document.createElement('div')

    carouselElement.classList.add('carouselItem')

    carouselElement.innerHTML += 
    
    `
       <img src="${element.image}" alt="">
     
    `

    carousel.append(carouselElement) 

    }
      
);

let activeIndex = 0

let carouselElements = document.querySelectorAll('div.carouselItem')

carouselElements[activeIndex].classList.add('active')

previousButton.addEventListener('click', function(){
    
    activeIndex -= 1
    
    if(activeIndex == 0){

        activeIndex = (images.length - 1)
    }

    images[activeIndex + 1].image.classList.remove('active')
    images[activeIndex].image.classList.add('active')

})