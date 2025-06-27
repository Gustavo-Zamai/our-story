// Data de início do relacionamento - 24 de março de 2025
const startDate = new Date(2025, 2, 24); // Mês começa em 0 (janeiro=0)

function updateCounter() {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();
    
    // Cálculo do tempo total
    const secondsTotal = Math.floor(diff / 1000);
    const minutesTotal = Math.floor(secondsTotal / 60);
    const hoursTotal = Math.floor(minutesTotal / 60);
    const daysTotal = Math.floor(hoursTotal / 24);
    
    // Cálculo de anos e meses (mais preciso)
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Cálculo de dias restantes
    const tempDate = new Date(startDate);
    tempDate.setFullYear(tempDate.getFullYear() + years);
    tempDate.setMonth(tempDate.getMonth() + months);
    
    const days = Math.floor((now.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Horas, minutos e segundos do dia atual
    const hours = hoursTotal % 24;
    const minutes = minutesTotal % 60;
    const seconds = secondsTotal % 60;
    
    // Atualiza o DOM
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Atualiza imediatamente e depois a cada segundo
updateCounter();
setInterval(updateCounter, 1000);

// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    
    // Pega todas as imagens da galeria
    const galleryImages = document.querySelectorAll('.photo-item img');
    
    // Adiciona evento de clique para cada imagem
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            captionText.innerHTML = this.nextElementSibling.innerHTML;
            
            // Adiciona classe para evitar scroll no body
            document.body.classList.add('no-scroll');
        });
    });
    
    // Fecha o lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = "none";
        document.body.classList.remove('no-scroll');
    });
    
    // Fecha ao clicar fora da imagem
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Fecha com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && lightbox.style.display === "block") {
            lightbox.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    });
});

// Adiciona este estilo dinamicamente para evitar FOUC
const style = document.createElement('style');
style.textContent = `
    .no-scroll {
        overflow: hidden;
    }
`;
document.head.appendChild(style);