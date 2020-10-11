import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

const modules = [MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatSelectModule];
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
