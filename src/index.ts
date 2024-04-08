import { ActivityLogsService } from './services/activityLogs/ActivityLogs';
import { AuditService } from './services/audit/Audit';
import { AuthService } from './services/auth/Auth';
import { ConfigLogsService } from './services/configLogs/ConfigLogs';
import { ConfigsService } from './services/configs/Configs';
import { DynamicSecretsService } from './services/dynamicSecrets/DynamicSecrets';
import { EnvironmentsService } from './services/environments/Environments';
import { GetService } from './services/get/Get';
import { GroupsService } from './services/groups/Groups';
import { IntegrationsService } from './services/integrations/Integrations';
import { InvitesService } from './services/invites/Invites';
import { ProjectMembersService } from './services/projectMembers/ProjectMembers';
import { ProjectRolesService } from './services/projectRoles/ProjectRoles';
import { ProjectsService } from './services/projects/Projects';
import { RetrieveService } from './services/retrieve/Retrieve';
import { SecretsService } from './services/secrets/Secrets';
import { ServiceAccountTokensService } from './services/serviceAccountTokens/ServiceAccountTokens';
import { ServiceAccountsService } from './services/serviceAccounts/ServiceAccounts';
import { ServiceTokensService } from './services/serviceTokens/ServiceTokens';
import { SyncsService } from './services/syncs/Syncs';
import { UsersService } from './services/users/Users';
import { WebhooksService } from './services/webhooks/Webhooks';
import { WorkplaceService } from './services/workplace/Workplace';
import { WorkplaceRolesService } from './services/workplaceRoles/WorkplaceRoles';

export * from './models';

export * as ActivityLogsModels from './services/activityLogs';
export * as AuditModels from './services/audit';
export * as AuthModels from './services/auth';
export * as ConfigLogsModels from './services/configLogs';
export * as ConfigsModels from './services/configs';
export * as DynamicSecretsModels from './services/dynamicSecrets';
export * as EnvironmentsModels from './services/environments';
export * as GetModels from './services/get';
export * as GroupsModels from './services/groups';
export * as IntegrationsModels from './services/integrations';
export * as InvitesModels from './services/invites';
export * as ProjectMembersModels from './services/projectMembers';
export * as ProjectRolesModels from './services/projectRoles';
export * as ProjectsModels from './services/projects';
export * as RetrieveModels from './services/retrieve';
export * as SecretsModels from './services/secrets';
export * as ServiceAccountTokensModels from './services/serviceAccountTokens';
export * as ServiceAccountsModels from './services/serviceAccounts';
export * as ServiceTokensModels from './services/serviceTokens';
export * as SyncsModels from './services/syncs';
export * as UsersModels from './services/users';
export * as WebhooksModels from './services/webhooks';
export * as WorkplaceModels from './services/workplace';
export * as WorkplaceRolesModels from './services/workplaceRoles';

type Config = {
  accessToken?: string;
};

export * from './http/errors';

export class DopplerSDK {
  public activityLogs: ActivityLogsService;
  public audit: AuditService;
  public auth: AuthService;
  public configLogs: ConfigLogsService;
  public configs: ConfigsService;
  public dynamicSecrets: DynamicSecretsService;
  public environments: EnvironmentsService;
  public get: GetService;
  public groups: GroupsService;
  public integrations: IntegrationsService;
  public invites: InvitesService;
  public projectMembers: ProjectMembersService;
  public projectRoles: ProjectRolesService;
  public projects: ProjectsService;
  public retrieve: RetrieveService;
  public secrets: SecretsService;
  public serviceAccountTokens: ServiceAccountTokensService;
  public serviceAccounts: ServiceAccountsService;
  public serviceTokens: ServiceTokensService;
  public syncs: SyncsService;
  public users: UsersService;
  public webhooks: WebhooksService;
  public workplace: WorkplaceService;
  public workplaceRoles: WorkplaceRolesService;

  constructor({ accessToken = '' }: Config) {
    this.activityLogs = new ActivityLogsService(accessToken);
    this.audit = new AuditService(accessToken);
    this.auth = new AuthService(accessToken);
    this.configLogs = new ConfigLogsService(accessToken);
    this.configs = new ConfigsService(accessToken);
    this.dynamicSecrets = new DynamicSecretsService(accessToken);
    this.environments = new EnvironmentsService(accessToken);
    this.get = new GetService(accessToken);
    this.groups = new GroupsService(accessToken);
    this.integrations = new IntegrationsService(accessToken);
    this.invites = new InvitesService(accessToken);
    this.projectMembers = new ProjectMembersService(accessToken);
    this.projectRoles = new ProjectRolesService(accessToken);
    this.projects = new ProjectsService(accessToken);
    this.retrieve = new RetrieveService(accessToken);
    this.secrets = new SecretsService(accessToken);
    this.serviceAccountTokens = new ServiceAccountTokensService(accessToken);
    this.serviceAccounts = new ServiceAccountsService(accessToken);
    this.serviceTokens = new ServiceTokensService(accessToken);
    this.syncs = new SyncsService(accessToken);
    this.users = new UsersService(accessToken);
    this.webhooks = new WebhooksService(accessToken);
    this.workplace = new WorkplaceService(accessToken);
    this.workplaceRoles = new WorkplaceRolesService(accessToken);
  }

  /**
   * Sets the baseUrl that the SDK will use for its requests.
   * @param {string} url
   */
  setBaseUrl(url: string): void {
    this.activityLogs.setBaseUrl(url);
    this.audit.setBaseUrl(url);
    this.auth.setBaseUrl(url);
    this.configLogs.setBaseUrl(url);
    this.configs.setBaseUrl(url);
    this.dynamicSecrets.setBaseUrl(url);
    this.environments.setBaseUrl(url);
    this.get.setBaseUrl(url);
    this.groups.setBaseUrl(url);
    this.integrations.setBaseUrl(url);
    this.invites.setBaseUrl(url);
    this.projectMembers.setBaseUrl(url);
    this.projectRoles.setBaseUrl(url);
    this.projects.setBaseUrl(url);
    this.retrieve.setBaseUrl(url);
    this.secrets.setBaseUrl(url);
    this.serviceAccountTokens.setBaseUrl(url);
    this.serviceAccounts.setBaseUrl(url);
    this.serviceTokens.setBaseUrl(url);
    this.syncs.setBaseUrl(url);
    this.users.setBaseUrl(url);
    this.webhooks.setBaseUrl(url);
    this.workplace.setBaseUrl(url);
    this.workplaceRoles.setBaseUrl(url);
  }

  /**
   * Sets the access token used to authenticate.
   * @param {string} accessToken
   */
  setAccessToken(accessToken: string) {
    this.activityLogs.setAccessToken(accessToken);
    this.audit.setAccessToken(accessToken);
    this.auth.setAccessToken(accessToken);
    this.configLogs.setAccessToken(accessToken);
    this.configs.setAccessToken(accessToken);
    this.dynamicSecrets.setAccessToken(accessToken);
    this.environments.setAccessToken(accessToken);
    this.get.setAccessToken(accessToken);
    this.groups.setAccessToken(accessToken);
    this.integrations.setAccessToken(accessToken);
    this.invites.setAccessToken(accessToken);
    this.projectMembers.setAccessToken(accessToken);
    this.projectRoles.setAccessToken(accessToken);
    this.projects.setAccessToken(accessToken);
    this.retrieve.setAccessToken(accessToken);
    this.secrets.setAccessToken(accessToken);
    this.serviceAccountTokens.setAccessToken(accessToken);
    this.serviceAccounts.setAccessToken(accessToken);
    this.serviceTokens.setAccessToken(accessToken);
    this.syncs.setAccessToken(accessToken);
    this.users.setAccessToken(accessToken);
    this.webhooks.setAccessToken(accessToken);
    this.workplace.setAccessToken(accessToken);
    this.workplaceRoles.setAccessToken(accessToken);
  }
}

export default DopplerSDK;

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
