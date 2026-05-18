function currentLang() {
  return localStorage.getItem("siteLanguage") || "it";
}

function getTranslationsObject() {
  if (window.translations) {
    return window.translations;
  }

  if (typeof translations !== "undefined") {
    return translations;
  }

  return {};
}

function tr(key) {
  const lang = currentLang();
  const allTranslations = getTranslationsObject();

  if (allTranslations[lang] && allTranslations[lang][key]) {
    return allTranslations[lang][key];
  }

  if (allTranslations.it && allTranslations.it[key]) {
    return allTranslations.it[key];
  }

  return key;
}

function fragmentByKey(key) {
  const lang = currentLang();

  const fragments = {
    it: {
      remembering: "RICORDARE",
      is: "È",
      defending: "DIFENDERE",
      the: "LA",
      freedom: "LIBERTÀ"
    },
    en: {
      remembering: "REMEMBERING",
      is: "MEANS",
      defending: "DEFENDING",
      the: "OUR",
      freedom: "FREEDOM"
    }
  };

  return fragments[lang]?.[key] || fragments.it[key];
}

function getSections() {
  return [
    {
      title: tr("quiz.s1.title"),
      description: tr("quiz.s1.description"),
      fragment: fragmentByKey("remembering"),
      type: "quiz",
      questions: [
        {
          text: tr("quiz.s1.q1"),
          answers: [
            tr("quiz.s1.q1.a1"),
            tr("quiz.s1.q1.a2"),
            tr("quiz.s1.q1.a3"),
            tr("quiz.s1.q1.a4")
          ],
          correct: 1
        },
        {
          text: tr("quiz.s1.q2"),
          answers: [
            "1921",
            "1943",
            "1944",
            "1962"
          ],
          correct: 2
        },
        {
          text: tr("quiz.s1.q3"),
          answers: [
            tr("quiz.s1.q3.a1"),
            tr("quiz.s1.q3.a2"),
            tr("quiz.s1.q3.a3"),
            tr("quiz.s1.q3.a4")
          ],
          correct: 0
        }
      ]
    },

    {
      title: tr("quiz.s2.title"),
      description: tr("quiz.s2.description"),
      fragment: fragmentByKey("is"),
      type: "order",
      question: {
        text: tr("quiz.s2.question"),
        items: [
          tr("quiz.event.liberazione"),
          tr("quiz.event.santa"),
          tr("quiz.event.medaglia"),
          tr("quiz.event.armistizio"),
          tr("quiz.event.tre")
        ],
        correctOrder: [
          tr("quiz.event.santa"),
          tr("quiz.event.armistizio"),
          tr("quiz.event.tre"),
          tr("quiz.event.liberazione"),
          tr("quiz.event.medaglia")
        ]
      }
    },

    {
      title: tr("quiz.s3.title"),
      description: tr("quiz.s3.description"),
      fragment: fragmentByKey("defending"),
      type: "memory",
      question: {
        text: tr("quiz.s3.question"),
        pairs: [
          [tr("quiz.name.silvio"), tr("quiz.link.arco")],
          [tr("quiz.name.adria"), tr("quiz.link.marga")],
          [tr("quiz.name.guglielmo"), tr("quiz.link.garibaldi")],
          [tr("quiz.name.tre"), tr("quiz.link.ducale")]
        ]
      }
    },

    {
      title: tr("quiz.s4.title"),
      description: tr("quiz.s4.description"),
      fragment: fragmentByKey("the"),
      type: "map",
      questions: [
        {
          text: tr("quiz.s4.q1"),
          correct: tr("quiz.place.arco"),
          places: [
            {
              name: tr("quiz.place.piazza.cavour"),
              coords: [44.06085698601356, 12.565968596601108]
            },
            {
              name: tr("quiz.place.ceis"),
              coords: [44.05977058484695, 12.574391280485452]
            },
            {
              name: tr("quiz.place.arco"),
              coords: [44.05698637314707, 12.571120519555702]
            },
            {
              name: tr("quiz.place.ponte"),
              coords: [44.063028, 12.563181]
            },
            {
              name: tr("quiz.place.tre"),
              coords: [44.05927341090391, 12.568515442597235]
            }
          ]
        },
        {
          text: tr("quiz.s4.q2"),
          correct: tr("quiz.place.ceis"),
          places: [
            {
              name: tr("quiz.place.lager"),
              coords: [44.034991, 12.598233]
            },
            {
              name: tr("quiz.place.monte"),
              coords: [43.99988899601576, 12.49416875426955]
            },
            {
              name: tr("quiz.place.cimitero"),
              coords: [44.046809, 12.588168]
            },
            {
              name: tr("quiz.place.ceis"),
              coords: [44.05977058484695, 12.574391280485452]
            },
            {
              name: tr("quiz.place.piazza.cavour"),
              coords: [44.06085698601356, 12.565968596601108]
            }
          ]
        },
        {
          text: tr("quiz.s4.q3"),
          correct: tr("quiz.place.tre"),
          places: [
            {
              name: tr("quiz.place.arco"),
              coords: [44.05698637314707, 12.571120519555702]
            },
            {
              name: tr("quiz.place.malatesta"),
              coords: [44.060509, 12.566944]
            },
            {
              name: tr("quiz.place.borgo"),
              coords: [44.066005, 12.562805]
            },
            {
              name: tr("quiz.place.ceis"),
              coords: [44.05977058484695, 12.574391280485452]
            },
            {
              name: tr("quiz.place.tre"),
              coords: [44.05927341090391, 12.568515442597235]
            }
          ]
        },
        {
          text: tr("quiz.s4.q4"),
          correct: tr("quiz.place.piazza.cavour"),
          places: [
            {
              name: tr("quiz.place.tre"),
              coords: [44.05927341090391, 12.568515442597235]
            },
            {
              name: tr("quiz.place.piazza.cavour"),
              coords: [44.06085698601356, 12.565968596601108]
            },
            {
              name: tr("quiz.place.arco"),
              coords: [44.05698637314707, 12.571120519555702]
            },
            {
              name: tr("quiz.place.lager"),
              coords: [44.034991, 12.598233]
            },
            {
              name: tr("quiz.place.monte"),
              coords: [43.99988899601576, 12.49416875426955]
            }
          ]
        }
      ]
    },

    {
      title: tr("quiz.s5.title"),
      description: tr("quiz.s5.description"),
      fragment: fragmentByKey("freedom"),
      type: "faces",
      question: {
        text: tr("quiz.s5.question"),
        people: [
          {
            name: tr("quiz.name.guglielmo"),
            image: "Immagini_Partigiani/GuglielmoMarconi.jpg"
          },
          {
            name: tr("quiz.name.silvio"),
            image: "Immagini_Partigiani/SilvioCenci.jpg"
          },
          {
            name: tr("quiz.name.vito"),
            image: "Immagini_Partigiani/VitoNicoletti.jpg"
          },
          {
            name: tr("quiz.name.adria"),
            image: "Immagini_Partigiani/AdriaNeri.png"
          },
          {
            name: tr("quiz.name.olga"),
            image: "Immagini_Partigiani/OlgaBondi.jpg"
          }
        ]
      }
    }
  ];
}

let sections = getSections();

let currentSectionIndex = 0;
let currentQuestionIndex = 0;
let unlockedFragments = [];
let selectedMemoryCards = [];
let matchedPairs = 0;
let lockMemory = false;
let escapeMap = null;
let escapeMarkers = [];
let draggedCard = null;
let selectedTimelineCard = null;
let draggedName = null;
let selectedNameTag = null;
let selectedMarkerName = null;

const sectionNumber = document.getElementById("sectionNumber");
const questionNumber = document.getElementById("questionNumber");
const sectionTitle = document.getElementById("sectionTitle");
const sectionDescription = document.getElementById("sectionDescription");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answersBox");
const orderBox = document.getElementById("orderBox");
const memoryBox = document.getElementById("memoryBox");
const mapBox = document.getElementById("mapBox");
const facesBox = document.getElementById("facesBox");
const gameMessage = document.getElementById("gameMessage");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const gameCard = document.getElementById("gameCard");
const finalBox = document.getElementById("finalBox");

function loadSection() {
  const section = sections[currentSectionIndex];

  currentQuestionIndex = 0;
  selectedMemoryCards = [];
  matchedPairs = 0;
  lockMemory = false;
  draggedCard = null;
  selectedTimelineCard = null;
  draggedName = null;
  selectedNameTag = null;
  selectedMarkerName = null;

  sectionNumber.textContent = `${tr("quiz.section.of")} ${currentSectionIndex + 1} / ${sections.length}`;
  sectionTitle.textContent = section.title;
  sectionDescription.textContent = section.description;

  clearMessage();
  hideAllQuestionTypes();

  if (section.type === "order") {
    loadOrderSection();
  } else if (section.type === "memory") {
    loadMemorySection();
  } else if (section.type === "map") {
    loadMapSection();
  } else if (section.type === "faces") {
    loadFacesSection();
  } else {
    loadQuestion();
  }
}

function loadQuestion() {
  const section = sections[currentSectionIndex];
  const question = section.questions[currentQuestionIndex];

  hideAllQuestionTypes();
  answersBox.classList.remove("hidden");

  questionNumber.textContent = `${tr("quiz.question")} ${currentQuestionIndex + 1} / ${section.questions.length}`;
  questionText.textContent = question.text;
  answersBox.innerHTML = "";
  nextBtn.classList.add("hidden");
  clearMessage();

  question.answers.forEach((answer, index) => {
    createAnswerButton(answer, index);
  });
}

function createAnswerButton(text, value) {
  const button = document.createElement("button");
  button.className = "answer-btn";
  button.textContent = text;

  button.addEventListener("click", () => {
    checkAnswer(value, button);
  });

  answersBox.appendChild(button);
}

function checkAnswer(value, clickedButton) {
  const section = sections[currentSectionIndex];
  const question = section.questions[currentQuestionIndex];

  if (value !== question.correct) {
    clickedButton.classList.add("wrong");
    failSection();
    return;
  }

  clickedButton.classList.add("correct");
  showSuccess(tr("quiz.correct"));

  disableAnswerButtons();

  if (currentQuestionIndex < section.questions.length - 1) {
    nextBtn.classList.remove("hidden");
  } else {
    completeSection();
  }
}

function disableAnswerButtons() {
  document.querySelectorAll(".answer-btn").forEach((button) => {
    button.disabled = true;
  });
}

/* LINEA DEL TEMPO */

function loadOrderSection() {
  const section = sections[currentSectionIndex];
  const question = section.question;

  hideAllQuestionTypes();
  orderBox.classList.remove("hidden");

  questionNumber.textContent = tr("quiz.timeline");
  questionText.textContent = question.text;
  orderBox.innerHTML = "";
  nextBtn.classList.add("hidden");
  clearMessage();

  draggedCard = null;
  selectedTimelineCard = null;

  const dropArea = document.createElement("div");
  dropArea.className = "timeline-drop-area";

  for (let i = 0; i < question.correctOrder.length; i++) {
    const slot = document.createElement("div");
    slot.className = "timeline-slot";
    slot.dataset.number = i + 1;
    slot.dataset.index = i;
    slot.textContent = tr("quiz.drag.here");

    slot.addEventListener("dragover", (event) => {
      event.preventDefault();
      slot.classList.add("drag-over");
    });

    slot.addEventListener("dragleave", () => {
      slot.classList.remove("drag-over");
    });

    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("drag-over");

      if (!draggedCard) return;

      putTimelineCardInSlot(slot, draggedCard);
      draggedCard = null;
    });

    slot.addEventListener("click", () => {
      if (!selectedTimelineCard) {
        showError(tr("quiz.select.event.first"));
        return;
      }

      putTimelineCardInSlot(slot, selectedTimelineCard);
      selectedTimelineCard.classList.remove("selected");
      selectedTimelineCard = null;
      clearMessage();
    });

    dropArea.appendChild(slot);
  }

  const bank = document.createElement("div");
  bank.className = "timeline-bank";
  bank.id = "timelineBank";

  const bankTitle = document.createElement("div");
  bankTitle.className = "timeline-bank-title";
  bankTitle.textContent = tr("quiz.events.order");
  bank.appendChild(bankTitle);

  const shuffledItems = [...question.items];
  shuffleArray(shuffledItems);

  shuffledItems.forEach((item) => {
    const card = createTimelineCard(item);
    bank.appendChild(card);
  });

  const checkButton = document.createElement("button");
  checkButton.className = "timeline-check-btn";
  checkButton.textContent = tr("quiz.check.order");
  checkButton.addEventListener("click", checkTimelineOrder);

  orderBox.appendChild(dropArea);
  orderBox.appendChild(bank);
  orderBox.appendChild(checkButton);
}

function createTimelineCard(text) {
  const card = document.createElement("div");
  card.className = "timeline-card";
  card.textContent = text;
  card.draggable = true;
  card.dataset.value = text;

  card.addEventListener("dragstart", () => {
    draggedCard = card;
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });

  card.addEventListener("click", () => {
    document.querySelectorAll(".timeline-card").forEach((item) => {
      item.classList.remove("selected");
    });

    selectedTimelineCard = card;
    card.classList.add("selected");

    showSuccess(`${tr("quiz.selected")}: ${text}. ${tr("quiz.timeline.instruction")}`);
  });

  return card;
}

function putTimelineCardInSlot(slot, card) {
  if (slot.querySelector(".timeline-card")) {
    const oldCard = slot.querySelector(".timeline-card");
    document.getElementById("timelineBank").appendChild(oldCard);
    oldCard.classList.remove("in-slot");
    oldCard.classList.remove("selected");
  }

  const oldSlot = card.closest(".timeline-slot");

  if (oldSlot) {
    oldSlot.classList.remove("filled");
    oldSlot.textContent = tr("quiz.drag.here");
  }

  slot.textContent = "";
  slot.appendChild(card);
  slot.classList.add("filled");

  card.classList.add("in-slot");
  card.classList.remove("selected");
}

function checkTimelineOrder() {
  const section = sections[currentSectionIndex];
  const correctOrder = section.question.correctOrder;
  const slots = document.querySelectorAll(".timeline-slot");

  const userOrder = [];

  for (const slot of slots) {
    const card = slot.querySelector(".timeline-card");

    if (!card) {
      showError(tr("quiz.fill.timeline"));
      return;
    }

    userOrder.push(card.dataset.value);
  }

  const isCorrect = userOrder.every((item, index) => item === correctOrder[index]);

  if (!isCorrect) {
    failSection();
    return;
  }

  showSuccess(tr("quiz.timeline.correct"));
  completeSection();
}

/* MEMORY ABBINAMENTO */

function loadMemorySection() {
  const section = sections[currentSectionIndex];

  hideAllQuestionTypes();
  memoryBox.classList.remove("hidden");

  questionNumber.textContent = tr("quiz.match");
  questionText.textContent = section.question.text;
  memoryBox.innerHTML = "";
  selectedMemoryCards = [];
  matchedPairs = 0;
  lockMemory = false;
  nextBtn.classList.add("hidden");
  clearMessage();

  const leftColumn = document.createElement("div");
  leftColumn.className = "memory-column";

  const rightColumn = document.createElement("div");
  rightColumn.className = "memory-column";

  const leftTitle = document.createElement("div");
  leftTitle.className = "memory-column-title";
  leftTitle.textContent = tr("quiz.names");

  const rightTitle = document.createElement("div");
  rightTitle.className = "memory-column-title";
  rightTitle.textContent = tr("quiz.links");

  leftColumn.appendChild(leftTitle);
  rightColumn.appendChild(rightTitle);

  const leftCards = [];
  const rightCards = [];

  section.question.pairs.forEach((pair, pairIndex) => {
    leftCards.push({
      text: pair[0],
      pair: pairIndex,
      side: "left"
    });

    rightCards.push({
      text: pair[1],
      pair: pairIndex,
      side: "right"
    });
  });

  shuffleArray(leftCards);
  shuffleArray(rightCards);

  leftCards.forEach((cardData) => {
    const card = createMatchCard(cardData);
    leftColumn.appendChild(card);
  });

  rightCards.forEach((cardData) => {
    const card = createMatchCard(cardData);
    rightColumn.appendChild(card);
  });

  memoryBox.appendChild(leftColumn);
  memoryBox.appendChild(rightColumn);
}

function createMatchCard(cardData) {
  const button = document.createElement("button");
  button.className = "memory-card";
  button.textContent = cardData.text;

  button.dataset.pair = cardData.pair;
  button.dataset.side = cardData.side;

  if (cardData.side === "left") {
    const arrow = document.createElement("span");
    arrow.className = "memory-arrow";
    arrow.textContent = "→";
    button.appendChild(arrow);
  }

  button.addEventListener("click", () => {
    selectMatchCard(button);
  });

  return button;
}

function selectMatchCard(card) {
  if (lockMemory) return;
  if (card.classList.contains("matched")) return;

  if (selectedMemoryCards.length === 1 && selectedMemoryCards[0] === card) {
    card.classList.remove("selected");
    selectedMemoryCards = [];
    return;
  }

  if (selectedMemoryCards.length === 1 && selectedMemoryCards[0].dataset.side === card.dataset.side) {
    selectedMemoryCards[0].classList.remove("selected");
    selectedMemoryCards = [];
  }

  card.classList.add("selected");
  selectedMemoryCards.push(card);

  if (selectedMemoryCards.length === 2) {
    checkMatchPair();
  }
}

function checkMatchPair() {
  const first = selectedMemoryCards[0];
  const second = selectedMemoryCards[1];

  if (first.dataset.pair === second.dataset.pair && first.dataset.side !== second.dataset.side) {
    first.classList.remove("selected");
    second.classList.remove("selected");

    first.classList.add("matched");
    second.classList.add("matched");

    selectedMemoryCards = [];
    matchedPairs++;

    showSuccess(tr("quiz.match.correct"));

    if (matchedPairs === sections[currentSectionIndex].question.pairs.length) {
      completeSection();
    }

    return;
  }

  first.classList.add("wrong");
  second.classList.add("wrong");

  lockMemory = true;
  showError(tr("quiz.match.wrong"));

  setTimeout(() => {
    loadSection();
  }, 1300);
}

/* MAPPA LEAFLET */

function loadMapSection() {
  const section = sections[currentSectionIndex];
  const question = section.questions[currentQuestionIndex];

  selectedMarkerName = null;

  hideAllQuestionTypes();
  mapBox.classList.remove("hidden");

  questionNumber.textContent = `${tr("quiz.clue")} ${currentQuestionIndex + 1} / ${section.questions.length}`;
  questionText.textContent = question.text;
  mapBox.innerHTML = "";
  nextBtn.classList.add("hidden");
  clearMessage();

  if (escapeMap !== null) {
    escapeMap.remove();
    escapeMap = null;
    escapeMarkers = [];
  }

  const mapContainer = document.createElement("div");
  mapContainer.id = "escapeMap";
  mapContainer.className = "escape-map";

  const list = document.createElement("div");
  list.className = "map-list";

  const smallTitle = document.createElement("div");
  smallTitle.className = "map-question-small";
  smallTitle.textContent = tr("quiz.available.places");
  list.appendChild(smallTitle);

  question.places.forEach((place, index) => {
    const button = document.createElement("button");
    button.className = "map-place";
    button.textContent = `${index + 1}. ${place.name}`;

    button.addEventListener("click", () => {
      checkMapAnswer(place.name, button);
    });

    list.appendChild(button);
  });

  mapBox.appendChild(mapContainer);
  mapBox.appendChild(list);

  setTimeout(() => {
    createEscapeMap(question.places);
  }, 50);
}

function createEscapeMap(places) {
  escapeMap = L.map("escapeMap", {
    minZoom: 11,
    maxZoom: 18,
    scrollWheelZoom: true,
    maxBounds: [
      [43.95, 12.45],
      [44.10, 12.62]
    ],
    maxBoundsViscosity: 0.8
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    minZoom: 11,
    maxZoom: 18
  }).addTo(escapeMap);

  const bounds = [];

  places.forEach((place, index) => {
    const marker = L.marker(place.coords).addTo(escapeMap);

    marker.bindPopup(`
      <div class="escape-map-popup">
        <h4>${index + 1}. ${place.name}</h4>
        <p>${tr("quiz.popup.confirm")}</p>
      </div>
    `);

    marker.on("click", () => {
      handleMarkerClick(place.name, marker);
    });

    escapeMarkers.push(marker);
    bounds.push(place.coords);
  });

  escapeMap.fitBounds(bounds, {
    padding: [35, 35]
  });

  setTimeout(() => {
    escapeMap.invalidateSize();
  }, 200);
}

function handleMarkerClick(placeName, marker) {
  if (selectedMarkerName === placeName) {
    checkMapAnswer(placeName, marker);
    return;
  }

  selectedMarkerName = placeName;
  marker.openPopup();

  showSuccess(`${tr("quiz.selected")}: ${placeName}. ${tr("quiz.marker.confirm")}`);
}

function checkMapAnswer(placeName, clickedElement) {
  const section = sections[currentSectionIndex];
  const question = section.questions[currentQuestionIndex];

  if (placeName !== question.correct) {
    if (clickedElement.classList) {
      clickedElement.classList.add("wrong");
    }

    failSection();
    return;
  }

  if (clickedElement.classList) {
    clickedElement.classList.add("correct");
  }

  showSuccess(tr("quiz.place.correct"));

  disableMapButtons();

  if (currentQuestionIndex < section.questions.length - 1) {
    nextBtn.classList.remove("hidden");
  } else {
    completeSection();
  }
}

function disableMapButtons() {
  document.querySelectorAll(".map-place").forEach((button) => {
    button.disabled = true;
  });

  escapeMarkers.forEach((marker) => {
    marker.off("click");
  });
}

/* VOLTI PARTIGIANI */

function loadFacesSection() {
  const section = sections[currentSectionIndex];
  const people = section.question.people;

  hideAllQuestionTypes();
  facesBox.classList.remove("hidden");

  questionNumber.textContent = tr("quiz.faces");
  questionText.textContent = section.question.text;
  facesBox.innerHTML = "";
  nextBtn.classList.add("hidden");
  clearMessage();

  draggedName = null;
  selectedNameTag = null;

  const facesGrid = document.createElement("div");
  facesGrid.className = "faces-grid";

  people.forEach((person) => {
    const card = document.createElement("div");
    card.className = "face-card";

    const img = document.createElement("img");
    img.src = person.image;
    img.alt = person.name;

    const drop = document.createElement("div");
    drop.className = "face-drop";
    drop.dataset.correct = person.name;
    drop.textContent = tr("quiz.drag.name.here");

    drop.addEventListener("dragover", (event) => {
      event.preventDefault();
      drop.classList.add("drag-over");
    });

    drop.addEventListener("dragleave", () => {
      drop.classList.remove("drag-over");
    });

    drop.addEventListener("drop", (event) => {
      event.preventDefault();
      drop.classList.remove("drag-over");

      if (!draggedName) return;

      putNameInDrop(drop, draggedName);
      draggedName = null;
    });

    drop.addEventListener("click", () => {
      if (!selectedNameTag) {
        showError(tr("quiz.select.name.first"));
        return;
      }

      putNameInDrop(drop, selectedNameTag);
      selectedNameTag.classList.remove("selected");
      selectedNameTag = null;
      clearMessage();
    });

    card.appendChild(img);
    card.appendChild(drop);
    facesGrid.appendChild(card);
  });

  const nameBank = document.createElement("div");
  nameBank.className = "name-bank";

  const bankTitle = document.createElement("div");
  bankTitle.className = "name-bank-title";
  bankTitle.textContent = tr("quiz.names.drag");
  nameBank.appendChild(bankTitle);

  const tagsBox = document.createElement("div");
  tagsBox.className = "name-tags";
  tagsBox.id = "nameTags";

  const names = people.map((person) => person.name);
  shuffleArray(names);

  names.forEach((name) => {
    const tag = createNameTag(name);
    tagsBox.appendChild(tag);
  });

  nameBank.appendChild(tagsBox);

  const checkButton = document.createElement("button");
  checkButton.className = "faces-check-btn";
  checkButton.textContent = tr("quiz.check.names");
  checkButton.addEventListener("click", checkFacesAnswer);

  facesBox.appendChild(facesGrid);
  facesBox.appendChild(nameBank);
  facesBox.appendChild(checkButton);
}

function createNameTag(name) {
  const tag = document.createElement("div");
  tag.className = "name-tag";
  tag.textContent = name;
  tag.draggable = true;
  tag.dataset.value = name;

  tag.addEventListener("dragstart", () => {
    draggedName = tag;
    tag.classList.add("dragging");
  });

  tag.addEventListener("dragend", () => {
    tag.classList.remove("dragging");
  });

  tag.addEventListener("click", () => {
    document.querySelectorAll(".name-tag").forEach((item) => {
      item.classList.remove("selected");
    });

    selectedNameTag = tag;
    tag.classList.add("selected");

    showSuccess(`${tr("quiz.selected")}: ${name}. ${tr("quiz.face.instruction")}`);
  });

  return tag;
}

function putNameInDrop(drop, tag) {
  if (drop.querySelector(".name-tag")) {
    const oldName = drop.querySelector(".name-tag");
    document.getElementById("nameTags").appendChild(oldName);
    oldName.classList.remove("in-slot");
    oldName.classList.remove("selected");
  }

  const oldDrop = tag.closest(".face-drop");

  if (oldDrop) {
    oldDrop.classList.remove("filled");
    oldDrop.textContent = tr("quiz.drag.name.here");
  }

  drop.textContent = "";
  drop.appendChild(tag);
  drop.classList.add("filled");

  tag.classList.add("in-slot");
  tag.classList.remove("selected");
}

function checkFacesAnswer() {
  const drops = document.querySelectorAll(".face-drop");

  for (const drop of drops) {
    const tag = drop.querySelector(".name-tag");

    if (!tag) {
      showError(tr("quiz.fill.faces"));
      return;
    }

    if (tag.dataset.value !== drop.dataset.correct) {
      failSection();
      return;
    }
  }

  showSuccess(tr("quiz.faces.correct"));
  completeSection();
}

/* GESTIONE GENERALE */

function completeSection() {
  const section = sections[currentSectionIndex];

  if (!unlockedFragments.includes(currentSectionIndex)) {
    unlockedFragments.push(currentSectionIndex);
    unlockFragment(currentSectionIndex, section.fragment);
  }

  showSuccess(`${tr("quiz.section.completed")} ${section.fragment}`);

  setTimeout(() => {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      loadSection();
    } else {
      showFinal();
    }
  }, 1700);
}

function unlockFragment(index, text) {
  const fragmentBox = document.getElementById(`fragment-${index}`);

  if (!fragmentBox) {
    return;
  }

  fragmentBox.textContent = text;
  fragmentBox.classList.add("unlocked");
}

function updateUnlockedFragments() {
  unlockedFragments.forEach((index) => {
    const fragmentBox = document.getElementById(`fragment-${index}`);

    if (fragmentBox && sections[index]) {
      fragmentBox.textContent = sections[index].fragment;
      fragmentBox.classList.add("unlocked");
    }
  });
}

function failSection() {
  showError(tr("quiz.wrong"));

  setTimeout(() => {
    loadSection();
  }, 1400);
}

function showFinal() {
  gameCard.classList.add("hidden");
  finalBox.classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("finalPhrase").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 200);
}

function hideAllQuestionTypes() {
  answersBox.classList.add("hidden");
  orderBox.classList.add("hidden");
  memoryBox.classList.add("hidden");
  mapBox.classList.add("hidden");
  facesBox.classList.add("hidden");
}

function showSuccess(message) {
  gameMessage.textContent = message;
  gameMessage.className = "game-message success";
}

function showError(message) {
  gameMessage.textContent = message;
  gameMessage.className = "game-message error";
}

function clearMessage() {
  gameMessage.textContent = "";
  gameMessage.className = "game-message";
}

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

nextBtn.addEventListener("click", () => {
  const section = sections[currentSectionIndex];

  currentQuestionIndex++;
  selectedMarkerName = null;

  if (section.type === "map") {
    loadMapSection();
  } else {
    loadQuestion();
  }
});

restartBtn.addEventListener("click", () => {
  loadSection();
});

document.addEventListener("siteLanguageChanged", () => {
  sections = getSections();
  updateUnlockedFragments();

  if (!finalBox.classList.contains("hidden")) {
    return;
  }

  loadSection();
});

loadSection();