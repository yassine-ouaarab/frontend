import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {

  constructor(private personService: PersonService) { }

  person = new Person();
  id: number;
  people: any;
  ngOnInit(): void {
  }

  getPeopleData()
  {
    this.personService.getPeopleData().subscribe(res => {
      this.people = res;
    });
  }

  updatePeopleData(id, person)
  {
    this.personService.updatePeopleData(this.id, person).subscribe(res => {
      this.getPeopleData();
    })
  }

}
