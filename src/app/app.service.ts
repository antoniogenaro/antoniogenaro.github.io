import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  toArray,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bio, Experience, Network, SkillsGrouping, Talk } from './app.models';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getBio(): Observable<Bio> {
    return this.getData<Bio>('bio');
  }

  getSkills(): Observable<SkillsGrouping[]> {
    return this.getData<SkillsGrouping[]>('skills');
  }

  getExperiences(): Observable<Experience[]> {
    return this.getData<Experience[]>('experiences').pipe(
      switchMap(experiences =>
        from(experiences).pipe(
          mergeMap(experience =>
            experience.descriptionUrl
              ? this.http
                  .get(
                    `${environment.endpointLocal}/experiences-descriptions/${experience.descriptionUrl}`,
                    {
                      responseType: 'text',
                    }
                  )
                  .pipe(map(description => ({ ...experience, description })))
              : of(experience)
          ),
          toArray()
        )
      )
    );
  }

  getNetworks(): Observable<Network[]> {
    return this.getData<Network[]>('networks');
  }

  getTalks(): Observable<Talk[]> {
    return this.getData<Talk[]>('talks');
  }

  private getData<T>(path: string): Observable<T> {
    return this.http
      .get<T>(`${environment.endpointRemote}/${path}.json`)
      .pipe(
        catchError(() =>
          this.http.get<T>(`${environment.endpointLocal}/${path}.json`)
        )
      );
  }
}
