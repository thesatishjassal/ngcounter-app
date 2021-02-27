import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter App';

  count: number = 100;

  heandleIncrese = () => {
    this.count = this.count + 1;
  }
  
  heandleDecrese = () => {
    this.count = this.count -1;
      if(this.count == -1){
        this.count = 0
      }
  }

  heandleReset = () => {
    this.count = 0;
  }
}
