<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  export let id = '';
  export let label = '';

  const dispatch = createEventDispatcher();

  export let active = false;

  export const select = (event) => {
    if (event.detail.id === id) {
      active = true;
    } else {
      active = false;
    }
  };

  onMount(() => {
    dispatch('register', { id, label, active });
  });
</script>

<div
  {id}
  class="slds-tabs_default__content"
  class:slds-show={active}
  class:slds-hide={!active}
  role="tabpanel"
>
  <slot />
</div>
