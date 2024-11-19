<!-- Contact.svelte -->
<script lang="ts">
  import { onDestroy } from 'svelte';

  const email: string = 'reutershawn45@gmail.com';
  let copySuccess: boolean = false;
  let timeoutId: number | undefined = undefined;

  function handleContact(): void {
    // Copy email to clipboard
    navigator.clipboard.writeText(email)
      .then(() => {
        copySuccess = true;
        
        // Reset success message after 2 seconds
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          copySuccess = false;
        }, 2000);

        // Open email client with pre-filled email
        const mailtoLink: string = `mailto:${email}`;
        window.location.href = mailtoLink;
      })
      .catch((err: Error) => {
        console.error('Failed to copy email:', err);
        // If copy fails, still open email client
        const mailtoLink: string = `mailto:${email}`;
        window.location.href = mailtoLink;
      });
  }

  // Cleanup timeout on component destroy
  onDestroy(() => {
    if (timeoutId) clearTimeout(timeoutId);
  });
</script>

<button
  on:click={handleContact}
  class="contact-btn"
  aria-label="Contact via email"
>
  {#if copySuccess}
     Copied! ✓
  {:else}
    Contact Me
  {/if}
</button>

<style>

button {
		padding: 1em;
		border-radius: 16px;
		border-color: #19a032;
		border: 1px;
		background-color: #4fdb68;
		width: 131px;
	}

  .contact-btn {
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
  }

  .contact-btn:hover {
    background-color: #45a049;
  }

  .contact-btn:active {
    transform: scale(0.98);
  }
</style>