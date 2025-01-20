import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormulaireModule } from './formulaire/formulaire.module';

@NgModule({
  imports: [BrowserModule, FormulaireModule, AppComponent],
  providers: [],
})
export class AppModule {}