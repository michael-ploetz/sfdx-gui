<script>
  import Page from '../base/Page.svelte';
</script>

<Page>
  <div>
    Todos
    <ul class="slds-list_dotted">
      <li>Overwork orgTile to be more beautiful</li>
      <li>give option for all/expired orgs</li>
      <li>add connection status to org views</li>
      <li>notifications for finished builds/installs</li>
      <li>generate SO</li>
      <li>install packages</li>
      <li>package graphs</li>
      <li>make SO Templates</li>
      <li>Nested Package Version list -> newest in information banner</li>
      <li>
        complete dev hub overview
        <ul class="slds-list_dotted">
          <li>
            Home
            <ul class="slds-list_dotted">
              <li>Details of Devhub</li>
              <li>Scratch Org list on left side</li>
              <li>
                Package diegram -> maybe Flow builder like look, switchable to
                tree grid view
              </li>
            </ul>
          </li>
          <li>
            Scratch Org List
            <ul class="slds-list_dotted">
              <li>
                Create new Scratch Org
                <ul class="slds-list_dotted">
                  <li>Create Scratch Org Definition</li>
                  <li>Packages to install -> dependency preselection</li>
                  <li>How many scratch orgs to generate</li>
                </ul>
              </li>
              <li>
                Open Scratch Org
                <ul class="slds-list_dotted">
                  <li>Open as second level tab</li>
                </ul>
              </li>
              <li>
                Org View
                <ul class="slds-list_dotted">
                  <li>Details</li>
                  <li>Installed Packages</li>
                  <li>Actions -> install/push/pull</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</Page>
