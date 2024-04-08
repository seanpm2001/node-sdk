import BaseService from '../../BaseService';

import { OptionsResponse } from './models/OptionsResponse';

import { serializeQuery } from '../../http/QuerySerializer';

export class GetService extends BaseService {
  /**
   * @summary Get Options

   * @param integration The integration slug
   * @returns {Promise<OptionsResponse>} - The promise with the result
   */
  async options(integration: string): Promise<OptionsResponse> {
    if (integration === undefined) {
      throw new Error('The following parameter is required: integration, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (integration) {
      queryParams.push(serializeQuery('form', true, 'integration', integration));
    }
    const urlEndpoint = '/v3/integrations/integration/options';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as OptionsResponse;
    return responseModel;
  }
}
