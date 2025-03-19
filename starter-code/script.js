document.addEventListener('DOMContentLoaded', () => {
  const mainInput = document.getElementById('mainInput');
  const characterCount = document.getElementById('character-count');
  const wordCount = document.getElementById('word-count');
  const sentenceCount = document.getElementById('sentence-count');
  const readingTimeEstimate = document.getElementById('reading-time-estimate');
  const setCharacterLimit = document.getElementById('setCharacterLimit');
  const characterTextareaContainer = document.querySelector('.character-textarea-container');
  const characterLimitTextArea = document.getElementById('characterLimitTextArea');

  mainInput.addEventListener('input', () => {
    const text = mainInput.value;

    // Update character count
    characterCount.textContent = text.length;

    // Update word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;

    // Update sentence count
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    sentenceCount.textContent = sentences.length;

    // Update reading time estimate
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(words.length / wordsPerMinute);
    readingTimeEstimate.textContent = `Approx. ${readingTime} minute(s)`;

    // Restrict character limit if setCharacterLimit is checked
    if (setCharacterLimit.checked) {
      const characterLimit = parseInt(characterLimitTextArea.value, 10);
      if (!isNaN(characterLimit) && text.length > characterLimit) {
        mainInput.value = text.substring(0, characterLimit);
        characterCount.textContent = characterLimit;
      }
    }

    // Calculate letter density
    const letterCounts = {};
    const totalLetters = text.replace(/[^a-zA-Z]/g, '').length;

    for (const char of text) {
      if (/[a-zA-Z]/.test(char)) {
        const lowerChar = char.toLowerCase();
        letterCounts[lowerChar] = (letterCounts[lowerChar] || 0) + 1;
      }
    }

    const letterDensity = [];
    for (const [letter, count] of Object.entries(letterCounts)) {
      const percentage = ((count / totalLetters) * 100).toFixed(2);
      letterDensity.push({ letter, percentage: parseFloat(percentage) });
    }

    letterDensity.sort((a, b) => b.percentage - a.percentage);

    // Update letter density display
    const letterDensityContainer = document.querySelector('.letter-density-container');
    letterDensityContainer.innerHTML = ''; // Clear previous content

    for (const { letter, percentage } of letterDensity) {
      const showcaseContainer = document.createElement('div');
      showcaseContainer.className = 'letter-density-showcase-container';

      const letterContainer = document.createElement('div');
      letterContainer.className = 'letter-container text-preset-4';
      letterContainer.textContent = letter.toUpperCase();

      const graphContainer = document.createElement('div');
      graphContainer.className = 'graph-container';

      const graph = document.createElement('div');
      graph.className = 'graph';

      const graphPercentage = document.createElement('div');
      graphPercentage.className = 'graph-percentage';
      graphPercentage.style.width = `${percentage}%`;

      const percentageContainer = document.createElement('div');
      percentageContainer.className = 'percentage-container text-preset-4';
      percentageContainer.textContent = `${percentage}%`;

      graph.appendChild(graphPercentage);
      graphContainer.appendChild(graph);
      showcaseContainer.appendChild(letterContainer);
      showcaseContainer.appendChild(graphContainer);
      showcaseContainer.appendChild(percentageContainer);

      letterDensityContainer.appendChild(showcaseContainer);
    }

    // Ensure the letter density container overflows downward
    letterDensityContainer.style.overflowY = 'auto';
    letterDensityContainer.style.maxHeight = '100%';
    document.body.style.maxHeight = '150vh';

    // Remove visibility hidden from letter-density-showcase-container
    const showcaseContainers = document.querySelectorAll('.letter-density-showcase-container');
    showcaseContainers.forEach(container => {
      container.style.visibility = 'visible';
    });
  });

  setCharacterLimit.addEventListener('change', () => {
    if (setCharacterLimit.checked) {
      characterTextareaContainer.style.visibility = 'visible';
    } else {
      characterTextareaContainer.style.visibility = 'hidden';
    }
  });
});