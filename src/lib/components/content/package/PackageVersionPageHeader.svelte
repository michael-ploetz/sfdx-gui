<script>
  import PageHeader from '../../base/PageHeader.svelte';
  import Button from '../../base/Button.svelte';
  import { devHubs } from '../../../stores/orgs';
  import { activeTab } from '../../../stores/navigation';
  import {
    packageVersions,
    promotePackageVersion,
    deletePackageVersion,
  } from '../../../stores/packages';

  export let packageId;

  // package is reservec
  $: thisPackageVersion = $packageVersions.find((p) => p.Id === packageId);
  $: packageVersionTitle =
    thisPackageVersion.Name + ', ' + thisPackageVersion.Version;

  const handlePromote = async () => {
    await promotePackageVersion(
      $devHubs.find((devHub) => devHub.orgId === $activeTab.orgId).username,
      packageId
    );
  };

  const handleDelete = async () => {
    await deletePackageVersion(
      $devHubs.find((devHub) => devHub.orgId === $activeTab.orgId).username,
      packageId
    );
  };
</script>

<PageHeader
  title={packageVersionTitle}
  meta={thisPackageVersion.Package2Name}
  icon="product_service_campaign_item"
>
  <div slot="actions">
    <Button
      variant="destructive"
      icon="delete"
      title="Delete"
      on:buttonclick={handleDelete}
    />
  </div>

  <div slot="controls">
    {#if !thisPackageVersion.IsReleased}
      <Button variant="brand" title="promote" on:buttonclick={handlePromote} />
    {/if}
  </div>

  <ul class="slds-page-header__detail-row">
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Id">Id</div>
      <div class="slds-truncate" title="Id">{thisPackageVersion.Id}</div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="SubId">
        Subscriber Id
      </div>
      <div class="slds-truncate" title="SubId">
        {thisPackageVersion.SubscriberPackageVersionId}
      </div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Protected">
        Protected
      </div>
      <div class="slds-truncate" title="Protected">
        {thisPackageVersion.IsPasswordProtected}
      </div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Released">Released</div>
      <div class="slds-truncate" title="Released">
        {thisPackageVersion.IsReleased}
      </div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Coverage">Coverage</div>
      <div class="slds-truncate" title="Coverage">
        {thisPackageVersion.CodeCoverage}
      </div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Created">Created</div>
      <div class="slds-truncate" title="Created">
        {thisPackageVersion.CreatedDate}
      </div>
    </li>
  </ul>
</PageHeader>
