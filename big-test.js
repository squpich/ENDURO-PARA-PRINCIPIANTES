const bigQuizData = [
  {
    id: 1,
    question: "O que é o enduro?",
    options: [
      "Uma modalidade de corrida apenas em pista asfaltada",
      "Uma modalidade motociclista praticada em terreno acidentado",
      "Um treino estático sem deslocação",
      "Uma técnica exclusiva de motocross indoor"
    ],
    correct: 1,
    explanation: "O enduro pratica-se em terreno irregular e exige adaptação constante da técnica de condução."
  },
  {
    id: 2,
    question: "Qual é a posição base mais correta para conduzir em terreno irregular?",
    options: [
      "Sentado com o peso totalmente no selim",
      "Em pé nos pedais de apoio com joelhos fletidos",
      "Com os braços rígidos e o tronco inclinado para trás",
      "Sempre com um pé fora da moto"
    ],
    correct: 1,
    explanation: "A posição em pé transforma as pernas em amortecedores ativos e melhora o controlo."
  },
  {
    id: 3,
    question: "Porque devem os joelhos estar encostados ao depósito?",
    options: [
      "Para dificultar o movimento da moto",
      "Para aumentar a tensão nos braços",
      "Porque ajudam no ponto de contacto e no controlo da moto",
      "Apenas por razões estéticas"
    ],
    correct: 2,
    explanation: "Os joelhos estabilizam o corpo e ajudam a controlar melhor a moto."
  },
  {
    id: 4,
    question: "Onde deve estar o olhar durante a condução?",
    options: [
      "Na roda dianteira",
      "No guiador",
      "Sempre para baixo",
      "5 a 10 metros à frente"
    ],
    correct: 3,
    explanation: "Olhar em frente melhora a antecipação e ajuda o corpo a equilibrar-se na direção certa."
  },
  {
    id: 5,
    question: "Como deve ser utilizado o acelerador em enduro?",
    options: [
      "De forma brusca para ganhar tração",
      "De forma suave e progressiva",
      "Só em retas longas",
      "Sem qualquer modulação"
    ],
    correct: 1,
    explanation: "A aceleração suave evita derrapagens e perda de controlo, especialmente em terrenos soltos."
  },
  {
    id: 6,
    question: "Qual é a função da embraiagem no enduro técnico?",
    options: [
      "Não deve ser usada",
      "Serve apenas para arrancar",
      "Ajuda a dosear a tração com precisão",
      "Substitui totalmente os travões"
    ],
    correct: 2,
    explanation: "A embraiagem é usada ativamente para controlar a entrega de potência."
  },
  {
    id: 7,
    question: "Que travão fornece maior potência de travagem?",
    options: [
      "O travão dianteiro",
      "O travão traseiro",
      "Ambos travam exatamente o mesmo",
      "Nenhum dos dois"
    ],
    correct: 0,
    explanation: "O travão dianteiro fornece a maior parte da potência, mas deve ser usado com cuidado."
  },
  {
    id: 8,
    question: "Como deve ser feita a travagem em terreno solto?",
    options: [
      "Com pressão brusca no travão dianteiro",
      "Sem usar travões",
      "Com doseamento suave para evitar bloqueio",
      "Apenas com a embraiagem"
    ],
    correct: 2,
    explanation: "Travagem suave evita o bloqueio das rodas e reduz o risco de queda."
  },
  {
    id: 9,
    question: "Numa subida, como deve ser ajustado o peso do corpo?",
    options: [
      "Mais à frente",
      "Mais atrás",
      "Totalmente sentado",
      "Sem qualquer ajuste"
    ],
    correct: 0,
    explanation: "Nas subidas, o peso à frente ajuda a manter tração e direção."
  },
  {
    id: 10,
    question: "Qual é um erro típico de principiante?",
    options: [
      "Olhar em frente",
      "Relaxar os braços",
      "Ficar sentado e rígido sobre a moto",
      "Usar equipamento de proteção"
    ],
    correct: 2,
    explanation: "A posição sentada e rígida reduz absorção de impactos e controlo."
  },
  {
    id: 11,
    question: "Qual destas opções descreve uma trajetória segura?",
    options: [
      "Passar diretamente por cima de todos os obstáculos",
      "Escolher uma linha suave e antecipada",
      "Virar bruscamente no último momento",
      "Olhar apenas para o obstáculo mais próximo"
    ],
    correct: 1,
    explanation: "Uma linha suave e antecipada aumenta estabilidade e segurança."
  },
  {
    id: 12,
    question: "Qual é o equipamento mais importante de proteção?",
    options: [
      "Capacete homologado",
      "Luvas",
      "Jersey",
      "Óculos escuros"
    ],
    correct: 0,
    explanation: "O capacete protege a cabeça e é essencial para a segurança do piloto."
  },
  {
    id: 13,
    question: "Qual é a vantagem principal de conduzir em pé nos pedais?",
    options: [
    "As pernas absorvem melhor os impactos do terreno",
    "A moto consome menos combustível",
    "O travão dianteiro torna-se mais forte",
    "O guiador fica mais leve automaticamente"
    ],
    correct: 0,
    explanation: "Em pé nos pedais, o corpo funciona como amortecedor ativo e melhora o controlo em terreno irregular."
  },
  {
    id: 14,
    question: "O que deve fazer com o tronco durante a condução em enduro?",
    options: [
      "Mantê-lo completamente rígido",
      "Relaxá-lo e evitar tensão excessiva",
      "Inclinar sempre para trás",
      "Rodá-lo para fora da curva"
    ],
    correct: 1,
    explanation: "O tronco deve manter-se relaxado para permitir melhor absorção de impactos e movimentos mais naturais."
  },
  {
    id: 15,
    question: "Qual é a consequência de olhar para baixo durante a condução?",
    options: [
      "Aumenta a tração da roda traseira",
      "Melhora a travagem",
      "Atrasa a reação e prejudica a trajetória",
      "Facilita a leitura do terreno distante"
    ],
    correct: 2,
    explanation: "Olhar para baixo reduz a antecipação e faz o condutor reagir tarde aos obstáculos."
  },
  {
    id: 16,
    question: "Qual é o papel principal do travão traseiro nas descidas?",
    options: [
      "Desligar a potência do motor",
      "Virar a moto automaticamente",
      "Substituir totalmente o travão dianteiro",
      "Ajudar a estabilizar a moto"
    ],
    correct: 3,
    explanation: "O travão traseiro ajuda a estabilizar a moto, sobretudo em descidas e terrenos mais delicados."
  },
  {
    id: 17,
    question: "Qual destas ações ajuda a corrigir o erro de conduzir com os braços tensos?",
    options: [
      "Relaxar os pulsos e manter um aperto leve no guiador",
      "Segurar o guiador com toda a força possível",
      "Sentar-se para reduzir o esforço",
      "Usar apenas o travão traseiro"
    ],
    correct: 0,
    explanation: "Braços e pulsos relaxados ajudam a moto a mover-se naturalmente e melhoram o controlo."
  },
  {
    id: 18,
    question: "Em terreno escorregadio, qual é a melhor forma de abrir o acelerador?",
    options: [
      "Rapidamente, para sair da zona de perigo",
      "De forma gradual e controlada",
      "Só com o motor em ponto morto",
      "Sempre ao máximo nas curvas"
    ],
    correct: 1,
    explanation: "A aceleração gradual evita derrapagens e permite manter a tração."
  },
  {
    id: 19,
    question: "Qual destas afirmações sobre a linha de condução é correta?",
    options: [
      "A melhor linha é sempre a mais curta",
      "Deve passar por cima dos obstáculos para manter velocidade",
      "Uma linha segura evita mudanças bruscas e obstáculos desnecessários",
      "A trajetória só depende da potência da moto"
    ],
    correct: 2,
    explanation: "A linha segura é suave, previsível e contorna obstáculos quando necessário."
  },
  {
    id: 20,
    question: "Qual destas práticas é mais adequada para um principiante no treino inicial?",
    options: [
      "Treinar saltos altos logo no primeiro dia",
      "Conduzir apenas sentado para ganhar confiança",
      "Praticar em terreno aberto com foco no olhar e no equilíbrio",
      "Acelerar bruscamente para sentir a reação da moto"
    ],
    correct: 2,
    explanation: "O treino inicial deve focar controlo básico, equilíbrio, posição e antecipação em ambiente simples."
  }
];

const bigQuizAnswers = {};

document.addEventListener('DOMContentLoaded', () => {
  buildBigQuiz();
  updateBigQuizProgress();
});

function buildBigQuiz() {
  const container = document.getElementById('bigQuizContainer');
  if (!container) return;

  const letters = ['A', 'B', 'C', 'D'];

  bigQuizData.forEach((q, index) => {
    const block = document.createElement('div');
    block.className = 'question-block';
    block.id = `big-q-block-${q.id}`;

    const optionsHTML = q.options.map((opt, oi) => `
      <button class="option-btn"
              data-q="${q.id}"
              data-i="${oi}"
              onclick="selectBigOption(this, ${q.id}, ${oi})">
        <span class="option-letter">${letters[oi]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

    block.innerHTML = `
      <div class="q-num">PERGUNTA ${index + 1} / ${bigQuizData.length}</div>
      <div class="q-text">${q.question}</div>
      <div class="options-list">${optionsHTML}</div>
      <div class="quiz-explanation" id="big-expl-${q.id}">
        <div class="expl-header">Explicação</div>
        <div class="expl-body"></div>
      </div>
    `;

    container.appendChild(block);
  });

  const actions = document.createElement('div');
  actions.className = 'big-quiz-actions';
  actions.innerHTML = `
    <button class="btn-primary" id="submitBigQuizBtn" onclick="submitBigQuiz()">Verificar respostas</button>
  `;
  container.appendChild(actions);
}

function selectBigOption(btn, qId, optIndex) {
  document.querySelectorAll(`[data-q="${qId}"]`).forEach(b => {
    b.classList.remove('selected');
  });

  btn.classList.add('selected');
  bigQuizAnswers[qId] = optIndex;

  const block = document.getElementById(`big-q-block-${qId}`);
  if (block) block.classList.remove('unanswered');

  updateBigQuizProgress();
}

function updateBigQuizProgress() {
  const answered = Object.keys(bigQuizAnswers).length;
  const total = bigQuizData.length;
  const pct = Math.round((answered / total) * 100);

  document.getElementById('testAnswered').textContent = `${answered} / ${total} respondidas`;
  document.getElementById('testPercent').textContent = `${pct}%`;
  document.getElementById('testProgressFill').style.width = `${pct}%`;
}

function submitBigQuiz() {
  let missing = false;

  bigQuizData.forEach(q => {
    const block = document.getElementById(`big-q-block-${q.id}`);
    if (bigQuizAnswers[q.id] === undefined) {
      missing = true;
      block.classList.add('unanswered');
    } else {
      block.classList.remove('unanswered');
    }
  });

  if (missing) {
    alert('Responde a todas as perguntas antes de concluir.');
    return;
  }

  let correctCount = 0;

  bigQuizData.forEach(q => {
    const chosen = bigQuizAnswers[q.id];
    const isCorrect = chosen === q.correct;
    if (isCorrect) correctCount++;

    document.querySelectorAll(`[data-q="${q.id}"]`).forEach(btn => {
      btn.disabled = true;
      const idx = parseInt(btn.dataset.i, 10);

      if (idx === q.correct) btn.classList.add('correct');
      else if (idx === chosen && !isCorrect) btn.classList.add('wrong');
    });

    const expl = document.getElementById(`big-expl-${q.id}`);
    const body = expl.querySelector('.expl-body');
    const letters = ['A', 'B', 'C', 'D'];

    body.innerHTML = `
      ${isCorrect
        ? `<strong style="color: var(--green);">Correto.</strong>`
        : `<strong style="color: var(--red);">Incorreto.</strong> Resposta correta: <strong>${letters[q.correct]}. ${q.options[q.correct]}</strong><br><br>`
      }
      ${q.explanation}
    `;

    expl.classList.add('visible');
  });

  const result = document.getElementById('bigQuizResult');
  const score = document.getElementById('bigResultScore');
  const msg = document.getElementById('bigResultMsg');

  score.textContent = `${correctCount}/${bigQuizData.length}`;

  if (correctCount === 20) {
    score.style.color = 'var(--green)';
    msg.textContent = 'Resultado perfeito! Melhor era impossível — dominaste totalmente os conteúdos do curso.';
  } else if (correctCount >= 18) {
    score.style.color = 'var(--green)';
    msg.textContent = 'Excelente resultado! Dominas muito bem os conteúdos do curso.';
  } else if (correctCount >= 15) {
    score.style.color = 'var(--orange)';
    msg.textContent = 'Aprovado. Tens uma boa compreensão dos fundamentos do enduro.';
  } else {
    score.style.color = 'var(--red)';
    msg.textContent = 'Não aprovado. Deves rever os módulos anteriores antes de repetir o exame.';
  }

  document.getElementById('submitBigQuizBtn').style.display = 'none';
  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function retakeBigQuiz() {
  Object.keys(bigQuizAnswers).forEach(key => delete bigQuizAnswers[key]);

  document.querySelectorAll('.big-quiz-container .option-btn').forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('selected', 'correct', 'wrong');
  });

  document.querySelectorAll('.big-quiz-container .question-block').forEach(block => {
    block.classList.remove('unanswered');
  });

  document.querySelectorAll('.big-quiz-container .quiz-explanation').forEach(expl => {
    expl.classList.remove('visible');
  });

  document.getElementById('bigQuizResult').classList.add('hidden');
  document.getElementById('submitBigQuizBtn').style.display = '';
  updateBigQuizProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}