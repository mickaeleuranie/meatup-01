export class ENV {

    // environment will be setted from command line ./start [environment]
    // and added just after the following line
    // {{ENV}}
public static currentEnvironment: string = "development"; // {{ENV_REMOVE}}
    // public static currentEnvironment: string = "test";
    // public static currentEnvironment: string = "development";
    // public static currentEnvironment: string = "preproduction";
    // public static currentEnvironment: string = "production";

    /**
     * DEVELOPMENT
     */
    public static development: any = {
        API_BASE_URL: "PATH_DEV",
        API_VERSION: "1",
        API_KEY: "API_KEY_DEV",
    };

    /**
     * TEST
     */
    public static test: any = {
        API_BASE_URL: "API_PATH_TEST",
        API_VERSION: "1",
        API_KEY: "API_KEY_TEST",
    };

    /**
     * PREPRODUCTION
     */
    public static preproduction: any = {
        API_BASE_URL: "API_PATH_PREPROD",
        API_VERSION: "1",
        API_KEY: "API_KEY_PREPROD",
    };

    /**
     * PRODUCTION
     */
    public static production: any = {
        API_BASE_URL: "API_PATH_PROD",
        API_VERSION: "1",
        API_KEY: "API_KEY_PROD",
    };
}
