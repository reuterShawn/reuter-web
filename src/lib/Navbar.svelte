<script lang="ts">
	import ChangeThemeButton from './ChangeThemeButton.svelte';
	import CurrentTheme from './ChangeThemeButton.svelte';
	let currentTheme;

	import ContactMe from './ContactMe.svelte';
</script>

<section class="hero-section">
	<header>
		<div class="header-content">
			<img src="/src/public/logo.png" alt="company logo" />
			<div class="nav-left">
				<!-- <ChangeThemeButton bind:currentTheme/> -->
				<a class="active" href="#home">Home</a>
				<a href="#services">Services</a>
				<a href="#projects">Projects</a>
				<a href="#testimonials">Testimonials</a>
					<ContactMe/>
			</div>
		</div>
	</header>
</section>

<style>
	.header-content {
		display: flex;
		margin-left: 200px;
		left: 0;
		width: 1202px;
		gap: 515px;

	}

	.hero-section {
		width: 1440px;
		height: 100px;
		padding: 32px 0px 0px 0px;
	}
	
	.nav-left {
		width: Hug (569px)px;
height: Hug (59px)px;
left: 633px;
gap: 35px;
opacity: 0px;
	}

	img {
		width: 118px;
		height: 28px;
		margin-top: 5px;
	}

	header a {
		color: black;
		text-align: center;
		padding: 12px;
		text-decoration: none;
		font-size: 16px;
		margin-left: 10px;
	}
</style>
