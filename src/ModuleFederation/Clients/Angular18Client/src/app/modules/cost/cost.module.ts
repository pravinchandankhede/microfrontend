import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Injector, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CostRoutingModule } from "./cost-routing.module";
import { CostComponent } from "./cost.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CostRoutingModule,
        RouterModule
       
    ],
    declarations: [CostComponent]
})
export class CostModule {

    constructor(private injector: Injector) {
        const customElement = createCustomElement(CostComponent, { injector: this.injector });
        customElements.define('app-cost', customElement);
    }
}
