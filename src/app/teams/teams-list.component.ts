import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConstructorsService } from './data-access/teams.service';

@Component({
  standalone: true,
  selector: 'app-teams-list',
  imports: [RouterLink],
  template: ` <div class="container">
    <h1>Teams</h1>
    <h2>Season {{ constructorsService.season() }}</h2>
    <div class="fflag fflag-ES"></div>
    <table class="constructorList">
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Nationality</th>
        </tr>
      </thead>

      <tbody>
        @for (constructor of constructorsService.constructors(); track
        constructor.constructorId) {
        <tr>
          <td>
            <a [routerLink]="['/team-details', constructor.constructorId]"
              >{{ constructor.name }}
            </a>
          </td>
          <td>
            <div
              class="fflag ff-md {{ 'fflag-' + constructor.nationality }}"
            ></div>
            {{ constructor.nationality }}
          </td>
        </tr>
        }
      </tbody>
    </table>
  </div>`,
  styles: [
    `
      a {
        text-decoration: none;
        color: black;
        transition: color 0.3s;
      }
      a:hover {
        color: blue; /* Cambia el color del texto cuando se pasa el cursor sobre el enlace */
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      table {
        width: 30%;
        margin-top: 20px;
        border-collapse: collapse;
      }

      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }
    `,
  ],
})
export class TeamsListComponent {
  constructorsService = inject(ConstructorsService);
}
