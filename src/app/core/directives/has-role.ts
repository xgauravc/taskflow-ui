import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from '@angular/core';

import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[hasRole]',
  standalone: true
})
export class HasRoleDirective implements OnInit {

  @Input('hasRole') role!: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    const roles = this.authService.getUserRoles();

    if (roles.includes(this.role)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
