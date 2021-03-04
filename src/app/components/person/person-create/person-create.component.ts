import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/service/person.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PersonCreateComponent implements OnInit {

  data;
  person = new Person();
  @Output('getPoepleData') refresh: EventEmitter<any> = new EventEmitter()
  constructor(private personService: PersonService, config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

  insertPeopleData(regForm: NgForm)
  {
    if (regForm.valid)
      {
      this.data = regForm.value;
      }
    this.personService.insertPeopleData(this.person).subscribe(res => {
      this.refresh.emit();
    })
  }

}
