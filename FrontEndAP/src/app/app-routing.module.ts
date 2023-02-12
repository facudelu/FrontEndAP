import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './Components/acerca-de/edit-acerca-de.component';
import { EditeducacionComponent } from './Components/educacion/editeducacion.component';
import { NeweducacionComponent } from './Components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './Components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './Components/experiencia/new-experiencia.component';
import { HomeComponent } from './Components/home/home.component';
import { EditSkillComponent } from './Components/hys-skills/edit-skill.component';
import { NewSkillComponent } from './Components/hys-skills/new-skill.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editAcercaDe/:id', component: EditAcercaDeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
