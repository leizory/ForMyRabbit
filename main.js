let sentences = ["Cố lênn nhoaa công chúaa của anhhh!!!", "Yêuuuu chịiii nhiềuuu lắmm!!", "Chúc Thỏo của anhhh luôn hạnhhh phúcc nhoaaa!!"]; 
let sentenceIndex = 0;
let words = sentences[sentenceIndex].split(" ");
let wordIndex = 0;
let currentSentence = "";

function showWords() {
    let wordElement = document.querySelector(".words");
    currentSentence += "<span>" + words[wordIndex] + "</span> "; 
    wordElement.innerHTML = currentSentence; 
    wordIndex++; 

    if (wordIndex === words.length) { 
        currentSentence = ""; 
        wordIndex = 0; 
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
        words = sentences[sentenceIndex].split(" "); 
    }
}

setInterval(showWords, 1000); 
