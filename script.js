const knop = document.getElementById('voeg-toe');
const lijst = document.getElementById('bet-lijst');

knop.addEventListener('click', function() {
    const wedstrijd = document.getElementById('wedstrijd').value;
    const inzet = document.getElementById('inzet').value;
    const odds = document.getElementById('odds').value;

    if (wedstrijd === '' || inzet === '' || odds === '') {
        alert("Vul even alles in, maat!");
        return;
    }

    // Bereken de winst
    const mogelijkeWinst = (inzet * odds).toFixed(2);

    // Maak een nieuw lijst-item (li)
    const li = document.createElement('li');
    li.innerHTML = `
        <div>
            <strong>${wedstrijd}</strong><br>
            Inzet: €${inzet} (Odds: ${odds})
        </div>
        <div class="winst">€${mogelijkeWinst}</div>
    `;

    // Voeg toe aan de lijst
    lijst.appendChild(li);

    // Maak de invoervelden weer leeg
    document.getElementById('wedstrijd').value = '';
    document.getElementById('inzet').value = '';
    document.getElementById('odds').value = '';
});
