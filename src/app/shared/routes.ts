import {  Routes } from "@angular/router";
import { AuditComponent } from "../Component/audit/audit.component";
import { DocumentationComponent } from "../Component/documentation/documentation.component";
import { HistoryComponent } from "../Component/history/history.component";
import { HomeComponent } from "../Component/home/home.component";
import { LoginComponent } from "../Component/login/login.component";
import { ActivatorService } from "./activator.service";

export const Route: Routes = [
    { path: "login", component: LoginComponent},
    { path: "home", component: HomeComponent, canActivate: [ActivatorService] },
    { path: "history", component: HistoryComponent, canActivate: [ActivatorService]},
    { path: "audit", component: AuditComponent, canActivate: [ActivatorService] },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "docs", component: DocumentationComponent, canActivate: [ActivatorService] }
]