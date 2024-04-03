import { DopplerSDK } from '@dopplerhq/node-sdk';

const DOPPLERSDK_ACCESS_TOKEN = '';
const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  try {
    const result = await sdk.projects.list();
    console.log(result);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
})();
