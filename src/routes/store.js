import { readable, writable } from "svelte/store";

export let equation = writable("");
export let result = writable();
export let history = writable([""]);

history.update((arr) => {
    if(arr.length > 10) {
        arr.shift();
    }
    return arr;
});