<script>
  import { audioPlayer } from '../../store.ts';
  import { onMount, onDestroy } from 'svelte';

  let audio; // Will hold the <audio> element
  let currentTrack = null;
  let isPlaying = false;
  let trackTitle = "Select a session to play";

  let unsubscribe;

  onMount(() => {
    unsubscribe = audioPlayer.subscribe(state => {
      if (state.currentTrack !== currentTrack) {
        currentTrack = state.currentTrack;
        if (currentTrack) {
            audio.src = currentTrack;
            trackTitle = currentTrack.split('/').pop().split('.')[0].replace(/-/g, ' ');
        }
      }

      if (state.isPlaying && audio.paused && audio.src) {
        audio.play().catch(e => console.error("Error playing audio:", e));
      } else if (!state.isPlaying && !audio.paused) {
        audio.pause();
      }
      isPlaying = state.isPlaying;
    });
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  function handlePlayPause() {
    if (currentTrack) {
      audioPlayer.setTrack(currentTrack);
    }
  }

  function onEnded() {
    audioPlayer.pause();
  }

</script>

<audio bind:this={audio} on:ended={onEnded}></audio>

<div class="player">
  <div class="info">
    <span class="track capitalize">{trackTitle}</span>
  </div>
  {#if currentTrack}
  <button on:click={handlePlayPause} class="w-10 h-10 flex items-center justify-center text-white">
    {#if isPlaying}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75zM16.5 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75z" clip-rule="evenodd" />
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
      </svg>
    {/if}
  </button>
  {/if}
</div>

<style>
  .player {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--color-bg-panel, #0f172a);
    border-top: 1px solid var(--color-border, rgba(255,255,255,0.1));
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
  .info {
      min-width: 0;
  }
  .track {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.9rem;
      font-weight: 500;
  }
</style>