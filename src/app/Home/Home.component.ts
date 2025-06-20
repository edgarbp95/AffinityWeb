import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  productsModal: boolean = false;
  fullText: string = '"Innovación, resultados y confianza. Todo en una solución a su medida."';
  words: { letters: { char: string, delay: number, show: boolean }[] }[] = [];
  service: number = 0;

 
  public stats = [
    {
      value: '$40',
      label: 'Millones',
      description: 'Primas Recolectadas'
    },
    {
      value: '720',
      label: 'MIL PÓLIZAS',
      description: 'Primas Recolectadas'
    },
    {
      value: '25',
      label: 'PRODUCTOS',
      description: 'Comercializados'
    },
    {
      value: '23',
      label: 'Clientes',
      description: 'Satisfechos'
    }
  ];



  ngOnInit(): void {
    const delayRange = { min: 0, max: 500 };

    this.words = this.fullText.split(' ').map(word => {
      const letters = word.split('').map(char => ({
        char,
        delay: Math.floor(Math.random() * (delayRange.max - delayRange.min + 1)) + delayRange.min,
        show: false
      }));

      letters.forEach((letter, i) => {
        setTimeout(() => {
          letter.show = true;
        }, letter.delay);
      });

      return { letters };
    });
  }
}


