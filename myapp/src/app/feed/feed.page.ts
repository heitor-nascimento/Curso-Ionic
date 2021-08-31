import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public user_name: string = "Milena Ferreira do Nascimento";

  constructor() { }

  public soma(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  ngOnInit() {
  }

}

