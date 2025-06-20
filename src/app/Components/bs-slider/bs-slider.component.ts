import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-slider',
  templateUrl: './bs-slider.component.html',
  styleUrls: ['./bs-slider.component.css']
})
export class BsSliderComponent implements OnInit {

  constructor() { }

  items = [
    { image: '../assets/clientes/1.png' },
    { image: '../assets/clientes/2.png' },
    { image: '../assets/clientes/3.jpg' },
    { image: '../assets/clientes/4.jpg' },
    { image: '../assets/clientes/5.jpg' },
    { image: '../assets/clientes/6.jpg' },
    { image: '../assets/clientes/7.jpg' },
    { image: '../assets/clientes/8.png' },
    { image: '../assets/clientes/9.png' },
    { image: '../assets/clientes/10.jpg' },
  ];

  currentIndex = 0;

  autoScroll = true;        // Cambia esto a false si no querés que inicie automático
  autoScrollDelay = 3000;   // Tiempo entre scrolls en ms (3000 = 3s)
  autoScrollStep = 1;       // Cuántas imágenes avanzar por paso

  private intervalId: any;
  visibleSideImages = 2; // número de imágenes visibles a cada lado (puede ser 1, 2)

  @HostListener('window:resize', [])
  onResize() {
    this.updateVisibleSideImages();
  }

  ngOnInit() {
    if (this.autoScroll) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  getPreviousIndex(): number {
    return (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  getNextIndex(): number {
    return (this.currentIndex + 1) % this.items.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + this.autoScrollStep) % this.items.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - this.autoScrollStep + this.items.length) % this.items.length;
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.autoScrollDelay);
  }

  stopAutoScroll() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  
  getSlideClass(index: number): string {
    const total = this.items.length;
    const distance = (index - this.currentIndex + total) % total;
  
    if (index === this.currentIndex) {
      return 'active';
    }
  
    for (let i = 1; i <= this.visibleSideImages; i++) {
      if ((this.currentIndex - i + total) % total === index) {
        return `prev${i}`;
      }
      if ((this.currentIndex + i) % total === index) {
        return `next${i}`;
      }
    }
  
    return 'hidden'; 
  }
  

  updateVisibleSideImages() {
    this.visibleSideImages = window.innerWidth < 1000 ? 1 : 2;
  }
}
