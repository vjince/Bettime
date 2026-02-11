const startKnop = document.getElementById('start-invullen');
const lijst = document.getElementById('bet-lijst');

startKnop.addEventListener('click', function() {
    // De vragen die de app aan je stelt
    const wedstrijd = prompt("Welke wedstrijd is het?");
    if (!wedstrijd) return; // Stoppen als je op annuleren klikt

    const dag = prompt("Op welke dag is de wedstrijd? (bijv. Maandag of 12 feb)");
    const tijd = prompt("Hoe laat is de wedstrijd? (bijv. 20:45)");
    const bookmaker = prompt("Welke bookmaker gebruik je?");
    const inzet = prompt("Wat is je inzet in Euro's?");
    const odds = prompt("Wat zijn de odds? (bijv. 1.85)");

    // Controleren of alles is ingevuld
    if (dag && tijd && bookmaker && inzet && odds) {

        const mogelijkeWinst = (parseFloat(inzet) * parseFloat(odds)).toFixed(2);

        // Het lijst-item maken
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${wedstrijd}</strong> <br>
                <span class="details">
                    📅 ${dag} om ⏰ ${tijd} <br>
                    🏦 Bookmaker: ${bookmaker} <br>
                    💰 Inzet: €${inzet} (Odds: ${odds})
                </span>
            </div>
            <div class="winst">€${mogelijkeWinst}</div>
        `;

        // Toevoegen aan de lijst
        lijst.appendChild(li);

    } else {
        alert("Je hebt niet alle vragen beantwoord. De weddenschap is niet opgeslagen.");
    }
});
