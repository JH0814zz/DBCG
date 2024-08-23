// script.js
document.getElementById('generateBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const color = document.getElementById('color').value;

    document.getElementById('cardName').textContent = name;
    document.getElementById('cardTitle').textContent = title;
    document.getElementById('cardPhone').textContent = phone;
    document.getElementById('cardEmail').textContent = email;
    document.getElementById('businessCard').style.backgroundColor = color;
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const card = document.getElementById('businessCard');

    html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        link.download = 'business-card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
