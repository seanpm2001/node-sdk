export interface ServiceAccountTokensGetResponse {
  api_token?: ApiToken;
  success?: boolean;
}
interface ApiToken {
  name?: string;
  slug?: string;
  created_at?: string;
  last_seen_at?: string;
  expires_at?: string;
}
