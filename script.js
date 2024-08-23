// script.js
document.getElementById('generateBtn').addEventListener('click', function() {
    // 사용자 입력 가져오기
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // 명함 정보 업데이트
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardTitle').textContent = title;
    document.getElementById('cardPhone').textContent = phone;
    document.getElementById('cardEmail').textContent = email;
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
