import { writable, derived } from "svelte/store";

export const tabs = writable([]);

export const activeTab = derived(
    tabs,
    $tabs => $tabs.find((tab) => tab.active) || {
        label: 'Home',
        orgId: 'home',
        active: true,
        subtabs: []
    }
)

export const activeSubtab = derived(
    tabs,
    $tabs => ($tabs.find((tab) => tab.active) || {
        label: 'Home',
        orgId: 'home',
        active: true,
        subtabs: [{
            label: 'Home',
            orgId: 'home',
            active: true,
        }]
    }).subtabs.find((subtab) => subtab.active) || {
        label: 'Home',
        orgId: 'home',
        active: true,
    }
)

export const addTab = (label, id) => {
    const newTab = {
        label,
        orgId: id,
        active: false,
        subtabs: [{
            active: true,
            label,
            id,
        }]
    }
    tabs.update((all) => {
        if (all.find((tab) => tab.orgId === id)) {
            all.find((tab) => tab.orgId === id).active = true;
            return [...all];
        }
        return [...all, newTab];
    });
}

export const deactivateActiveTab = () => {
    tabs.update((all) => {
        all.find((tab) => tab.active).active = false;
        return [...all];
    });
}

export const activateTab = (orgId) => {
    tabs.update((all) => {
        all.find((tab) => tab.orgId === orgId).active = true;
        return [...all];
    });
}

export const addSubtab = (id, label) => {
    tabs.update((all) => {
        if (all.find((tab) => tab.active).subtabs.find((subtab) => subtab.id === id)) {
            deactivateSubtab();
            activateSubtab(id);
            return [...all];
        }
        all.find((tab) => tab.active).subtabs.push({
            active: false,
            label,
            id,
        });
        return [...all];
    });
}

export const deactivateSubtab = () => {
    tabs.update((all) => {
        all.find((tab) => tab.active).subtabs.find((tab) => tab.active).active = false;
        return [...all];
    });
}

export const activateSubtab = (id) => {
    tabs.update((all) => {
        all.find((tab) => tab.active).subtabs.find((tab) => tab.id === id).active = true;
        return [...all];
    });
}