<script>
  import DataTable from '../../base/DataTable.svelte';

  import { devHubs, scratchOrgs } from '../../../stores/orgs';
  import { allAliases } from '../../../stores/aliases';

  export let orgId;

  $: org = $devHubs.find((devHub) => devHub.orgId === orgId);
  $: scratchOrgsForThisDevhub = $scratchOrgs
    .filter((scratchOrg) => scratchOrg.devHubOrgId === org.orgId)
    .map((scratchOrg) => {
      return {
        ...scratchOrg,
        alias:
          $allAliases.find((alias) => alias.value === org.username)?.alias ||
          scratchOrg.username,
      };
    });

  const columns = [
    {
      label: 'Name',
      value: 'alias',
    },
    {
      label: 'isExpired',
      value: 'isExpired',
    },
    {
      label: 'Status',
      value: 'status',
    },
    {
      label: 'Namespace',
      value: 'namespace',
    },
    {
      label: 'createdOrgInstance',
      value: 'createdOrgInstance',
    },
    {
      label: 'instanceApiVersion',
      value: 'instanceApiVersion',
    },
    {
      label: 'instanceUrl',
      value: 'instanceUrl',
    },
    {
      label: 'orgId',
      value: 'orgId',
    },
    {
      label: 'username',
      value: 'username',
    },
    {
      label: 'expirationDate',
      value: 'expirationDate',
    },
  ];
</script>

<DataTable data={scratchOrgsForThisDevhub} {columns} />
