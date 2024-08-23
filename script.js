// script.js
document.getElementById('generateBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const slogan = document.getElementById('slogan').value;
    const color = document.getElementById('color').value;

    // 명함 정보 업데이트
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardTitle').textContent = title;
    document.getElementById('cardCompany').textContent = company;
    document.getElementById('cardPhone').textContent = phone;
    document.getElementById('cardEmail').textContent = email;
    document.getElementById('cardSlogan').textContent = slogan;
    document.getElementById('businessCard').style.backgroundColor = color;

    // 로고 이미지 처리
    const logoFile = document.getElementById('logo').files[0];
    if (logoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            document.getElementById('logoContainer').innerHTML = '';
            document.getElementById('logoContainer').appendChild(img);
        };
        reader.readAsDataURL(logoFile);
    } else {
        document.getElementById('logoContainer').innerHTML = '';
    }
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
