import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { ApiService } from './../../services/api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // public subscription: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.subscription.push(
    //   this.apiService.getProduct().subscribe({
    //     next: (response) => {
    //       this.apiService.products = response
    //     },
    //     error: (err) => {
    //       console.log(err)
    //     }
    //   })
    // )
  }
}
