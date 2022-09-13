import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'my-store';
  imagen: string = 'https://3.bp.blogspot.com/-AMQf7on8nuY/UbtRxOLeRyI/AAAAAAAAACs/nKmm66KQdJE/s1600/gatitos-bebe-3.jpg';
  persona = {
    nombre: "Daniel",
    edad: 21,
  }
  btnDisabled: boolean = true;
  counter: number = 0;
  showParagraph: boolean = true;
  nombres: string[] = ['Daniel', 'Luis', 'Felipe', 'Camila', 'Kilyan'];
  newName: string = '';

  toggleButton(): void {
    (this.btnDisabled) ? this.btnDisabled = false : this.btnDisabled = true;
  }

  increaseCounter(): void {
    this.counter++;
  }

  decreaseCounter(): void {
    (this.counter === 0) ? this.counter = 0 : this.counter--;
  }

  hideTemplate(event: Event): void {
    const element = event.target as HTMLElement;

    element.textContent = (this.showParagraph) ? "Mostrar plantilla2" : "Mostrar plantilla1";

    this.showParagraph = !this.showParagraph;
  }

  deleteName(index: number) {
    this.nombres.splice(index, 1);
  }

  insertName() {
    this.nombres.push(this.newName);
    this.newName = '';
  }
}
