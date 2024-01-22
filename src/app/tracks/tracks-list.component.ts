import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TracksService } from './data-access/tracks.service';

@Component({
  standalone: true,
  selector: 'app-track-list',
  imports: [RouterLink],
  template: `
    <div class="container">
      <h1>Tracks</h1>
      <h2>Season {{ tracksService.season() }}</h2>
      <table class="trackList">
        <thead>
          <tr>
            <th>Track Name</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          @for (track of tracksService.tracks(); track track.circuitId) {
          <tr>
            <td>{{ track.circuitName }}</td>
            <td>{{ track.Location.country }}</td>
          </tr>
          }
        </tbody>
      </table>
      <button routerLink="/home">Home</button>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      table {
        width: 50%;
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

      button {
        margin-top: 20px;
      }
    `,
  ],
})
export class TrackListComponent {
  tracksService = inject(TracksService);
}
