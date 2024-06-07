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
        .get('/v3/workplace/groups/group/nemo/members/harum/tenetur')
        .reply(200, { data: {} });
      return sdk.retrieve
        .member('nemo', 'harum', 'tenetur')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/dolores/members/repudiandae/atque')
        .reply(200, { data: {} });
      return expect(async () => await sdk.retrieve.member()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/quidem/members/doloremque/provident')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.retrieve.member('quidem', 'doloremque', 'provident'),
      ).rejects.toThrow();
    });
  });
});
