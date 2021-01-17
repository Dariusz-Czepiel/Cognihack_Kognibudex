<scrollView>
    <gridLayout backgroundColor="#849DEF" rows="200,200,200,200,200" columns="*" >
        <wrapLayout row="0">
            <label>Chronopedia</label>
            <button class="icon" text="ksiazka" />
        </wrapLayout>
        <stackLayout backgroundColor="white" row="1">
            <button height="45%" dock="right" class="icon2" text="takie cus" />
            <label class="info2">About chronotypes</label>
            <label fontSize="15" class="info2">Get to know more about different chronotypes</label>    
        </stackLayout>
        <stackLayout backgroundColor="white" row="2">
            <button height="45%" dock="right" class="icon2" text="takie cus" />
            <label class="info2">About chronotypes</label>
            <label fontSize="15" class="info2">Get to know more about different chronotypes</label>    
        </stackLayout>
        <stackLayout backgroundColor="white" row="3">
            <button height="45%" dock="right" class="icon2" text="takie cus" />
            <label class="info2">About chronotypes</label>
            <label fontSize="15" class="info2">Get to know more about different chronotypes</label>    
        </stackLayout>
        <stackLayout backgroundColor="white" row="4">
            <button height="45%" dock="right" class="icon2" text="takie cus" />
            <label class="info2">About chronotypes</label>
            <label fontSize="15" class="info2">Get to know more about different chronotypes</label>    
        </stackLayout>
    </gridLayout>
</scrollView>
<style>
    gridLayout label, gridLayout stackLayout, gridLayout wrapLayout {
        margin: 20px;
        border-radius: 5;
        height: calc(100% - 40);
        color: white;
        padding: 20px;
        font-size: 30;
    }
    .info {
        background-color: white;
        color: black;
        font-size: 20;
    }
    .info2 {
        color: black;
        font-size: 20;
        margin: 0;
    }
    .icon {
        width: 60px;
        height: 60px;
        border-radius: 20px;
    }
    .icon2 {
        width: 120px;
        height: 120px;
        border-radius: 60px;
    }
</style>