import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  layoutService = inject(LayoutService);
}
