import { Component } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { MainComponent } from "../main/main.component";
import { RightbarComponent } from "../rightbar/rightbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ToolbarComponent, NavbarComponent, MainComponent, RightbarComponent]
})
export class HomeComponent {

}
