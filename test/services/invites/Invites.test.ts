import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { InvitesService } from '../../../src/services/invites/Invites';

describe('test InvitesService object', () => {
  it('should be an object', () => {
    expect(typeof InvitesService).toBe('function');
  });
});

describe('test Invites', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/invites?page=4&per_page=7')
        .reply(200, { data: {} });
      return sdk.invites.list({ page: 4, perPage: 7 }).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
