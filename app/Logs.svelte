<script lang="typescript">
    import { CalendarCellTapEventData } from "nativescript-ui-calendar";
    let calendar;

    function onCellTap(args: CalendarCellTapEventData) {
        //args.date to data wybrana
    }
</script>
<gridLayout backgroundColor="#4FBD98" rows="*,*,*" columns="*" >
    <dockLayout>
        <label dock="left">Your previous logs</label>
        <button dock="right" class="icon" text="kalendarz" />
    </dockLayout>
    <!-- WEZ JAK KLIKNIESZ W DZIEN TO SIE DZIEJE COS -->
    <radCalendar bind:this={calendar} row="1" on:cellTap="{onCellTap}" />
    <label textWrap="true" class="text" row="2">Here you can check your performance from previous days</label>
</gridLayout>

<style>
    gridLayout label {
        margin: 20px;
        border-radius: 5;
        height: calc(100% - 40);
        color: white;
        padding: 20px;
        font-size: 30;
    }
    .text {
        background-color: white;
        color: black;
        height: 15%;
        font-size: 20;
    }
    radCalendar {
        margin: 0 10;
    }
    .icon {
        width: 60px;
        height: 60px;
        border-radius: 20px;
    }
</style>