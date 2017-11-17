import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TranslatePipe } from "./translate.pipe";
import { TranslateService } from "./translate.service";
import { TRANSLATION_PROVIDERS } from "./translation";

@NgModule({
    providers: [
        TRANSLATION_PROVIDERS
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        TranslatePipe
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslatePipe
    ]
})
export class TranslateModule {
    
}