/* ═══════════════════════════════════════════════════════
   ENDURO PRO — Módulo E-Learning — Script v2
   Traduzido para Português Europeu
   ═══════════════════════════════════════════════════════ */

// ─── ESTADO ──────────────────────────────────────────────
const TOTAL_SCREENS = 11;
let currentScreen = 1;
let quizAnswers = {};
let trajDone = false;

// ─── DADOS DO QUESTIONÁRIO (com explicações) ─────────────
const quizData = [
  {
    id: 1,
    question: "O que ajuda a manter o equilíbrio em todo-o-terreno?",
    options: [
      "Sentar fundo no selim",
      "Estar em pé nos pedais de apoio com os joelhos fletidos",
      "Travar bruscamente para controlar a velocidade",
      "Olhar diretamente para a roda dianteira"
    ],
    correct: 1,
    explanation: "A posição em pé nos pedais permite usar as pernas como amortecedores vivos. Os joelhos fletidos absorvem os impactos e mantêm o centro de gravidade baixo, o que é fundamental em terreno irregular."
  },
  {
    id: 2,
    question: "Como se deve utilizar o acelerador na areia?",
    options: [
      "Abrir e fechar bruscamente",
      "Não usar o acelerador de todo",
      "Manter um acelerador suave e constante",
      "Utilizar apenas o travão traseiro"
    ],
    correct: 2,
    explanation: "Na areia, a roda afunda facilmente e perde tração. Um acelerador suave e constante mantém o impulso e evita o derrape da roda traseira. Uma aceleração brusca ou a ausência de acelerador são as principais causas de perda de controlo em terreno solto."
  },
  {
    id: 3,
    question: "Qual é o elemento de equipamento mais importante?",
    options: [
      "Luvas com proteção nos nós dos dedos",
      "Capacete de proteção homologado DOT/ECE",
      "Botas com sola rígida",
      "Joelheiras com inserções metálicas"
    ],
    correct: 1,
    explanation: "O capacete é o único elemento que protege a cabeça e o cérebro em caso de queda. As normas DOT (EUA) e ECE (Europa) garantem um nível mínimo de proteção. Sem capacete, todos os outros elementos do equipamento perdem o seu propósito."
  }
];

// ─── INICIALIZAÇÃO ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('dotIndicators')) buildDotIndicators();
  if (document.getElementById('progressFill')) updateUI();
  if (document.getElementById('quizContainer')) buildQuiz();

  initKeyboardNav();
  initModule2AudioHighlight();
});

// ─── NAVEGAÇÃO ────────────────────────────────────────────
function goNext() {
  if (currentScreen === 9) {
    const allAnswered = quizData.every(q => quizAnswers[q.id] !== undefined);
    if (!allAnswered) { showQuizWarning(); return; }
    submitQuiz();
    return;
  }
  if (currentScreen < TOTAL_SCREENS) navigateTo(currentScreen + 1);
}

function goPrev() {
  if (currentScreen > 1) navigateTo(currentScreen - 1);
}

function navigateTo(target) {
  if (target < 1 || target > TOTAL_SCREENS) return;
  const fromEl = document.getElementById(`screen${currentScreen}`);
  const toEl   = document.getElementById(`screen${target}`);
  if (!fromEl || !toEl) return;

  fromEl.classList.remove('active');
  fromEl.classList.add('slide-out');
  setTimeout(() => { fromEl.classList.remove('slide-out'); fromEl.style.display = 'none'; }, 360);

  currentScreen = target;
  toEl.style.display = 'flex';
  toEl.style.flexDirection = 'column';
  requestAnimationFrame(() => { toEl.classList.add('active'); });

  updateUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateUI() {
  const pct = Math.round(((currentScreen - 1) / (TOTAL_SCREENS - 1)) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressPct').textContent = pct + '%';
  document.getElementById('stepIndicator').textContent = `${currentScreen} / ${TOTAL_SCREENS}`;

  const backBtn = document.getElementById('backBtn');
  const nextBtn = document.getElementById('nextBtn');
  backBtn.disabled = (currentScreen === 1);

  if (currentScreen === TOTAL_SCREENS) {
    nextBtn.style.display = 'none';
  } else if (currentScreen === 9) {
    nextBtn.textContent = 'Concluir →';
    nextBtn.style.display = '';
    nextBtn.onclick = goNext;
  } else {
    nextBtn.textContent = 'Seguinte →';
    nextBtn.style.display = '';
    nextBtn.onclick = goNext;
  }

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.remove('active', 'done');
    const num = i + 1;
    if (num === currentScreen) dot.classList.add('active');
    else if (num < currentScreen) dot.classList.add('done');
  });
}

// ─── INDICADORES DE PONTO ────────────────────────────────
function buildDotIndicators() {
  const wrap = document.getElementById('dotIndicators');
  for (let i = 1; i <= TOTAL_SCREENS; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.title = `Ecrã ${i}`;
    dot.onclick = () => navigateTo(i);
    wrap.appendChild(dot);
  }
}

// ─── NAVEGAÇÃO POR TECLADO ────────────────────────────────
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft')  goPrev();
    if (e.key === 'Escape')     navigateTo(1);
  });
}

// ─── ECRÃ 3: EQUIPAMENTO ─────────────────────────────────
function toggleGear(el) {
  const info = el.dataset.info;
  const panel = el.querySelector('.gear-desc-panel');
  const isOpen = el.classList.contains('open');

  document.querySelectorAll('.gear-item').forEach(g => {
    g.classList.remove('open');
    g.querySelector('.gear-desc-panel').textContent = '';
  });

  if (!isOpen) {
    el.classList.add('open');
    panel.textContent = info;
  }
}

// ─── VÍDEO DE SUBSTITUIÇÃO ────────────────────────────────
function toggleVideoPlaceholder(btn) {
  const wrap  = btn.parentElement;
  const thumb = wrap.querySelector('.video-thumb');
  const label = wrap.querySelector('.video-label');
  const origLabel = label.textContent;

  btn.textContent = '⏸';
  thumb.style.filter = 'brightness(0.3)';
  label.textContent = '▶ A REPRODUZIR... (substituir pelo vídeo real)';

  setTimeout(() => {
    btn.textContent = '▶';
    thumb.style.filter = 'brightness(0.6)';
    label.textContent = origLabel;
  }, 3000);
}

// ─── ECRÃ 6: SEPARADORES ─────────────────────────────────
function switchTab(btn, tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// ─── ECRÃ 7: TRAJETÓRIA — Micro-exercício em 3 passos ────
function trajClick(type) {
  if (trajDone) return;

  const fb          = document.getElementById('trajFeedback');
  const correctLine = document.getElementById('correctLine');
  const wrongLine   = document.getElementById('wrongLine');
  const resetBtn    = document.getElementById('trajReset');

  const step1 = document.getElementById('tstep1');
  const step2 = document.getElementById('tstep2');
  const step3 = document.getElementById('tstep3');

  // PASSO 2 — Destacar a linha selecionada (com animação)
  step1.classList.remove('active'); step1.classList.add('done');
  step2.classList.add('active');

  if (type === 'correct') {
    correctLine.setAttribute('stroke-width', '7');
    correctLine.setAttribute('opacity', '1');
    correctLine.setAttribute('stroke-dasharray', '0');
    correctLine.classList.add('selected-correct');
    wrongLine.setAttribute('opacity', '0.15');
    wrongLine.setAttribute('stroke-width', '2');
  } else {
    wrongLine.setAttribute('stroke-width', '7');
    wrongLine.setAttribute('opacity', '1');
    wrongLine.setAttribute('stroke-dasharray', '0');
    wrongLine.classList.add('selected-wrong');
    correctLine.setAttribute('opacity', '0.15');
    correctLine.setAttribute('stroke-width', '2');
  }

  // Breve pausa e depois PASSO 3 — mostrar explicação
  setTimeout(() => {
    step2.classList.remove('active'); step2.classList.add('done');
    step3.classList.add('active');

    fb.innerHTML = '';

    const verdict = document.createElement('div');
    verdict.className = 'traj-verdict ' + type;

    const explanation = document.createElement('div');
    explanation.className = 'traj-explanation';

    if (type === 'correct') {
      fb.className = 'traj-feedback correct';
      verdict.textContent = '✅ CORRETO — Linha segura';
      explanation.textContent = 'Esta trajetória contorna todos os obstáculos pelo exterior da curva. Princípio-chave: "leia o terreno 5 a 10 metros à frente". Uma linha suave, sem mudanças bruscas de direção, garante estabilidade e controlo da velocidade.';
    } else {
      fb.className = 'traj-feedback wrong';
      verdict.textContent = '❌ PERIGOSO — Linha incorreta';
      explanation.textContent = 'Esta trajetória vai diretamente sobre os obstáculos. O impacto com uma pedra ou irregularidade a velocidade provoca uma deflexão brusca da roda dianteira e a perda de controlo. Planeie sempre o desvio com antecedência.';
    }

    fb.appendChild(verdict);
    fb.appendChild(explanation);
    resetBtn.classList.remove('hidden');
    trajDone = true;
  }, 600);
}

function resetTrajectory() {
  trajDone = false;

  const correctLine = document.getElementById('correctLine');
  const wrongLine   = document.getElementById('wrongLine');
  const fb          = document.getElementById('trajFeedback');
  const resetBtn    = document.getElementById('trajReset');

  // Repor linhas
  correctLine.setAttribute('stroke-width', '4');
  correctLine.setAttribute('opacity', '0.55');
  correctLine.setAttribute('stroke-dasharray', '8,5');
  correctLine.classList.remove('selected-correct');

  wrongLine.setAttribute('stroke-width', '4');
  wrongLine.setAttribute('opacity', '0.55');
  wrongLine.setAttribute('stroke-dasharray', '8,5');
  wrongLine.classList.remove('selected-wrong');

  // Repor passos
  document.getElementById('tstep1').classList.add('active');
  document.getElementById('tstep1').classList.remove('done');
  document.getElementById('tstep2').classList.remove('active','done');
  document.getElementById('tstep3').classList.remove('active','done');

  // Repor feedback
  fb.className = 'traj-feedback';
  fb.innerHTML = '<div class="traj-hint">👆 Clique numa das linhas no diagrama acima</div>';

  resetBtn.classList.add('hidden');
}

// ─── ECRÃ 8: ERROS ───────────────────────────────────────
function toggleMistake(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.mistake-item').forEach(m => m.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

// ─── ECRÃ 9: QUESTIONÁRIO ────────────────────────────────
function buildQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  const letters = ['A', 'B', 'C', 'D'];

  quizData.forEach((q, qi) => {
    const block = document.createElement('div');
    block.className = 'question-block';
    block.id = `q-block-${q.id}`;

    const optionsHTML = q.options.map((opt, oi) => `
      <button class="option-btn" data-q="${q.id}" data-i="${oi}" onclick="selectOption(this, ${q.id}, ${oi})">
        <span class="option-letter">${letters[oi]}</span>
        ${opt}
      </button>
    `).join('');

    block.innerHTML = `
      <div class="q-num">PERGUNTA ${qi + 1} / ${quizData.length}</div>
      <div class="q-text">${q.question}</div>
      <div class="options-list" id="options-${q.id}">${optionsHTML}</div>
      <div class="quiz-explanation" id="expl-${q.id}">
        <div class="expl-header">📘 Explicação</div>
        <div class="expl-body"></div>
      </div>
    `;
    container.appendChild(block);
  });

  // Botão de submissão
  const submitBtn = document.createElement('button');
  submitBtn.className = 'btn-primary submit-quiz-btn';
  submitBtn.id = 'submitQuizBtn';
  submitBtn.textContent = 'Verificar respostas →';
  submitBtn.onclick = submitQuiz;
  container.appendChild(submitBtn);
}

function selectOption(btn, qId, optIndex) {
  // Remover seleção anterior nesta pergunta
  document.querySelectorAll(`[data-q="${qId}"]`).forEach(b => {
    b.style.borderColor = '';
    b.style.background = '';
    const letter = b.querySelector('.option-letter');
    if (letter) { letter.style.background = ''; letter.style.color = ''; }
  });

  // Marcar opção selecionada
  btn.style.borderColor = 'var(--orange)';
  btn.style.background = 'rgba(255,107,0,0.1)';
  const letter = btn.querySelector('.option-letter');
  if (letter) { letter.style.background = 'var(--orange)'; letter.style.color = 'white'; }

  quizAnswers[qId] = optIndex;
}

function submitQuiz() {
  const allAnswered = quizData.every(q => quizAnswers[q.id] !== undefined);
  if (!allAnswered) { showQuizWarning(); return; }

  let correct = 0;

  quizData.forEach(q => {
    const chosen    = quizAnswers[q.id];
    const isCorrect = (chosen === q.correct);
    if (isCorrect) correct++;

    // Colorir todos os botões
    document.querySelectorAll(`[data-q="${q.id}"]`).forEach(btn => {
      btn.disabled = true;
      btn.style.borderColor = '';
      btn.style.background = '';
      const letter = btn.querySelector('.option-letter');
      if (letter) { letter.style.background = ''; letter.style.color = ''; }
      const idx = parseInt(btn.dataset.i);
      if (idx === q.correct)                 btn.classList.add('correct');
      else if (idx === chosen && !isCorrect) btn.classList.add('wrong');
    });

    // Mostrar explicação por pergunta
    const explPanel = document.getElementById(`expl-${q.id}`);
    if (explPanel) {
      const bodyEl = explPanel.querySelector('.expl-body');
      if (bodyEl) {
        const prefix = isCorrect
          ? `<strong style="color:var(--green)">Correto!</strong> `
          : `<strong style="color:var(--red)">Incorreto.</strong> Resposta correta: <strong>${['A','B','C','D'][q.correct]}. ${q.options[q.correct]}</strong><br><br>`;
        bodyEl.innerHTML = prefix + q.explanation;
      }
      explPanel.classList.add('visible');
    }
  });

  // Mostrar resultado final
  const result    = document.getElementById('quizResult');
  const score     = document.getElementById('resultScore');
  const msg       = document.getElementById('resultMsg');
  const submitBtn = document.getElementById('submitQuizBtn');

  score.textContent = `${correct} / ${quizData.length}`;
  if (correct === quizData.length) {
    msg.textContent = '🏆 Excelente! Todas as respostas estão corretas!';
    score.style.color = 'var(--green)';
  } else if (correct >= 2) {
    msg.textContent = '👍 Bom resultado! Quase tudo correto.';
    score.style.color = 'var(--orange)';
  } else {
    msg.textContent = '📖 Recomendamos rever o material e tentar novamente.';
    score.style.color = 'var(--red)';
  }

  result.classList.remove('hidden');
  if (submitBtn) submitBtn.style.display = 'none';
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Atualizar botão seguinte para ir para o ecrã de objetivos
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = 'Seguinte →';
  nextBtn.onclick = () => navigateTo(10);
}

function retakeQuiz() {
  quizAnswers = {};

  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('correct', 'wrong');
    btn.style.cssText = '';
    const letter = btn.querySelector('.option-letter');
    if (letter) letter.style.cssText = '';
  });

  document.querySelectorAll('.quiz-explanation').forEach(p => p.classList.remove('visible'));
  document.getElementById('quizResult').classList.add('hidden');

  const submitBtn = document.getElementById('submitQuizBtn');
  if (submitBtn) submitBtn.style.display = '';

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = 'Concluir →';
  nextBtn.onclick = goNext;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showQuizWarning() {
  quizData.forEach(q => {
    if (quizAnswers[q.id] === undefined) {
      const block = document.getElementById(`q-block-${q.id}`);
      if (block) {
        block.style.outline = '2px solid var(--orange)';
        block.style.borderRadius = '8px';
        setTimeout(() => { block.style.outline = ''; }, 1500);
      }
    }
  });
}

// ─── ECRÃ 11: RECOMEÇAR ──────────────────────────────────
function restartModule() {
  quizAnswers = {};
  trajDone = false;

  // Repor questionário
  document.getElementById('quizResult')?.classList.add('hidden');
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('correct', 'wrong');
    btn.style.cssText = '';
    const letter = btn.querySelector('.option-letter');
    if (letter) letter.style.cssText = '';
  });
  document.querySelectorAll('.quiz-explanation').forEach(p => p.classList.remove('visible'));
  const submitBtn = document.getElementById('submitQuizBtn');
  if (submitBtn) submitBtn.style.display = '';

  // Repor trajetória
  resetTrajectory();

  // Repor botão seguinte
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.onclick = goNext;

  navigateTo(1);
}

// ─── MODULE 2 INTERAÇÃO ──────────────────────────────────

function initModule2AudioHighlight() {
  const audio = document.getElementById('module2Audio');
  const infographic = document.getElementById('module2Infographic');

  if (!audio || !infographic) return;

  const cards = {
    gear: infographic.querySelector('[data-topic="gear"]'),
    position: infographic.querySelector('[data-topic="position"]'),
    control: infographic.querySelector('[data-topic="control"]')
  };

  function clearStates() {
    infographic.classList.remove('is-finished');

    Object.values(cards).forEach(card => {
      if (!card) return;
      card.classList.remove('is-active', 'is-dimmed');
      card.classList.add('is-dimmed');
    });
  }

  function activate(topics) {
    clearStates();

    topics.forEach(topic => {
      const card = cards[topic];
      if (!card) return;
      card.classList.remove('is-dimmed');
      card.classList.add('is-active');
    });
  }

  function syncByTime() {
    const t = audio.currentTime;

    if (t < 30) {
      clearStates();
    } else if (t < 42) {
      activate(['gear']);
    } else if (t < 81) {
      activate(['position']);
    } else if (t < 102) {
      activate(['control']);
    } else {
      infographic.classList.add('is-finished');
      Object.values(cards).forEach(card => {
        if (!card) return;
        card.classList.remove('is-dimmed');
        card.classList.add('is-active');
      });
    }
  }

  audio.addEventListener('loadedmetadata', clearStates);
  audio.addEventListener('play', syncByTime);
  audio.addEventListener('timeupdate', syncByTime);
  audio.addEventListener('seeked', syncByTime);
  audio.addEventListener('ended', () => {
    infographic.classList.add('is-finished');
    Object.values(cards).forEach(card => {
      if (!card) return;
      card.classList.remove('is-dimmed');
      card.classList.add('is-active');
    });
  });

  clearStates();
}
