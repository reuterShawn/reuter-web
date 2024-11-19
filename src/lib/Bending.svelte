<script lang="ts">
    let imageContainer:HTMLDivElement;
    let rotateX = $state(0);
    let rotateY = $state(0);
    let scale = $state(1);
  
    $effect(() => {
      if (!imageContainer) return;
  
      const handleMouseMove = (e) => {
        const { left, top, width, height } = imageContainer.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
  
        rotateX = y * 20; // Adjust for bending intensity
        rotateY = -x * 20; // Adjust for bending intensity
        scale = 1.1;
      };
  
      const handleMouseLeave = () => {
        rotateX = 0;
        rotateY = 0;
        scale = 1;
      };
  
      imageContainer.addEventListener('mousemove', handleMouseMove);
      imageContainer.addEventListener('mouseleave', handleMouseLeave);
  
      return () => {
        imageContainer.removeEventListener('mousemove', handleMouseMove);
        imageContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  </script>
  
  <div class="image-container" bind:this={imageContainer}>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img
      src="/src/public/headshotShawn.jpg"
      alt="man in a blue suit smiling"
      class="bendable-image"
      style:transform="perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg) scale({scale})"
    />
  </div>
  
  <style>
    .image-container {
      width: 384px;
height: 369px;
gap: 0px;
border-radius: 32px 0px 0px 0px;
opacity: 0px;
    }
    .bendable-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease-out;
    }
  </style>