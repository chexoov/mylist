import { install } from "element-plus";
import posthog from "posthog-js";

export default {
    install(app) {
        app.config.globalProperties.$posthog = posthog.init (
            "",
            {
                api_host: "https://app.posthog.com",
            }
        )
    }
}