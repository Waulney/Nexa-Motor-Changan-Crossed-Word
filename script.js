const I18N = {
    fr: {
        levelWord: "Niveau",
        scoreWord: "Trouvés",
        instruction: "Consigne : Glisse ton doigt ou ta souris de manière fluide pour relier les mots en ligne droite.",
        wordsTitle: "Mots à chercher :",
        modalSuccessTitle: "Niveau Validé ! 🚗",
        modalSuccessDesc: "Prêt pour la suite de l'inspection ?",
        modalFinalTitle: "Parcours Nexa & Changan Terminé ! 🏆",
        modalFinalDesc: "Félicitations, vous avez complété les 20 niveaux de l'univers automobile !",
        nextBtn: "Niveau Suivant",
        replayBtn: "Rejouer depuis le début",
        timeLabel: "Temps réalisé :"
    },
    en: {
        levelWord: "Level",
        scoreWord: "Found",
        instruction: "Instruction: Slide your finger or mouse smoothly to connect words in a straight line.",
        wordsTitle: "Words to find:",
        modalSuccessTitle: "Level Validated! 🚗",
        modalSuccessDesc: "Ready for the next inspection?",
        modalFinalTitle: "Nexa & Changan Journey Completed! 🏆",
        modalFinalDesc: "Congratulations, you completed all 20 automotive levels!",
        nextBtn: "Next Level",
        replayBtn: "Play Again from Start",
        timeLabel: "Time taken:"
    }
};

// 20 Niveaux entièrement corrigés (mots complets et naturels en FR et EN)
const LEVELS = [
    {
        title: { fr: "Niveau 1 : Motorisation & Moteur", en: "Level 1: Engine & Powertrain" },
        words: { fr: ["TURBO", "PISTON", "HUILE", "FILTRE", "BOUGIE", "MOTEUR"], en: ["TURBO", "PISTON", "OIL", "FILTER", "SPARK", "MOTOR"] }
    },
    {
        title: { fr: "Niveau 2 : Transmission & Boîte", en: "Level 2: Transmission & Gearbox" },
        words: { fr: ["BOITE", "VITESSE", "DISQUE", "EMBRAYAGE", "LEVIER", "PONT"], en: ["GEAR", "SPEED", "DISC", "CLUTCH", "LEVER", "AXLE"] }
    },
    {
        title: { fr: "Niveau 3 : Châssis & Suspension", en: "Level 3: Chassis & Suspension" },
        words: { fr: ["RESSORT", "AMORTI", "FREIN", "DISQUE", "PNEU", "ROUE"], en: ["SPRING", "SHOCK", "BRAKE", "DISC", "TIRE", "WHEEL"] }
    },
    {
        title: { fr: "Niveau 4 : Électricité & Batterie", en: "Level 4: Electricity & Battery" },
        words: { fr: ["LAMPE", "PHARE", "FEUX", "VOLT", "CABLE", "FUSIBLE"], en: ["LAMP", "HEAD", "LIGHT", "VOLT", "CABLE", "FUSE"] }
    },
    {
        title: { fr: "Niveau 5 : Software & Écran", en: "Level 5: Software & Display" },
        words: { fr: ["ECRAN", "TACTILE", "MENU", "RADIO", "GPS", "DATA"], en: ["SCREEN", "TOUCH", "MENU", "RADIO", "GPS", "DATA"] }
    },
    {
        title: { fr: "Niveau 6 : Sécurité & Airbags", en: "Level 6: Safety & Airbags" },
        words: { fr: ["AIR", "BAG", "ALARME", "RADAR", "CAMERA", "ALERTE"], en: ["AIR", "BAG", "ALARM", "RADAR", "CAM", "ALERT"] }
    },
    {
        title: { fr: "Niveau 7 : Confort & Intérieur", en: "Level 7: Comfort & Interior" },
        words: { fr: ["SIEGE", "CUIR", "TOIT", "VITRE", "CLIM", "TAPIS"], en: ["SEAT", "LEATHER", "ROOF", "GLASS", "AC", "MAT"] }
    },
    {
        title: { fr: "Niveau 8 : Carrosserie & Design", en: "Level 8: Body & Design" },
        words: { fr: ["PORTE", "CAPOT", "AILE", "CALANDRE", "COFFRE", "PEINTURE"], en: ["DOOR", "HOOD", "FENDER", "GRILLE", "TRUNK", "PAINT"] }
    },
    {
        title: { fr: "Niveau 9 : Gamme Changan SUV", en: "Level 9: Changan SUV Lineup" },
        words: { fr: ["UNI", "CS75", "CS35", "HUNTER", "CS55", "EADO"], en: ["UNI", "CS75", "CS35", "HUNTER", "CS55", "EADO"] }
    },
    {
        title: { fr: "Niveau 10 : Électrification & EV", en: "Level 10: Electrification & EV" },
        words: { fr: ["LITHIUM", "WATT", "BORNE", "ECO", "HYBRIDE", "VOLT"], en: ["LITHIUM", "WATT", "PLUG", "ECO", "HYBRID", "VOLT"] }
    },
    {
        title: { fr: "Niveau 11 : Performance & Route", en: "Level 11: Performance & Road" },
        words: { fr: ["ROUTE", "VITESSE", "COURSE", "LIGNE", "FREIN", "TEST"], en: ["ROAD", "SPEED", "RACE", "LINE", "BRAKE", "TEST"] }
    },
    {
        title: { fr: "Niveau 12 : Connectivité & Apps", en: "Level 12: Connectivity & Apps" },
        words: { fr: ["BLEU", "WIFI", "SYNC", "CLOUD", "APPLI", "PORT"], en: ["BLUE", "WIFI", "SYNC", "CLOUD", "APP", "PORT"] }
    },
    {
        title: { fr: "Niveau 13 : Entretien & Atelier", en: "Level 13: Maintenance & Workshop" },
        words: { fr: ["ATELIER", "OUTIL", "CLE", "VALISE", "VIS", "TEST"], en: ["SHOP", "TOOL", "KEY", "SCAN", "SCREW", "TEST"] }
    },
    {
        title: { fr: "Niveau 14 : Direction & Contrôle", en: "Level 14: Steering & Control" },
        words: { fr: ["VOLANT", "DIRECTION", "PEDALE", "FREIN", "GAZ", "PARK"], en: ["WHEEL", "STEER", "PEDAL", "BRAKE", "GAS", "PARK"] }
    },
    {
        title: { fr: "Niveau 15 : Éclairage LED & Optiques", en: "Level 15: LED Lighting & Optics" },
        words: { fr: ["FEUX", "LEDS", "NEON", "AMPOULE", "FLASH", "RAYON"], en: ["LIGHT", "LEDS", "NEON", "BULB", "FLASH", "BEAM"] }
    },
    {
        title: { fr: "Niveau 16 : Matériaux & Finitions", en: "Level 16: Materials & Finishes" },
        words: { fr: ["ACIER", "ALU", "CHROME", "FIBRE", "BOIS", "TISSU"], en: ["STEEL", "ALUM", "CHROME", "FIBER", "WOOD", "FABRIC"] }
    },
    {
        title: { fr: "Niveau 17 : Climatisation & Air", en: "Level 17: Air Conditioning" },
        words: { fr: ["AIR", "VENTIL", "CHAUD", "FROID", "FILTRE", "BUEE"], en: ["AIR", "BLOW", "HOT", "COLD", "FILTER", "MIST"] }
    },
    {
        title: { fr: "Niveau 18 : Sécurité Active", en: "Level 18: Active Safety" },
        words: { fr: ["ABS", "ESP", "RADAR", "ALERTE", "SUIVI", "BLOC"], en: ["ABS", "ESP", "RADAR", "ALERT", "TRACK", "LOCK"] }
    },
    {
        title: { fr: "Niveau 19 : Service Client & Vente", en: "Level 19: Customer Service & Sales" },
        words: { fr: ["CLIENT", "VENTE", "OFFRE", "PRIX", "DEVIS", "GARANT"], en: ["CLIENT", "SALES", "OFFER", "PRICE", "QUOTE", "WARRANT"] }
    },
    {
        title: { fr: "Niveau 20 : Nexa & Changan Ultime", en: "Level 20: Ultimate Nexa & Changan" },
        words: { fr: ["NEXA", "CHANGAN", "AUTO", "FUTUR", "ROUTE", "STYLE"], en: ["NEXA", "CHANGAN", "AUTO", "FUTURE", "ROAD", "STYLE"] }
    }
];

let currentLang = 'fr';
let currentLevelIndex = 0;
let grid = [];
let placedWords = [];
let foundWords = new Set();
let selectedCells = [];
let isInteracting = false;
let startCell = null;

let timerInterval = null;
let secondsElapsed = 0;
const GRID_SIZE = 10;

document.addEventListener('DOMContentLoaded', () => {
    initLevel(currentLevelIndex);

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUIStaticTexts();
        initLevel(currentLevelIndex);
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        const btn = document.getElementById('themeToggleBtn');
        btn.innerText = document.body.classList.contains('theme-light') ? '☀️' : '🌙';
    });

    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        document.getElementById('levelModal').classList.add('hidden');
        currentLevelIndex++;
        if (currentLevelIndex >= LEVELS.length) {
            currentLevelIndex = 0;
        }
        initLevel(currentLevelIndex);
    });

    window.addEventListener('mouseup', endSelection);
    window.addEventListener('touchend', endSelection);
});

function updateUIStaticTexts() {
    const t = I18N[currentLang];
    document.getElementById('gameInstruction').innerText = t.instruction;
    document.getElementById('wordsToFindTitle').innerText = t.wordsTitle;
}

function startTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        secondsElapsed++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (secondsElapsed % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `⏱️ ${mins}:${secs}`;
}

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (currentLang === 'fr') {
        if (mins > 0) return `${mins} minute(s) et ${secs} seconde(s)`;
        return `${secs} seconde(s)`;
    } else {
        if (mins > 0) return `${mins} minute(s) and ${secs} second(s)`;
        return `${secs} second(s)`;
    }
}

function initLevel(levelIdx) {
    const levelData = LEVELS[levelIdx];
    const t = I18N[currentLang];
    const wordsForLang = levelData.words[currentLang];
    
    document.getElementById('levelDisplay').innerText = `${t.levelWord} ${levelIdx + 1} / ${LEVELS.length}`;
    document.getElementById('levelThemeTitle').innerText = levelData.title[currentLang];
    updateUIStaticTexts();
    
    foundWords.clear();
    generateGrid(wordsForLang);
    renderWordList(wordsForLang);
    renderGrid();
    startTimer();
}

function generateGrid(words) {
    grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    placedWords = [];

    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const cleanWord = word.replace(/[^A-Z]/g, '');

        while (!placed && attempts < 100) {
            attempts++;
            const direction = Math.floor(Math.random() * 3);
            let row = Math.floor(Math.random() * GRID_SIZE);
            let col = Math.floor(Math.random() * GRID_SIZE);

            if (canPlaceWord(cleanWord, row, col, direction)) {
                placeWord(cleanWord, row, col, direction);
                placedWords.push({ word: cleanWord, coords: getWordCoords(cleanWord, row, col, direction) });
                placed = true;
            }
        }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    const len = word.length;
    if (dir === 0 && col + len > GRID_SIZE) return false;
    if (dir === 1 && row + len > GRID_SIZE) return false;
    if (dir === 2 && (col + len > GRID_SIZE || row + len > GRID_SIZE)) return false;

    for (let i = 0; i < len; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            return false;
        }
    }
    return true;
}

function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        grid[r][c] = word[i];
    }
}

function getWordCoords(word, row, col, dir) {
    let coords = [];
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        coords.push(`${r}-${c}`);
    }
    return coords;
}

function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.innerText = grid[r][c];

            cell.addEventListener('mousedown', (e) => { e.preventDefault(); startSelection(r, c); });
            cell.addEventListener('mouseenter', () => { if (isInteracting) updateSelection(r, c); });

            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(r, c);
            }, { passive: false });

            cell.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (!isInteracting) return;
                const touch = e.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    updateSelection(parseInt(target.dataset.row), parseInt(target.dataset.col));
                }
            }, { passive: false });

            container.appendChild(cell);
        }
    }
}

function renderWordList(words) {
    const container = document.getElementById('wordList');
    container.innerHTML = '';
    const t = I18N[currentLang];
    words.forEach(word => {
        const chip = document.createElement('div');
        chip.classList.add('word-chip');
        chip.id = `chip-${word}`;
        chip.innerText = word;
        container.appendChild(chip);
    });
    document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : 0 / ${words.length}`;
}

function startSelection(r, c) {
    isInteracting = true;
    startCell = { r, c };
    selectedCells = [`${r}-${c}`];
    updateCellStyles();
}

function updateSelection(r, c) {
    if (!isInteracting || !startCell) return;

    let dr = r - startCell.r;
    let dc = c - startCell.c;
    
    let steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) {
        selectedCells = [`${startCell.r}-${startCell.c}`];
        updateCellStyles();
        return;
    }

    let stepR = dr === 0 ? 0 : dr / steps;
    let stepC = dc === 0 ? 0 : dc / steps;

    if (Math.abs(stepR) !== Math.abs(stepC) && stepR !== 0 && stepC !== 0) {
        return;
    }

    selectedCells = [];
    for (let i = 0; i <= steps; i++) {
        let currR = Math.round(startCell.r + (i * stepR));
        let currC = Math.round(startCell.c + (i * stepC));
        selectedCells.push(`${currR}-${currC}`);
    }

    updateCellStyles();
}

function endSelection() {
    if (!isInteracting) return;
    isInteracting = false;
    startCell = null;

    let formedWord = selectedCells.map(key => {
        const [r, c] = key.split('-').map(Number);
        return grid[r][c];
    }).join('');

    const currentWords = LEVELS[currentLevelIndex].words[currentLang];
    let matched = placedWords.find(pw => pw.word === formedWord || pw.word === formedWord.split('').reverse().join(''));
    const t = I18N[currentLang];

    if (matched && currentWords.includes(matched.word) && !foundWords.has(matched.word)) {
        foundWords.add(matched.word);
        
        selectedCells.forEach(key => {
            const cell = document.querySelector(`[data-row='${key.split('-')[0]}'][data-col='${key.split('-')[1]}']`);
            if (cell) cell.classList.add('found');
        });

        const chip = document.getElementById(`chip-${matched.word}`);
        if (chip) chip.classList.add('found');

        document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : ${foundWords.size} / ${currentWords.length}`;

        if (foundWords.size === currentWords.length) {
            stopTimer();
            setTimeout(showLevelModal, 400);
        }
    }

    selectedCells = [];
    updateCellStyles();
}

function updateCellStyles() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const key = `${cell.dataset.row}-${cell.dataset.col}`;
        if (selectedCells.includes(key)) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function showLevelModal() {
    const modal = document.getElementById('levelModal');
    const t = I18N[currentLang];
    const timeFormatted = formatTime(secondsElapsed);
    
    document.getElementById('modalTimeResult').innerText = `${t.timeLabel} ${timeFormatted}`;
    
    if (currentLevelIndex === LEVELS.length - 1) {
        document.getElementById('modalTitle').innerText = t.modalFinalTitle;
        document.getElementById('modalDesc').innerText = t.modalFinalDesc;
        document.getElementById('nextLevelBtn').innerText = t.replayBtn;
    } else {
        document.getElementById('modalTitle').innerText = t.modalSuccessTitle;
        document.getElementById('modalDesc').innerText = t.modalSuccessDesc;
        document.getElementById('nextLevelBtn').innerText = t.nextBtn;
    }
    modal.classList.remove('hidden');
}
