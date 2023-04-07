<script>
  import DevHubPage from './devhub/DevHubPage.svelte';
  import SandboxPage from './sandbox/SandboxPage.svelte';
  import ScratchOrgPage from './scratchorg/ScratchOrgPage.svelte';

  import { allOrgs } from '../../stores/orgs';

  export let orgId;

  $: org = $allOrgs.find((org) => org.orgId === orgId);
</script>

{#if org.isDevHub}
  <DevHubPage {orgId} />
{:else if org.isSandbox}
  <SandboxPage {orgId} />
{:else if org.isScratchOrg}
  <ScratchOrgPage {orgId} />
{/if}
