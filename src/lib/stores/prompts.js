import { get, writable, derived } from "svelte/store";

export const prompts = writable([]);

export const visiblePrompts = derived(
    prompts,
    $prompts => $prompts.filter((prompt) => prompt.show)
)

export const addPrompt = (prompt) => {
    const defaults = {
        id: Math.floor(Math.random() * 10000),
        variant: "info",
        title: "",
        type: "modal",
        resolved: false,
        show: true,
        message: "",
        inputs: [],
        options: [{
            title: "Ok",
            variant: "neutral",
            disabled: false,
            stretch: true
        }],
        selectedAction: {}
    };
    prompts.update((all) => [{ ...defaults, ...prompt }, ...all]);
};

export const awaitPromtAction = async (prompt) => {
    addPrompt(prompt);
    return await new Promise(resolve => {
        const interval = setInterval(() => {
            const resolvedPrompt = get(prompts).find((p) => p.title === prompt.title);
            if (resolvedPrompt.resolved) {
                removePrompt(resolvedPrompt.id);
                resolve(resolvedPrompt);
                clearInterval(interval);
            }
        }, 200);
    });
};

export const removePrompt = (id) => {
    prompts.update((all) => all.filter((p) => p.id !== id));
};

export const resolvePrompt = (id, selectedAction) => {
    prompts.update((all) => {
        all.find((p) => p.id === id).selectedAction = selectedAction;
        all.find((p) => p.id === id).show = false;
        all.find((p) => p.id === id).resolved = true;
        return [...all];
    });
};

export const updatePromptInputValue = (id, inputTitle, value) => {
    prompts.update((all) => {
        all.find((p) => p.id === id).inputs.find((input) => input.title === inputTitle).value = value;
        return [...all];
    });
}