export interface ISwitchLanguage {
  switchLanguage: {
    currentName: string;
    currentIcon: string;
    switchLanguageAnother: ILanguageAnother[];
  }
}

interface ILanguageAnother {
  name: string;
  icon: string;
}