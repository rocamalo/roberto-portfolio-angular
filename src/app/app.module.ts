// 1. Configuración del Módulo Principal (app.module.ts)

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Módulos de Angular para ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Módulos de la aplicación
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Componentes principales
import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { AboutComponent } from './features/about/about.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ContactComponent } from './features/contact/contact.component';

// Factory para el cargador de traducciones
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
