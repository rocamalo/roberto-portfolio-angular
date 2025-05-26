import { Component } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  iconClass?: string;
}

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'HTML5', logo: './assets/img/portfolio/html.png' },
    { name: 'CSS3', logo: '', iconClass: 'fa fa-css3 fa-5x' },
    { name: 'JavaScript', logo: './assets/img/portfolio/javascript.png' },
    { name: 'TypeScript', logo: './assets/img/portfolio/typescript.png' },
    { name: 'Java', logo: './assets/img/portfolio/java.png' },
    { name: 'Angular', logo: './assets/img/portfolio/angular.png' },
    { name: 'Svelte', logo: './assets/img/portfolio/svelte.png' },
    { name: 'Ionic', logo: './assets/img/portfolio/ionic.png' },
    { name: 'NodeJs', logo: './assets/img/portfolio/nodejs.png' },
    { name: 'NestJs', logo: './assets/img/portfolio/nestjs.png' },
    { name: 'MongoDB', logo: './assets/img/portfolio/mongo.png' },
    { name: 'SQL', logo: './assets/img/portfolio/sql.png' },
  ];
}
