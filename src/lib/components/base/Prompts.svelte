<script>
  import Prompt from './Prompt.svelte';
  import Modal from './Modal.svelte';
  import Button from './Button.svelte';

  import {
    visiblePrompts,
    resolvePrompt,
    updatePromptInputValue,
  } from '../../stores/prompts';
  import Form from './Form.svelte';
  import FormRow from './FormRow.svelte';
  import FormElement from './FormElement.svelte';
</script>

{#if $visiblePrompts}
  <section>
    {#each $visiblePrompts.filter((p) => p.type === 'modal') as prompt}
      <Modal
        title={prompt.title}
        subHeader={prompt.message}
        size="small"
        fadeInOpen
        slideDownCancel
        showFooter
        showHeader
      >
        <div>
          <Form>
            {#each prompt.inputs as input}
              <FormRow>
                <FormElement
                  on:input={(event) =>
                    updatePromptInputValue(
                      prompt.id,
                      input.title,
                      event.detail
                    )}
                  value={input.value}
                  label={input.label}
                  placeholder={input.placeholder}
                  required
                  isInEditMode
                />
              </FormRow>
            {/each}
          </Form>
        </div>
        <div slot="footer">
          {#each prompt.options as option}
            <Button
              title={option.title}
              variant={option.variant}
              disabled={option.disabled}
              stretch={option.stretch}
              on:buttonclick={() => {
                resolvePrompt(prompt.id, option);
              }}
            />
          {/each}
        </div>
      </Modal>
    {/each}
    {#each $visiblePrompts.filter((p) => p.type === 'prompt') as prompt}
      <Prompt
        bind:prompt
        on:buttonclick={(event) => {
          resolvePrompt(prompt.id, event.detail);
        }}
      />
    {/each}
  </section>
{/if}

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
  }
</style>
