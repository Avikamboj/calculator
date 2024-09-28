<script lang="ts">
    import { equation, history } from "./store";

    let eqToStore = " ";
    let resultToStore = " ";
    function createEquation(val: string) {
        equation.update((eq) => { console.log(typeof eq);
            let lastCh = eq.charAt(eq.length - 1);
            let operators = ["+", "-", "*", "÷", "%"];
            if (operators.includes(lastCh)) {
                if (lastCh === val) {
                    return eq;
                } else if (val !== lastCh && operators.includes(val)) {
                    let revEq = "";
                    for(let i=eq.length-1; i>=0; i--) {
                        revEq+=eq[i];
                    }
                    eq = "";
                    revEq = revEq.replace(revEq[0], val);
                    for(let i=revEq.length-1; i>=0; i--){
                        eq+=revEq[i];
                    }
                    return eq;
                }
            }
            if (!eq.length) {
                if (operators.includes(val)) {
                    return eq;
                }
            }
            eq += val;
            return eq;
        });
    }

    function evaluate() {
        equation.update((eq) => {
            if (eq) {
                eqToStore = eq;
                eq = eq.replaceAll("÷", "/");
                eq = String(eval(eq));
                resultToStore = eq;
                console.log(typeof eq);
                return eq;
            } else {
                return "";
            }
        });

        history.update((arr) => {
            arr.push(eqToStore);
            arr.push(resultToStore);
            eqToStore = "";
            resultToStore = "";
            return arr;
        });
    }
</script>

<div class="calcArea">
    <div class="calculator">
        <div class="display">{$equation}</div>
        <div class="btns">
            <button
                type="button"
                class="all-clear"
                style="background-color: red;"
                on:click={() => ($equation = "")}
            >
                AC
            </button>
            <button
                type="button"
                class="operator"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                %
            </button>
            <button
                type="button"
                class="clear"
                style="background-color: #ED7014"
                on:click={() => ($equation = $equation.slice(0, -1))}
            >
                ←
            </button>
            <button
                type="button"
                class="operator"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                ÷
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                7
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                8
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                9
            </button>
            <button
                type="button"
                class="operator"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                *
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                4
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                5
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                6
            </button>
            <button
                type="button"
                class="operator"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                -
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                1
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                2
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                3
            </button>
            <button
                type="button"
                class="operator"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                +
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                00
            </button>
            <button
                type="button"
                class="num"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                0
            </button>
            <button
                type="button"
                class="dot"
                on:click={(e) => {
                    createEquation(e.currentTarget.innerText);
                }}
            >
                .
            </button>
            <button
                type="button"
                class="equal"
                style="background-color: green;"
                on:click={evaluate}
            >
                =
            </button>
        </div>
    </div>
</div>

<style>
    .calcArea {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }

    .calculator {
        /* box-shadow: 20px 20px 40px black; */
        border-radius: 10px;
        background-color: #6d5959;
        display: flex;
        gap: 10px;
        flex-direction: column;
        min-height: 30vh;
        min-width: 10vw;
        padding: 8px;
    }

    .display {
        flex: 1;
        background-color: #04f06a;
        min-height: 60px;
        border-radius: 10px;
        padding: 2px 5px;
        display: flex;
        align-items: end;
        justify-content: end;
        font-size: x-large;
        user-select: none;
        cursor: none;
    }

    .btns {
        flex: 2;
        display: grid;
        gap: 5px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }

    .btns > button {
        background-color: #9dcbba;
        text-align: center;
        border-radius: 5px;
        height: 45px;
        width: 65px;
        font-size: 1.5em;
        font-weight: bold;
        border: none;
        box-shadow: 3px 3px 8px gray;
        user-select: none;
        cursor: pointer;
        &:hover {
            background-color: #64f1bd;
        }
        &:active {
            background-color: #19e89c;
            box-shadow: none;
            scale: 0.99;
        }
    }
</style>
