<script>
  import { onMount } from 'svelte';

  export let videos = [
    { id: '1140313256', title: "Mint Lounge" },
    { id: '1140785377', title: "Marie's Glow" },
    { id: '1142988915', title: "Debby's Gadgets" },
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
       <div class="flex gap-4">
    <!-- Inline CSS for Neu-Brutalist interaction -->
    <style>
        .brutal-nav-btn {
            border: 3px solid black;
            box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
            transition: all 0.1s;
            background-color: white;
            color: black;
            font-size: 1.5rem; /* Larger arrow for visibility */
            width: 4rem;      /* Fixed width */
            height: 4rem;     /* Fixed height */
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
        }
        /* Active (click) state for the button */
        .brutal-nav-btn:active {
            transform: translate(4px, 4px);
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
            background-color: black;
            color: var(--color-signal, #ccff00); /* Use signal color or fallback */
        }
        /* Hover state */
        .brutal-nav-btn:hover {
            background-color: var(--color-signal, #ccff00);
            color: black;
        }
    </style>

    <!-- Previous Button -->
    <button 
        on:click={prev} 
        class="brutal-nav-btn"
        aria-label="Previous video"
    >
        &larr;
    </button>

    <!-- Next Button -->
    <button 
        on:click={next} 
        class="brutal-nav-btn"
        aria-label="Next video"
    >
        &rarr;
    </button>
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
            loading="lazy"
            title={video.title}
            ></iframe>
        {/if}
        
        <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <p class="text-[var(--color-signal)] font-mono text-sm mb-25">{video.title}</p>
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