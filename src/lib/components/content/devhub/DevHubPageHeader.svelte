<script>
  import PageHeader from '../../base/PageHeader.svelte';
  import Button from '../../base/Button.svelte';
  import Toasts from '../../base/Toasts.svelte';
  import { addToast } from '../../../client/stores/toasts';

  import { devHubs, openOrg } from '../../../client/stores/orgs';
  import { allAliases } from '../../../client/stores/aliases';

  export let orgId;

  const handleOpenOrg = async () => {
    const couldOpen = await openOrg(org.username);
    if (couldOpen) {
      addToast({
        message: 'Erfolgreich Org geöffnet',
        variant: 'success',
      });
    } else {
      addToast({
        message: 'Fehler beim öffnen der Org',
        variant: 'error',
      });
    }
  };

  $: org = $devHubs.find((devHub) => devHub.orgId === orgId);
  $: orgName =
    $allAliases.find((alias) => alias.value === org.username)?.alias ||
    org.username;
</script>

<Toasts />

<PageHeader title={orgName} meta="DevHub" icon="environment_hub">
  <div slot="actions">
    <Button
      variant="brand"
      icon="open"
      title="Open"
      on:buttonclick={handleOpenOrg}
    />
  </div>
  <div slot="controls">
    <Button variant="neutral" icon="add" title="TBD" />
  </div>
  <ul class="slds-page-header__detail-row">
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Username">Username</div>
      <div class="slds-truncate" title="username">{org.username}</div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="URL">URL</div>
      <div class="slds-truncate" title="URL">
        <a href={org.instanceUrl}>{org.instanceUrl}</a>
      </div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Id">Id</div>
      <div class="slds-truncate" title="Id">{org.orgId}</div>
    </li>
    <li class="slds-page-header__detail-block">
      <div class="slds-text-title slds-truncate" title="Api">Api Version</div>
      <div class="slds-truncate" title="Api">{org.instanceApiVersion}</div>
    </li>
  </ul>
</PageHeader>
