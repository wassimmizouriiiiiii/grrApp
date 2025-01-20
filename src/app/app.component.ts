import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormulaireComponent } from "./formulaire/formulaire.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormulaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grr';
}
