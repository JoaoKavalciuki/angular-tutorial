import { Component, signal } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { timeInterval } from 'rxjs';
import { HomeServiceService } from '../../services/home-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = "Leaarning angular"
  count = signal(0)
  clickFunction(){
    var clickTimes = this.count.update(value => value+1)
    console.log("Btn clicked: " + clickTimes + " times");
    
  }

  constructor(private homeService: HomeServiceService){
    this.homeService.getTodo().subscribe()
  }
}
