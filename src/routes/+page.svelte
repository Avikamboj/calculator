<script lang="ts">
    import Calc from "./calc.svelte";
    import CalcHistory from "./calcHistory.svelte";

    let historyBlock: HTMLDivElement;

    function openSideBar() {
        historyBlock.style.visibility = "visible";
        historyBlock.style.right = "0vw";
        let open = setInterval(() => {
            historyBlock.style.position = "relative";
        }, 10);

        clearInterval(open);
    }
    function closeSideBar() {
        historyBlock.style.visibility = "hidden";
        historyBlock.style.right = "-20vw";
        historyBlock.style.flex = "0";
        let hide = setInterval(() => {
            historyBlock.style.position = "fixed";
        }, 10);

        clearInterval(hide);
    }
</script>

<main>
    <div class="calc">
        <div class="header">
            <h1>Calculator</h1>
            <button class="open" on:click={openSideBar}>=</button>
        </div>
        <Calc />
    </div>

    <div class="calcHistory" bind:this={historyBlock}>
        <div class="header">
            <h1>History</h1>
            <button class="close" on:click={closeSideBar}>X</button>
        </div>
        <CalcHistory />
    </div>
</main>

<style>
    main {
        background: #454545;
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        display: flex;
    }

    h1 {
        user-select: none;
    }

    .calc {
        width: 100vw;
        text-align: center;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }

    button {
        cursor: pointer;
        user-select: none;
    }

    .calc .header h1 {
        color: white;
        font-size: 2.5em;
        width: 100%;
        text-shadow: 20px 15px 10px black;
    }

    .header button {
        border: none;
        font-size: 1.5em;
        font-weight: bolder;
        background-color: transparent;
    }

    .calcHistory {
        width: 20vw;
        height: 100vh;
        visibility: hidden;
        background-color: #abebd2;
        text-align: center;
        position: absolute;
        transition-duration: 0.2s;
    }
</style>
