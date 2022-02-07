import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private backendService: BackendService) {}
  t: any;
  delay: number = 1000;
  count: number = 0;
  arrHorse: any[] = [];
  arrRaceState: any[] = [];
  status: string = 'Not Started';
  isSmart: boolean = false;
  // id: 1;
  // livery: 'blue';
  // name: 'Mr Ed';

  // id: 2, name: 'Shadowfax', distancetravelled: 3646}
  isPaused: boolean = false;
  pause() {
    this.isPaused = true;
    this.status = 'Race Paused';
  }
  start() {
    this.isPaused = false;
    this.status = 'Race Started';
    this.t = setTimeout(() => {
      this.count = this.count + 1;

      for (let i = 0; i < this.arrHorse.length; i++) {
        let data = {
          id: this.arrHorse[i].id,
          secondselapsed: this.count,
        };
        this.backendService.fetch_performence(data).subscribe((resp: any) => {
          if (resp) {
            let r = {
              id: resp.id,
              name: resp.name,
              distancetravelled: resp.distancetravelled,
              position: 0,
              finished: 0,
              result: '',
              bgc: '',
            };
            this.analysis(r);
          } else {
            console.log('No Data ...');
          }
        });
      }
      if (!this.isPaused) {
        this.start();
      } else {
      }
    }, this.delay);
  }
  // distancetravelled: 824;
  // id: 3;
  // name: 'Black Stallion';
  resultCounter: number = 0;
  analysis(data: any) {
    let k = this.arrRaceState.findIndex((p) => p.id == data.id);
    if (k == -1) {
      if (data.id == 1) {
        data.bgc = 'bgRed';
      } else if (data.id == 2) {
        data.bgc = 'bgBlack';
      } else if (data.id == 3) {
        data.bgc = 'bgBlue';
      } else if (data.id == 4) {
        data.bgc = 'bgBrown';
      } else if (data.id == 5) {
        data.bgc = 'bgCoral';
      } else if (data.id == 6) {
        data.bgc = 'bgCyan';
      } else {
        data.bgc = 'bgGreen';
      }
      this.arrRaceState.push(data);
    } else {
      if (this.arrRaceState[k].finished == 0) {
        this.arrRaceState[k].distancetravelled = data.distancetravelled;
        if (this.arrRaceState[k].distancetravelled >= 1000) {
          this.arrRaceState[k].distancetravelled = 1000;
          this.arrRaceState[k].finished = 1;
          this.resultCounter = this.resultCounter + 1;
          if (this.resultCounter <= 3) {
            this.arrRaceState[k].position = this.resultCounter;
            this.arrRaceState[k].result =
              this.arrRaceState[k].position == 1
                ? 'Winner'
                : this.arrRaceState[k].position == 2
                ? 'Second'
                : this.arrRaceState[k].position == 3
                ? 'Third'
                : null;
          }
        }
      }
    }
    console.log('Race Sum :', this.resultCounter);
  }

  fetch_horse_data() {
    this.backendService.fetchHorseData().subscribe((resp: any) => {
      if (resp.Response != '401') {
        this.arrHorse = resp;
        console.log(resp);
      } else {
        console.log('No Data ...');
      }
    });
  }

  ngOnInit(): void {
    // this.start();
    this.isSmart = screen.width > 450 ? false : true;
    this.fetch_horse_data();
  }
}
