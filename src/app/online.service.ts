import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {
  private basepath = "";

  constructor(private http: HttpClient) { }
}
