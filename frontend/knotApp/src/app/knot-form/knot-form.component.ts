import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Knot } from '../knot';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'knot-form',
  templateUrl: './knot-form.component.html',
  styleUrls: ['./knot-form.component.css']
})
export class KnotFormComponent implements OnInit {
  constructor(private http: HttpClient) {};
  
  readonly ROOT_URL = environment.BACKEND_URL;
  httpOptions: Object = {
    observe: 'response',
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  message: string = 'blank'
  post_status: number = -1;

  ngOnInit(): void {
  }
  
  postKnot(nameInput: any, descriptionInput: any, linkInput: any) {

    const data: Knot = {
      title: nameInput,
      description: descriptionInput,
      link: linkInput

    };
    try {
      const createdKnot = this.http.post(this.ROOT_URL + '/knots/create', data, this.httpOptions).subscribe((res) => {
          const resp = new HttpResponse(res);
          this.post_status = resp.status;
          if (resp.status === 200) {
            this.message = 'Knot  successfully create with name ' + (<Knot>resp.body).title + '.';
          }
          else {
            this.message = 'Knot create failed. Please try again later.';
          }
      });
  }
  catch {
      this.post_status = 0;
      this.message = 'Knot create failed. Please try again later.';
    };
  }

}
