const content = [
    {
        title: "Was ist Beteiligungsfinanzierung?",
        content: `
            <p>Beteiligungsfinanzierung ist eine Form der Unternehmensfinanzierung, bei der <span class="highlight">Investoren Kapital in ein Unternehmen einbringen und im Gegenzug Anteile am Unternehmen erhalten</span>. Diese Methode wird oft von Start-ups und wachsenden Unternehmen genutzt, um Kapital für Expansion und Entwicklung zu beschaffen.</p>
        `
    },
    {
        title: "Vorteile der Beteiligungsfinanzierung",
        content: `
            <p>Beteiligungsfinanzierung bietet mehrere Vorteile:</p>
            <ul>
                <li><span class="highlight">Kein Rückzahlungsdruck:</span> Im Gegensatz zu Krediten muss das Kapital nicht zurückgezahlt werden.</li>
                <li><span class="highlight">Expertise und Netzwerk:</span> Investoren bringen oft wertvolles Know-how und Kontakte mit.</li>
                <li><span class="highlight">Risikoverteilung:</span> Das unternehmerische Risiko wird auf mehrere Schultern verteilt.</li>
                <li><span class="highlight">Wachstumspotenzial:</span> Ermöglicht schnelleres Wachstum durch größere Kapitalzufuhr.</li>
            </ul>
        `
    },
    {
        title: "Nachteile der Beteiligungsfinanzierung",
        content: `
            <p>Es gibt auch einige Nachteile zu beachten:</p>
            <ul>
                <li><span class="highlight">Abgabe von Unternehmensanteilen:</span> Gründer müssen einen Teil ihrer Kontrolle aufgeben.</li>
                <li><span class="highlight">Gewinnbeteiligung:</span> Investoren haben Anspruch auf einen Teil des Unternehmensgewinns.</li>
                <li><span class="highlight">Aufwändiger Prozess:</span> Die Suche nach geeigneten Investoren kann zeit- und ressourcenintensiv sein.</li>
                <li><span class="highlight">Erwartungsdruck:</span> Investoren erwarten oft schnelles Wachstum und hohe Renditen.</li>
            </ul>
        `
    },
    {
        title: "Arten der Beteiligungsfinanzierung",
        content: `
            <p>Es gibt verschiedene Formen der Beteiligungsfinanzierung:</p>
            <ul>
                <li><span class="highlight">Venture Capital:</span> Risikokapital für junge, innovative Unternehmen mit hohem Wachstumspotenzial.</li>
                <li><span class="highlight">Private Equity:</span> Beteiligungen an etablierten Unternehmen, oft mit dem Ziel der Restrukturierung.</li>
                <li><span class="highlight">Business Angels:</span> Vermögende Privatpersonen, die in der Frühphase in Start-ups investieren.</li>
                <li><span class="highlight">Crowdinvesting:</span> Viele Kleinanleger investieren gemeinsam über Online-Plattformen.</li>
            </ul>
        `
    },
    {
        title: "Der Prozess der Beteiligungsfinanzierung",
        content: `
            <p>Der typische Ablauf einer Beteiligungsfinanzierung umfasst folgende Schritte:</p>
            <ol>
                <li><span class="highlight">Vorbereitung:</span> Erstellung eines detaillierten Businessplans und Finanzmodells.</li>
                <li><span class="highlight">Investorensuche:</span> Identifikation und Ansprache potenzieller Investoren.</li>
                <li><span class="highlight">Pitch:</span> Präsentation des Geschäftsmodells vor interessierten Investoren.</li>
                <li><span class="highlight">Due Diligence:</span> Gründliche Prüfung des Unternehmens durch potenzielle Investoren.</li>
                <li><span class="highlight">Verhandlung:</span> Festlegung der Konditionen (Bewertung, Anteilsgröße, etc.).</li>
                <li><span class="highlight">Vertragsabschluss:</span> Unterzeichnung der Beteiligungsvereinbarung.</li>
                <li><span class="highlight">Post-Investment:</span> Zusammenarbeit mit Investoren zur Unternehmensentwicklung.</li>
            </ol>
        `
    }
];

let currentPage = 0;

function updateContent() {
    const contentDiv = document.getElementById('content');
    const currentContent = content[currentPage];
    contentDiv.innerHTML = `<h2>${currentContent.title}</h2>${currentContent.content}`;
    
    document.getElementById('prev-btn').disabled = currentPage === 0;
    document.getElementById('next-btn').disabled = currentPage === content.length - 1;
    
    updateProgressBar();
}

function navigate(direction) {
    if (direction === 'next' && currentPage < content.length - 1) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 0) {
        currentPage--;
    }
    updateContent();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = ((currentPage + 1) / content.length) * 100;
    progressBar.style.setProperty('--progress', `${progress}%`);
    progressBar.style.width = `${progress}%`;
}

// Initialize the content
updateContent();
