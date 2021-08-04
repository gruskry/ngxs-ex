
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from '../shared.module';

@NgModule  ({
    imports: [SharedModule, DashboardRoutingModule, NgxPaginationModule, NgxSpinnerModule,],
    exports: [NgxPaginationModule, NgxSpinnerModule,],
    declarations:[DashboardComponent],
})
export class DashboardModule {}
