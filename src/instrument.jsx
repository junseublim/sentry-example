import { useEffect } from "react";
import * as Sentry from "@sentry/react";
import router from './router.jsx'

Sentry.init({
  dsn: "https://35c030ae2ed74a17865c832e9b019b3c@o912826.ingest.us.sentry.io/4505362630311936",

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
