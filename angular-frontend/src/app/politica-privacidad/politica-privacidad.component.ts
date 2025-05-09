import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-politica-privacidad',
  imports: [CommonModule, RouterModule],
  templateUrl: './politica-privacidad.component.html',
  styleUrl: './politica-privacidad.component.css'
})
export class PoliticaPrivacidadComponent {

  constructor(
    private location: Location // Inyecta Location
  ) { }

// Función para volver a la página anterior
goBack() {
  this.location.back(); // Vuelve a la página anterior
}

}
