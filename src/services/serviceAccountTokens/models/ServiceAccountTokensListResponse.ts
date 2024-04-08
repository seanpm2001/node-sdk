export interface ServiceAccountTokensListResponse {
  api_tokens?: {
    name?: string;
    slug?: string;
    created_at?: string;
    last_seen_at?: string;
    expires_at?: string;
  }[];
  success?: boolean;
}
