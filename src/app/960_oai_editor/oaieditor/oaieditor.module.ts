import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OaieditorRoutingModule } from './oaieditor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OaiMainEditorComponent } from './page/oai-main-editor/oai-main-editor.component';
import { OaiMainListComponent } from './page/oai-main-list/oai-main-list.component';
import { OaiMainMetadataComponent } from './page/oai-main-metadata/oai-main-metadata.component';


@NgModule({
  declarations: [
    OaiMainEditorComponent,
    OaiMainListComponent,
    OaiMainMetadataComponent
  ],
  imports: [CommonModule, OaieditorRoutingModule, ReactiveFormsModule],
})
export class OaieditorModule {}
