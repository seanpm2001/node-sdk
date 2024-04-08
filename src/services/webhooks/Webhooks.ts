import BaseService from '../../BaseService';

import { WebhooksListResponse } from './models/WebhooksListResponse';
import { WebhooksAddResponse } from './models/WebhooksAddResponse';
import { WebhooksAddRequest } from './models/WebhooksAddRequest';
import { WebhooksGetResponse } from './models/WebhooksGetResponse';
import { WebhooksUpdateResponse } from './models/WebhooksUpdateResponse';
import { WebhooksDeleteResponse } from './models/WebhooksDeleteResponse';
import { WebhooksUpdateRequest } from './models/WebhooksUpdateRequest';
import { EnableResponse } from './models/EnableResponse';
import { DisableResponse } from './models/DisableResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class WebhooksService extends BaseService {
  /**
   * @summary List
   * @description Webhooks

   * @param optionalParams - Optional parameters
   * @param optionalParams.project - The project's name
   * @returns {Promise<WebhooksListResponse>} - The promise with the result
   */
  async list(optionalParams: { project?: string } = {}): Promise<WebhooksListResponse> {
    const { project } = optionalParams;

    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    const urlEndpoint = '/v3/webhooks';
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
    const responseModel = response.data as WebhooksListResponse;
    return responseModel;
  }

  /**
   * @summary Add
   * @description Webhook

   * @param optionalParams - Optional parameters
   * @param optionalParams.project - The project's name
   * @returns {Promise<WebhooksAddResponse>} - The promise with the result
   */
  async add(
    input: WebhooksAddRequest,
    optionalParams: { project?: string } = {},
  ): Promise<WebhooksAddResponse> {
    const { project } = optionalParams;

    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    const urlEndpoint = '/v3/webhooks';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as WebhooksAddResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Webhook

   * @param slug Webhook's slug
   * @param optionalParams - Optional parameters
   * @param optionalParams.project - The project's name
   * @returns {Promise<WebhooksGetResponse>} - The promise with the result
   */
  async get(slug: string, optionalParams: { project?: string } = {}): Promise<WebhooksGetResponse> {
    const { project } = optionalParams;
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/v3/webhooks/webhook/{slug}';
    urlEndpoint = urlEndpoint.replace('{slug}', serializePath('simple', false, slug, undefined));
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
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
    const responseModel = response.data as WebhooksGetResponse;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Webhook

   * @param slug Webhook's slug
   * @param optionalParams - Optional parameters
   * @param optionalParams.project - The project's name
   * @returns {Promise<WebhooksUpdateResponse>} - The promise with the result
   */
  async update(
    input: WebhooksUpdateRequest,
    slug: string,
    optionalParams: { project?: string } = {},
  ): Promise<WebhooksUpdateResponse> {
    const { project } = optionalParams;
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    let urlEndpoint = '/v3/webhooks/webhook/{slug}';
    urlEndpoint = urlEndpoint.replace('{slug}', serializePath('simple', false, slug, undefined));
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.patch(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as WebhooksUpdateResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Webhook

   * @param slug Webhook's slug
   * @param optionalParams - Optional parameters
   * @param optionalParams.project - The project's name
   * @returns {Promise<WebhooksDeleteResponse>} - The promise with the result
   */
  async delete(
    slug: string,
    optionalParams: { project?: string } = {},
  ): Promise<WebhooksDeleteResponse> {
    const { project } = optionalParams;
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    let urlEndpoint = '/v3/webhooks/webhook/{slug}';
    urlEndpoint = urlEndpoint.replace('{slug}', serializePath('simple', false, slug, undefined));
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      { project },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as WebhooksDeleteResponse;
    return responseModel;
  }

  /**
   * @summary Enable
   * @description Webhook

   * @param slug Webhook's slug
   * @param optionalParams - Optional parameters
   * @param optionalParams.project - The project's name
   * @returns {Promise<EnableResponse>} - The promise with the result
   */
  async enable(slug: string, optionalParams: { project?: string } = {}): Promise<EnableResponse> {
    const { project } = optionalParams;
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    let urlEndpoint = '/v3/webhooks/webhook/{slug}/enable';
    urlEndpoint = urlEndpoint.replace('{slug}', serializePath('simple', false, slug, undefined));
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      { project },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as EnableResponse;
    return responseModel;
  }

  /**
   * @summary Disable
   * @description Webhook

   * @param slug Webhook's slug
   * @param optionalParams - Optional parameters
   * @param optionalParams.project - The project's name
   * @returns {Promise<DisableResponse>} - The promise with the result
   */
  async disable(slug: string, optionalParams: { project?: string } = {}): Promise<DisableResponse> {
    const { project } = optionalParams;
    if (slug === undefined) {
      throw new Error('The following parameter is required: slug, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    let urlEndpoint = '/v3/webhooks/webhook/{slug}/disable';
    urlEndpoint = urlEndpoint.replace('{slug}', serializePath('simple', false, slug, undefined));
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      { project },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as DisableResponse;
    return responseModel;
  }
}
