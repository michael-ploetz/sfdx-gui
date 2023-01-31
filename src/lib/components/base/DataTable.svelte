<script>
  export let data = [];
  export let columns = [];

  $: rows = data.map((datarow) => {
    let newRow = [];
    columns.forEach((column) => {
      const fieldData = datarow[column.value];
      newRow.push(fieldData || '');
    });
    return newRow;
  });

  export let bordered = true;
</script>

<table
  class="slds-table slds-table_cell-buffer"
  class:slds-table_bordered={bordered}
>
  <thead>
    <tr class="slds-line-height_reset">
      {#each columns as column}
        <th class="" scope="col">
          <div class="slds-truncate" title={column.label}>
            {column.label}
          </div>
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr class="slds-hint-parent">
        {#each row as cell}
          <td data-label="todo">
            <div class="slds-truncate" title={cell}>{cell}</div>
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
