import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Knot } from '../knot';
import { KnotApiService } from '../knot-api.service';

@Component({
  selector: 'knot-form',
  templateUrl: './knot-form.component.html',
  styleUrls: ['./knot-form.component.css']
})
export class KnotFormComponent {
  constructor(private knotAPI: KnotApiService) {};
  
  message: string = '';
  responseStatus: number = 0;
  
  postKnot(nameInput: any, descriptionInput: any, linkInput: any) {

    const data: Knot = {
      title: nameInput,
      description: descriptionInput,
      link: linkInput
    };

    this.knotAPI.postKnot(data).subscribe(res => {
      const knotResponse = new HttpResponse(res)
      this.responseStatus = knotResponse.status;
      if (this.responseStatus !=200) {
        this.message = 'Knot create failed. Please try again later.';
      }
      else {
        this.message = 'Knot  successfully create with name ' + (<Knot>knotResponse.body).title + '.';
      }
    });
  }
}
