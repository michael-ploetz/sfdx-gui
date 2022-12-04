<script>
  export let title = 'Section Title';

  export let closed = false;
  $: opened = !closed;

  function handleClick() {
    closed = !closed;
  }
</script>

<div class="slds-section" class:slds-is-open={opened}>
  <h3 class="slds-section__title">
    <button
      on:click={handleClick}
      aria-controls="expando-unique-id"
      aria-expanded={opened}
      class="slds-button slds-section__title-action"
    >
      <svg
        class="slds-section__title-action-icon slds-button__icon slds-button__icon_left"
        aria-hidden="true"
      >
        <use
          xlink:href="../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#switch"
        />
      </svg>
      <span class="slds-truncate" title="Section Title">{title}</span>
    </button>
  </h3>
  <div
    aria-hidden={closed}
    class="slds-section__content"
    id="expando-unique-id"
  >
    <slot />
  </div>
</div>
