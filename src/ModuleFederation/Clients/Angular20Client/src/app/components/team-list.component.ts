import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h1>Angular 20 Client Component</h1>
      <h2>Team List</h2>
      
      <div class="table-responsive">
    <table class="table table-striped table-bordered">
          <thead>
     <tr>
   <th>Employee ID</th>
        <th>Email</th>
            <th>Team Name</th>
              <th>Designation</th>
      <th>Phone Number</th>
              <th>City</th>
           <th>State</th>
         </tr>
      </thead>
 <tbody>
            <tr *ngFor="let team of teams">
    <td>{{ team.EmployeeId }}</td>
      <td>{{ team.Email }}</td>
              <td>{{ team.TeamName }}</td>
      <td>{{ team.Designation }}</td>
       <td>{{ team.PhoneNumber }}</td>
              <td>{{ team.City }}</td>
              <td>{{ team.State }}</td>
        </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .container { padding: 20px; }
    h1 { color: #333; margin-bottom: 10px; }
    h2 { color: #666; margin-bottom: 20px; }
    .table { width: 100%; }
    .table th { background-color: #f8f9fa; }
  `]
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe({
      next: (data) => {
        this.teams = data;
      },
      error: (error) => {
      console.error('Error fetching teams:', error);
      }
    });
  }
}
