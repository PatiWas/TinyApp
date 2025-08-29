function goBackToSituation() {
  document.getElementById('prompt-section').style.display = 'none';
  document.getElementById('situation-section').style.display = 'block';
}
const prompts = [
  { type: 'solo', text: 'Take 5 deep breaths and write down how you feel.' },
  { type: 'social', text: 'Compliment someone nearby.' },
  { type: 'solo', text: 'Write a short poem about your current mood.' },
  { type: 'solo', text: 'List three things you are grateful for today.' },
  { type: 'social', text: 'Ask someone about their favorite movie.' },
  { type: 'solo', text: 'Stretch for one minute and notice how your body feels.' },
  { type: 'solo', text: 'Draw something you see around you.' },
  { type: 'social', text: 'Share a fun fact with someone.' },
  { type: 'solo', text: 'Write a letter to your future self.' },
  { type: 'solo', text: 'Take a walk and count how many birds you see.' },
  { type: 'social', text: 'Give a genuine compliment to a friend.' },
  { type: 'solo', text: 'Meditate for two minutes.' },
  { type: 'solo', text: 'Write down your biggest dream.' },
  { type: 'social', text: 'Ask someone what made them smile today.' },
  { type: 'solo', text: 'Try a new yoga pose.' },
  { type: 'solo', text: 'Write a haiku about your current mood.' },
  { type: 'social', text: 'Invite someone to play a quick game.' },
  { type: 'solo', text: 'List five things you love about yourself.' },
  { type: 'solo', text: 'Take a photo of something beautiful.' },
  { type: 'social', text: 'Ask someone to share a childhood memory.' },
  { type: 'solo', text: 'Write a short story in five sentences.' },
  { type: 'solo', text: 'Do ten jumping jacks.' },
  { type: 'social', text: 'Share your favorite song with someone.' },
  { type: 'solo', text: 'Write down three goals for this week.' },
  { type: 'solo', text: 'Try a breathing exercise for one minute.' },
  { type: 'social', text: 'Ask someone about their favorite food.' },
  { type: 'solo', text: 'Draw a self-portrait.' },
  { type: 'solo', text: 'Write a list of places you want to visit.' },
  { type: 'social', text: 'Ask someone to teach you a word in another language.' },
  { type: 'solo', text: 'Write a poem about the weather.' },
  { type: 'solo', text: 'Do a quick tidy-up of your space.' },
  { type: 'social', text: 'Ask someone what inspires them.' },
  { type: 'solo', text: 'Write a letter to someone you appreciate.' },
  { type: 'solo', text: 'Try to balance on one leg for 30 seconds.' },
  { type: 'social', text: 'Share a joke with someone.' },
  { type: 'solo', text: 'Write down your favorite memory.' },
  { type: 'solo', text: 'Take a photo of something that makes you happy.' },
  { type: 'social', text: 'Ask someone about their dream job.' },
  { type: 'solo', text: 'Write a list of your strengths.' },
  { type: 'solo', text: 'Try a new stretch.' },
  { type: 'social', text: 'Ask someone to share a piece of advice.' },
  { type: 'solo', text: 'Write a story about a magical place.' },
  { type: 'solo', text: 'Do a quick dance to your favorite song.' },
  { type: 'social', text: 'Ask someone about their favorite hobby.' },
  { type: 'solo', text: 'Write a list of things that make you laugh.' },
  { type: 'solo', text: 'Try a new drawing technique.' },
  { type: 'social', text: 'Share a positive news story with someone.' },
  { type: 'solo', text: 'Write a letter to your past self.' },
  { type: 'solo', text: 'Take a photo of something unusual.' }
];
// Tiny App - Main JS
// Lo-fi prototype for prompt generator



let currentPromptIndex = 0;
let currentPromptSet = [];
let acceptedPrompt = null;
let timerInterval = null;
let timeLeft = 300;
let diaryEntries = [];

function getRandomPrompts(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function showPromptSet() {
  currentPromptSet = getRandomPrompts(prompts, 3);
  currentPromptIndex = 0;
  showPrompt(currentPromptIndex);
}

function showPrompt(idx) {
  const card = document.getElementById('prompt-card');
  if (idx < currentPromptSet.length) {
    card.innerHTML = `
      <div class="swipe-card">
        <div class="prompt-text">${currentPromptSet[idx].text}</div>
        <div class="swipe-btns">
          <button class="swipe-btn reject" onclick="swipe('left')">&#10006;</button>
          <button class="swipe-btn accept" onclick="swipe('right')">&#10004;</button>
        </div>
      </div>
      <button class="back-btn" onclick="goBackToSituation()">&#8592; Back to Situation</button>
    `;
    addSwipeGesture(card);
  } else {
    // If user did not pick any prompt, send back to situation section
    document.getElementById('prompt-section').style.display = 'none';
    document.getElementById('situation-section').style.display = 'block';
  }
}

function swipe(direction) {
  if (direction === 'right') {
    acceptedPrompt = currentPromptSet[currentPromptIndex];
    startTimer();
  } else {
    currentPromptIndex++;
    if (currentPromptIndex < currentPromptSet.length) {
      showPrompt(currentPromptIndex);
    } else {
      // If user did not pick any prompt, send back to situation section
      document.getElementById('prompt-section').style.display = 'none';
      document.getElementById('situation-section').style.display = 'block';
    }
  }
}


function addSwipeGesture(card) {
  let startX = null;
  card.ontouchstart = function(e) {
    startX = e.touches[0].clientX;
  };
  card.ontouchend = function(e) {
    if (startX === null) return;
    let endX = e.changedTouches[0].clientX;
    let diff = endX - startX;
    if (diff > 60) swipe('right');
    else if (diff < -60) swipe('left');
    startX = null;
  };
}

function startTimer() {
  const card = document.getElementById('prompt-card');
  card.innerHTML = `
    <div class="timer" id="timer">05:00</div>
    <div>Complete the activity, then submit proof below.</div>
    <form class="proof-form" onsubmit="submitProof(event)">
      <textarea name="proof" placeholder="Describe what you did..." required></textarea>
      <input type="file" accept="image/*,audio/*" />
      <button type="submit">Submit Proof</button>
    </form>
    <button class="back-btn" onclick="goBackToSituation()">&#8592; Back to Situation</button>
  `;
  timeLeft = 300;
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  const timer = document.getElementById('timer');
  if (timer) {
    const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const sec = String(timeLeft % 60).padStart(2, '0');
    timer.textContent = `${min}:${sec}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timer.textContent = 'Time is up!';
    }
  }
}

function submitProof(e) {
  e.preventDefault();
  const form = e.target;
  const proofText = form.proof.value;
  const fileInput = form.querySelector('input[type="file"]');
  const file = fileInput.files[0];
  saveToDiary(acceptedPrompt, proofText, file);
  document.getElementById('prompt-card').innerHTML = `
    <div>Proof submitted! Saved to diary.</div>
    <button class="back-btn" onclick="goBackToSituation()">&#8592; Back to Situation</button>
  `;
  document.getElementById('diary-section').style.display = 'block';
  renderDiary();
}

function saveToDiary(prompt, proofText, file) {
  const entry = {
    prompt: prompt.text,
    time: new Date().toLocaleString(),
    proof: proofText,
    file: file ? file.name : null
  };
  diaryEntries.unshift(entry);
}

function renderDiary() {
  const diaryLog = document.getElementById('diary-log');
  diaryLog.innerHTML = '';
  if (diaryEntries.length === 0) {
    diaryLog.innerHTML = '<div>No diary entries yet.</div>';
    return;
  }
  diaryEntries.forEach(entry => {
    diaryLog.innerHTML += `
      <div class="log-entry">
        <div class="log-time">${entry.time}</div>
        <div class="log-prompt">${entry.prompt}</div>
        <div class="log-proof">${entry.proof}</div>
        ${entry.file ? `<div class="log-file">Attachment: ${entry.file}</div>` : ''}
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('prompt-section').style.display = 'none';
  document.getElementById('diary-section').style.display = 'none';
  const form = document.getElementById('situation-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('situation-section').style.display = 'none';
    document.getElementById('prompt-section').style.display = 'block';
  showPromptSet();
  });
});
      timer.textContent = `${min}:${sec}`;
