<script lang="typescript">
    let isMoodChosen = false;

    function onIconTap() {
        //zamien ten layout na inny
        //zrob jakiegos boola i ifa
        isMoodChosen = true;
    }
</script>

<gridLayout rows="*,*,*" columns="*" >
    {#if !isMoodChosen}
    <flexboxLayout flexDirection="column" justifyContent="space-around" row="0" backgroundColor="#4FBD98">
        <label height="auto">Track your mood</label>
        <label height="auto" on:tap={onIconTap}>[ Ikony mood ]</label>
        <label height="auto">Jakieś copy mi dajcie</label>
    </flexboxLayout>
    {:else}
    <flexboxLayout flexDirection="column" justifyContent="space-around" row="0" backgroundColor="#4FBD98">
        <label height="auto">Thanks</label>
        <label height="auto" on:tap={onIconTap}>[ Thanks icon ]</label>
        <!-- NAVIGATE TO LOGS -->
        <label height="auto">You can check your previous moodlogs here</label>
    </flexboxLayout>
    {/if}
    <gridLayout row="1" backgroundColor="#A66ADB" rows="*,*" columns="*">
        <button class="bigLogo" row="0" col="0" colspan="2" text="logo" />
        <flexboxLayout row="1" justifyContent="space-between">
            <label textWrap="true" width="40%">Complete a cognitive test</label>
            <button class="logo" backgroundcolor="white" color="black" text="next" />
        </flexboxLayout>
    </gridLayout>
    <gridLayout row="2" backgroundColor="#F6B96D" rows="*,*" columns="*">
        <button class="bigLogo" row="0" col="0" colspan="2" text="logo" />
        <flexboxLayout row="1" justifyContent="space-between">
            <label textWrap="true" width="40%">Measure your body temperature</label>
            <button class="logo" backgroundcolor="white" color="black" text="next" />
        </flexboxLayout>
    </gridLayout>
</gridLayout>

<style>
    gridLayout gridLayout, gridLayout flexboxLayout {
        margin: 20px;
        border-radius: 5;
        height: calc(100% - 40);
        color: white;
        padding: 20px;
        font-size: 20;
    }
    .logo {
        width: 40;
        height: 40;
        border-radius: 20;
    }
    .bigLogo {
        margin: 20 0;
        width: 120;
        height: 120;
        border-radius: 60;
    }
</style>