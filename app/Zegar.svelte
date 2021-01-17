<script leng="typescript">

</script>

<scrollView>
    <gridLayout rows="300,75,150,150,150" columns="*,*" >
        <image row="0" col="0" colspan="2" src="res://wolficon" />
        <dockLayout row="1" col="0" colspan="2">
            <label dock="center" text="Next in your schedule:" backgroundColor="#4FBD98" />
        </dockLayout>
        <label row="2" col="0" colspan="2" text="Dinner" backgroundColor="#EF8A81" />
        <label row="3" col="0" text="Cognitive peak" backgroundColor="#849DEF" />
        <label row="3" col="1" text="Exercise" backgroundColor="#4FBD98" />
        <label row="4" col="0" text="Creativity peak" backgroundColor="#A66ADB" />
        <label row="5" col="1" text="Sleep" backgroundColor="#F6B96D" />
    </gridLayout>
</scrollView>

<style>
    gridLayout label, gridLayout dockLayout, gridLayout image {
        margin: 20px;
        border-radius: 5;
        height: 100%;
        color: white;
        font-size: 20;
    }
    gridLayout label:first-child{
        text-align: center;
    }
</style>