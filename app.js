// Start the timer for the accepted prompt
function startTimer() {
  timeLeft = 300;
  clearInterval(timerInterval);
  const timer = document.getElementById('timer');
  if (timer) {
    timer.textContent = '05:00';
  }
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}
// Handles swipe or click for prompt selection
function swipePrompt(direction) {
  if (direction === 'right') {
    acceptedPrompt = currentPromptSet[currentPromptIndex];
    // Show timer and proof form
    document.getElementById('prompt-card').innerHTML = `
      <div class="swipe-card">
        <div class="prompt-text">${acceptedPrompt.text}</div>
        <div id="timer" class="timer">05:00</div>
        <form id="proof-form" onsubmit="submitProof(event)" style="display:flex;flex-direction:column;align-items:center;">
          <input type="text" name="proof" placeholder="Write down your proof" required style="margin-top:16px;width:90%;padding:8px;border-radius:6px;border:1px solid #ccc;" />
          <button type="button" id="add-photo-btn" style="margin-top:14px;margin-bottom:10px;padding:10px 18px;font-size:1rem;background:#1976d2;color:#fff;border:none;border-radius:6px;cursor:pointer;">Add photo</button>
          <input id="photo-upload" type="file" accept="image/*" style="display:none;" />
          <div id="photo-preview-container" style="width:100%;display:flex;justify-content:center;"></div>
          <button type="submit" style="margin-top:16px;padding:14px 0;width:90%;font-size:1.15rem;background:#43a047;color:#fff;border:none;border-radius:8px;font-weight:600;">Add to diary</button>
        </form>
      </div>
      <button class="back-btn" onclick="goBackToSituation()">&#8592; Back to Situation</button>
    `;
    // Add photo button logic
    const addPhotoBtn = document.getElementById('add-photo-btn');
    const photoInput = document.getElementById('photo-upload');
    if (addPhotoBtn && photoInput) {
      addPhotoBtn.addEventListener('click', function() {
        photoInput.click();
      });
      photoInput.addEventListener('change', function() {
        const previewContainer = document.getElementById('photo-preview-container');
        if (photoInput.files && photoInput.files[0]) {
          const file = photoInput.files[0];
          const reader = new FileReader();
          reader.onload = function(e) {
            if (previewContainer) {
              previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width:90%;border-radius:8px;margin-top:8px;" />`;
            }
          };
          reader.readAsDataURL(file);
        } else {
          if (previewContainer) previewContainer.innerHTML = '';
        }
      });
    }
    startTimer();
  } else {
    currentPromptIndex++;
    if (currentPromptIndex < currentPromptSet.length) {
      showPrompt(currentPromptIndex);
    } else {
      document.getElementById('prompt-section').style.display = 'none';
      document.getElementById('situation-section').style.display = 'block';
    }
  }
}
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
    { text: 'List 1 thing you are grateful for today.' },
    { text: 'Write down 1 goal you want to reach this week.' },
    { text: 'Write yourself a kind compliment.' },
    { text: 'Take a quick photo of something that catches your eye.' },
    { text: 'List 1 thing you’re looking forward to this week.' },
    { text: 'Write about your current mood.' },
    { text: 'List 3 things you like about yourself.' },
    { text: 'List 3 things you are grateful for.' },
    { text: 'Write a short story in five sentences.' },
    { text: 'Call a parent and tell them about your day.' },
    { text: 'Call a friend and tell them about your day.' },
    { text: 'Write about a place you want to visit.' },
    { text: 'Try to balance on one leg for 30 seconds.' },
    { text: 'Write 1 of your strengths.' },
    { text: 'Write about something that made you smile today.' },
    { text: 'List 1 win from today.' },
    { text: 'Send a cheerful message to a friend.' },
  ],
  neutral: [
  { text: 'Send a quick message to a parent asking how they are.' },
  { text: 'Send a short check-in to a friend.' },
  { text: 'Write 2 sentences about how you feel right now.' },
  { text: 'List 1 small thing you appreciate today.' },
  { text: 'Write down 2 personal strengths you’re proud of.' },
  { text: 'Invent a tiny story in 3 sentences.' },
  { text: 'Stretch your arms, touch your toes, then describe how your body feels.' },
  { text: 'Write a short note to your future self.' },
  { text: 'Write down 1 recent memory that makes you smile.' },
  { text: 'Take 5 deep breaths and describe how you feel.' },
  { text: 'Write 1 gratitude line to yourself.' },
  { text: 'List three of your current favorite songs off the top of your head.' },
  { text: 'Write a short message you’d like to send to a friend.' },
  { text: 'List 3 things you’d like to learn.' },
  { text: 'List 3 of your recent favorite foods.' },
  { text: 'Write one kind thought you’d share with your parents.' },
  { text: 'List 3 of your favorite places.' },
  { text: 'Notice and describe 2 things around you right now.' },
  { text: 'Set 1 small goal for the rest of today.' },
  { text: 'Stretch gently and take three deep breaths.' },
  { text: 'Write down 1 thing you feel curious about.' },
  { text: 'Write a kind thought for someone you care about.' }
  ],
  bad: [
  { text: 'Write down what is bothering you right now.' },
  { text: 'Focus on something in the distance for 30 seconds and describe it.' },
  { text: 'Write about what you would like to be doing right now.' },
  { text: 'List 2 small things you could do to feel better.' },
  { text: 'Write down a recent challenge and how you handled it.' },
  { text: 'Write about someone who loves you unconditionally.' },
  { text: 'Recall a time you overcame something difficult.' },
  { text: 'Write a short note to someone you appreciate.' },
  { text: 'List a few things that help you relax.' },
  { text: 'Write about a comforting memory.' },
  { text: 'Make a short list of self-care ideas.' },
  { text: 'Write a hopeful note to your future self.' },
  { text: 'List a few things you want to let go of.' },
  { text: 'Write about a time you felt proud of yourself.' },
  { text: 'List 1 small thing you’re grateful for.' },
  { text: 'Take 5 deep breaths and describe how you feel.' },
  { text: 'Name 2 things that are still okay today.' },
  { text: 'Write 1 kind sentence to yourself.' },
  { text: 'Note 1 thing you’re looking forward to.' },
  { text: 'Think of 1 small way to treat yourself.' },
  { text: 'Send a short message to a friend.' },
  { text: 'Send a short message to a parent.' },
  { text: 'Play a favorite song and enjoy it quietly.' },
  { text: 'Sit upright, roll your shoulders, and take 3 slow breaths.' }
  ]
};

const promptsSocial = {
  good: [
  { text: 'Share 1 funny story with someone nearby.' },
  { text: 'Give a small, genuine compliment.' },
  { text: 'Ask someone: What made you smile today?' },
  { text: 'Start a light chat: weather, music, food.' },
  { text: 'Ask someone about their favorite movie.' },
  { text: 'Share a fun fact with someone.' },
  { text: 'Ask someone to share a childhood memory.' },
  { text: 'Share your favorite song with someone.' },
  { text: 'Ask someone about their favorite food.' },
  { text: 'Ask someone to teach you a word in another language.' },
  { text: 'Ask someone what inspires them.' },
  { text: 'Share a joke with someone.' },
  { text: 'Ask someone about their job.' },
  { text: 'Ask someone to share a piece of advice.' },
  { text: 'Ask someone about their favorite hobby.' },
  { text: 'Share a positive news story with someone.' }
  ],
  neutral: [
  { text: 'Say hello and smile at someone.' },
  { text: 'Ask a simple question (time, train, etc.).' },
  { text: 'Notice one detail about a person’s style.' },
  { text: 'Share something small you appreciate today.' },
  { text: 'Make eye contact and nod kindly.' },
  { text: 'Ask someone about their favorite sport.' },
  { text: 'Look around and count how many birds and people you see.' },
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
  { text: 'Offer a small act of kindness (hold a door).' },
  { text: 'Ask someone an easy, neutral question.' },
  { text: 'Smile gently — no words needed.' },
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
          <span class="swipe-arrow swipe-arrow-left" style="cursor:pointer;" id="no-btn">&#8592; No</span>
          <span class="swipe-arrow swipe-arrow-right" style="cursor:pointer;" id="yes-btn">Yes &#8594;</span>
        </div>
      </div>
      <button class="back-btn" onclick="goBackToSituation()">&#8592; Back to Situation</button>
    `;
    // Add click/tap feedback for No/Yes buttons
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    if (noBtn) {
      noBtn.addEventListener('click', function() {
        noBtn.classList.add('active');
        setTimeout(() => noBtn.classList.remove('active'), 180);
        swipePrompt('left');
      });
      noBtn.addEventListener('touchstart', function() {
        noBtn.classList.add('active');
      });
      noBtn.addEventListener('touchend', function() {
        noBtn.classList.remove('active');
      });
    }
    if (yesBtn) {
      yesBtn.addEventListener('click', function() {
        yesBtn.classList.add('active');
        setTimeout(() => yesBtn.classList.remove('active'), 180);
        swipePrompt('right');
      });
      yesBtn.addEventListener('touchstart', function() {
        yesBtn.classList.add('active');
      });
      yesBtn.addEventListener('touchend', function() {
        yesBtn.classList.remove('active');
      });
    }
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
  let startX = 0;
  let startY = 0;
  let isDragging = false;
  let threshold = 30;

  // Touch events (mobile)
  card.addEventListener('touchstart', function(e) {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
    }
  });
  card.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    let dx = e.touches[0].clientX - startX;
    let dy = e.touches[0].clientY - startY;
    card.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  card.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    let dx = e.changedTouches[0].clientX - startX;
    let dy = e.changedTouches[0].clientY - startY;
    card.style.transform = '';
    isDragging = false;
    if (dx > threshold) {
      swipePrompt('right');
    } else if (dx < -threshold) {
      swipePrompt('left');
    }
  });

  // Mouse events (desktop)
  card.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    isDragging = true;
  });
  card.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    let dx = e.clientX - startX;
    let dy = e.clientY - startY;
    card.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  card.addEventListener('mouseup', function(e) {
    if (!isDragging) return;
    let dx = e.clientX - startX;
    let dy = e.clientY - startY;
    card.style.transform = '';
    isDragging = false;
    if (dx > threshold) {
      swipePrompt('right');
    } else if (dx < -threshold) {
      swipePrompt('left');
    }
  });
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
