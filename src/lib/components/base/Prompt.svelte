<script>
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  const dispatch = createEventDispatcher();

  export let title;
  export let options;
  export let message;
</script>

<section
  role="dialog"
  aria-modal="true"
  aria-labelledby="prompt-heading-id"
  aria-describedby="prompt-message-wrapper"
  class="slds-modal slds-fade-in-open slds-modal_prompt"
>
  <div class="slds-modal__container">
    <div class="slds-modal__header slds-theme_error slds-theme_alert-texture">
      <h1 class="slds-text-heading_medium" id="prompt-heading-id">
        Service unavailable
      </h1>
    </div>
    <div
      class="slds-modal__content slds-p-around_medium"
      id="prompt-message-wrapper"
    >
      <p>{message}</p>
    </div>
    <div class="slds-modal__footer slds-theme_default">
      {#each options as option}
        <Button
          bind:option
          on:buttonclick={() => {
            dispatch('promptaction', option);
          }}
        />
      {/each}
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation" />
