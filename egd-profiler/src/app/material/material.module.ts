import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';



const MaterialComponents = [
  BrowserAnimationsModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatStepperModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatRadioModule,
  FlexLayoutModule,
  FormsModule,
  NgChartsModule,

]
@NgModule({
  
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ],
})
export class MaterialModule { }
