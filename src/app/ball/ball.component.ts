import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnInit {

  currentCorner = 0;
  movementClass = [
    'left-to-right', 
    'top-to-bottom',
    'right-to-left',
    'bottom-to-up'
  ];
  className = this.movementClass[0];
  ballColor = '#bbb';

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColor();
  }

  private getColor() {
    this.colorService.getColor()
      .subscribe((data: any) => {
        console.log(data)
        this.ballColor = '#' + data.new_color;
      });
  }

  changeClass() {
    this.className = this.movementClass[this.currentCorner % 4];
    this.currentCorner++;
  }
}
