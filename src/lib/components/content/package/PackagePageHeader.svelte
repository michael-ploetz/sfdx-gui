<script>
  import PageHeader from '../../base/PageHeader.svelte';
  import { packages } from '../../../stores/packages';

  export let packageId;

  // package is reservec
  $: thisPackage = $packages.find((p) => p.Id === packageId);
</script>

<PageHeader
  title={thisPackage.Name}
  meta="Package"
  icon="product_service_campaign"
>
  <ul class="slds-page-header__detail-row">
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Id">Id</div>
      <div class="slds-truncate" title="Id">{thisPackage.Id}</div>
    </li>

    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Namespace">
        Namespace
      </div>
      <div class="slds-truncate" title="Namespace">
        {thisPackage.NamespacePrefix}
      </div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Type">Type</div>
      <div class="slds-truncate" title="Type">
        {thisPackage.ContainerOptions}
      </div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="OrgDependent">
        OrgDependent
      </div>
      <div class="slds-truncate" title="OrgDependent">
        {thisPackage.IsOrgDependent}
      </div>
    </li>
  </ul>
</PageHeader>
