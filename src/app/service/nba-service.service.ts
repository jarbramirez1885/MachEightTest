import { Injectable } from '@angular/core'; 
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { NbaPlayers } from '../models/nba-players.model';

@Injectable({
  providedIn: 'root'
})
export class NbaServiceService {

  constructor(private http: HttpClient) { 

  }

  public getPlayers(): Observable<any> {
   return  this.http.get<NbaPlayers[]>("https://mach-eight.uc.r.appspot.com/")
   .pipe(
     map(res => {
       return res;
     })
   )
  }
}
