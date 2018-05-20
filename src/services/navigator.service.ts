import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../models/group';
import { Leassons } from '../models/leasson';

@Injectable()
export class NavigatorService {
  private DOMAIN = 'http://localhost:60832'

  constructor(private http: HttpClient) { }

  public Registration(name: string, phone: string): Observable<string> {
    return this.http.post<string>(this.DOMAIN + '/registry', { phone, name });
  }

  public GetGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.DOMAIN + '/api/Group', { headers: this.createRequestHeader() });
  }

  public GetCurrentLeasson(groupId: number): Observable<Leassons> {
    return this.http.get<Leassons>(this.DOMAIN + '/leasson/' + groupId);
  }

  public GetLeassons(groupId: number): Observable<Leassons[]> {
    return this.http.get<Leassons[]>(this.DOMAIN + '/leassons/' + groupId);
  }

  public PushPosition(Id, Latitude, Longitude): void {
    this.http.post(this.DOMAIN + '/setPosition', { Id, Latitude, Longitude });
  }

  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return headers;
  }
}