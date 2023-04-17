import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  _form = new FormGroup({
    name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required)
  });

  id!:number;

  status:boolean =false;

  active:boolean = false;

  ngOnInit(): void {
    
  }

  array_person:any = [];

  save(){
    this.array_person.push(this._form.value);
    this.active = true;
  }

  destroy(id:number){
    delete(this.array_person[id]);
  }

  update(){
    this.array_person[this.id] = this._form.value;
    this.status = false;
  }

  edit(id:number){
    this.id = id;
    this.update();
    this.status = true;
  }

}
