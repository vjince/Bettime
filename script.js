const knop = document.getElementById('voeg-toe');
const lijst = document.getElementById('bet-lijst');

knop.addEventListener('click', function() {
    // Pak alle waarden uit de invulvelden
    const wedstrijd = document.getElementById('wedstrijd').value;
    const dag = document.getElementById('dag').value;
    const tijd = document.getElementById('tijd').value;
    const bookmaker = document.getElementById('bookmaker').value;
    const inzet = document.getElementById('inzet').value;
    const odds = document.getElementById('odds').value;

    // Check of alles is ingevuld
    if (!wedstrijd || !dag || !tijd || !bookmaker || !inzet || !odds) {
        alert("Vul eerst alle velden in op het blad!");
        return;
    }

    // Bereken winst
    const winst = (parseFloat(inzet) * parseFloat(odds)).toFixed(2);

    // Maak het lijstje aan
    const li = document.createElement('li');
    li.innerHTML = `
        <div>
            <strong>${wedstrijd}</strong> <br>
            <span class="info">
                📅 ${dag} om ${tijd} | 🏦 ${bookmaker} <br>
                Inzet: €${inzet} (Odds: ${odds})
            </span>
        </div>
        <div class="winst">€${winst}</div>
    `;

    lijst.appendChild(li);

    // Maak de velden weer leeg voor de volgende keer
    document.querySelectorAll('input').forEach(input => input.value = '');
});
