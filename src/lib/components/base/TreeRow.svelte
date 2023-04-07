<script>
  import { createEventDispatcher } from 'svelte';

  import TreeRow from './TreeRow.svelte';

  const dispatch = createEventDispatcher();

  export let treeRow;
  export let columns;
  export let childrenAttribute;
</script>

<tr
  aria-expanded={treeRow.expanded}
  aria-level={treeRow.level}
  aria-posinset={treeRow.index}
  aria-selected="true"
  aria-setsize={treeRow.levelSize}
  class="slds-hint-parent"
>
  {#each columns as column}
    {#if column.action === 'expand'}
      <th class="slds-tree__item" data-label="majorVersion" scope="row">
        {#if treeRow.expandable}
          <button
            on:click={() => (treeRow.expanded = !treeRow.expanded)}
            class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small"
            aria-hidden="true"
            tabindex="-1"
            title="Collapse"
          >
            <svg
              class="slds-button__icon slds-button__icon_small"
              aria-hidden="true"
            >
              <use
                xlink:href="../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#chevronright"
              />
            </svg>
            <span class="slds-assistive-text">Collapse {column.label}</span>
          </button>
        {/if}
        <div
          title={treeRow[column.value]}
          style={treeRow.expandable ? '' : 'padding-left: 20px'}
        >
          {treeRow[column.value] || ''}
        </div>
      </th>
    {:else if column.action === 'menu'}
      <td role="gridcell" style="width:3.25rem">
        <button
          class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
          aria-haspopup="true"
          tabindex="-1"
          title="More actions for Acme Corporation"
        >
          <svg
            class="slds-button__icon slds-button__icon_hint slds-button__icon_small"
            aria-hidden="true"
          >
            <use
              xlink:href="../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#down"
            />
          </svg>
          <span class="slds-assistive-text">More actions for Major Verion</span>
        </button>
      </td>
    {:else if column.type === 'link'}
      <td data-label={column.label}>
        <div class="slds-truncate" title={treeRow[column.value]}>
          <a
            href="#"
            on:click={() => {
              dispatch('rowaction', {
                name: column.actionDetails.name,
                row: treeRow,
                column,
              });
            }}
            tabindex="-1">{treeRow[column.value] || ''}</a
          >
        </div>
      </td>
    {:else}
      <td data-label={column.label} role="gridcell">
        <div class="slds-truncate" title={treeRow[column.value]}>
          {treeRow[column.value] || ''}
        </div>
      </td>
    {/if}
  {/each}
</tr>

{#if treeRow[childrenAttribute] && treeRow[childrenAttribute].length && treeRow.expanded}
  {#each treeRow[childrenAttribute] as childRow}
    <TreeRow
      on:rowaction={(event) => dispatch('rowaction', event.detail)}
      treeRow={childRow}
      {columns}
      {childrenAttribute}
    />
  {/each}
{/if}
