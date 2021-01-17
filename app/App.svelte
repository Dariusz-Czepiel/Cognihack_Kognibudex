<script lang="typescript">
    import { onMount } from 'svelte'
    import Zegar from './Zegar.svelte';
    import GatherData from './GatherData.svelte';
    import Logs from './Logs.svelte';
    import Chronopedia from './Chronopedia.svelte';
    
    import { UpdateUserProfile, GetUserData, FirstTimeSetup } from './functional/sqllite'
    //import Sqlite from 'nativescript-sqlite'

    let selectedTab;

    let actionBarBackgroundColor: string = "white";
    // const setActionBarBackground = (color: string) => actionBarBackgroundColor = color;
    
    async function doOnMount() {
        //console.log(Sqlite, "tsets")
        console.log("tsets")
        try {
            await FirstTimeSetup();
            await UpdateUserProfile('score', 2);
            //console.log('isok', await GetUserData('score'));
        }
        catch (e) {
            console.log(e.err.nativeException);
        }
    }

    function onSelectedIndexChanged(args)
    {
        //console.log(args.newIndex);
        //zmiana backgroundColor zeby pasowal 
        let i: number = args.newIndex;
        if(i === 0 || i === 1) actionBarBackgroundColor = "white"
        else if(i === 2) actionBarBackgroundColor = "#4FBD98"
        else if(i === 3) actionBarBackgroundColor = "#849DEF"
    }

    onMount(doOnMount);
</script>


<page backgroundColor="{actionBarBackgroundColor}">
    <actionBar>
        <flexboxLayout  marginLeft="-30" orientation="horizontal" justifyContent="space-between">
            <image backgroundColor="#3461C6" width="60" height="60" src="res://expand" />
            <image backgroundColor="#3461C6" width="60" height="60" src="res://info" />
        </flexboxLayout >
    </actionBar>
    
    <bottomNavigation bind:selectedIndex={selectedTab} on:selectedIndexChanged={onSelectedIndexChanged}>
        <tabStrip backgroundColor="#3461C6">
            <tabStripItem>
                <label text="Home" />
                <image src="font://&#xf015;" class="fas t-36" />
            </tabStripItem>
            <tabStripItem class="special">
                <label text="Account" />
                <image src="font://&#xf007;" class="fas t-36" />
            </tabStripItem>
            <tabStripItem class="special">
                <label text="Search" />
                <image src="font://&#xf00e;" class="fas t-36" />
            </tabStripItem>
            <tabStripItem class="special">
                <label text="Search2" />
                <image src="font://&#xf00e;" class="fas t-36" />
            </tabStripItem>
        </tabStrip>

        <tabContentItem>
            <Zegar />
        </tabContentItem>
        <tabContentItem>
            <GatherData />
        </tabContentItem>
        <tabContentItem>
           <Logs />
        </tabContentItem>
        <tabContentItem>
            <Chronopedia />
        </tabContentItem>
    </bottomNavigation>
</page>


<style>
    flexboxLayout  {
        width: 360;
        margin: 0 -40;
        padding: 0;
        background-color: transparent;
        box-shadow: none;
    }
    flexboxLayout button {
        border-radius: 25;
        margin: 0;
    }
    actionBar {
        background-color: transparent;
        box-shadow: none;
        android-elevation: 0;
    }
</style>
