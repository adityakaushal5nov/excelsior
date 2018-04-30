import { Component} from '@angular/core';

@Component({
  selector: 'app-professor-rating',
  templateUrl: './professor-rating.component.html',
  styleUrls: ['./professor-rating.component.css']
})
export class ProfessorRatingComponent {

  len1 = 20;
  bar1() {
    document.getElementById('b1').style.width = '20';
  }

  progressbar1(rating) {
  }

}
