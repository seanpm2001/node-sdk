import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { RetrieveService } from '../../../src/services/retrieve/Retrieve';

describe('test RetrieveService object', () => {
  it('should be an object', () => {
    expect(typeof RetrieveService).toBe('function');
  });
});

describe('test Retrieve', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test member', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/minima/members/exercitationem/hic')
        .reply(200, { data: {} });
      return sdk.retrieve
        .member('minima', 'exercitationem', 'hic')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/consectetur/members/adipisci/natus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.retrieve.member()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/quasi/members/numquam/distinctio')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.retrieve.member('quasi', 'numquam', 'distinctio'),
      ).rejects.toThrow();
    });
  });
});
