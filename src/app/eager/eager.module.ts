import { NgModule } from '@angular/core';

import { EagerComponent }   from './eager.component';
import { routing } from './eager.routing';

@NgModule({
  imports: [routing],
  declarations: [EagerComponent]
})
export class eagerModule {}