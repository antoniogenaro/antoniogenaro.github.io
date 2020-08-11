import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill, Experience, Bio, Network, SkillsGrouping } from './app.models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getBio(): Observable<Bio> {
    return of<Bio>(
      {
        name: 'Antonio',
        surnames: 'Genaro',
        description: `Fullstack JavaScript developer (70% frontend / 30% backend). Kebab expert`,
        imgUrl: 'https://avatars2.githubusercontent.com/u/15797756',
        work: 'Software developer'
      }
    );
  }

  getSkills(): Observable<SkillsGrouping[]> {
    return of<SkillsGrouping[]>(
      [
        {
          name: 'General',
          fullWidth: true,
          skills: [
            { name: 'JavaScript', favorite: true },
            { name: 'TypeScript', favorite: true }
          ]
        },
        {
          name: 'Frontend',
          skills: [
            { name: 'Angular', favorite: true },
            { name: 'Ionic', favorite: true },
            { name: 'Stencil.js' }
          ]
        },
        {
          name: 'Backend',
          skills: [
            { name: 'Node.js', favorite: true },
            { name: 'MySQL' },
            { name: 'Nest.js' }
          ]
        },
        {
          name: 'Others',
          fullWidth: true,
          skills: [
            { name: 'Git', favorite: true },
            { name: 'Firebase' },
            { name: 'Runnerty' }
          ]
        }
      ]
    );
  }

  getExperiences(): Observable<Experience[]> {
    return of<Experience[]>(
      [
        { business: 'Coderty', startDate: new Date('2016-04'), work: 'Software developer' }
      ]
    );
  }

  getNetworks(): Observable<Network[]> {
    return of<Network[]>(
      [
        { networkName: 'Github', userName: 'antoniogenaro', url: 'https://github.com/antoniogenaro', class: 'fab fa-github' },
        { networkName: 'Twitter', userName: 'antoniogenaro8', url: 'https://twitter.com/antoniogenaro8', class: 'fab fa-twitter' },
        { networkName: 'Linkedin', userName: 'antoniogenaro', url: 'https://www.linkedin.com/in/antoniogenaro', class: 'fab fa-linkedin' },
        { networkName: 'Email', userName: 'hey@genaro.dev', url: 'mailto:hey@genaro.dev', class: 'fas fa-envelope' }
      ]
    );
  }
}