import * as Sentry from "@sentry/react";
import router from './router.jsx'

Sentry.init({
  dsn: "https://5ada0b0ea573ab71dac28aadef66636e@o912826.ingest.us.sentry.io/4507866214236160",

  integrations: [
    Sentry.tanstackRouterBrowserTracingIntegration(router),

    // See docs for support of different versions of variation of react router
    // https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
    Sentry.replayIntegration(),

  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
  tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
