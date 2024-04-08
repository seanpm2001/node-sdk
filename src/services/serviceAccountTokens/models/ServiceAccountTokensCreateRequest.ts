export interface ServiceAccountTokensCreateRequest {
  /**
   * The display name of the API token
   */
  name?: string;
  /**
   * The datetime at which the API token should expire. If not provided, the API token will remain vaild indefinitely unless manually revoked
   */
  expires_at?: string;
}
