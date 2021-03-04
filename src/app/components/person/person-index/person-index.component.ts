import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person-index',
  templateUrl: './person-index.component.html',
  styleUrls: ['./person-index.component.css']
})
export class PersonIndexComponent implements OnInit {

  @Input() people: any;
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  getPeopleData()
  {
    this.personService.getPeopleData().subscribe(res => {
      this.people = res;
    });
  }

  
}
