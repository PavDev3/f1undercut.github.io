import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-drivers-list',
  imports: [RouterLink],
  template: `<h1>Driver List</h1>
    <button routerLink="/home">Home</button>`,
})
export class DriversListComponent {}
