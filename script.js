const grid = document.getElementById('grid');
const startButton = document.getElementById('startButton');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');

let score = 0;
let sequence = [];
let userSequence = [];
let acceptingInput = false;

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

startButton.addEventListener('click', startGame);

function startGame() {
    resetGame();
    generateSequence();
    showSequence();
}

function showSequence() {
    acceptingInput = false;
    let delay = 0;
    sequence.forEach((cellIndex, i) => {
        setTimeout(() => {
            const cell = document.querySelector(`.cell[data-index="${cellIndex}"]`);
            cell.classList.add('active');
            setTimeout(() => {
                cell.classList.remove('active');
            }, 500);
        }, delay);
        delay += 700;
    });
    setTimeout(() => {
        acceptingInput = true;
    }, delay);
}

function checkUserInput(cell, index) {
    const expectedIndex = sequence[userSequence.length - 1];
    if (index === expectedIndex) {
        cell.classList.add('correct');
        score += 1;
        scoreDisplay.textContent = score;
        if (userSequence.length === sequence.length) {
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

function generateSequence() {
    const available = [...Array(9).keys()];
    const newNumbers = available.filter(num => !sequence.includes(num));
    const newNumber = newNumbers[Math.floor(Math.random() * newNumbers.length)];

    if (sequence.length >= 3) {
        sequence.shift();
    }
    sequence.push(newNumber);
}

function cellsClear() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('active', 'correct', 'incorrect');
    });
}

function resetGame() {
    sequence = [];
    userSequence = [];
    score = 0;
    scoreDisplay.textContent = score;
    message.textContent = '';
    cellsClear();
}

initGrid();

/*
################################################################################
#                                                                              #
#                           MEMÓRIAJÁTÉK SZTORIVALÓ README                     #
#                                                                              #
################################################################################

## Bevezetés

Ebben a dokumentumban bemutatjuk a Memóriajáték mögött rejlő gazdag és izgalmas történetet. Ez a történet nemcsak a játék mechanikáját magyarázza el, hanem mélyebb érzelmi és narratív rétegeket is ad hozzá, amelyek gazdagítják a játékélményt. A következő sorokban megismerkedünk a karakterekkel, az ősi titkokkal és a kihívásokkal, amelyekkel szembe kell nézniük a játék során.

## A Világ

A történetünk egy távoli, misztikus birodalomban játszódik, amelyet Memoria néven ismernek. Memoria egy olyan hely, ahol a múlt és a jelen összefonódik, és ahol az emlékek hatalmas erővel bírnak. A birodalom közepén áll egy hatalmas, mágikus térkép, amely egy 3x3-as rácsból áll. Ez a térkép nem csupán egy egyszerű elrendezés, hanem egy ősi rejtély kulcsa, amely csak a legbátrabb és legokosabb hősök számára nyílik meg.

## Főbb Karakterek

### 1. **Eldor, a Bölcs**
Eldor egy öreg, bölcs mágus, aki Mémoria titkait őrzi. Ő az, aki elvezeti a hősöket a térkép megértéséhez szükséges úton. Eldor tudása nélkül Memoria birodalma romba dőlne.

### 2. **Liora, a Bátor**
Liora egy fiatal és bátor harcos, aki szívesen vállal kihívásokat. Ő az, aki megtestesíti az elszántságot és a bátorságot, amelyre szükség van a Memóriajáték sikeres teljesítéséhez.

### 3. **Kael, a Kalandor**
Kael egy kíváncsi és ügyes tolvaj, aki mindig új kalandokat keres. Ő a csapat technikai szakértője, aki segít a bonyolult rejtvények és csapdák leküzdésében.

### 4. **Nyx, az Árnyék**
Nyx egy rejtélyes alak, aki ismeri Memoria sötét titkait. Bár kezdetben ellenfélként jelenik meg, később kiderül, hogy kulcsfontosságú információkat tud nyújtani a hősöknek.

## A Történet Kezdete

Egyszer régen, Memoria birodalmában, az ősi térkép megszűnt működni, és ezzel együtt a birodalom harmóniája is megszakadt. A múlt emlékei eltorzulni kezdtek, és a jelenben élők emlékezetük elvesztett egy részét. A birodalom uralkodója, Király Alaric, elhatározta, hogy megtalálja az emlékezet visszaállításának módját, és ennek érdekében Eldorhoz fordult.

Eldor, a Bölcs, tudta, hogy a térkép újraélesztése kulcsfontosságú a probléma megoldásához. Meghívta Liorát, Kaelt és Nyxet, hogy együtt oldják meg a térkép titkait és helyreállítsák a birodalom egyensúlyát.

## Az Út Kezdete

A csapat először a Történelem Kertje felé vette az irányt, ahol Eldor magyarázta a térkép jelentőségét. "Ez a rács nem csupán egy elrendezés," mondta Eldor, "hanem az emlékeink hálózata. Minden cella egy-egy emléket jelképez, és ezek összehangolása nélkülözhetetlen a térkép működéséhez."

### Az Első Kihívás: Az Emlék Lángja

Az első feladatuk az volt, hogy gyújtsanak lángot minden cellában, ami az emlékek megőrzését szimbolizálta. Liora, a Bátor, először lépett elő, hogy meggyújtsa a Lángot. Azonban a lángok gyorsan elolvadtak, jelezve, hogy valami hiányzik.

Kael, a Kalandor, észrevette, hogy a lángok eloltásához egy speciális összetevő szükséges: az Emlék Por. Nyx, az Árnyék, előhozta a por egy részét, amit ő évszázadok óta őrzött. Liora meggyújtotta a lángokat újra, és ezúttal azok erősebbek és tartósabbak lettek.

### A Második Kihívás: Az Emlék Labirintusa

A csapatnak szembe kellett néznie a Labirintussal, amely tele volt rejtvényekkel és csapdákkal. Eldor vezette őket az úton, miközben Kael ügyesen kikerülte a csapdákat. Nyx titokzatos képességeivel láthatatlanná vált, hogy megakadályozza az ellenségeket a csapat elől.

A labirintus végén egy ősi kapu állt, amelyet csak az emlékek harmóniája tudott kinyitni. Liora és Kael együtt oldották meg a kapu rejtvényét, és így a csapat előrébb juthatott az úton.

### A Harmadik Kihívás: Az Emlék Égbolt

A következő állomás a Tündérszellem Völgye volt, ahol a csapatnak meg kellett szereznie az Emlék Égkristályokat. Ezek a kristályok képesek voltak a térkép emlékeit stabilizálni. Azonban a kristályokat egy sötét árnyék őrizte, amely próbálta megakadályozni a hősöket abban, hogy megszerezzék őket.

Nyx, az Árnyék, felfedezte, hogy az árnyék gyengesége a fény, és Eldor varázslatával eltűnt a sötétség. Liora bátran szembeszállt az árnyékkal, míg Kael gyorsan megszerezte a kristályokat.

### Az Utolsó Kihívás: Az Emlék Szíve

A csapatnak el kellett érnie az Emlék Szívét, ahol a térkép központi cellája található. Itt minden emlék összegyűlik, és a csapatnak meg kellett találniuk a harmóniát, hogy újraélesszék a térképet.

Az utolsó kihívás a csapaton belüli bizalom és együttműködés próbája volt. Eldor vezette őket, hogy minden emléket újraélesszenek, miközben Liora, Kael és Nyx összefogtak, hogy megoldják a térkép összetett feladatait.

## A Térkép Újraélesztése

Miután minden kihívást sikeresen teljesítettek, a térkép újraéledt. A 3x3-as rács minden cellája ragyogott, és a birodalom harmóniája visszatért. Az emlékek újra helyreálltak, és a múlt, valamint a jelen egyensúlyba került.

Eldor, Liora, Kael és Nyx büszkén néztek a munkájuk eredményére. Tudták, hogy a Memóriajáték nem csupán egy játék, hanem egy utazás volt, amely során felfedezték a saját erősségeiket és gyengeségeiket, és megtanultak együtt dolgozni egy közös cél érdekében.

## A Birodalom Jövője

A Memoria birodalma újra virágzott, és a hősök nevei örökre beíródtak a történelemkönyvekbe. Az emlékek ereje segített megelőzni a jövőbeni veszélyeket, és a birodalom lakói megtanulták, hogyan használják az emlékeiket a béke és a jólét fenntartására.

Eldor, a Bölcs, továbbra is őrizte a birodalom titkait, míg Liora, a Bátor, Kael, a Kalandor, és Nyx, az Árnyék, új kalandokat kerestek, mindig készen állva arra, hogy megvédjék Memoriát a fenyegetésektől.

## Befejezés

Ez a történet nemcsak a Memóriajáték mechanikáját magyarázza el, hanem a játék mögött rejlő mélyebb jelentést és célkitűzéseket is bemutatja. A játék során a felhasználók nem csupán szórakoznak, hanem egy gazdag történet részei lesznek, amely során megismerhetik a karakterek erejét, a memória jelentőségét és a közös cél elérésének fontosságát.

Köszönjük, hogy részt vesztek ebben a kalandban, és reméljük, hogy élvezni fogjátok a Memóriajáték izgalmas és kihívásokkal teli világát!

################################################################################
#                                                                              #
#                                 VÉGE                                         #
#                                                                              #
################################################################################
*/
