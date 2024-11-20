import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OaiMainEditorComponent } from './page/oai-main-editor/oai-main-editor.component';
import { OaiMainListComponent } from './page/oai-main-list/oai-main-list.component';
import { OaiMainMetadataComponent } from './page/oai-main-metadata/oai-main-metadata.component';


const routes: Routes = [
  { path: '', component: OaiMainListComponent },
  { path: 'edit/:id', component: OaiMainEditorComponent },
  { path: 'metadata/:id', component: OaiMainMetadataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OaieditorRoutingModule {
  goEdit(id:string)
    {

    }
}
