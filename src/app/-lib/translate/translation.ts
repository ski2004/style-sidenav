// import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_TRANS } from './lang/lang-en';
import { LANG_ES_TRANS } from './lang/lang-es';
import { LANG_ZH_TRANS } from './lang/lang-zh';
import { LANG_CN_TRANS } from './lang/lang-cn';
import { InjectionToken } from '@angular/core';

// translation token
// export const TRANSLATIONS = new OpaqueToken('translations');
export const TRANSLATIONS = new InjectionToken<string>('translations');

// all translations
const dictionary = {
    'en': LANG_EN_TRANS,
    'es': LANG_ES_TRANS,
    'zh': LANG_ZH_TRANS,
    'cn': LANG_CN_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
