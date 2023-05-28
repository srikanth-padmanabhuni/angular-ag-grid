import { Component, Inject } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-lingual-date-picker';

  lang = 'en';

  constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) {}

  toggleLanguages() {
    if(this.lang == 'en') {
      this.lang = 'fr';
      this._locale = 'fr';
      this._adapter.setLocale(this._locale);
    } else {
      this.lang = 'en';
      this._locale = 'en';
      this._adapter.setLocale(this._locale);
    }
  }


}
