import { Component, OnInit } from '@angular/core';

interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  link: string;
  linkUrl: string;
  technologies: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  currentFilter = 'all';

  projects: Project[] = [
    {
      id: 'project1',
      title: 'PORTFOLIO.PROJECT1.TITLE',
      image: 'assets/img/portfolio/tap.png',
      category: 'consulting', // Categoría para móviles
      description: 'PORTFOLIO.PROJECT1.DESCRIPTION',
      link: 'PORTFOLIO.PROJECT1.LINK',
      linkUrl: 'https://www.apps.akc.org/title-application-portal/',
      technologies: 'PORTFOLIO.PROJECT1.TECHNOLOGIES'
    },
    {
      id: 'project2',
      title: 'PORTFOLIO.PROJECT2.TITLE',
      image: 'assets/img/portfolio/beelinguapp.png',
      category: 'finance', // Categoría para móviles
      description: 'PORTFOLIO.PROJECT2.DESCRIPTION',
      link: 'PORTFOLIO.PROJECT2.LINK',
      linkUrl: 'https://beelinguapp.com/',
      technologies: 'PORTFOLIO.PROJECT2.TECHNOLOGIES'
    },
    {
      id: 'project3',
      title: 'PORTFOLIO.PROJECT3.TITLE',
      image: 'assets/img/portfolio/app.jpg',
      category: 'finance', // Categoría para móviles
      description: 'PORTFOLIO.PROJECT3.DESCRIPTION',
      link: 'PORTFOLIO.PROJECT3.LINK',
      linkUrl: 'https://play.google.com/store/apps/details?id=com.aztlansoft.delivery.agil.adminapp',
      technologies: 'PORTFOLIO.PROJECT3.TECHNOLOGIES'
    },
    {
      id: 'project4',
      title: 'PORTFOLIO.PROJECT4.TITLE',
      image: 'assets/img/portfolio/p-6.jpg',
      category: 'consulting', // Categoría para web
      description: 'PORTFOLIO.PROJECT4.DESCRIPTION',
      link: 'PORTFOLIO.PROJECT4.LINK',
      linkUrl: 'https://vigorous-heisenberg-81961a.netlify.app/',
      technologies: 'PORTFOLIO.PROJECT3.TECHNOLOGIES'
    },
    {
      id: 'project5',
      title: 'PORTFOLIO.PROJECT5.TITLE',
      image: 'assets/img/portfolio/p-7.jpg',
      category: 'consulting', // Categoría para web
      description: 'PORTFOLIO.PROJECT5.DESCRIPTION',
      link: 'PORTFOLIO.PROJECT5.LINK',
      linkUrl: 'https://rocamalo.github.io/dinnova/',
      technologies: 'PORTFOLIO.PROJECT5.TECHNOLOGIES'
    },
    {
      id: 'project6',
      title: 'PORTFOLIO.PROJECT6.TITLE',
      image: 'assets/img/portfolio/p-8.jpg',
      category: 'consulting', // Categoría para web
      description: 'PORTFOLIO.PROJECT6.DESCRIPTION',
      link: 'PORTFOLIO.PROJECT6.LINK',
      linkUrl: 'https://rocamalo.github.io/github.io/',
      technologies: 'PORTFOLIO.PROJECT6.TECHNOLOGIES'
    },
    {
      id: 'project7',
      title: 'PORTFOLIO.PROJECT7.TITLE',
      image: 'assets/img/portfolio/p-9.jpg',
      category: 'consulting', // Categoría para web
      description: 'PORTFOLIO.PROJECT7.DESCRIPTION',
      link: 'PORTFOLIO.PROJECT7.LINK',
      linkUrl: 'https://adoring-wilson-971d59.netlify.app/templates/admin-template-2/',
      technologies: 'PORTFOLIO.PROJECT7.TECHNOLOGIES'
    }
  ];

  filteredProjects: Project[] = [];
  selectedProject: Project | null = null;

  ngOnInit(): void {
    this.filterProjects('all');
  }

  filterProjects(category: string): void {
    this.currentFilter = category;

    if (category === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }
}
