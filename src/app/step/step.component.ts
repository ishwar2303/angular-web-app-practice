import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  // @ts-ignore
  departmentForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.departmentForm = this.formBuilder.group({
      CompanyName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      DepartmentName: ['', [Validators.required]],
      Location: ['', [Validators.required]]
    })
  }

  addDepartment(): void {
    console.log(this.departmentForm)
    console.log(this.departmentForm.value)

    if(this.departmentForm.invalid)
      return

    // call service method to add department
  }

}
