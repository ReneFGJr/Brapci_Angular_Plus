import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OaieditorRoutingModule } from './oaieditor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OaiMainEditorComponent } from './page/oai-main-editor/oai-main-editor.component';
import { OaiMainListComponent } from './page/oai-main-list/oai-main-list.component';
import { OaiMainMetadataComponent } from './page/oai-main-metadata/oai-main-metadata.component';
import { RepositoryComponent } from './widgat/repository/repository.component';
import { ListregisterComponent } from './widgat/listregister/listregister.component';
import { OaiMainMetadataEditComponent } from './page/oai-main-metadata-edit/oai-main-metadata-edit.component';
import { OaiMainMetadataFormComponent } from './page/oai-main-metadata-form/oai-main-metadata-form.component';


@NgModule({
  declarations: [
    OaiMainEditorComponent,
    OaiMainListComponent,
    OaiMainMetadataComponent,
    RepositoryComponent,
    ListregisterComponent,
    OaiMainMetadataEditComponent,
    OaiMainMetadataFormComponent
  ],
  imports: [CommonModule, OaieditorRoutingModule, ReactiveFormsModule],
})
export class OaieditorModule {}
