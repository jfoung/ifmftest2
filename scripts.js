document.getElementById('assessmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from form
    const visualScores = [1, 6, 9, 13].map(id => parseInt(document.querySelector(`input[name="q${id}"]:checked`).value));
    const auditoryScores = [2, 5, 10, 14].map(id => parseInt(document.querySelector(`input[name="q${id}"]:checked`).value));
    const readingWritingScores = [3, 7, 11, 15].map(id => parseInt(document.querySelector(`input[name="q${id}"]:checked`).value));
    const kinestheticScores = [4, 8, 12, 16].map(id => parseInt(document.querySelector(`input[name="q${id}"]:checked`).value));

    // Calculate totals
    const visualTotal = visualScores.reduce((a, b) => a + b, 0);
    const auditoryTotal = auditoryScores.reduce((a, b) => a + b, 0);
    const readingWritingTotal = readingWritingScores.reduce((a, b) => a + b, 0);
    const kinestheticTotal = kinestheticScores.reduce((a, b) => a + b, 0);

    // Display results
    document.getElementById('visualResult').innerText = `Visual Learner: ${visualTotal}`;
    document.getElementById('auditoryResult').innerText = `Auditory Learner: ${auditoryTotal}`;
    document.getElementById('readingWritingResult').innerText = `Reading/Writing Learner: ${readingWritingTotal}`;
    document.getElementById('kinestheticResult').innerText = `Kinesthetic Learner: ${kinestheticTotal}`;

    // Determine dominant learning style
    const scores = [
        { style: 'Visual', score: visualTotal, icon: '👁️' },
        { style: 'Auditory', score: auditoryTotal, icon: '🎧' },
        { style: 'Reading/Writing', score: readingWritingTotal, icon: '📚' },
        { style: 'Kinesthetic', score: kinestheticTotal, icon: '🏃' }
    ];

    scores.sort((a, b) => b.score - a.score);
    const highestScore = scores[0].score;
    const dominantStyles = scores.filter(score => score.score === highestScore);

    let dominantText = '';
    if (dominantStyles.length > 1) {
        dominantText = 'You are a multimodal learner that benefits from a combination of learning styles!';
    } else {
        dominantText = `Your dominant learning style is ${dominantStyles[0].style}.`;
    }

    const icon = dominantStyles.length === 1 ? dominantStyles[0].icon : '🔄'; // Multimodal icon
    document.getElementById('dominantStyle').innerHTML = `<strong>${icon} ${dominantText}</strong>`;

    document.getElementById('assessmentForm').style.display = 'none';
    document.getElementById('results').style.display = 'block';
});

function retakeTest() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('assessmentForm').style.display = 'block';
    document.getElementById('assessmentForm').reset();
}
