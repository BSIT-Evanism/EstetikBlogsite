<template>

    <div class="font-sans bg-#e9e6e4 box-content no-margin">
        <div class="flex bg-#e9e6e4">
        
        
        
                            <aside class="font-mono font-normal flex b-t-1 h-70vh relative group h-50% b-0  border-solid bg-#e9e6e4 w-44 flex-col hover:p-8 hover:animate-pulse animation-all duration-300ms">
                                 <NuxtLink class="p4 static text-xl h-2 w-20 m-5 font-bold no-underline text-slate-400 group-hover:text-slate-700 hover:translate-x-2 hover:before:content-['=>'] hover:duration-300ms animate-all duration-700ms" to="/">Home</NuxtLink>
                                 <NuxtLink class="p4 static text-xl h-2 w-20 m-5 font-bold no-underline text-slate-400 group-hover:text-slate-700 hover:translate-x-2 hover:before:content-['=>'] hover:duration-300ms animate-all duration-700ms" to="/about">About</NuxtLink>
                                 <NuxtLink class="p4 static text-xl h-2 w-20 m-5 font-bold no-underline text-slate-400 group-hover:text-slate-700 hover:translate-x-2 hover:before:content-['=>'] hover:duration-300ms animate-all duration-700ms" to="/articles">Articles</NuxtLink>
                                 <NuxtLink class="p4 static text-xl h-2 w-20 m-5 font-bold no-underline text-slate-400 group-hover:text-slate-700 hover:translate-x-2 hover:before:content-['=>'] hover:duration-300ms animate-all duration-700ms" to="/people">People</NuxtLink>
                                 <carousel class="relative" />
                             </aside>
        
                <slot />
        
        </div>

        <div class="group">
            
            <div class="relative flex justify-center flex-col">
                <footers class="" />

              <div class="font-mono absolute bottom-0 z-10 w-100% border-t-1 border-b-1 border-l-0 border-r-0 border-solid group-hover:translate-y--40 animate-all duration-500ms bg-slate-200 ">
                  <marquee behavior="alternate" scrollamount="1" scrolldelay="30" direction="left">
                  <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolorem a ad soluta nam debitis iure quos nisi inventore expedita?</span>
                  <span>Testn 2 </span>
                  <span>Test 3 </span>
                  </marquee>
              </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .no-margin {
    @apply box-border;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

</style>
