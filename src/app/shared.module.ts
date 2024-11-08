import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    exports: [
        CommonModule,         // Required for directives like *ngIf, *ngFor
        MatToolbarModule,     // Material toolbar
        MatButtonModule,      // Material button
        MatIconModule,        // Material icons
        MatGridListModule,    // Material grid list and tile
        MatCardModule,        // Material card
        MatInputModule        // Material input field
        // Add other Angular Material modules here as needed
    ]
})
export class SharedModule { }
