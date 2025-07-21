function updateCounter(): void {
    const now: Date = new Date();
    const startDate: Date = new Date(2025, 2, 24); // 24/03/2025

    // Cálculo de anos e meses corridos
    let years: number = now.getFullYear() - startDate.getFullYear();
    let months: number = now.getMonth() - startDate.getMonth();

    // Ajuste se ainda não completou o ano
    if (months < 0) {
        years--;
        months += 12;
    }

    // Ajuste para mês-versários COMEMORADOS (se ainda não chegou no dia 24 deste mês)
    if (now.getDate() < startDate.getDate()) {
        months--;
    }

    // Cálculo dos dias desde o último mês-versário (24 do último mês)
    const lastAnniversary = new Date(startDate);
    lastAnniversary.setFullYear(now.getFullYear());
    lastAnniversary.setMonth(now.getMonth());
    lastAnniversary.setDate(startDate.getDate());

    if (lastAnniversary > now) {
        lastAnniversary.setMonth(lastAnniversary.getMonth() - 1);
    }

    const daysSinceLastAnniversary = Math.floor((now.getTime() - lastAnniversary.getTime()) / (1000 * 60 * 60 * 24));

    // Horas, minutos e segundos do dia atual
    const hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    const seconds: number = now.getSeconds();

    // Atualiza o DOM
    document.getElementById('years')!.textContent = years.toString();
    document.getElementById('months')!.textContent = months.toString(); // Mês-versários completos
    document.getElementById('days')!.textContent = daysSinceLastAnniversary.toString();
    document.getElementById('hours')!.textContent = hours.toString();
    document.getElementById('minutes')!.textContent = minutes.toString();
    document.getElementById('seconds')!.textContent = seconds.toString();
}

updateCounter();
setInterval(updateCounter, 1000);

// Lightbox functionality
document.addEventListener('DOMContentLoaded', function(): void {
    const lightbox: HTMLElement | null = document.getElementById('lightbox');
    const lightboxImg: HTMLImageElement | null = document.getElementById('lightbox-img') as HTMLImageElement;
    const captionText: HTMLElement | null = document.getElementById('caption');
    const closeBtn: HTMLElement | null = document.querySelector('.close-btn');
    
    // Pega todas as imagens da galeria
    const galleryImages: NodeListOf<HTMLImageElement> = document.querySelectorAll('.photo-item img');
    
    // Adiciona evento de clique para cada imagem
    galleryImages.forEach((img: HTMLImageElement) => {
        img.addEventListener('click', function(): void {
            if (!lightbox || !lightboxImg || !captionText) return;
            
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            captionText.innerHTML = this.nextElementSibling?.innerHTML || '';
            
            // Adiciona classe para evitar scroll no body
            document.body.classList.add('no-scroll');
        });
    });
    
    // Fecha o lightbox
    closeBtn?.addEventListener('click', function(): void {
        if (!lightbox) return;
        lightbox.style.display = "none";
        document.body.classList.remove('no-scroll');
    });
    
    // Fecha ao clicar fora da imagem
    lightbox?.addEventListener('click', function(e: MouseEvent): void {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Fecha com a tecla ESC
    document.addEventListener('keydown', function(e: KeyboardEvent): void {
        if (e.key === "Escape" && lightbox?.style.display === "block") {
            lightbox.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    });
});

// Adiciona este estilo dinamicamente para evitar FOUC
const style: HTMLStyleElement = document.createElement('style');
style.textContent = `
    .no-scroll {
        overflow: hidden;
    }
`;
document.head.appendChild(style);