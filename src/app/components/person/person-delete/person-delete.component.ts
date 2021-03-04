import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {

  person = new Person();
  people: any;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }

  getPeopleData()
  {
    this.personService.getPeopleData().subscribe(res => {
      this.people = res;
    });
  }

  deletePeopleData(id)
  {
    this.personService.deletePeopleData(id).subscribe(res => {
      this.getPeopleData();
    })
  }
}
