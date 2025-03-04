interface I18nRetriever {
    retrieveLocale(): string | undefined;
    isAutoLocale(): boolean;
}

class I18nBrowserRetriever implements I18nRetriever {
    // TODO: make a list of allowed locaes in the constructor so the browser locale can be checked against it
    retrieveLocale(): string | undefined {
        const locale = navigator.language;
        return locale;
    }

    isAutoLocale(): boolean {
        return true;
    }
}

class I18nLocalPreferencesRetriever implements I18nRetriever {
    constructor(private _key_locale: string) {}

    retrieveLocale(): string | undefined {
        const locale = localStorage.getItem(this._key_locale) || undefined;
        return locale;
    }

    isAutoLocale(): boolean {
        return false;
    }
}

export default I18nRetriever;
export { I18nBrowserRetriever, I18nLocalPreferencesRetriever };
