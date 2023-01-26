<script>
  import { onMount } from 'svelte';
  import { requestAllOrgs } from '../lib/client/services/orgServices';
  import { requestAllAliases } from '../lib/client/services/aliasServices';
  import OrgLauncher from '../lib/components/navigation/OrgLauncher.svelte';
  import Spinner from '../lib/components/base/Spinner.svelte';

  let showOrgLauncher = false;

  let loading = true;

  onMount(async () => {
    await requestAllOrgs();
    await requestAllAliases();
    loading = false;
  });

  const handleOrglauncherOpen = () => {
    showOrgLauncher = true;
  };
</script>

{#if loading}
  <Spinner />
{/if}

{#if showOrgLauncher}
  <OrgLauncher />
{/if}

<div class="slds-context-bar">
  <div class="slds-context-bar__primary">
    <div
      class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover"
    >
      <div class="slds-context-bar__icon-action">
        <button
          class="slds-button slds-icon-waffle_container slds-context-bar__button"
          title="Description of the icon when needed"
          on:click={handleOrglauncherOpen}
        >
          <span class="slds-icon-waffle">
            <span class="slds-r1" />
            <span class="slds-r2" />
            <span class="slds-r3" />
            <span class="slds-r4" />
            <span class="slds-r5" />
            <span class="slds-r6" />
            <span class="slds-r7" />
            <span class="slds-r8" />
            <span class="slds-r9" />
          </span>
          <span class="slds-assistive-text">Open App Launcher</span>
        </button>
      </div>
      <span class="slds-context-bar__label-action slds-context-bar__app-name">
        <span class="slds-truncate" title="App Name">SFDX GUI</span>
      </span>
    </div>
  </div>
  <nav class="slds-context-bar__secondary" role="navigation">
    <ul class="slds-grid">
      <li class="slds-context-bar__item slds-is-active">
        <a href="#" class="slds-context-bar__label-action" title="Home">
          <span class="slds-assistive-text">Current Page:</span>
          <span class="slds-truncate" title="Home">Home</span>
        </a>
      </li>
    </ul>
  </nav>
</div>

<div>
  Todos
  <ul class="slds-list_dotted">
    <li>Overwork orgTile to be more beautiful</li>
    <li>give option for all/expired orgs</li>
    <li>add connection status to org views</li>
    <li>notifications for finished builds/installs</li>
    <li>generate SO</li>
    <li>install packages</li>
    <li>package graphs</li>
    <li>make SO Templates</li>
    <li>Nested Package Version list -> newest in information banner</li>
    <li>
      complete dev hub overview
      <ul class="slds-list_dotted">
        <li>
          Home
          <ul class="slds-list_dotted">
            <li>Details of Devhub</li>
            <li>Scratch Org list on left side</li>
            <li>
              Package diegram -> maybe Flow builder like look, switchable to
              tree grid view
            </li>
          </ul>
        </li>
        <li>
          Scratch Org List
          <ul class="slds-list_dotted">
            <li>
              Create new Scratch Org
              <ul class="slds-list_dotted">
                <li>Create Scratch Org Definition</li>
                <li>Packages to install -> dependency preselection</li>
                <li>How many scratch orgs to generate</li>
              </ul>
            </li>
            <li>
              Open Scratch Org
              <ul class="slds-list_dotted">
                <li>Open as second level tab</li>
              </ul>
            </li>
            <li>
              Org View
              <ul class="slds-list_dotted">
                <li>Details</li>
                <li>Installed Packages</li>
                <li>Actions -> install/push/pull</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
