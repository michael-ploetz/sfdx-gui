<script>
  import DevHubPage from './types/DevHubPage.svelte';
  import SandboxPage from './types/SandboxPage.svelte';
  import ScratchOrgPage from './types/ScratchOrgPage.svelte';

  import { allOrgs } from '../../client/stores/orgs';

  export let orgId;

  $: org = $allOrgs.find((org) => org.orgId === orgId);
</script>

{#if org.isDevHub}
  lol
  <DevHubPage {orgId} />
{:else if org.isSandbox}
  lol2

  <SandboxPage {orgId} />
{:else if org.isScratchOrg}
  lol3

  <ScratchOrgPage {orgId} />
{/if}
