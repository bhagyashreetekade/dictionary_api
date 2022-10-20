const finalURl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const audioURL = `https://api.dictionaryapi.dev/media/pronunciations/en/`

const search_btn = document.getElementById("search-btn");
const result = document.getElementById("result");
const sound = document.getElementById("sound");


search_btn.addEventListener("click", () => {
    const inp_word = document.getElementById("inp-word").value;
    // console.log(inp_word);

    fetch(`${finalURl}${inp_word}`).then((response) => response.json()).then((data) => {
        console.log(data);
        if (data.title == "No Definitions Found") {
            result.innerHTML = `<h3 class="text-xl font-serif font-bold pt-5 text-red-600">${data.message}</h3>`
        }
        else {
            const audio = new Audio(audioURL + inp_word + "-us.mp3");
            // console.log(audio);

            result.innerHTML = `
            <div class="word flex flex-row justify-between pt-5 sm:pt-10  ">
                <h3 class="text-2xl font-serif font-bold">${inp_word}</h3>
                <button id="sound"><i class="fas fa-volume-up"></i></button>
            </div>

            <div class="details font-medium">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                
            </div>

            <div class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </div>
            `;

            document.getElementById('sound').addEventListener('click', () => {
                audio.play();
            });
        }
    });
});


