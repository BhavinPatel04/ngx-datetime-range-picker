import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
})
export class MaterialModule {}
