import { NgModule } from "@angular/core";
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from "@angular/material";

const modules = [MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatSelectModule];
@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
