/**
 * An option indicating if and how Doppler should attempt to import secrets from the sync destination
 */
type ImportOption = 'none' | 'prefer_doppler' | 'prefer_integration';

export interface SyncsCreateRequest {
  /**
   * The integration slug which the sync will use
   */
  integration: string;
  data: Data;
  import_option?: ImportOption;
  /**
   * Causes sync creation to wait for the initial sync to complete before returning.
   */
  await_initial_sync?: boolean;
}
/**
 * Configuration data for the sync
 */
interface Data {}
