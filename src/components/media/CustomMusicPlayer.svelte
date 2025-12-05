<script>
  import { onMount } from 'svelte';

  export let src;
  let audio;
  let isPlaying = false;
  let progress = 0;
  let currentTime = '0:00';
  let duration = '0:00';

  function togglePlay() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  onMount(() => {
    audio = new Audio(src);

    audio.addEventListener('timeupdate', () => {
      progress = (audio.currentTime / audio.duration) * 100;
      currentTime = formatTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
      duration = formatTime(audio.duration);
    });

    audio.addEventListener('ended', () => {
      isPlaying = false;
      progress = 0;
      audio.currentTime = 0;
    });

    return () => {
      audio.removeEventListener('timeupdate', () => {});
      audio.removeEventListener('loadedmetadata', () => {});
      audio.removeEventListener('ended', () => {});
    };
  });
</script>

<div class="bg-gray-800 p-4 rounded-lg text-white w-full">
  <div class="flex items-center">
    <button on:click={togglePlay} class="bg-orange-600 hover:bg-orange-500 text-white font-bold p-3 rounded-full mr-4">
      {#if isPlaying}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      {/if}
    </button>
    <div class="flex-grow">
      <div class="w-full bg-gray-600 rounded-full h-2">
        <div class="bg-orange-500 h-2 rounded-full" style="width: {progress}%"></div>
      </div>
      <div class="flex justify-between text-xs mt-1 text-zinc-400">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    </div>
  </div>
</div>
