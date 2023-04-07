<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let readOnly = false;
  export let value = '';
  export let label = '';
  export let required = false;
  export let editable = false;
  export let placeholder = '';

  export let isInEditMode = false;
</script>

<div class="slds-form__item" role="listitem">
  <div
    class:slds-form-element_edit={editable}
    class:slds-form-element_readonly={readOnly}
    class:slds-hint-parent={editable}
    class="slds-form-element slds-form-element_horizontal"
  >
    <span class="slds-form-element__label">
      {#if required}<abbr class="slds-required" title="required">* </abbr> {/if}
      {label}</span
    >
    <div class="slds-form-element__control">
      {#if isInEditMode}
        <input
          type="text"
          id="text-input-id-47"
          {placeholder}
          {required}
          bind:value
          class="slds-input"
          on:input={() => dispatch('input', value)}
        />
      {:else}
        <div class="slds-form-element__static">
          {value}
        </div>
      {/if}

      {#if editable && !isInEditMode}
        <button
          on:click={() => (isInEditMode = true)}
          class="slds-button slds-button_icon"
          title="Edit: Assigned To"
        >
          <svg
            class="slds-button__icon slds-button__icon_hint"
            aria-hidden="true"
          >
            <use
              xlink:href="../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#edit"
            />
          </svg>
          <span class="slds-assistive-text">Edit: {label}</span>
        </button>
      {/if}
    </div>
  </div>
</div>
