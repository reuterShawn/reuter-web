
<script lang="ts">

import html5 from '$lib/assets/html5.png'
import css from '$lib/assets/css.png'
import github from '$lib/assets/github.png'

</script>
<div class="contain">
    <div>
        <img src={html5} alt="html 5 logo"/>
    </div>
    <img style="width:69px; height:30px;" src={css} alt="css logo"/>
    <img style="width:94px; height:25px;" src={github} alt="github logo"/>

</div>

<style>
    .contain {
        background-color: #292929;
        color: white;
        width: 1440px;
        height: 64px;
        padding: 30px 160px 5px 56px;
        gap: 98px;
        opacity: 0px;

        display: flex;
        justify-content: center;
        align-content: center;

    }
</style>