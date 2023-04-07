<script>
  import { dependencies, packageVersions } from '../../../stores/packages';
  import DataTable from '../../base/DataTable.svelte';

  export let packageId;

  $: dependency = $dependencies.find((dep) => dep.id === packageId);
  $: fullDependentVersions = dependency?.dependencies.map((id) => {
    return {
      Name: 'Extern',
      SubscriberPackageVersionId: id,
      ...$packageVersions.find(
        (version) => version.SubscriberPackageVersionId === id
      ),
    };
  });

  import {
    activateSubtab,
    addSubtab,
    deactivateSubtab,
  } from '../../../stores/navigation';

  const columns = [
    {
      label: 'Name',
      value: 'Package2Name',
      type: 'link',
      actionDetails: {
        name: 'nameclick',
      },
    },
    {
      label: 'Id',
      value: 'SubscriberPackageVersionId',
    },
    {
      label: 'Version',
      value: 'Version',
    },
  ];

  const handleRowAction = (event) => {
    addSubtab(
      event.detail.rawRow.Id,
      `${event.detail.rawRow.Package2Name} ${event.detail.rawRow.Version}`
    );
    deactivateSubtab();
    activateSubtab(event.detail.rawRow.Id);
  };
</script>

<DataTable
  data={fullDependentVersions || []}
  {columns}
  on:nameclick={handleRowAction}
/>
