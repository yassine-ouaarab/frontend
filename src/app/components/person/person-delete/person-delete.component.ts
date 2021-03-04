import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {


  @Input () person: Person;
  @Input('getPoepleData') refresh: EventEmitter<any> = new EventEmitter()
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }

  delete()
  {
    this.personService.deletePeopleData(this.person.id).subscribe(res => {
      this.refresh.emit();
    })
  }
  
}

