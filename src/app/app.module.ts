import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VComponent } from './020_brapci/page/v/v.component';
import { Error404Component } from './020_brapci/page/error404/error404.component';
import { HomeComponent } from './020_brapci/page/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProceedingsComponent } from './020_brapci/widget/v/proceedings/proceedings.component';
import { EnancibComponent } from './020_brapci/widget/v/proceedings/enancib/enancib.component';
import { EbbcComponent } from './020_brapci/widget/v/proceedings/ebbc/ebbc.component';
import { FeiscComponent } from './020_brapci/widget/v/proceedings/feisc/feisc.component';
import { IskobrComponent } from './020_brapci/widget/v/proceedings/iskobr/iskobr.component';
import { GeralComponent } from './020_brapci/widget/v/proceedings/geral/geral.component';
import { BenancibComponent } from './020_brapci/theme/banner-benancib/benancib.component';
import { EditComponent } from './020_brapci/button/edit/edit.component';
import { DeleteComponent } from './020_brapci/button/delete/delete.component';
import { IaComponent } from './020_brapci/button/ia/ia.component';
import { TabsNavComponent } from './020_brapci/widget/tabs-nav/tabs-nav.component';
import { ActionsComponent } from './020_brapci/button/actions/actions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './020_brapci/theme/header/header.component';
import { FooterComponent } from './020_brapci/theme/footer/footer.component';
import { NavbarComponent } from './020_brapci/theme/navbar/navbar.component';
import { LoginIconeComponent } from './020_brapci/theme/login-icone/login-icone.component';
import { SocialPerfilComponent } from './020_brapci/page/social/perfil/perfil.component';
import { SocialMainComponent } from './020_brapci/page/social/social-main/social-main.component';
import { PdfComponent } from './020_brapci/widget/pdf/pdf.component';
import { LoveitComponent } from './020_brapci/widget/loveit/loveit.component';
import { HomeBenancibComponent } from './020_brapci/page/benancib/benancib.component';
import { IssueProcceedingsComponent } from './020_brapci/widget/issue-procceedings/issue-procceedings.component';
import { IssueViewComponent } from './020_brapci/widget/v/issue-view/issue-view.component';
import { BannersComponent } from './020_brapci/theme/banners/banners.component';
import { MainProcceedingsComponent } from './020_brapci/page/procceedings/procceedings.component';
import { ProcceedingsIDComponent } from './020_brapci/page/procceedings-id/procceedings-id.component';
import { BannerEbbcComponent } from './020_brapci/theme/banner-ebbc/banner-ebbc.component';
import { BannerIskobrComponent } from './020_brapci/theme/banner-iskobr/banner-iskobr.component';
import { BannerWidatComponent } from './020_brapci/theme/banner-widat/banner-widat.component';
import { BreadcrumbsComponent } from './020_brapci/widget/breadcrumbs/breadcrumbs.component';
import { CitationNoteComponent } from './020_brapci/widget/citation-note/citation-note.component';
import { InstagramComponent } from './020_brapci/widget/socialmidias/instagram/instagram.component';
import { LivrosComponent } from './020_brapci/page/livros/livros.component';
import { BannerLivrosComponent } from './020_brapci/theme/banner-livros/banner-livros.component';
import { VitrineLivrosClassesComponent } from './020_brapci/widget/vitrine-livros-classes/vitrine-livros-classes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './020_brapci/widget/v/book/book.component';
import { SubjectsComponent } from './020_brapci/widget/subjects/subjects.component';
import { BenancibSearchComponent } from './020_brapci/search/benancib/benancib.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrapciSearchComponent } from './020_brapci/search/brapci/brapci.component';
import { ItemShowRowComponent } from './020_brapci/widget/item-show-row/item-show-row.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ManutenceComponent } from './020_brapci/widget/manutence/manutence.component';
import { PlumxComponent } from './020_brapci/widget/altmetrics/plumx/plumx.component';
import { AltmetricComponent } from './020_brapci/widget/altmetrics/altmetric/altmetric.component';
import { ArticleComponent } from './020_brapci/widget/v/article/article.component';
import { JournalsComponent } from './020_brapci/page/journals/journals.component';
import { JournalViewComponent } from './020_brapci/widget/v/journal/journal.component';
import { LabelComponent } from './020_brapci/widget/label/label.component';
import { BasketSelectComponent } from './020_brapci/widget/Basket/basket-select/basket-select.component';
import { JournalIcrProducaoAnoComponent } from './020_brapci/widget/indicadores/journal-icr-producao-ano/journal-icr-producao-ano.component';
import { AuthorityComponent } from './020_brapci/page/authority/authority.component';
import { BannerAuthorityComponent } from './020_brapci/theme/banner-authority/banner-authority.component';
import { PersonRowComponent } from './020_brapci/widget/person/person.component';
import { AuthoritySearchComponent } from './020_brapci/search/authority/authority.component';
import { CounterComponent } from './020_brapci/widget/counter/counter.component';
import { TimelineComponent } from './020_brapci/page/timeline/timeline.component';
import { TimelineJournalComponent } from './020_brapci/widget/timeline-journal/timeline-journal.component';
import { AboutComponent } from './020_brapci/page/about/about.component';
import { IndexAuthorsComponent } from './020_brapci/page/index-authors/index-authors.component';
import { IndexSubjectsComponent } from './020_brapci/page/index-subjects/index-subjects.component';
import { CorporateBodyComponent } from './020_brapci/widget/v/corporate-body/corporate-body.component';
import { PersonComponent } from './020_brapci/widget/v/person/person.component';
import { ProductionWorksComponent } from './020_brapci/widget/Production/production-works/production-works.component';
import { PhotoComponent } from './020_brapci/widget/photo/photo.component';
import { CoauthorsComponent } from './020_brapci/widget/coauthors/coauthors.component';
import { CounterAnimateComponent } from './020_brapci/widget/counter-animate/counter-animate.component';
import { CounterSmoothComponent } from './020_brapci/widget/counter-smooth/counter-smooth.component';
import { GenereComponent } from './020_brapci/widget/genere/genere.component';
import { LattesComponent } from './020_brapci/widget/ID/lattes/lattes.component';
import { OpenAlexComponent } from './020_brapci/widget/ID/open-alex/open-alex.component';
import { OrcdIDComponent } from './020_brapci/widget/ID/orcd-id/orcd-id.component';
import { GoogleScholarComponent } from './020_brapci/widget/ID/google-scholar/google-scholar.component';
import { BrapciComponent } from './020_brapci/widget/ID/brapci/brapci.component';
import { BrCrisComponent } from './020_brapci/widget/ID/br-cris/br-cris.component';
import { ISNIComponent } from './020_brapci/widget/ID/isni/isni.component';
import { RORComponent } from './020_brapci/widget/ID/ror/ror.component';
import { BasketSelectedComponent } from './020_brapci/page/basket-selected/basket-selected.component';
import { BasketSelectedItemsComponent } from './020_brapci/widget/Basket/basket-selected-items/basket-selected-items.component';
import { BasketSelectedExportComponent } from './020_brapci/widget/Basket/basket-selected-export/basket-selected-export.component';
import { BrapciIDComponent } from './020_brapci/widget/ID/brapci-id/brapci-id.component';
import { VExportComponent } from './020_brapci/page/v-export/v-export.component';
import { SubjectComponent } from './020_brapci/widget/v/subject/subject.component';
import { ToolsComponent } from './930_tools/tools/tools.component';
import { Txt4netComponent } from './930_tools/tools/txt4net/txt4net.component';
import { ToolsMenuComponent } from './930_tools/tools/menu/menu.component';
import { FormFileInputComponent } from './990_forms/form/form-file-input/form-file-input.component';
import { ProcessingWorkflowComponent } from './930_tools/Processing/processing-workflow/processing-workflow.component';
import { Term4netComponent } from './930_tools/tools/term4net/term4net.component';
import { MainAuthComponent } from './001_auth/page/main-auth/main-auth.component';
import { LoginComponent } from './001_auth/widget/login/login.component';
import { Txt4matrixComponent } from './930_tools/tools/txt4matrix/txt4matrix.component';
import { BasketMarkedComponent } from './020_brapci/widget/Basket/basket-marked/basket-marked.component';
import { ReportBugComponent } from './020_brapci/widget/Bug/report-bug/report-bug.component';
import { AdminIconeIaComponent } from './020_brapci/widget/Admin/admin-icone-ia/admin-icone-ia.component';
import { AdminIconeEditComponent } from './020_brapci/widget/Admin/admin-icone-edit/admin-icone-edit.component';
import { AdminIconeDeleteComponent } from './020_brapci/widget/Admin/admin-icone-delete/admin-icone-delete.component';
import { AdminIconesComponent } from './020_brapci/widget/Admin/admin-icones/admin-icones.component';
import { NewComponent } from './020_brapci/widget/homepage/new/new.component';
import { HomeNewsComponent } from './020_brapci/widget/homepage/home-news/home-news.component';
import { HomeEventsComponent } from './020_brapci/widget/homepage/home-events/home-events.component';
import { ScreenSaverComponent } from './100_screensaver/screen-saver/screen-saver.component';
import { MainAdminMenuComponent } from './030_admin/main-admin-menu/main-admin-menu.component';
import { MainAdminRdfEditComponent } from './030_admin/main-admin-rdf-edit/main-admin-rdf-edit.component';
import { RdfHeaderComponent } from './030_admin/widget/rdf-header/rdf-header.component';
import { RdfConceptComponent } from './030_admin/widget/rdf-concept/rdf-concept.component';
import { RdfClassComponent } from './030_admin/widget/rdf-class/rdf-class.component';
import { RdfFormShowComponent } from './030_admin/widget/rdf-form-show/rdf-form-show.component';
import { RdfFormLiteralComponent } from './030_admin/widget/rdf-form-literal/rdf-form-literal.component';
import { RdfFormConceptComponent } from './030_admin/widget/rdf-form-concept/rdf-form-concept.component';
import { RdfFormImagemComponent } from './030_admin/widget/rdf-form-imagem/rdf-form-imagem.component';
import { RdfFormPdfComponent } from './030_admin/widget/rdf-form-pdf/rdf-form-pdf.component';
import { RdfFormComponent } from './030_admin/widget/rdf-form/rdf-form.component';
import { Txt4unitComponent } from './930_tools/tools/txt4unit/txt4unit.component';
import { Txt4unit2Component } from './930_tools/tools/txt4unit2/txt4unit2.component';
import { ResearchSampleComponent } from './930_tools/tools/research-sample/research-sample.component';
import { MenuRightSideComponent } from './930_tools/tools/widget/menu-right-side/menu-right-side.component';
import { ResearchPriceComponent } from './930_tools/tools/research-price/research-price.component';
import { ResearchLotkaComponent } from './930_tools/tools/research-lotka/research-lotka.component';
import { ResearchBradfordComponent } from './930_tools/tools/research-bradford/research-bradford.component';
import { SearchIndexComponent } from './020_brapci/search/search-index/search-index.component';
import { BugModalComponent } from './920_bugs/modal/bug-modal/bug-modal.component';
import { ViewCanceledComponent } from './020_brapci/widget/v/view-canceled/view-canceled.component';
import { FulltextComponent } from './020_brapci/widget/fulltext/fulltext.component';
import { SearchBooleanComponent } from './020_brapci/search/search-boolean/search-boolean.component';
import { WordCloudComponent } from './020_brapci/widget/word-cloud/word-cloud.component';
import { MonitorComponent } from './930_tools/Pages/monitor/monitor.component';
import { ResumeComponent } from './020_brapci/widget/resume/resume.component';
import { BannerFeiscComponent } from './020_brapci/theme/banner-feisc/banner-feisc.component';
import { BannerSitiComponent } from './020_brapci/theme/banner-siti/banner-siti.component';
import { BookSubmitComponent } from './020_brapci/page/book-submit/book-submit.component';
import { UploadFileComponent } from './020_brapci/widget/upload-file/upload-file.component';
import { HomeEdiatisComponent } from './040_editais/page/home/home.component';
import { EditaisOpenComponent } from './040_editais/widget/editais-open/editais-open.component';
import { EditaisMenuComponent } from './040_editais/widget/editais-menu/editais-menu.component';
import { HomePqComponent } from './050_pq/page/home-pq/home-pq.component';
import { PqPerfilComponent } from './050_pq/widget/pq-perfil/pq-perfil.component';
import { PqMenuComponent } from './050_pq/widget/pq-menu/pq-menu.component';
import { PainelComponent } from './020_brapci/widget/Panel/painel/painel.component';
import { BarGraphoComponent } from './020_brapci/widget/grapho/bar-grapho/bar-grapho.component';
import { HalfliveComponent } from './930_tools/tools/halflive/halflive.component';
import { Error410Component } from './020_brapci/page/error410/error410.component';
import { ContactComponent } from './020_brapci/page/contact/contact.component';
import { FileStorageComponent } from './020_brapci/widget/v/file-storage/file-storage.component';
import { DateComponent } from './020_brapci/widget/v/date/date.component';
import { TableShowComponent } from './020_brapci/widget/table/table-show/table-show.component';
import { ChatbootComponent } from './060_chatbot/page/chatboot/chatboot.component';
import { ChatPromptComponent } from './060_chatbot/widget/chat-prompt/chat-prompt.component';
import { BookDisclaimerComponent } from './020_brapci/page/book-disclaimer/book-disclaimer.component';
import { LoadingSpinnerComponent } from './020_brapci/widget/loading/loading-spinner/loading-spinner.component';
import { UploadFileRdfComponent } from './020_brapci/widget/upload-file-rdf/upload-file-rdf.component';
import { DoiShowComponent } from './020_brapci/widget/doi-show/doi-show.component';
import { GeneratePaswordComponent } from './930_tools/Pages/generate-pasword/generate-pasword.component';
import { BookBtnSubmitComponent } from './020_brapci/button/book-submit/book-submit.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { FacePhotoComponent } from './020_brapci/widget/v/face-photo/face-photo.component';
import { BookChapterMiniComponent } from './020_brapci/widget/v/book-chapter-mini/book-chapter-mini.component';
import { BookChapterComponent } from './020_brapci/widget/v/book-chapter/book-chapter.component';
import { BookSummaryComponent } from './020_brapci/widget/v/book-summary/book-summary.component';
import { BookCatalogComponent } from './020_brapci/page/book-catalog/book-catalog.component';
import { BookCatalogIndexComponent } from './020_brapci/widget/v/book-catalog/book-catalog.component';
import { MarkdownComponent } from './020_brapci/widget/markdown/markdown.component';
import { MainAdminVComponent } from './030_admin/main-admin-v/main-admin-v.component';

@NgModule({
  declarations: [
    AppComponent,
    VComponent,
    Error404Component,
    HomeComponent,
    ProceedingsComponent,
    EnancibComponent,
    EbbcComponent,
    FeiscComponent,
    IskobrComponent,
    GeralComponent,
    BenancibComponent,
    EditComponent,
    DeleteComponent,
    IaComponent,
    TabsNavComponent,
    ActionsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginIconeComponent,
    SocialPerfilComponent,
    SocialMainComponent,
    PdfComponent,
    LoveitComponent,
    HomeBenancibComponent,
    IssueProcceedingsComponent,
    IssueViewComponent,
    BannersComponent,
    MainProcceedingsComponent,
    ProcceedingsIDComponent,
    BannerEbbcComponent,
    BannerIskobrComponent,
    BannerWidatComponent,
    BreadcrumbsComponent,
    CitationNoteComponent,
    InstagramComponent,
    LivrosComponent,
    BannerLivrosComponent,
    VitrineLivrosClassesComponent,
    BookComponent,
    SubjectsComponent,
    BenancibSearchComponent,
    BrapciSearchComponent,
    ItemShowRowComponent,
    ManutenceComponent,
    PlumxComponent,
    AltmetricComponent,
    ArticleComponent,
    JournalViewComponent,
    JournalsComponent,
    LabelComponent,
    BasketSelectComponent,
    JournalIcrProducaoAnoComponent,
    AuthorityComponent,
    BannerAuthorityComponent,
    PersonRowComponent,
    AuthoritySearchComponent,
    CounterComponent,
    TimelineComponent,
    TimelineJournalComponent,
    AboutComponent,
    IndexAuthorsComponent,
    IndexSubjectsComponent,
    CorporateBodyComponent,
    PersonComponent,
    ProductionWorksComponent,
    PhotoComponent,
    CoauthorsComponent,
    CounterAnimateComponent,
    CounterSmoothComponent,
    GenereComponent,
    LattesComponent,
    OpenAlexComponent,
    OrcdIDComponent,
    GoogleScholarComponent,
    BrapciComponent,
    BrCrisComponent,
    ISNIComponent,
    RORComponent,
    BasketSelectedComponent,
    BasketSelectedItemsComponent,
    BasketSelectedExportComponent,
    BrapciIDComponent,
    VExportComponent,
    SubjectComponent,
    ToolsComponent,
    Txt4netComponent,
    ToolsMenuComponent,
    FormFileInputComponent,
    ProcessingWorkflowComponent,
    Term4netComponent,
    MainAuthComponent,
    LoginComponent,
    Txt4matrixComponent,
    BasketMarkedComponent,
    ReportBugComponent,
    AdminIconeIaComponent,
    AdminIconeEditComponent,
    AdminIconeDeleteComponent,
    AdminIconesComponent,
    NewComponent,
    HomeNewsComponent,
    HomeEventsComponent,
    ScreenSaverComponent,
    MainAdminMenuComponent,
    MainAdminRdfEditComponent,
    RdfHeaderComponent,
    RdfConceptComponent,
    RdfClassComponent,
    RdfFormShowComponent,
    RdfFormLiteralComponent,
    RdfFormConceptComponent,
    RdfFormImagemComponent,
    RdfFormPdfComponent,
    RdfFormComponent,
    Txt4unitComponent,
    Txt4unit2Component,
    ResearchSampleComponent,
    MenuRightSideComponent,
    ResearchPriceComponent,
    ResearchLotkaComponent,
    ResearchBradfordComponent,
    SearchIndexComponent,
    BugModalComponent,
    ViewCanceledComponent,
    FulltextComponent,
    SearchBooleanComponent,
    WordCloudComponent,
    ResumeComponent,
    MonitorComponent,
    BannerFeiscComponent,
    BannerSitiComponent,
    BookSubmitComponent,
    UploadFileComponent,
    HomeEdiatisComponent,
    EditaisOpenComponent,
    EditaisMenuComponent,
    HomePqComponent,
    PqPerfilComponent,
    PqMenuComponent,
    PainelComponent,
    BarGraphoComponent,
    HalfliveComponent,
    Error410Component,
    ContactComponent,
    FileStorageComponent,
    DateComponent,
    TableShowComponent,
    ChatbootComponent,
    ChatPromptComponent,
    BookDisclaimerComponent,
    LoadingSpinnerComponent,
    UploadFileRdfComponent,
    DoiShowComponent,
    GeneratePaswordComponent,
    BookBtnSubmitComponent,
    SafeHtmlPipe,
    FacePhotoComponent,
    BookChapterMiniComponent,
    BookChapterComponent,
    BookSummaryComponent,
    BookCatalogComponent,
    BookCatalogIndexComponent,
    MarkdownComponent,
    MainAdminVComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
