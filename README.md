# Memóriajáték - README.md

## Tartalomjegyzék

1. [Bevezetés](#bevezetés)
2. [Fájl Struktúra](#fájlszerkezet)
   - [1. index.html](#1-indexhtml)
   - [2. styles.css](#2-stylescss)
   - [3. script.js](#3-scriptjs)
3. [Részletes Kódmagyarázat](#részletes-kódmagyarázat)
   - [1. index.html Részletes Elemzése](#1-indexhtml-részletes-elemzése)
   - [2. styles.css Részletes Elemzése](#2-stylescss-részletes-elemzése)
   - [3. script.js Részletes Elemzése](#3-scriptjs-részletes-elemzése)
4. [Játék Folyamata](#játék-folyamata)
5. [Bővítési Lehetőségek](#bővítési-lehetőségek)
6. [Telepítés és Futtatás](#telepítés-es-futtatás)
7. [Hibakeresés és Tesztelés](#hibakeresés-es-tesztelés)
8. [Következtetés](#következtetés)
9. [Licenc](#licenc)

---

## Bevezetés

A Memóriajáték egy egyszerű webalapú játék, amelynek célja, hogy a felhasználó memorizáljon egy sorozatban megjelenő cellákat egy 3x3-as rácsban, majd helyesen reprodukálja azokat. A játék sötét témájú, letisztult és egyszerű megjelenésű, amely kellemes felhasználói élményt biztosít.

Ez a README.md fájl részletesen bemutatja a projekt felépítését, a kódok működését, és soronkénti magyarázatot nyújt minden egyes fájlhoz, hogy a fejlesztők és érdeklődők alaposan megérthessék a játék működését.

---

## Fájlszerkezet

A projekt három fő fájlból áll:

1. **index.html**: A weboldal HTML alapstruktúráját tartalmazza, amely meghatározza a játék felületét és a szükséges elemeket.
2. **styles.css**: A megjelenésért felelős CSS fájl, amely stílusokat és elrendezést definiál a HTML elemekhez.
3. **script.js**: A játék logikáját megvalósító JavaScript kód, amely kezeli a felhasználói interakciókat és a játék állapotát.

---

### 1. index.html

Ez a fájl tartalmazza a weboldal szerkezetét, beleértve a rácsot, a vezérlő gombokat és az üzeneteket.

### 2. styles.css

A CSS fájl felelős a weboldal megjelenéséért, beleértve a színeket, elrendezést, animációkat és átmeneteket.

### 3. script.js

A JavaScript fájl kezeli a játék logikáját, beleértve a sorozat generálását, a felhasználói bemenetek ellenőrzését, a pontszámok kezelését és a játék állapotának frissítését.

---

## Részletes Kódmagyarázat

### 1. index.html Részletes Elemzése

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memóriajáték</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Memóriajáték</h1>
        <div id="grid" class="grid">
            <!-- 3x3 rács -->
            <div class="cell" data-index="0"></div>
            <div class="cell" data-index="1"></div>
            <div class="cell" data-index="2"></div>
            <div class="cell" data-index="3"></div>
            <div class="cell" data-index="4"></div>
            <div class="cell" data-index="5"></div>
            <div class="cell" data-index="6"></div>
            <div class="cell" data-index="7"></div>
            <div class="cell" data-index="8"></div>
        </div>
        <div class="controls">
            <button id="startButton">Indítás</button>
            <div>Pontszám: <span id="score">0</span></div>
        </div>
        <div id="message" class="message"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

#### Soronkénti Magyarázat

1. `<!DOCTYPE html>`: Meghatározza a dokumentum típusát HTML5-ként, amely a modern weboldalak alapja.
2. `<html lang="hu">`: Megnyitja az HTML dokumentumot, és beállítja a nyelvet magyarra (`lang="hu"`), ami fontos a helyes megjelenítéshez és a keresőoptimalizáláshoz.
3. `<head>`: A dokumentum fejrésze, ahol metaadatokat és hivatkozásokat helyezünk el.
4. `<meta charset="UTF-8">`: Beállítja a karakterkódolást UTF-8-ra, ami lehetővé teszi a különböző nyelvek karaktereinek helyes megjelenítését.
5. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Biztosítja, hogy a weboldal reszponzív legyen, és jól jelenjen meg különböző eszközökön, például mobiltelefonokon és tableteken.
6. `<title>Memóriajáték</title>`: Meghatározza az oldal címét, amely megjelenik a böngésző fülén.
7. `<link rel="stylesheet" href="styles.css">`: Hivatkozás a külső CSS fájlra (`styles.css`), amely a weboldal stílusait tartalmazza.
8. `</head>`: Befejezi a fejrészt.
9. `<body>`: Megnyitja a dokumentum törzsrészét, ahol a látványos tartalom helyezkedik el.
10. `<div class="container">`: Egy konténer `div`, amely központosítja a tartalmat és korlátozza a szélességet.
11. `<h1>Memóriajáték</h1>`: Egy címsor (`h1`), amely megjeleníti a játék nevét.
12. `<div id="grid" class="grid">`: Egy `div`, amely a 3x3-as rácsot reprezentálja, és azonosítóval (`id="grid"`) valamint osztállyal (`class="grid"`) rendelkezik a stílus és a JavaScript manipuláció érdekében.
13. `<!-- 3x3 rács -->`: Megjegyzés, amely jelzi, hogy a következő `div` elemek a rács celláit képviselik.
14. `<div class="cell" data-index="0"></div>`: Egy cella `div`, amely osztállyal (`class="cell"`) és egyedi adat attribútummal (`data-index="0"`) rendelkezik. Ez a cella a rács első pozícióját jelenti.
15-22. `<div class="cell" data-index="1"></div>` - `<div class="cell" data-index="8"></div>`: Hasonló cellák a rács többi pozíciójához, mindegyik egyedi `data-index` értékkel.
23. `</div>`: Befejezi a rács `div`-et.
24. `<div class="controls">`: Egy `div`, amely tartalmazza a vezérlő elemeket, mint a gomb és a pontszám kijelzése.
25. `<button id="startButton">Indítás</button>`: Egy gomb elem, amely indítja a játékot, azonosítóval (`id="startButton"`) a JavaScript számára.
26. `<div>Pontszám: <span id="score">0</span></div>`: Egy `div`, amely megjeleníti a pontszámot. A pontszámot tartalmazó `span`-nek van egyedi azonosítója (`id="score"`), hogy dinamikusan frissíthető legyen a JavaScript segítségével.
27. `</div>`: Befejezi a vezérlő `div`-et.
28. `<div id="message" class="message"></div>`: Egy üzenetmező `div`, amely visszajelzéseket jelenít meg a felhasználónak, például hibaüzeneteket. Egyedi azonosítóval (`id="message"`) és osztállyal (`class="message"`) rendelkezik.
29. `</div>`: Befejezi a konténer `div`-et.
30. `<script src="script.js"></script>`: Hivatkozás a külső JavaScript fájlra (`script.js`), amely a játék logikáját tartalmazza.
31. `</body>`: Befejezi a törzsrészt.
32. `</html>`: Befejezi az HTML dokumentumot.

---

### 2. styles.css Részletes Elemzése

```css
/* Alapbeállítások */
body {
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    justify-content: center;
    margin: 0 auto 20px;
}

.cell {
    background-color: #1e1e1e;
    border: 2px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s, opacity 0.5s;
    opacity: 0.8;
}

.cell.active {
    background-color: #ffcc00;
    opacity: 1;
    transform: scale(1.1);
}

.cell.correct {
    background-color: #28a745;
    transform: scale(1.1);
}

.cell.incorrect {
    background-color: #dc3545;
    transform: scale(1.1);
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #2c2c2c;
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #444;
}

.message {
    height: 20px;
    font-size: 1em;
    color: #ffcc00;
}
```

#### Soronkénti Magyarázat

1. `/* Alapbeállítások */`: Komment, amely a következő CSS szabályok általános beállításait jelzi.
2. `body { ... }`: A weboldal törzsének stílusait határozza meg.
   - `margin: 0;`: Eltávolítja az alapértelmezett margót.
   - `padding: 0;`: Eltávolítja az alapértelmezett belső margót.
   - `background-color: #121212;`: Beállítja a háttér színét sötét szürkére.
   - `color: #ffffff;`: Beállítja az alap szöveg színét fehérre.
   - `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`: Meghatározza a betűtípust, előnyben részesítve az Apple és modern rendszerek alapértelmezett betűtípusait.
   - `display: flex;`: Flexbox elrendezést alkalmaz a törzs tartalmának középre igazításához.
   - `justify-content: center;`: Horizontális középre igazítás.
   - `align-items: center;`: Függőleges középre igazítás.
   - `height: 100vh;`: A törzs magasságát a nézet magasságára (`100vh`) állítja, így a tartalom középre kerül a képernyőn.
3. `.container { ... }`: A konténer `div` stílusai.
   - `text-align: center;`: A szöveget középre igazítja a konténeren belül.
4. `h1 { ... }`: A címsor (`h1`) stílusai.
   - `margin-bottom: 20px;`: Alsó margót ad a cím alá, hogy elválassza a többi tartalomtól.
5. `.grid { ... }`: A rács `div` stílusai.
   - `display: grid;`: Grid elrendezést alkalmaz.
   - `grid-template-columns: repeat(3, 100px);`: Három oszlopot definiál, mindegyik 100px széles.
   - `grid-template-rows: repeat(3, 100px);`: Három sorozatot definiál, mindegyik 100px magas.
   - `gap: 10px;`: 10px távolságot ad az egyes cellák között.
   - `justify-content: center;`: A grid középre igazítása vízszintesen.
   - `margin: 0 auto 20px;`: Középre igazítja a gridet vízszintesen, és 20px alsó margót ad.
6. `.cell { ... }`: A cellák `div` elemeinek stílusai.
   - `background-color: #1e1e1e;`: Sötétszürke háttérszín.
   - `border: 2px solid #333;`: 2px vastag, sötétszürke keret.
   - `display: flex;`: Flexbox elrendezést alkalmaz a tartalom középre igazításához.
   - `justify-content: center;`: Horizontális középre igazítás.
   - `align-items: center;`: Függőleges középre igazítás.
   - `font-size: 2em;`: A betűméret kétszeres alapméretű.
   - `cursor: pointer;`: Az egér kurzorát kézre változtatja, jelezve, hogy kattintható.
   - `transition: background-color 0.3s, transform 0.3s, opacity 0.5s;`: Átmenetek beállítása a háttérszín, átalakítás és átlátszóság változásaira.
   - `opacity: 0.8;`: Az alapértelmezett átlátszóság 80%-ra állítása.
7. `.cell.active { ... }`: Az aktív állapotú cellák stílusai.
   - `background-color: #ffcc00;`: Aranysárga háttérszín.
   - `opacity: 1;`: Teljes átlátszóság.
   - `transform: scale(1.1);`: A cella méretének 110%-ra történő növelése.
8. `.cell.correct { ... }`: A helyes választás esetén alkalmazott stílusok.
   - `background-color: #28a745;`: Zöld háttérszín.
   - `transform: scale(1.1);`: A cella méretének 110%-ra történő növelése.
9. `.cell.incorrect { ... }`: A hibás választás esetén alkalmazott stílusok.
   - `background-color: #dc3545;`: Vörös háttérszín.
   - `transform: scale(1.1);`: A cella méretének 110%-ra történő növelése.
10. `.controls { ... }`: A vezérlő elemek `div` stílusai.
    - `display: flex;`: Flexbox elrendezést alkalmaz.
    - `justify-content: center;`: Horizontális középre igazítás.
    - `align-items: center;`: Függőleges középre igazítás.
    - `gap: 20px;`: 20px távolságot ad az egyes elemek között.
    - `margin-bottom: 10px;`: 10px alsó margót ad.
11. `button { ... }`: A gombok stílusai.
    - `padding: 10px 20px;`: 10px függőleges és 20px vízszintes belső margót ad.
    - `font-size: 1em;`: A betűméret az alapméretet használja.
    - `background-color: #2c2c2c;`: Sötétszürke háttérszín.
    - `border: none;`: Nincs keret.
    - `color: #fff;`: Fehér szövegszín.
    - `cursor: pointer;`: Az egér kurzorát kézre változtatja.
    - `border-radius: 5px;`: Lekerekített sarkak 5px sugarú görbületekkel.
    - `transition: background-color 0.3s;`: Átmenet a háttérszín változására.
12. `button:hover { ... }`: A gombok hover állapotának stílusai.
    - `background-color: #444;`: Világosabb szürke háttérszín.
13. `.message { ... }`: Az üzenetmező `div` stílusai.
    - `height: 20px;`: Fix magasság 20px.
    - `font-size: 1em;`: Az alap betűméretet használja.
    - `color: #ffcc00;`: Aranysárga szövegszín, amely jól látható a sötét háttéren.

---

### 3. script.js Részletes Elemzése

```javascript
const grid = document.getElementById('grid');
const startButton = document.getElementById('startButton');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');

let score = 0;
let sequence = [];
let userSequence = [];
let acceptingInput = false;

// Inicializálja a rácsot
function initGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!acceptingInput) return;
            const index = parseInt(cell.getAttribute('data-index'));
            userSequence.push(index);
            checkUserInput(cell, index);
        });
    });
}

// Indítás gomb eseménye
startButton.addEventListener('click', startGame);

// Játék indítása
function startGame() {
    resetGame();
    generateSequence();
    showSequence();
}

// Jeleníti a generált cellákat felvillanásként
function showSequence() {
    acceptingInput = false;
    let delay = 0;
    sequence.forEach((cellIndex, i) => {
        setTimeout(() => {
            const cell = document.querySelector(`.cell[data-index="${cellIndex}"]`);
            cell.classList.add('active');
            // Felvillanás időtartama 500ms
            setTimeout(() => {
                cell.classList.remove('active');
            }, 500);
        }, delay);
        delay += 700; // Késleltetés a következő cella felvillanásához
    });
    // Engedélyezzük a felhasználói inputot a sorozat megjelenítése után
    setTimeout(() => {
        acceptingInput = true;
    }, delay);
}

// Ellenőrzi a felhasználó bemenetét
function checkUserInput(cell, index) {
    const expectedIndex = sequence[userSequence.length - 1];
    if (index === expectedIndex) {
        cell.classList.add('correct');
        score += 1;
        scoreDisplay.textContent = score;
        if (userSequence.length === sequence.length) {
            // Sikeres kör, generáljunk egy új cellát
            setTimeout(() => {
                cellsClear();
                userSequence = [];
                generateSequence();
                showSequence();
            }, 1000);
        }
    } else {
        cell.classList.add('incorrect');
        message.textContent = 'Helytelen választás! Pontszám nullázódott.';
        score = 0;
        scoreDisplay.textContent = score;
        acceptingInput = false;
        setTimeout(() => {
            cellsClear();
            message.textContent = '';
        }, 2000);
    }
}

// Generál egy új cellát a sorozathoz
function generateSequence() {
    const available = [...Array(9).keys()];
    // Kiválasztunk egy új cellát, ami nincs már a sorozatban
    const newNumbers = available.filter(num => !sequence.includes(num));
    if (newNumbers.length === 0) return; // Minden cella már benne van
    const newNumber = newNumbers[Math.floor(Math.random() * newNumbers.length)];
    // Legfeljebb 3 cella a sorozatban
    if (sequence.length >= 3) {
        sequence.shift();
    }
    sequence.push(newNumber);
}

// Törli a cellák tartalmát és osztályait
function cellsClear() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('active', 'correct', 'incorrect');
    });
}

// Játék visszaállítása
function resetGame() {
    sequence = [];
    userSequence = [];
    score = 0;
    scoreDisplay.textContent = score;
    message.textContent = '';
    cellsClear();
}

// Inicializálás
initGrid();
```

#### Soronkénti Magyarázat

1. `const grid = document.getElementById('grid');`: Kiválasztja és eltárolja a rács `div` elemét a DOM-ból a `grid` változóba.
2. `const startButton = document.getElementById('startButton');`: Kiválasztja és eltárolja az indítási gombot a DOM-ból a `startButton` változóba.
3. `const scoreDisplay = document.getElementById('score');`: Kiválasztja és eltárolja a pontszám megjelenítő `span` elemet a DOM-ból a `scoreDisplay` változóba.
4. `const message = document.getElementById('message');`: Kiválasztja és eltárolja az üzenetmezőt a DOM-ból a `message` változóba.
5. `let score = 0;`: Inicializálja a pontszámot 0-ra.
6. `let sequence = [];`: Inicializál egy üres tömböt, amely tárolja a generált cella sorozatot.
7. `let userSequence = [];`: Inicializál egy üres tömböt, amely tárolja a felhasználó által kiválasztott cellák sorozatát.
8. `let acceptingInput = false;`: Inicializál egy logikai változót, amely jelzi, hogy a felhasználói bemenetek elfogadásra kerülnek-e.
9. `// Inicializálja a rácsot`: Komment, amely a következő függvény célját magyarázza.
10. `function initGrid() { ... }`: Definiálja az `initGrid` függvényt, amely kezeli a cellák eseménykezelőinek beállítását.
    - `const cells = document.querySelectorAll('.cell');`: Kiválasztja az összes cella `div` elemet a DOM-ból és eltárolja a `cells` változóban.
    - `cells.forEach(cell => { ... });`: Iterál minden cellán a `cells` tömbben.
        - `cell.addEventListener('click', () => { ... });`: Hozzáad egy kattintási eseménykezelőt minden cellához.
            - `if (!acceptingInput) return;`: Ha a `acceptingInput` hamis, nem tesz semmit, ezzel megakadályozva a felhasználói interakciókat a sorozat megjelenítése alatt.
            - `const index = parseInt(cell.getAttribute('data-index'));`: Lekéri a cella `data-index` attribútumát és egész számként tárolja az `index` változóban.
            - `userSequence.push(index);`: Hozzáadja a kiválasztott cella indexét a felhasználói sorozathoz.
            - `checkUserInput(cell, index);`: Meghívja a `checkUserInput` függvényt a kiválasztott cella és index ellenőrzésére.
11. `// Indítás gomb eseménye`: Komment, amely a következő sor célját magyarázza.
12. `startButton.addEventListener('click', startGame);`: Hozzáad egy kattintási eseménykezelőt az indítási gombhoz, amely a `startGame` függvényt hívja meg.
13. `// Játék indítása`: Komment, amely a következő függvény célját magyarázza.
14. `function startGame() { ... }`: Definiálja a `startGame` függvényt, amely kezeli a játék indítását.
    - `resetGame();`: Meghívja a `resetGame` függvényt a játék állapotának visszaállításához.
    - `generateSequence();`: Meghívja a `generateSequence` függvényt egy új cella hozzáadásához a sorozathoz.
    - `showSequence();`: Meghívja a `showSequence` függvényt a generált sorozat megjelenítéséhez.
15. `// Jeleníti a generált cellákat felvillanásként`: Komment, amely a következő függvény célját magyarázza.
16. `function showSequence() { ... }`: Definiálja a `showSequence` függvényt, amely megjeleníti a sorozatot.
    - `acceptingInput = false;`: Leállítja a felhasználói bemenetek elfogadását a sorozat megjelenítése alatt.
    - `let delay = 0;`: Inicializálja a késleltetési változót 0-ra.
    - `sequence.forEach((cellIndex, i) => { ... });`: Iterál a sorozat minden celláján.
        - `setTimeout(() => { ... }, delay);`: Időzített függvény, amely a megjelenítést késlelteti a `delay` érték szerint.
            - `const cell = document.querySelector(`.cell[data-index="${cellIndex}"]`);`: Kiválasztja a megfelelő cellát a DOM-ból a `data-index` alapján.
            - `cell.classList.add('active');`: Hozzáadja az `active` osztályt a cellához, ami felvillanást eredményez.
            - `setTimeout(() => { ... }, 500);`: Időzített függvény, amely 500ms után eltávolítja az `active` osztályt.
                - `cell.classList.remove('active');`: Eltávolítja az `active` osztályt, hogy a cella visszatérjen az alapállapotba.
        - `delay += 700;`: Növeli a késleltetést 700ms-rel a következő cella megjelenítéséhez.
    - `setTimeout(() => { ... }, delay);`: Időzített függvény, amely a sorozat megjelenítése után engedélyezi a felhasználói bemenetet.
        - `acceptingInput = true;`: Engedélyezi a felhasználói bemenetek elfogadását.
17. `// Ellenőrzi a felhasználó bemenetét`: Komment, amely a következő függvény célját magyarázza.
18. `function checkUserInput(cell, index) { ... }`: Definiálja a `checkUserInput` függvényt, amely ellenőrzi a felhasználó választását.
    - `const expectedIndex = sequence[userSequence.length - 1];`: Lekéri a sorozat aktuális elemét, amelyet a felhasználónak választania kell.
    - `if (index === expectedIndex) { ... } else { ... }`: Ellenőrzi, hogy a felhasználó által kiválasztott cella indexe megegyezik-e a várt indexszel.
        - **Ha helyes választás**:
            - `cell.classList.add('correct');`: Hozzáadja a `correct` osztályt a cellához, ami zöld színt és méretnövelést eredményez.
            - `score += 1;`: Növeli a pontszámot 1-gyel.
            - `scoreDisplay.textContent = score;`: Frissíti a pontszám megjelenítését.
            - `if (userSequence.length === sequence.length) { ... }`: Ellenőrzi, hogy a felhasználó befejezte-e a sorozatot.
                - **Ha a sorozat teljesítve**:
                    - `setTimeout(() => { ... }, 1000);`: Időzített függvény, amely 1 másodperc után generál egy új cellát és megjeleníti a sorozatot.
                        - `cellsClear();`: Meghívja a `cellsClear` függvényt, hogy törölje az aktuális cella állapotát.
                        - `userSequence = [];`: Visszaállítja a felhasználói sorozatot üresre.
                        - `generateSequence();`: Generál egy új cellát a sorozathoz.
                        - `showSequence();`: Megjeleníti a frissített sorozatot.
        - **Ha hibás választás**:
            - `cell.classList.add('incorrect');`: Hozzáadja az `incorrect` osztályt a cellához, ami piros színt és méretnövelést eredményez.
            - `message.textContent = 'Helytelen választás! Pontszám nullázódott.';`: Megjelenít egy hibaüzenetet.
            - `score = 0;`: Visszaállítja a pontszámot 0-ra.
            - `scoreDisplay.textContent = score;`: Frissíti a pontszám megjelenítését.
            - `acceptingInput = false;`: Megállítja a felhasználói bemenetek elfogadását.
            - `setTimeout(() => { ... }, 2000);`: Időzített függvény, amely 2 másodperc után törli a cellák állapotát és az üzenetet.
                - `cellsClear();`: Törli az aktuális cella állapotát.
                - `message.textContent = '';`: Eltávolítja az üzenetet.
19. `// Generál egy új cellát a sorozathoz`: Komment, amely a következő függvény célját magyarázza.
20. `function generateSequence() { ... }`: Definiálja a `generateSequence` függvényt, amely hozzáad egy új cellát a sorozathoz.
    - `const available = [...Array(9).keys()];`: Létrehoz egy tömböt `[0, 1, 2, 3, 4, 5, 6, 7, 8]`, amely az elérhető cellák indexeit tartalmazza.
    - `const newNumbers = available.filter(num => !sequence.includes(num));`: Kiszűri azokat a számokat, amelyek már benne vannak a sorozatban, ezzel elkerülve a duplikációt.
    - `if (newNumbers.length === 0) return;`: Ha nincs több elérhető szám (minden cella már benne van), kilép a függvényből.
    - `const newNumber = newNumbers[Math.floor(Math.random() * newNumbers.length)];`: Véletlenszerűen kiválaszt egy új számot az elérhető számok közül.
    - `if (sequence.length >= 3) { sequence.shift(); }`: Ha a sorozat hossza eléri a 3-at, eltávolítja a legrégebbi elemet, így a sorozat hossza mindig legfeljebb 3 marad.
    - `sequence.push(newNumber);`: Hozzáadja az új számot a sorozathoz.
21. `// Törli a cellák tartalmát és osztályait`: Komment, amely a következő függvény célját magyarázza.
22. `function cellsClear() { ... }`: Definiálja a `cellsClear` függvényt, amely törli az összes cella állapotát.
    - `const cells = document.querySelectorAll('.cell');`: Kiválasztja az összes cella `div` elemet a DOM-ból.
    - `cells.forEach(cell => { ... });`: Iterál minden cellán.
        - `cell.classList.remove('active', 'correct', 'incorrect');`: Eltávolítja az `active`, `correct` és `incorrect` osztályokat, visszaállítva a cellák alapállapotát.
23. `// Játék visszaállítása`: Komment, amely a következő függvény célját magyarázza.
24. `function resetGame() { ... }`: Definiálja a `resetGame` függvényt, amely visszaállítja a játék kezdeti állapotát.
    - `sequence = [];`: Visszaállítja a sorozatot üresre.
    - `userSequence = [];`: Visszaállítja a felhasználói sorozatot üresre.
    - `score = 0;`: Visszaállítja a pontszámot 0-ra.
    - `scoreDisplay.textContent = score;`: Frissíti a pontszám megjelenítését.
    - `message.textContent = '';`: Eltávolítja az üzenetet.
    - `cellsClear();`: Törli az összes cella állapotát.
25. `// Inicializálás`: Komment, amely a következő sor célját magyarázza.
26. `initGrid();`: Meghívja az `initGrid` függvényt a játék inicializálásához.

---

## Játék Folyamata

A játék működési folyamata a következő lépésekből áll:

1. **Játék Indítása**:
   - A felhasználó rákattint az "Indítás" gombra.
   - A játék visszaáll a kezdeti állapotba, törli az előző sorozatot és a pontszámot.
   - Egy új cella kerül hozzáadásra a sorozathoz.
   - A sorozat (maximum három cella) felvillan a rácsban, mindegyik fél másodpercig látványosan kiemelve.
2. **Felhasználói Interakció**:
   - Miután a sorozat megjelenik, a felhasználónak meg kell jegyeznie a felvillanó cellákat.
   - A felhasználó elkezd kattintani a cellákra a sorozat reprodukálásához.
   - Minden helyes kattintás növeli a pontszámot és visszajelzést ad a felhasználónak.
   - Ha a felhasználó hibázik, a pontszám nullázódik, és a játék visszaáll a kezdeti állapotba.
3. **Sorozat Bővítése**:
   - Minden sikeres kör után a sorozathoz egy új, még nem használt cella kerül hozzáadásra, növelve a játék nehézségét.

---

## Bővítési Lehetőségek

A Memóriajáték továbbfejleszthető számos módon:

1. **Szintek Bevezetése**:
   - Különböző nehézségi szintek létrehozása, ahol a sorozat hossza növekszik vagy a felvillanások gyorsabbak lesznek.
2. **Időkorlát**:
   - Bevezetni egy időkorlátot a felvillanások megjelenítésére és a felhasználói válaszra, növelve a játék kihívását.
3. **Hanghatások**:
   - Hozzáadni hanghatásokat a felvillanásokhoz és a felhasználói visszajelzésekhez, hogy gazdagabb élményt nyújtsunk.
4. **Legmagasabb Pontszám Mentése**:
   - Használni a böngésző helyi tárolását (`localStorage`), hogy a legmagasabb pontszámot megőrizzük a felhasználó eszközén.
5. **Animációk Finomítása**:
   - További CSS animációk hozzáadása a simább átmenetek és látványosabb effektek érdekében.
6. **Reszponzív Tervezés Kiterjesztése**:
   - Optimalizálni a játék megjelenését különböző képernyőméretekhez és eszközökhöz.

---

## Telepítés és Futás

A Memóriajáték futtatása egyszerű és gyors. Kövesse az alábbi lépéseket:

1. **Fájlok Letöltése**:
   - Töltse le a projekt összes fájlját: `index.html`, `styles.css`, és `script.js`.
2. **Fájlok Elhelyezése**:
   - Helyezze el a letöltött fájlokat egy mappába, például `memory_game`.
3. **Fájlok Megnyitása**:
   - Nyissa meg az `index.html` fájlt egy web böngészőben, például Google Chrome, Mozilla Firefox vagy Safari.
4. **Játék Elindítása**:
   - Kattintson az "Indítás" gombra a játék elindításához.
   - Figyelje meg a cellák felvillanását, majd kezdje el kattintani a helyes cellákat a sorozat reprodukálásához.

---

## Hibakeresés és Tesztelés

A játék tesztelése és hibakeresése kulcsfontosságú a zökkenőmentes működés biztosításához. Íme néhány tipp:

1. **Konzol Ellenőrzése**:
   - Nyissa meg a böngésző fejlesztői eszközeit (általában az F12 billentyű lenyomásával).
   - Ellenőrizze a konzolt hibákért vagy figyelmeztetésekért, és javítsa ki azokat szükség szerint.
2. **Kód Ellenőrzése**:
   - Győződjön meg róla, hogy minden fájl a megfelelő helyen van, és a hivatkozások (`<link>` és `<script>`) helyesen mutatnak a fájlokra.
3. **Böngésző Kompatibilitás**:
   - Tesztelje a játékot különböző böngészőkben, hogy megbizonyosodjon a kompatibilitásról és a megfelelő működésről.
4. **Funkcionalitás Tesztelése**:
   - Indítsa el a játékot, generáljon sorozatokat, és próbálja meg reprodukálni őket helyesen és helytelenül, hogy ellenőrizze a pontszámok és üzenetek helyes működését.
5. **Reszponzivitás Ellenőrzése**:
   - Ellenőrizze, hogy a játék jól jelenik-e meg különböző képernyőméreteken és eszközökön.
6. **Kód Olvashatósága**:
   - Győződjön meg róla, hogy a kód jól strukturált és könnyen olvasható, ami megkönnyíti a jövőbeni karbantartást és bővítést.

---

## Következtetés

A Memóriajáték egy egyszerű, de szórakoztató webalapú játék, amely lehetővé teszi a felhasználók számára, hogy fejlesszék memóriájukat és koncentrációs képességeiket. A projekt három alapvető fájlból áll: `index.html`, `styles.css`, és `script.js`, amelyek együttműködve biztosítják a játék működését és megjelenését.

A részletes kódmagyarázat segítségével a fejlesztők és érdeklődők alaposan megérthetik a játék logikáját és felépítését, ami elősegíti a további fejlesztéseket és testreszabásokat.

---

## Licenc

Ez a projekt nyílt forráskódú, és szabadon használható, módosítható és terjeszthető bármilyen célra. Kérjük, tekintse meg a [LICENSE](LICENSE) fájlt a részletekért.

---

**Készült 2024. október 12.**

---

**Megjegyzés**: Ez a README.md fájl célja, hogy részletes és átfogó információkat nyújtson a Memóriajáték projektről, beleértve a kódok működését és a játék felépítését. Bár a tartalom hosszú és részletes, ez biztosítja, hogy minden érintett fél alaposan megértse a projektet és annak működését.