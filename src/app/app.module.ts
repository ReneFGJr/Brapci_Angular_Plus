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
import { BasketSelectComponent } from './020_brapci/widget/basket-select/basket-select.component';
import { JournalIcrProducaoAnoComponent } from './020_brapci/widget/indicadores/journal-icr-producao-ano/journal-icr-producao-ano.component';
import { AuthorityComponent } from './020_brapci/page/authority/authority.component';
import { BannerAuthorityComponent } from './020_brapci/theme/banner-authority/banner-authority.component';
import { PersonRowComponent } from './020_brapci/widget/person/person.component';
import { AuthoritySearchComponent } from './020_brapci/search/authority/authority.component';
import { CounterComponent } from './020_brapci/widget/counter/counter.component';

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
