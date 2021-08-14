import { Component } from '@angular/core';
import { Knot } from '../knot';
import { DomSanitizer } from '@angular/platform-browser';
import { KnotApiService } from '../knot-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private knotAPI: KnotApiService, private sanitizer: DomSanitizer) {};

  knots: any;
  randomKnot: Knot = {
    title: "",
    description: "",
    link: ""
  };
  
  getKnots() {
    this.knotAPI.getKnots().subscribe(res => this.knots = res);
  }

  getRandomKnot() {
    this.knotAPI.getRandomKnot().subscribe(res => this.randomKnot = <Knot>res);
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.randomKnot.link
    );
  }
}
