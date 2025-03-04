import {
    I18nController,
    LocaleData,
    Repository,
    I18nRetriever,
    I18nSaver,
} from '../src';

class MockRetriever implements I18nRetriever {
    constructor(private _locale?: string) {}

    retrieveLocale(): string | undefined {
        return this._locale;
    }

    isAutoLocale(): boolean {
        return true;
    }
}

class MockSaver implements I18nSaver {
    private _saved_locale?: string;

    saveLocale(locale: string): void {
        this._saved_locale = locale;
    }

    get savedLocale(): string | undefined {
        return this._saved_locale;
    }
}

describe('I18nController', () => {
    let i18n_controller: I18nController;
    let i18n_repository: Repository<LocaleData>;

    beforeEach(() => {
        i18n_repository = new Repository<LocaleData>();
        i18n_controller = new I18nController(
            i18n_repository,
            undefined,
            [new MockRetriever(undefined), new MockRetriever('nl-NL')],
            new MockSaver(),
        );
    });

    it('Setting selected locale', () => {
        i18n_controller.selectedLocale = 'en';
        expect(i18n_controller.selectedLocale).toBe('en');
    });

    it('Retrieving locale automatically', () => {
        i18n_controller.retrieveLocaleAutomatically();
        expect(i18n_controller.selectedLocale).toBe('nl-NL');
        expect(i18n_controller.isAutoLocale).toBeTruthy();
    });

    it('Setting auto locale', () => {
        i18n_controller.isAutoLocale = false;
        expect(i18n_controller.isAutoLocale).toBe(false);
    });

    it('Setting auto locale to true', () => {
        i18n_controller.isAutoLocale = true;
        expect(i18n_controller.isAutoLocale).toBe(true);
    });
});
