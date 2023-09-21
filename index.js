

const dynamicText = document.querySelector(".typewrite");
const words=["Full stack developer", "DSA Enthusiast", "Love to Code"];
let wordIndex =0;
let charIndex =0;
let isDeleting =false;

const typeEffect=()=>{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent =currentChar;
    dynamicText.classList.add("stop-blinking");

    // if condition is true type the next word
    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(() => {
            typeEffect()
        }, 200);
    }
    // if condition is true remove the previous character
    else if(isDeleting && charIndex> 0){
        charIndex--;
        setTimeout(() => {
            typeEffect();
        }, 100);
    }

    // if the word deleted switch to next word
    else{
        isDeleting =!isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex=!isDeleting?(wordIndex+1)%words.length:wordIndex;
        setTimeout(() => {
            typeEffect();
        }, 1000);
    }
}
typeEffect();