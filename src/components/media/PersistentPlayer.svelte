<script>
  let isPlaying = false;
  
  function togglePlay() {
    isPlaying = !isPlaying;
  }
</script>

<div class="player">
  <div class="info">
    <span class="track">Track Title</span>
    <span class="artist">Artist Name</span>
  </div>
  <button onclick={togglePlay}>
    {isPlaying ? 'Pause' : 'Play'}
  </button>
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
</style>