<template>
<button class="button"> {text} </button>
</template/>

<script>

export default {
    name : "CustomButton",
    props: ["text"],
}
</script>

<style>
.button {
    background-color: #2c3e50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>