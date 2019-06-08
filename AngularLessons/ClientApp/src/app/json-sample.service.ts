import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonSampleService {

  constructor(private http: HttpClient) { }

  public GetJsonFileFromApi(): Observable<IDomNode> {
    return this.http.get<IDomNode>('api/jsondata/getJson');
  }
}
