<script>
  import { devHubs } from '../../../stores/orgs';
  import { activeTab } from '../../../stores/navigation';
  import {
    dependencies,
    loadCompleteDependencyTreeForPackageVersion,
    packageVersions,
  } from '../../../stores/packages';
  import Tree from '../../base/Tree.svelte';
  export let packageId;

  let loading = true;
  $: {
    loadCompleteDependencyTreeForPackageVersion(
      $devHubs.find((devHub) => devHub.orgId === $activeTab.orgId).username,
      packageId
    ).then(() => {
      buildDependencyTree();
      loading = false;
    });
  }

  let dependecyTree = [];

  const buildDependencyTree = () => {
    dependecyTree = [];
    const baseDependency = $dependencies.find(
      (dependency) => dependency.id === packageId
    );
    const allDependencies = $dependencies.filter((dependency) =>
      baseDependency.dependencies.includes(dependency.subscriberId)
    );
    console.log([...allDependencies, baseDependency]);
  };

  const columns = [
    {
      label: 'Release',
      value: 'Version',
      action: 'expand',
    },
    {
      label: 'Name',
      value: 'Name',
      type: 'link',
      actionDetails: {
        name: 'nameclick',
      },
    },
    {
      label: 'SubId',
      value: 'SubscriberPackageVersionId',
    },
    {
      label: 'Released',
      value: 'IsReleased',
    },
    {
      label: 'Coverage',
      value: 'CodeCoverage',
    },
  ];

  const handleRowAction = (event) => {
    addSubtab(
      event.detail.row.Id,
      `${event.detail.row.Package2Name} ${event.detail.row.Version} `
    );
    deactivateSubtab();
    activateSubtab(event.detail.row.Id);
  };
</script>

{#if !loading}
  <Tree
    on:nameclick={handleRowAction}
    childrenAttributeKey="childVersions"
    data={dependecyTree}
    {columns}
  />
{/if}
