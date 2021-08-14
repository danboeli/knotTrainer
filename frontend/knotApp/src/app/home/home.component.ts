import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Knot } from '../knot';
import { KnotFormComponent } from '../knot-form/knot-form.component';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Knot Trainer';
  readonly ROOT_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {};
  knots: any;
  randomKnot: Knot = {
    title: "",
    description: "",
    link: ""
  };
  
  getKnots() {
    this.knots = this.http.get(this.ROOT_URL+ '/knots');
  }

  getRandomKnot() {
    this.http.get<any>(this.ROOT_URL+ '/knots/random', {responseType: 'json'}).subscribe(res => {
      this.randomKnot = res;
    });
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.randomKnot.link
    );
  }
}
