import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { LivroData } from '../models/livroData'

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private baseURL:string = "";
  private livroData:LivroData | any;

  constructor(private http:HttpClient) {
    this.baseURL = environment.livroApi;
  }

  getLivro(livroNome:string):Observable<LivroData>{

    this.livroData = this.http.get<LivroData>(`${this.baseURL}?search=${livroNome}`);
    return this.livroData;
  }
}
