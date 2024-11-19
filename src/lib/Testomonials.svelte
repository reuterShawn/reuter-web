
<script>
  import { ArrowLeft, ArrowRight } from 'lucide-svelte';

  const testimonials = [
    {
      text: "Working with them was an absolute pleasure. They delivered exactly what we needed and more.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/api/placeholder/100/100"
    },
    {
      text: "Exceptional work and attention to detail. Our website has never looked better.",
      author: "Michael Chen",
      role: "Founder, Design Co",
      image: "/api/placeholder/100/100"
    },
    {
      text: "Outstanding service and communication throughout the entire project.",
      author: "Emily Rodriguez",
      role: "Marketing Director",
      image: "/api/placeholder/100/100"
    }
  ];

  let currentIndex = $state(0);
  let isAnimating = $state(false);

  function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex = (currentIndex + 1) % testimonials.length;
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  function prevSlide() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  // Auto advance slides using $effect
  $effect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  });
</script>


<div>
  <h2>Clients about my Services</h2>
</div>


<div class="testimonials-container">
  <button 
    class="nav-button left" 
    onclick={prevSlide}
    disabled={isAnimating}
  >
    <ArrowLeft size={24} />
  </button>


  <div class="testimonial-wrapper">
    <div 
      class="testimonial-slide"
      style:opacity={isAnimating ? 0.5 : 1}
      style:transform={isAnimating ? 'scale(0.95)' : 'scale(1)'}
    >
      <div class="testimonial-content">
        <img 
          src={testimonials[currentIndex].image} 
          alt={testimonials[currentIndex].author}
          class="author-image"
        />
        <p class="testimonial-text">"{testimonials[currentIndex].text}"</p>
        <div class="author-info">
          <p class="author-name">{testimonials[currentIndex].author}</p>
          <p class="author-role">{testimonials[currentIndex].role}</p>
        </div>
      </div>
    </div>
  </div>
  
  <button 
    class="nav-button right" 
    onclick={nextSlide}
    disabled={isAnimating}
  >
    <ArrowRight size={24} />
  </button>


  <div class="dots">
    {#each testimonials as _, i}
      <button 
        class="dot {currentIndex === i ? 'active' : ''}"
        onclick={() => {
          if (!isAnimating) {
            isAnimating = true;
            currentIndex = i;
            setTimeout(() => {
              isAnimating = false;
            }, 500);
          }
        }}
      ></button>
    {/each}
  </div>
</div>

<style>

h2 {
font-family: Instrument Sans;
font-size: 48px;
font-weight: 700;
line-height: 57.6px;
text-align: left;
margin-left:  100px;

}

  .testimonials-container {
    position: relative;
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
  }

  .testimonial-wrapper {
    position: relative;
    overflow: hidden;
    min-height: 300px;
  }

  .testimonial-slide {
    transition: all 0.5s ease;
  }

  .testimonial-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }

  .author-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    object-fit: cover;
  }

  .testimonial-text {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1.5rem;
    max-width: 600px;
    font-style: italic;
  }

  .author-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .author-name {
    font-weight: 600;
    color: #000;
    margin: 0;
  }

  .author-role {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }

  .nav-button:hover {
    background: #f5f5f5;
    transform: translateY(-50%) scale(1.1);
  }

  .nav-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ccc;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dot.active {
    background: #333;
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    .testimonials-container {
      padding: 1rem;
    }

    .testimonial-text {
      font-size: 1rem;
    }

    .nav-button {
      width: 32px;
      height: 32px;
    }
  }
</style>