<template>

    <div class="flex bg-#e9e6e4">
    
                
            
                        <aside class="flex h-100vh bg-slate w-44 flex-col">
                             <NuxtLink class="p4 h-2 w-20 m-5 b-2 border-amber border-solid" to="/">Home</NuxtLink>
                             <NuxtLink class="p4 h-2 w-20 m-5 b-2 border-amber border-solid" to="/about">About</NuxtLink>
                             <NuxtLink class="p4 h-2 w-20 m-5 b-2 border-amber border-solid" to="/articles">Articles</NuxtLink>
                             <NuxtLink class="p4 h-2 w-20 m-5 b-2 border-amber border-solid" to="/people">People</NuxtLink>
                             <carousel class="translate-y-400px" />
                         </aside>
                     
            <slot />
        
    </div>
    
    <div class=" z-10 border-t-1 border-b-1 border-l-0 border-r-0 border-solid translate-y--15 bg-slate-200 ">
        <marquee direction="left">
        <span>Test 1 </span>
        <span>Testn 2 </span>
        <span>Test 3 </span>
        </marquee>
    </div>
</template>

<script setup>

</script>

<style scoped>



</style>