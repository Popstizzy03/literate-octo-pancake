<script>
  import { onMount } from 'svelte';

  export let videos = [
    { id: '76979871', title: 'The New Standard' }, // Placeholder ID
    { id: '76979871', title: 'Midnight Sessions' },
    { id: '76979871', title: 'Analog Dreams' }
  ];

  let activeIndex = 0;

  function next() {
    activeIndex = (activeIndex + 1) % videos.length;
  }

  function prev() {
    activeIndex = (activeIndex - 1 + videos.length) % videos.length;
  }
</script>

<div class="carousel-container relative w-full max-w-4xl mx-auto mb-32">
    <div class="flex items-end justify-between mb-8 border-b border-[var(--color-border)] pb-4">
        <h2 class="text-3xl font-bold text-[var(--color-ink-primary)]">Visual Reels</h2>
        <div class="flex gap-2">
            <button on:click={prev} class="p-2 hover:text-[var(--color-signal)] transition-colors" aria-label="Previous video">&larr;</button>
            <button on:click={next} class="p-2 hover:text-[var(--color-signal)] transition-colors" aria-label="Next video">&rarr;</button>
        </div>
    </div>

  <div class="relative aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-[var(--color-border)] group">
    {#each videos as video, index}
      <div 
        class="absolute inset-0 transition-opacity duration-500 ease-in-out flex flex-col"
        style="opacity: {index === activeIndex ? 1 : 0}; pointer-events: {index === activeIndex ? 'auto' : 'none'}"
      >
        {#if index === activeIndex}
            <iframe 
            src="https://player.vimeo.com/video/{video.id}?title=0&byline=0&portrait=0" 
            class="w-full h-full" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen
            loading="lazy"
            title={video.title}
            ></iframe>
        {/if}
        
        <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <p class="text-[var(--color-signal)] font-mono text-sm">{video.title}</p>
        </div>
      </div>
    {/each}
  </div>
  
  <!-- Indicators -->
  <div class="flex justify-center gap-2 mt-4">
      {#each videos as _, i}
        <button 
            on:click={() => activeIndex = i}
            class="w-2 h-2 rounded-full transition-colors duration-300 {i === activeIndex ? 'bg-[var(--color-signal)]' : 'bg-[var(--color-ink-secondary)] opacity-30'}"
            aria-label="Go to slide {i + 1}"
        ></button>
      {/each}
  </div>
</div>