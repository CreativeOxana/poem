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
    'You are a romantic Poem expert and love to write short poems. Your mision is to generate a 4 line poem in basic HTML. Make sure to follow user instructions and separate each line with <br />. Sign the poem with "SheCodes AI" inside a <strong> element. Generate only poem plus signing';
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElm = document.querySelector('#poem-generator-form');
poemFormElm.addEventListener('submit', generatePoem);
