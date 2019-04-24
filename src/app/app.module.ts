import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { VeiculoService } from './veiculo/veiculo.service';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { AppChildComponent } from './appchild.component';
import { VeiculoListComponent } from './veiculo/veiculoList.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { HomeComponent } from './veiculo/home.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'veiculos', component: VeiculoListComponent },
  { path: 'adicionaVeiculo', component: VeiculoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, VeiculoComponent, AppChildComponent, VeiculoListComponent, HomeComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [VeiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
