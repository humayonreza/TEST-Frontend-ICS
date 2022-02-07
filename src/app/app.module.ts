import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  entryComponents: [],
  imports: [
    MatDialogModule,
    // SpeechSynthesisModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
   
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },

        // {
        //   path: 'home',
        //   component: HomeComponent,
        // },
        // {
        //   path: 'roster',
        //   component: RosterComponent,
        // },
        // {
        //   path: 'compliances',
        //   component: CompliancesComponent,
        // },
        // {
        //   path: 'time-sheet',
        //   component: TimesheetComponent,
        // },
        // {
        //   path: 'manage/:id1/:id2',
        //   component: ManageactComponent,
        // },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
