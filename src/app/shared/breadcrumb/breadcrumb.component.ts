import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
interface BreadcrumbItem {
  label: string;
  url: string;
}
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit{
  breadcrumbs: BreadcrumbItem[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.createBreadcrumbs();
    });

    // Crear breadcrumbs iniciales
    this.createBreadcrumbs();
  }

  private createBreadcrumbs(): void {
    let currentRoute = this.activatedRoute.root;
    let url = '';
    this.breadcrumbs = [];

    while (currentRoute.children.length > 0) {
      const childrenRoutes = currentRoute.children;
      let breadcrumbRoute = childrenRoutes.find(route => route.outlet === 'primary');

      if (breadcrumbRoute) {
        const routeURL = breadcrumbRoute.snapshot.url.map(segment => segment.path).join('/');
        url += `/${routeURL}`;

        const label = breadcrumbRoute.snapshot.data['breadcrumb'];
        if (label) {
          this.breadcrumbs.push({ label, url });
        }

        currentRoute = breadcrumbRoute;
      } else {
        break;
      }
    }
  }
}
