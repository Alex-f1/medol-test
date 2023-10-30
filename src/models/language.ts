export interface SwitchLanguage {
  switchLanguage: {
    currentName: string;
    currentIcon: string;
    switchLanguageAnother: LanguageAnother[];
  }
}

interface LanguageAnother {
  name: string;
  icon: string;
}