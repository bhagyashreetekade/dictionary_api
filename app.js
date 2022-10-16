const finalURl =  `https://api.dictionaryapi.dev/api/v2/entries/en/`;
console.log(finalURl);;

const search_btn=document.getElementById("search-btn");
const result=document.getElementById("result");
const sound = document.getElementById("sound");

search_btn.addEventListener("click",()=>{
    const inp_word= document.getElementById("inp-word").value;
    console.log(inp_word);

    fetch(`${finalURl}${inp_word}`).then((response) => response.json()).then((data) =>{

        console.log(data);

        result.innerHTML=`
            <div class="word flex flex-row justify-between ">
                <h3 class="text-lg font-medium font-serif pt-10">${inp_word}</h3>
                <button onclick="playSound()" class="pt-10"><i class="fas fa-volume-up"></i></button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                
            </div>

            <div class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </div>
            `;
            sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
            console.log(sound);
        
    });

});

function playSound() {
    sound.play();
}