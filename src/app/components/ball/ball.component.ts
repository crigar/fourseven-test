import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../servicies/color/color.service';

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
  className = 'init-ball';
  ballColor = '';

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColor(true);
  }

  getColor(init: boolean) {
    this.colorService.getColor()
      .subscribe((data: any) => {
        this.ballColor = '#' + data.colors[0].hex;
        if(!init) this.moveBall();
      });
  }

  moveBall() {
    this.className = this.movementClass[this.currentCorner % 4];
    this.currentCorner++;
  }
}
