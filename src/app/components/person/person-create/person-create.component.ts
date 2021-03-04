import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  
  person = new Person();
  @Output('getPoepleData') refresh: EventEmitter<any> = new EventEmitter()
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  insertPeopleData()
  {
    this.personService.insertPeopleData(this.person).subscribe(res => {
      this.refresh.emit();
    })
  }

}
