import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DriversService } from './data-access/drivers.service';

@Component({
  standalone: true,
  selector: 'app-drivers-list',
  imports: [RouterLink],
  template: `
    <div class="container">
      <h1>Driver List</h1>
      <h2>Season {{ driversService.season() }}</h2>
      <div class="table-wrapper">
        <table class="driverList">
          <thead>
            <tr>
              <th>Number</th>
              <th>Driver</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            @for (driver of driversService.drivers(); track driver.driverId) {
            <tr>
              <td>{{ driver.permanentNumber }}</td>
              <td>
                <a [routerLink]="['/driver-details', driver.driverId]">
                  {{ driver.givenName }} {{ driver.familyName }}
                </a>
              </td>
              <td>
                <div
                  class="fflag ff-md {{
                    'fflag-' + driver.nationality.replaceAll(' ', '')
                  }} "
                ></div>
                {{ driver.nationality }}
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      a {
        text-decoration: none;
        color: black;
        transition: color 0.3s;
      }
      a:hover {
        color: blue;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .table-wrapper {
        overflow-x: auto;
        width: 100%;
      }

      table {
        width: 100%;
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

      @media (max-width: 767px) {
        th:nth-child(4),
        td:nth-child(4) {
          display: none;
        }
      }
    `,
  ],
})
export class DriversListComponent {
  driversService = inject(DriversService);
}
