function selectMood(value) {
  document.getElementById('mood').value = value;
  const btns = document.querySelectorAll('.mood-btn');
  btns.forEach(btn => {
    if (btn.getAttribute('data-value') === value) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}
function selectSituation(value) {
  document.getElementById('situation').value = value;
  const btns = document.querySelectorAll('.situation-btn');
  btns.forEach(btn => {
    if (btn.getAttribute('data-value') === value) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}
function goBackToSituation() {
  document.getElementById('prompt-section').style.display = 'none';
  document.getElementById('situation-section').style.display = 'block';
}
const promptsAlone = {
  good: [
    { text: 'List three things you are grateful for today.' },
    { text: 'Write down your biggest dream.' },
    { text: 'Try a new yoga pose.' },
    { text: 'Write a haiku about your current mood.' },
    { text: 'List five things you love about yourself.' },
    { text: 'Write a short story in five sentences.' },
    { text: 'Do ten jumping jacks.' },
    { text: 'Write down three goals for this week.' },
    { text: 'Try a breathing exercise for one minute.' },
    { text: 'Write a list of places you want to visit.' },
    { text: 'Write a poem about the weather.' },
    { text: 'Do a quick tidy-up of your space.' },
    { text: 'Try to balance on one leg for 30 seconds.' },
    { text: 'Write down your favorite memory.' },
    { text: 'Write a list of your strengths.' },
    { text: 'Try a new stretch.' },
    { text: 'Write a story about a magical place.' },
    { text: 'Do a quick dance to your favorite song.' },
    { text: 'Write a list of things that make you laugh.' },
    { text: 'Write a letter to your past self.' }
  ],
  neutral: [
    { text: 'Take 5 deep breaths and write down how you feel.' },
    { text: 'Stretch for one minute and notice how your body feels.' },
    { text: 'Write a letter to your future self.' },
    { text: 'Take a walk and count how many birds you see.' },
    { text: 'Meditate for two minutes.' },
    { text: 'Write a gratitude note to yourself.' },
    { text: 'Try a new breathing technique.' },
    { text: 'Write a list of your favorite songs.' },
    { text: 'Write a letter to your best friend.' },
    { text: 'Write a list of things you want to learn.' },
    { text: 'Try a new meditation app.' },
    { text: 'Write a poem about your favorite season.' },
    { text: 'Do 20 squats.' },
    { text: 'Write a list of your favorite foods.' },
    { text: 'Write a letter to your parents.' },
    { text: 'Write a list of your favorite places.' },
    { text: 'Try a new yoga stretch.' }
  ],
  bad: [
    { text: 'Write about something that is bothering you.' },
    { text: 'Write a letter to yourself offering support.' },
    { text: 'List three things you can do to feel better.' },
    { text: 'Write down a recent challenge and how you handled it.' },
    { text: 'Write a list of people who support you.' },
    { text: 'Write about a time you overcame something difficult.' },
    { text: 'Write a letter to someone you appreciate.' },
    { text: 'Write a list of things that help you relax.' },
    { text: 'Write about a comforting memory.' },
    { text: 'Write a list of things you can do for self-care.' },
    { text: 'Write a letter to your future self about hope.' },
    { text: 'Write a list of things you want to let go of.' },
    { text: 'Write about a time you felt proud of yourself.' },
    { text: 'Write a list of things you are grateful for, even if small.' },
    { text: 'Write a letter to someone who helped you.' }
  ]
};

const promptsSocial = {
  good: [
    { text: 'Compliment someone nearby.' },
    { text: 'Ask someone about their favorite movie.' },
    { text: 'Share a fun fact with someone.' },
    { text: 'Give a genuine compliment to a friend.' },
    { text: 'Ask someone what made them smile today.' },
    { text: 'Invite someone to play a quick game.' },
    { text: 'Ask someone to share a childhood memory.' },
    { text: 'Share your favorite song with someone.' },
    { text: 'Ask someone about their favorite food.' },
    { text: 'Ask someone to teach you a word in another language.' },
    { text: 'Ask someone what inspires them.' },
    { text: 'Share a joke with someone.' },
    { text: 'Ask someone about their dream job.' },
    { text: 'Ask someone to share a piece of advice.' },
    { text: 'Ask someone about their favorite hobby.' },
    { text: 'Share a positive news story with someone.' }
  ],
  neutral: [
    { text: 'Ask someone about their favorite sport.' },
    { text: 'Ask someone to share a travel story.' },
    { text: 'Ask someone about their favorite book.' },
    { text: 'Ask someone to share a recipe.' },
    { text: 'Ask someone about their favorite holiday.' },
    { text: 'Ask someone to share a funny story.' },
    { text: 'Ask someone about their favorite animal.' },
    { text: 'Ask someone to share a life lesson.' },
    { text: 'Ask someone about their favorite color.' },
    { text: 'Ask someone to share a childhood dream.' },
    { text: 'Ask someone about their favorite teacher.' },
    { text: 'Ask someone to share a favorite memory.' },
    { text: 'Ask someone about their favorite city.' },
    { text: 'Ask someone to share a favorite quote.' },
    { text: 'Ask someone about their favorite dessert.' },
    { text: 'Ask someone to share a favorite song lyric.' },
    { text: 'Ask someone about their favorite outdoor activity.' },
    { text: 'Ask someone to share a favorite movie scene.' },
    { text: 'Ask someone about their favorite childhood game.' },
    { text: 'Ask someone to share a favorite family tradition.' },
    { text: 'Ask someone about their favorite way to relax.' },
    { text: 'Ask someone to share a favorite joke.' },
    { text: 'Ask someone about their favorite ice cream flavor.' },
    { text: 'Ask someone to share a favorite travel destination.' },
    { text: 'Ask someone about their favorite thing to cook.' },
    { text: 'Ask someone to share a favorite childhood book.' },
    { text: 'Ask someone about their favorite way to spend a weekend.' },
    { text: 'Ask someone to share a favorite holiday tradition.' },
    { text: 'Ask someone about their favorite board game.' },
    { text: 'Ask someone to share a favorite childhood snack.' },
    { text: 'Ask someone about their favorite way to celebrate.' }
  ],
  bad: [
    { text: 'Ask someone to share a challenge they overcame.' },
    { text: 'Ask someone about a time they felt proud.' },
    { text: 'Ask someone to share a comforting memory.' },
    { text: 'Ask someone about a time they helped someone.' },
    { text: 'Ask someone to share a piece of advice for tough times.' },
    { text: 'Ask someone about a time they felt supported.' },
    { text: 'Ask someone to share a story about kindness.' },
    { text: 'Ask someone about a time they learned something important.' },
    { text: 'Ask someone to share a hope for the future.' },
    { text: 'Ask someone about a time they felt grateful.' },
    { text: 'Ask someone to share a way they practice self-care.' },
    { text: 'Ask someone about a time they made a difference.' },
    { text: 'Ask someone to share a lesson from a difficult experience.' },
    { text: 'Ask someone about a time they felt happy after a challenge.' }
  ]
};
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
  // Get situation and mood value from form
  const situation = document.getElementById('situation').value;
  const mood = document.getElementById('mood').value;
  let promptSource;
  if (situation === 'alone') {
    promptSource = promptsAlone[mood] || promptsAlone['neutral'];
  } else {
    promptSource = promptsSocial[mood] || promptsSocial['neutral'];
  }
  currentPromptSet = getRandomPrompts(promptSource, 3);
  currentPromptIndex = 0;
  showPrompt(currentPromptIndex);
}

function showPrompt(idx) {
  const card = document.getElementById('prompt-card');
  if (idx < currentPromptSet.length) {
    card.innerHTML = `
      <div class="swipe-card">
        <div class="prompt-text">${currentPromptSet[idx].text}</div>
        <div class="swipe-arrows">
          <span class="swipe-arrow swipe-arrow-left">&#8592; No</span>
          <span class="swipe-arrow swipe-arrow-right">Yes &#8594;</span>
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
  // Touch events
  card.ontouchstart = function(e) {
    startX = e.touches[0].clientX;
  };
  card.ontouchend = function(e) {
    if (startX === null) return;
    let endX = e.changedTouches[0].clientX;
    let diff = endX - startX;
    if (diff > 30) swipe('right');
    else if (diff < -30) swipe('left');
    startX = null;
  };

  // Mouse events
  card.onmousedown = function(e) {
    startX = e.clientX;
    card.style.transition = '';
  };
  card.onmouseup = function(e) {
    if (startX === null) return;
    let endX = e.clientX;
    let diff = endX - startX;
    if (diff > 30) swipe('right');
    else if (diff < -30) swipe('left');
    startX = null;
    card.style.transform = '';
  };
  card.onmousemove = function(e) {
    if (startX !== null) {
      let diff = e.clientX - startX;
      card.style.transform = `translateX(${diff}px)`;
    }
  };
  card.onmouseleave = function(e) {
    if (startX !== null) {
      card.style.transform = '';
      startX = null;
    }
  };
}

function startTimer() {
  const card = document.getElementById('prompt-card');
  card.innerHTML = `
    <div class="selected-prompt">${acceptedPrompt.text}</div>
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
    <div class="celebration">
      <div class="confetti">🎉 🎊 🥳</div>
      <div class="celebrate-text">Great job! Proof submitted and saved to diary.</div>
    </div>
    <button class="back-btn" onclick="goBackToSituation()">&#8592; Back to Situation</button>
  `;
  document.getElementById('diary-section').style.display = 'block';
  renderDiary();
  // Animation: fade confetti in and out
  setTimeout(() => {
    const confetti = document.querySelector('.confetti');
    if (confetti) confetti.style.opacity = '0';
  }, 1800);
}

function saveToDiary(prompt, proofText, file) {
  let fileUrl = null;
  if (file) {
    fileUrl = URL.createObjectURL(file);
  }
  const entry = {
    prompt: prompt.text,
    time: new Date().toLocaleString(),
    proof: proofText,
    file: file ? file.name : null,
    fileUrl: fileUrl
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
        ${entry.fileUrl ? `<div class="log-image"><img src="${entry.fileUrl}" alt="Proof image" style="max-width:100%;border-radius:0.5rem;margin-top:0.5rem;" /></div>` : ''}
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
