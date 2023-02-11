<script>
  import DataTable from '../../base/DataTable.svelte';
  import { packages } from '../../../client/stores/packages';

  export let orgId;

  const columns = [
    {
      label: 'Name',
      value: 'Name',
    },
    {
      label: 'Description',
      value: 'Description',
    },
    {
      label: 'Org Dependent?',
      value: 'isOrgDependent',
    },
    {
      label: 'Namespace',
      value: 'NamespacePrefix',
    },
    {
      label: 'Id',
      value: 'Id',
    },
  ];
</script>

<DataTable data={$packages} {columns} />
