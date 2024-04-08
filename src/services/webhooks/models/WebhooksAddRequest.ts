type Type_ = 'None' | 'Bearer' | 'Basic';

export interface WebhooksAddRequest {
  /**
   * The webhook URL. Must be https
   */
  url: string;
  /**
   * See: https://docs.doppler.com/docs/webhooks#verify-webhook-with-request-signing
   */
  secret?: string;
  authentication?: Authentication;
  /**
   * See: https://docs.doppler.com/docs/webhooks#default-payload
   */
  payload?: string;
  /**
   * Config slugs that the webhook should be enabled for
   */
  enableConfigs?: string[];
}
interface Authentication {
  /**
   * Used when type = Bearer
   */
  token?: string;
  /**
   * Used when type = Basic
   */
  username?: string;
  /**
   * Used when type = Basic
   */
  password?: string;
  type_?: Type_;
}
