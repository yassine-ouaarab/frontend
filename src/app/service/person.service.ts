import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }
  
  getPeopleData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/people');
  }

  insertPeopleData(Person)
  {
    return this.httpClient.post('http://127.0.0.1:8000/api/people', Person);
  }

  deletePeopleData(id)
  {
    return this.httpClient.delete('http://127.0.0.1:8000/api/people/'+id);
  }

  updatePeopleData(id, Person)
  {
    return this.httpClient.put('http://127.0.0.1:8000/api/people/' + id, Person);
  }
}
