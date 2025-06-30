// Data de início do relacionamento - 24 de março de 2025
const startDate: Date = new Date(2025, 2, 24); // Mês começa em 0 (janeiro=0)

function updateCounter(): void {
    const now: Date = new Date();
    const diff: number = now.getTime() - startDate.getTime();
    
    // Cálculo do tempo total
    const secondsTotal: number = Math.floor(diff / 1000);
    const minutesTotal: number = Math.floor(secondsTotal / 60);
    const hoursTotal: number = Math.floor(minutesTotal / 60);
    const daysTotal: number = Math.floor(hoursTotal / 24);
    
    // Cálculo de anos e meses (mais preciso)
    let years: number = now.getFullYear() - startDate.getFullYear();
    let months: number = now.getMonth() - startDate.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Cálculo de dias restantes
    const tempDate: Date = new Date(startDate);
    tempDate.setFullYear(tempDate.getFullYear() + years);
    tempDate.setMonth(tempDate.getMonth() + months);
    
    const days: number = Math.floor((now.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Horas, minutos e segundos do dia atual
    const hours: number = hoursTotal % 24;
    const minutes: number = minutesTotal % 60;
    const seconds: number = secondsTotal % 60;
    
    // Atualiza o DOM
    document.getElementById('years')!.textContent = years.toString();
    document.getElementById('months')!.textContent = months.toString();
    document.getElementById('days')!.textContent = days.toString();
    document.getElementById('hours')!.textContent = hours.toString();
    document.getElementById('minutes')!.textContent = minutes.toString();
    document.getElementById('seconds')!.textContent = seconds.toString();
}

// Atualiza imediatamente e depois a cada segundo
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