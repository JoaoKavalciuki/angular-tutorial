import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  private todoUrl = 'https://jsonplaceholder.typicode.com/todos/1'

  constructor(private client: HttpClient) {
  }
  getTodo(): Observable<any>{
    return this.client.get(this.todoUrl)
  }
}
