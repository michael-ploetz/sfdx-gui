<script>
  import { packageVersions } from '../../../stores/packages';
  import {
    activateSubtab,
    addSubtab,
    deactivateSubtab,
  } from '../../../stores/navigation';
  import Tree from '../../base/Tree.svelte';
  export let packageId;

  let versionTree = [];

  let loading = true;
  $: {
    buildTree(packageId);
  }

  const buildTree = (id) => {
    versionTree = [];
    $packageVersions
      .filter((vers) => vers.Package2Id === id)
      .forEach((version) => {
        let majorVersion = versionTree.find(
          (majorVersion) => majorVersion.MajorVersion === version.MajorVersion
        );
        if (!majorVersion) {
          versionTree.push({
            MajorVersion: version.MajorVersion,
            Version: `${version.MajorVersion}.x.x-x`,
            childVersions: [],
          });
        }

        majorVersion = versionTree.find(
          (majorVersion) => majorVersion.MajorVersion === version.MajorVersion
        );
        let minorVersion = majorVersion.childVersions.find(
          (minorVersion) => minorVersion.MinorVersion === version.MinorVersion
        );
        if (!minorVersion) {
          majorVersion.childVersions.push({
            MajorVersion: version.MajorVersion,
            MinorVersion: version.MinorVersion,
            Version: `${version.MajorVersion}.${version.MinorVersion}.x-x`,
            childVersions: [],
          });
        }

        minorVersion = majorVersion.childVersions.find(
          (minorVersion) => minorVersion.MinorVersion === version.MinorVersion
        );
        let patchVersion = minorVersion.childVersions.find(
          (patchVersion) => patchVersion.PatchVersion === version.PatchVersion
        );
        if (!patchVersion) {
          minorVersion.childVersions.push({
            MajorVersion: version.MajorVersion,
            MinorVersion: version.MinorVersion,
            PatchVersion: version.PatchVersion,
            Version: `${version.MajorVersion}.${version.MinorVersion}.${version.PatchVersion}-x`,
            childVersions: [],
          });
        }

        patchVersion = minorVersion.childVersions.find(
          (patchVersion) => patchVersion.PatchVersion === version.PatchVersion
        );
        patchVersion.childVersions.push(version);
      });
    loading = false;
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
    data={versionTree}
    {columns}
  />
{/if}
