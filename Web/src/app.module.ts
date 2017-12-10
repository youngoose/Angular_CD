import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTabsModule } from '@angular/material/tabs'

import { AppContainer } from './Containers/App/app.component'
import { SampleComponent } from './Components/Sample/sample.component'
import { TabsComponent } from './components/tabs/tabs.component'

@NgModule({
  declarations: [
    AppContainer,
    SampleComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule {}
