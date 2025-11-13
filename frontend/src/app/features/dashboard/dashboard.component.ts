import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  template: `
    <div class="dashboard-container">
      <mat-toolbar color="primary">
        <span>Dashboard</span>
        <span class="spacer"></span>
        <button mat-icon-button (click)="logout()">
          <mat-icon>logout</mat-icon>
        </button>
      </mat-toolbar>

      <div class="container">
        <h1>Bem-vindo ao Dashboard!</h1>
        
        <div class="cards-grid">
          <mat-card>
            <mat-card-header>
              <mat-icon mat-card-avatar>people</mat-icon>
              <mat-card-title>Usuários</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <h2>0</h2>
              <p>Total de usuários cadastrados</p>
            </mat-card-content>
          </mat-card>

          <mat-card>
            <mat-card-header>
              <mat-icon mat-card-avatar>analytics</mat-icon>
              <mat-card-title>Estatísticas</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <h2>0</h2>
              <p>Atividades recentes</p>
            </mat-card-content>
          </mat-card>

          <mat-card>
            <mat-card-header>
              <mat-icon mat-card-avatar>notifications</mat-icon>
              <mat-card-title>Notificações</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <h2>0</h2>
              <p>Novas notificações</p>
            </mat-card-content>
          </mat-card>

          <mat-card>
            <mat-card-header>
              <mat-icon mat-card-avatar>settings</mat-icon>
              <mat-card-title>Configurações</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>Gerencie suas preferências</p>
              <button mat-raised-button color="primary">Acessar</button>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    h1 {
      margin-bottom: 30px;
      color: #333;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    mat-card {
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    mat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }

    mat-card-header {
      margin-bottom: 16px;
    }

    mat-icon[mat-card-avatar] {
      width: 40px;
      height: 40px;
      font-size: 40px;
      color: #3f51b5;
    }

    mat-card-content h2 {
      font-size: 36px;
      margin: 0 0 8px 0;
      color: #3f51b5;
    }

    mat-card-content p {
      margin: 0;
      color: #666;
    }

    mat-card-content button {
      margin-top: 12px;
    }
  `]
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout(): void {
    console.log('Logout');
    // TODO: Implement logout logic
    this.router.navigate(['/auth/login']);
  }
}
