<script>
  import Section from '../base/Section.svelte';
  import Spinner from '../base/Spinner.svelte';
  import Input from '../base/Input.svelte';
  import Button from '../base/Button.svelte';
  import OrgTile from '../navigation/OrgTile.svelte';

  import { devHubs, regularOrgs, scratchOrgs } from '../../client/stores/orgs';
  import { requestAllOrgs } from '../../client/services/orgServices';
  import { requestAllAliases } from '../../client/services/aliasServices';

  let loading = false;
  let showOrgLauncher = false;

  const handleRefresh = async () => {
    loading = true;
    await requestAllOrgs();
    await requestAllAliases();
    loading = false;
  };
</script>

<div class="slds-context-bar__primary">
  <div
    class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover"
  >
    <div class="slds-context-bar__icon-action">
      <button
        class="slds-button slds-icon-waffle_container slds-context-bar__button"
        title="Description of the icon when needed"
        on:click={() => {
          showOrgLauncher = true;
        }}
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

{#if loading}
  <Spinner />
{/if}

{#if showOrgLauncher}
  <section
    role="dialog"
    tabindex="-1"
    aria-modal="true"
    aria-labelledby="header43"
    class="slds-modal slds-fade-in-open slds-modal_large slds-app-launcher"
  >
    <div class="slds-modal__container">
      <button
        on:click={() => {
          showOrgLauncher = false;
        }}
        class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse"
      >
        <svg
          class="slds-button__icon slds-button__icon_large"
          aria-hidden="true"
        >
          <use
            xlink:href="../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#close"
          />
        </svg>
        <span class="slds-assistive-text">Cancel and close</span>
      </button>
      <div
        class="slds-modal__header slds-grid slds-grid_align-spread slds-grid_vertical-align-center"
      >
        <h2 id="header43" class="slds-text-heading_medium">Org launcher</h2>
        <div class="slds-app-launcher__header-search">
          <Input placeholder="Find an Org" label="Filter" />
        </div>
        <Button
          title="Refresh Orgs"
          variant="brand"
          icon="refresh"
          on:buttonclick={handleRefresh}
        />
      </div>
      <div
        class="slds-modal__content slds-app-launcher__content slds-p-around_medium"
        id="modal-content-id-1"
      >
        <Section title="Dev Hubs">
          <ul
            class="slds-grid slds-grid_pull-padded slds-wrap slds-p-horizontal_small"
          >
            {#each $devHubs as devHub}
              <li
                class="slds-p-horizontal_xx-small slds-p-vertical_xxx-small slds-size_1-of-1 slds-medium-size_1-of-3"
              >
                <OrgTile
                  on:orgselected={() => {
                    showOrgLauncher = false;
                  }}
                  org={devHub}
                />
              </li>
            {/each}
          </ul>
        </Section>
        <hr />
        <Section title="Regular Orgs">
          <ul
            class="slds-grid slds-grid_pull-padded slds-wrap slds-p-horizontal_small"
          >
            {#each $regularOrgs as regularOrg}
              <li
                class="slds-p-horizontal_xx-small slds-p-vertical_xxx-small slds-size_1-of-1 slds-medium-size_1-of-3"
              >
                <OrgTile
                  on:orgselected={() => {
                    showOrgLauncher = false;
                  }}
                  org={regularOrg}
                />
              </li>
            {/each}
          </ul>
        </Section>
        <hr />
        <Section title="Scratch Orgs">
          <ul
            class="slds-grid slds-grid_pull-padded slds-wrap slds-p-horizontal_small"
          >
            {#each $scratchOrgs as scratchOrg}
              <li
                class="slds-p-horizontal_xx-small slds-p-vertical_xxx-small slds-size_1-of-1 slds-medium-size_1-of-3"
              >
                <OrgTile
                  on:orgselected={() => {
                    showOrgLauncher = false;
                  }}
                  org={scratchOrg}
                />
              </li>
            {/each}
          </ul>
        </Section>
      </div>
    </div>
  </section>
  <div class="slds-backdrop slds-backdrop_open" role="presentation" />
{/if}
