<script>
	import Hero from '$lib/Hero.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Services from '$lib/Services.svelte';
	import Footer from '$lib/Footer.svelte';
    import Cta from '$lib/CTA.svelte';
	import Projects from '$lib/Projects.svelte';
	import Testomonials from '$lib/Testomonials.svelte';
</script>
  
  
  <section id="hero" class="content-section">
	<Navbar />

	<Hero />
  </section>
  <Footer />

  <section id="services" class="content-section">
	<Services/>
  </section>

  <section id="testimonials" class="content-section">
	<Testomonials/>
  </section>

  <section id="projects" class="content-section">
	<!-- <Projects/> -->
  </section>
  

  <section id="contact" class="content-section">
    <Cta/>
  </section>
  
  <style>
	.content-section {
	  min-height: 50vh;
	  padding: 20px 20px;
	  /* Add any additional styling for your sections */
	}

	#hero {
		background-color: #ddfbe1;
		left: 0;
		right: 0;
		top: 0;
	}

	* {
		left: 0;
		right: 0;
		top: 0;
	}
  </style>