<script>
  export let label = 'Input Label';
  export let type = 'text';
  export let placeholder;

  export let icon = '';
  $: showIcon = !!icon;
  $: iconLink = `../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#${icon}`;
</script>

<div class="slds-form-element">
  <label
    for="input-element-01"
    class="slds-form-element__label slds-assistive-text">{label}</label
  >
  <div class="slds-form-element__control" class:slds-input-has-icon={showIcon}>
    {#if showIcon}
      <svg class="slds-input__icon" aria-hidden="true">
        <use xlink:href={iconLink} />
      </svg>
    {/if}
    <input {type} class="slds-input" id="input-element-01" {placeholder} />
  </div>
</div>
