import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  private _isAdmin: boolean = false;
  public get isAdmin(): boolean {
    return this._isAdmin;
  }
  public set isAdmin(value: boolean) {
    this._isAdmin = value;
  }
    changeAdmin(): void {
      this.isAdmin = !this.isAdmin;
    }
}
