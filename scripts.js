document.getElementById('assessmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from form
    const visualScores = [1, 5, 7, 10, 14].map(id => parseInt(document.querySelector(`input[name="q${id}"]:checked`).value));
    const auditoryScores = [2, 6, 11, 15].map(id => parseInt(document.querySelector(`input[name="q${id}"]:checked`).value));
    const readingWritingScores = [3, 8, 12, 16].map(id => parseInt(document.querySelector(`input[name="q${id}"]:checked`).value));
    const kinestheticScores = [4, 9, 13, 17].map(id => parseInt(document.querySelector(`input[name="q${id}"]:checked`).value));

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
    const dominantStyle = Math.max(visualTotal, auditoryTotal, readingWritingTotal, kinestheticTotal);
    let dominantText = '';
    let icon = '';

    if (dominantStyle === visualTotal) {
        dominantText = 'Your dominant learning style is Visual.';
        icon = '👁️'; // Eye icon for visual learners
    } else if (dominantStyle === auditoryTotal) {
        dominantText = 'Your dominant learning style is Auditory.';
        icon = '🎧'; // Headphone icon for auditory learners
    } else if (dominantStyle === readingWritingTotal) {
        dominantText = 'Your dominant learning style is Reading/Writing.';
        icon = '📚'; // Book icon for reading/writing learners
    } else if (dominantStyle === kinestheticTotal) {
        dominantText = 'Your dominant learning style is Kinesthetic.';
        icon = '🏃'; // Running icon for kinesthetic learners
    }

    document.getElementById('dominantStyle').innerHTML = `<strong>${icon} ${dominantText}</strong>`;

    document.getElementById('assessmentForm').style.display = 'none';
    document.getElementById('results').style.display = 'block';
});

function retakeTest() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('assessmentForm').style.display = 'block';
    document.getElementById('assessmentForm').reset();
}
