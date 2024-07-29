<template>
    <div class="m-0 bg-black h-screen grid place-items-center"> 
        <div class="card-swiper">
            <div class="card-groups">
                <div class="card-group card">
        
                    <div class="little-card card">
                    
                    </div>
                    <div class="big-card card">
                    
                    </div>
        
        
                    <div class="little-card card">
                    
                    </div>
                    <div class="big-card card">
                    
                    </div>
        
                    <div class="little-card card">
                    
                    </div>
                    <div class="big-card card">
                    
                    </div>
        
        
                    <div class="little-card card">
                    
                    </div>
                    <div class="big-card card">
                    
                    </div>
                    
                    
                </div>
                <!-- <div class="card-group card">
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        
                </div>
                <div class="card-group card">
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        
                </div>
                <div class="card-group card">
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        
        <div class="little-card card">
        
        </div>
        <div class="big-card card">
        
        </div>
        
        
                </div> -->
            </div>
            <div class="card-swiper-button">
                <el-icon><CircleCheckFilled /></el-icon>
                <button id="hate-button">
                    <i class="fa-solid fa-x"></i>
                </button>
                <button id="love-button">
                </button>
            </div>
        </div> 
    </div>

</template>




<script setup>

</script>



<style>
.main-container {
    margin: 0;
    background-color: black;
    height: 100vh;
    display: grid;
    place-items: center;
}

.card-groups,
.card-group,
.card {
    aspect-ratio: 5 / 7;

}
.card-groups,
.card-group,
.big-card  {
    width: 30vmin;
}

.card-group {
    position: absolute;
}


.card {
    background-color: rgba(255, 255, 255, 0.05); ;
    position: absolute;
    transition: transform 800ms cubic-bezier(.05,.43,.25,.95);

}

.big-card {
    width: 30vmin;
    border-radius: 1vmin;
}

.little-card {
    width: 12vmin;
    border-radius: 2vmin;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}

.big-card:nth-child(2) {
    background-image: url("https://avatars.mds.yandex.net/i?id=3f74419715c881f4f3efdebd66a37ebd_sr-3709311-images-thumbs&n=13");
    transform: translateX(-10%) rotate(-1deg);

}

.big-card:nth-child(4) {
    background-image: url("https://avatars.mds.yandex.net/i?id=41f49b8a118acf6cb30a1856542105af_sr-9849055-images-thumbs&n=13");
    transform: rotate(2deg);
}

.big-card:nth-child(6) {
    background-image: url("https://avatars.mds.yandex.net/i?id=7afca3e5e2dc9c04872bedbd440ae3ec_sr-3937533-images-thumbs&n=13");
    transform: translateX(-6%) rotate(-3deg);
}

.big-card:nth-child(8) {
    background-image: url("https://avatars.mds.yandex.net/i?id=3ddecddb7033e859ee59fb62c2551ddc_sr-9270532-images-thumbs&n=13");
    transform: translate(10%, 3%) rotate(5deg);
    background-size: cover;
    background-position: top;

}

.little-card:nth-child(1) {
    background-image: url("https://avatars.mds.yandex.net/i?id=c12555b42c6ab3943b2f0a4b9b31a391_sr-9136745-images-thumbs&n=13");
    background-position: top;
    
}

.little-card:nth-child(3) {
    background-image: url("https://avatars.mds.yandex.net/i?id=a822c1215c0e85c6500677f361bff950_sr-12488446-images-thumbs&n=13");
    background-position: top;

}

.little-card:nth-child(5) {
    background-image: url("https://avatars.mds.yandex.net/i?id=285824e606e4e5a51973b033ed98e7cf_sr-12579803-images-thumbs&n=13");
    background-position: top;
    background-size: cover;


}


.little-card:nth-child(7) {
    background-image: url("https://avatars.mds.yandex.net/i?id=681422e3b3f856232cc27bb6e0a0c068-5333580-images-thumbs&n=13");
    background-position: top;
    

}
/* 
.card-group:hover > .big-card:nth-child(2) {
    transform: translate(-75%, 16%) rotate(-24deg);
}

.card-group:hover > .big-card:nth-child(4) {
    transform: translate(-25%, 8%) rotate(-8deg);
}

.card-group:hover > .big-card:nth-child(6) {
    transform: translate(25%, 8%) rotate(8deg);
}

.card-group:hover > .big-card:nth-child(8) {
    transform: translate(75%, 16%) rotate(24deg);
}

.card-group:hover > .little-card:nth-child(1) {

    transform: translate(200%, -160%) rotate(-15deg);
}

.card-group:hover > .little-card:nth-child(3) {
    transform: translate(160%, 170%) rotate(15deg);
}

.card-group:hover > .little-card:nth-child(5) {
    transform: translate(-200%, -170%) rotate(15deg);
}
.card-group:hover > .little-card:nth-child(7) {
    transform: translate(-280%, 140%) rotate(-15deg);
} */

.card-group > .big-card:nth-child(2) {
    transform: translate(-75%, 16%) rotate(-24deg);
}

.card-group > .big-card:nth-child(4) {
    transform: translate(-25%, 8%) rotate(-8deg);
}

.card-group > .big-card:nth-child(6) {
    transform: translate(25%, 8%) rotate(8deg);
}

.card-group > .big-card:nth-child(8) {
    transform: translate(75%, 16%) rotate(24deg);
}

.card-group > .little-card:nth-child(1) {

    transform: translate(200%, -160%) rotate(-15deg);
}

.card-group > .little-card:nth-child(3) {
    transform: translate(160%, 170%) rotate(15deg);
}

.card-group > .little-card:nth-child(5) {
    transform: translate(-200%, -170%) rotate(15deg);
}
.card-group > .little-card:nth-child(7) {
    transform: translate(-280%, 140%) rotate(-15deg);
}

.card-swiper-button {
    margin-top: 8vmin;
    height: 2vmin;
    width: 2vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50%;
    padding: 1vmin;
    cursor: pointer;
    transition: 0.3s ease;
    background-color: white;
}

</style>
