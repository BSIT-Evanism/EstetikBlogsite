<template>

    <div class="flex bg-rose-200">
    
                
            
                        <aside class="flex group h-100vh b-0 b-r-1 border-solid bg-rose-200 w-44 flex-col hover:bg-rose-300 animation-all duration-300ms">
                             <NuxtLink class="p4 h-2 w-20 m-5 fw700 no-underline text-slate-400 group-hover:text-slate-700 animate-all duration-700ms" to="/">Home</NuxtLink>
                             <NuxtLink class="p4 h-2 w-20 m-5 fw700 no-underline text-slate-400 group-hover:text-slate-700 animate-all duration-700ms" to="/about">About</NuxtLink>
                             <NuxtLink class="p4 h-2 w-20 m-5 fw700 no-underline text-slate-400 group-hover:text-slate-700 animate-all duration-700ms" to="/articles">Articles</NuxtLink>
                             <NuxtLink class="p4 h-2 w-20 m-5 fw700 no-underline text-slate-400 group-hover:text-slate-700 animate-all duration-700ms" to="/people">People</NuxtLink>
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