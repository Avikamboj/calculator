<script lang="ts">
    import { onDestroy } from "svelte";
    import { history } from "./store";
    
    let pastCalculations: any = "";

    let unsubscribe = history.subscribe((val) => {
        pastCalculations = val;
    });

    function clear() {
        history.update(arr => {
            arr = [];
            return arr;
        });
    }

    onDestroy(unsubscribe);
</script>

<div class="calculationsList">
    <ul>
        {#each pastCalculations as eq}
            <li>
                {eq}
            </li>
        {/each}
    </ul>
</div>
<button on:click={clear}>Clear</button>

<style>
    .calculationsList {
        display: flex;
        height: calc(90vh);
        padding: 20px;
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: end;
        padding: 0px;
        overflow-y: auto;
    }

    ul li {
        color: gray;
        list-style: none;
        font-size: 2em;
        width: 100%;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    ul li:not(:first-child), li:not(:last-child) {
        border-top: 1px solid gray;
    }

    ul li:nth-last-child(-n+2) {
        color: black;
    }

    button {
        height: 5vh;
        width: 8vw;
        position: fixed;
        right: 2px;
        background-color: rgb(224, 92, 92);
        border: none;
        border-radius: 10px;
    }
</style>