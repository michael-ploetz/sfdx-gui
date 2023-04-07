<script>
  import DataTable from '../../base/DataTable.svelte';
  import { packages } from '../../../stores/packages';
  import {
    activateSubtab,
    addSubtab,
    deactivateSubtab,
  } from '../../../stores/navigation';

  const columns = [
    {
      label: 'Name',
      value: 'Name',
      type: 'link',
      actionDetails: {
        name: 'nameclick',
      },
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

  const handleRowAction = (event) => {
    addSubtab(event.detail.rawRow.Id, event.detail.rawRow.Name);
    deactivateSubtab();
    activateSubtab(event.detail.rawRow.Id);
  };
</script>

<DataTable data={$packages} {columns} on:nameclick={handleRowAction} />
