import React, { useEffect } from 'react';
import { SplitFactory } from '@splitsoftware/splitio';

const splitFactory = SplitFactory({
  core: {
    authorizationKey: 'era8dq68kd1pt2eke3eo4g6h8t45eqqfnski',
    key: 'my-key',
  },
  startup: {
    readyTimeout: 1.5,
  },
});

const splitClient = splitFactory.client();

export default function App() {
  useEffect(() => {
    splitClient.on(splitClient.Event.SDK_READY, () => {
      const quoteConsentTreatment = splitClient.getTreatment(
        'trellisWidgetQuoteConsent',
      );
      console.log(quoteConsentTreatment);

      if (quoteConsentTreatment === 'on') {
      } else if (quoteConsentTreatment === 'off') {
        // insert code here to show off treatment
      } else {
        // insert your control treatment code here
      }
    });
  }, []);
  return <div>Hello World</div>;
}
