const container = document.querySelector('.container');
const rightSide = document.querySelector('.right');
const leftSide = document.querySelector('.left');
const up = document.querySelector('.up'); // 
const down = document.querySelector('.down');


const slidesLength =  rightSide.querySelectorAll('div').length; // all the right side divs 

console.log(slidesLength);


let activeSlideIndex = 0;

leftSide.style.top= `-${(slidesLength  - 1 ) * 100}vh`;
// its negative so it can slide down the column
// - 1 because array index start at 0 
// multiply 100 in order to show the new slide full screen 
//starts at the last div 






const changeSlide = (direction) => {
    const slideHeight = container.clientHeight ;// the size of the veiwable area

    if (direction === 'up'){

        activeSlideIndex++;

        if(activeSlideIndex > slidesLength -1){ // subtract 1 to make it start at 0 like an array
            activeSlideIndex = 0; // resets to home view 
        }
    } else if (direction === 'down'){
        activeSlideIndex--;

        if(activeSlideIndex < 0 ){ // subtract 1 to make it start at 0 like an array
            activeSlideIndex = slidesLength -1; // resets to home view 
        }
    }
    rightSide.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`; 
    // right side goes up 
    leftSide.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`; 

}



up.addEventListener('click', () => changeSlide('up'));
down.addEventListener('click',()=> changeSlide('down'));
