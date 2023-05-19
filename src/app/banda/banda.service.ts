import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Banda } from './banda';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BandaService {
private apiUrl = environment.baseUrl;
constructor(private http: HttpClient) { }

getBandas():Observable<Banda[]> {
  return this.http.get<Banda[]>(this.apiUrl);
}
}
