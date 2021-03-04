import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PersonUpdateComponent implements OnInit {

  @Input () person: Person;
  @Output('getPoepleData') refresh: EventEmitter<any> = new EventEmitter()
  constructor(private personService: PersonService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  ngOnInit(): void {
  }

  update()
  {
    this.personService.updatePeopleData(this.person.id, this.person).subscribe(res => {
      this.refresh.emit();
    })
  }

  open(content) {
    this.modalService.open(content);
  }

}
