<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let title;
  export let variant;
  export let disabled;
  export let stretch;

  export let icon;

  $: showIcon = !!icon;
  $: iconLink = `../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#${icon}`;
</script>

<button
  on:click={() => dispatch('buttonclick', {})}
  class={`slds-button slds-button_${variant}`}
  {disabled}
  class:slds-button_stretch={stretch}
>
  {#if showIcon}
    <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
      <use xlink:href={iconLink} />
    </svg>
  {/if}

  {title}</button
>
