import BaseService from '../../BaseService';

import { ServiceAccountTokensListResponse } from './models/ServiceAccountTokensListResponse';
import { ServiceAccountTokensCreateResponse } from './models/ServiceAccountTokensCreateResponse';
import { ServiceAccountTokensCreateRequest } from './models/ServiceAccountTokensCreateRequest';
import { ServiceAccountTokensGetResponse } from './models/ServiceAccountTokensGetResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class ServiceAccountTokensService extends BaseService {
  /**
   * @summary List
   * @description List information about existing service account API tokens.

   * @param serviceAccount Slug of the service account
   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Needed input variable
   * @param optionalParams.perPage - Needed input variable
   * @returns {Promise<ServiceAccountTokensListResponse>} - The promise with the result
   */
  async list(
    serviceAccount: string,
    optionalParams: { page?: number; perPage?: number } = {},
  ): Promise<ServiceAccountTokensListResponse> {
    const { page, perPage } = optionalParams;
    if (serviceAccount === undefined) {
      throw new Error(
        'The following parameter is required: serviceAccount, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (perPage) {
      queryParams.push(serializeQuery('form', true, 'per_page', perPage));
    }
    let urlEndpoint = '/v3/workplace/service_accounts/service_account/{service_account}/tokens';
    urlEndpoint = urlEndpoint.replace(
      '{service_account}',
      serializePath('simple', false, serviceAccount, undefined),
    );
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ServiceAccountTokensListResponse;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Generate a new service account API token.

   * @param serviceAccount Slug of the service account
   * @returns {Promise<ServiceAccountTokensCreateResponse>} - The promise with the result
   */
  async create(
    input: ServiceAccountTokensCreateRequest,
    serviceAccount: string,
  ): Promise<ServiceAccountTokensCreateResponse> {
    if (serviceAccount === undefined) {
      throw new Error(
        'The following parameter is required: serviceAccount, cannot be empty or blank',
      );
    }
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    let urlEndpoint = '/v3/workplace/service_accounts/service_account/{service_account}/tokens';
    urlEndpoint = urlEndpoint.replace(
      '{service_account}',
      serializePath('simple', false, serviceAccount, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ServiceAccountTokensCreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Retrieve information about a single service account API token.

   * @param serviceAccount Slug of the service account
   * @param apiToken Slug of the API token
   * @returns {Promise<ServiceAccountTokensGetResponse>} - The promise with the result
   */
  async get(serviceAccount: string, apiToken: string): Promise<ServiceAccountTokensGetResponse> {
    if (serviceAccount === undefined || apiToken === undefined) {
      throw new Error(
        'The following are required parameters: serviceAccount,apiToken, cannot be empty or blank',
      );
    }
    let urlEndpoint =
      '/v3/workplace/service_accounts/service_account/{service_account}/tokens/token/{api_token}';
    urlEndpoint = urlEndpoint.replace(
      '{service_account}',
      serializePath('simple', false, serviceAccount, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{api_token}',
      serializePath('simple', false, apiToken, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ServiceAccountTokensGetResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Revoke an existing service account API token.

   * @param serviceAccount Slug of the service account
   * @param apiToken Slug of the API token
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(serviceAccount: string, apiToken: string): Promise<any> {
    if (serviceAccount === undefined || apiToken === undefined) {
      throw new Error(
        'The following are required parameters: serviceAccount,apiToken, cannot be empty or blank',
      );
    }
    let urlEndpoint =
      '/v3/workplace/service_accounts/service_account/{service_account}/tokens/token/{api_token}';
    urlEndpoint = urlEndpoint.replace(
      '{service_account}',
      serializePath('simple', false, serviceAccount, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{api_token}',
      serializePath('simple', false, apiToken, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }
}
