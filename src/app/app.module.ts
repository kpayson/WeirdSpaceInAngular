import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooComponent } from "./foo.component";
import { BarComponent } from "./bar.component";

@NgModule({
  declarations: [AppComponent, FooComponent, BarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
