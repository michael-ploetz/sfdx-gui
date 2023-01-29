<script>
  import Page from '../base/Page.svelte';
  import PageHeader from '../base/PageHeader.svelte';

  import { devHubs } from '../../client/stores/orgs';
  import { allAliases } from '../../client/stores/aliases';
  import Button from '../base/Button.svelte';

  import { openOrg } from '../../client/services/orgServices';
  import Toasts from '../base/Toasts.svelte';
  import { addToast } from '../../client/stores/toasts';

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

<Page>
  <PageHeader title={orgName} meta="DevHub" icon="environment_hub">
    {orgId}
    <div slot="actions">
      <Button
        variant="brand"
        icon="open"
        title="Open"
        on:buttonclick={handleOpenOrg}
      />
    </div>
  </PageHeader>
</Page>
