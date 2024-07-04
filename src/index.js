function displayPoem(response) {
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: '',
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector('#user-instructions');

  let apiKey = 'd52f0824be9137a0f983516bfo0a4at8';
  let prompt = `User instructions are: Generate poem about ${instructionsInput.value}`;
  let context =
    'You are a romantic Poem expert and love to write short poems. Generate a 4 line poem in basic HTML. Make sure to follow user instructions and separate each line with <br />. Sign the poem with "SheCodes AI" at the end. Sign should be in <strong/> element. "SheCodes AI" should be only sign, not the content of the poem and it should be on next line';
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElm = document.querySelector('#poem');
  poemElm.classList.remove('hidden');
  poemElm.innerHTML = `
    <div class="generating">
      ⏳ Generating poem about <strong>${instructionsInput.value}</strong>
    </div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElm = document.querySelector('#poem-generator-form');
poemFormElm.addEventListener('submit', generatePoem);
