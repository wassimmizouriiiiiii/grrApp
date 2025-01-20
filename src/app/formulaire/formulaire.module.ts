import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from './formulaire.component';

@NgModule({
  imports: [CommonModule, FormulaireComponent],
  exports: [FormulaireComponent]
})
export class FormulaireModule {}