const knop = document.getElementById('voeg-toe');
const lijst = document.getElementById('bet-lijst');

knop.addEventListener('click', function() {
    const wedstrijd = document.getElementById('wedstrijd').value;
    const dag = document.getElementById('dag').value;
    const tijd = document.getElementById('tijd').value;
    const bookmaker = document.getElementById('bookmaker').value;
    const inzet = document.getElementById('inzet').value;
    const odds = document.getElementById('odds').value;

    if (!wedstrijd || !dag || !tijd || !bookmaker || !inzet || !odds) {
        alert("Vul eerst alle velden in!");
        return;
    }

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
        <div class="rechts-box">
            <span class="winst">€${winst}</span>
            <button class="delete-btn">Verwijder</button>
        </div>
    `;

    // Voeg de verwijder-functie toe aan de nieuwe knop
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    lijst.appendChild(li);

    // Velden leegmaken
    document.querySelectorAll('input').forEach(input => input.value = '');
});
