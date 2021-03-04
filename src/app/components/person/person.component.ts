import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  id: number
  people: any;
  person = new Person();
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPeopleData();
  }

  getPeopleData()
  {
    this.personService.getPeopleData().subscribe(res => {
      this.people = res;
    });
  }

}
