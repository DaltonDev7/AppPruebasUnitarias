import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class TaskService {

  constructor(private https: HttpClient, private fb: FormBuilder) { }

  public getForm(): FormGroup {
    return this.fb.group({
      Description: [null],
      Status: [null]
    })
  }


}
