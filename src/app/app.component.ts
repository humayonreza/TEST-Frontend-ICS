import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isSmart: boolean = false;
  ngOnInit(): void {
    this.isSmart = screen.width > 500 ? false : true;
  }
}
