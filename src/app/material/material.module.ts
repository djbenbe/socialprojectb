import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< Updated upstream
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
=======
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
>>>>>>> Stashed changes
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
<<<<<<< Updated upstream
=======
import { MatDialogModule } from '@angular/material/dialog';
>>>>>>> Stashed changes

const MaterialComponents = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatCardModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatIconModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
<<<<<<< Updated upstream
  MatBottomSheetModule
=======
  MatBottomSheetModule,
  MatDialogModule
>>>>>>> Stashed changes
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
