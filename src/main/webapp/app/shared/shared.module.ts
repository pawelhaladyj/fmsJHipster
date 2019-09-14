import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FmsJHipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FmsJHipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FmsJHipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FmsJHipsterSharedModule {
  static forRoot() {
    return {
      ngModule: FmsJHipsterSharedModule
    };
  }
}
