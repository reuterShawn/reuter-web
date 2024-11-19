<script lang="ts">
	interface serviceCard {
		name: String;
		desc: String;
		color: string;
	}

	// services.ts
	export const serviceCards: serviceCard[] = [
		{
			name: 'Web Development',
			desc: 'Custom website and web application development using modern technologies',
			color: 'hsba(211, 17%, 95%, 1)'
		},
		{
			name: 'Blog Website with Svelte CMS ',
			desc: 'Fast blog website with Svelte CMS',
			color: 'hsba(38, 38%, 95%, 1)'
		},
		{
			name: 'Marketing Website',
			desc: 'Cloud infrastructure setup and management with scalable solutions',
			color: 'hsba(298, 10%, 95%, 1)'
		}
	];
</script>

<section class="services-section">
	<h2 class="title">Web development services I offer</h2>

	<div class="card-group">
		<div class="service-one card">
			<h2>Pagy Template Solution</h2>
			<p>With this simple website builder we can setup your website to be viewed by people in no time. This is a great solution if you want something fast and simple. </p>
			<link href="">
		</div>

		<div class="service-two card">
			<h2>Custom Designed Static Website </h2>
			<p>A website that is designed specifically to fit your needs. Comes with a color scheme and three pages</p>
		</div>

		<div class="service-three card">
			<h2>Ecommerce Solution with Prestashop</h2>
			<p>Custom </p>
		</div>
	</div>
</section>

<style>
	.title {
		width: 602px;
		height: 116px;
		top: 34px;
		left: 120px;
		gap: 0px;
		opacity: 0px;
		font-family: Instrument Sans;
		font-size: 48px;
		font-weight: 700;
		line-height: 57.6px;
		text-align: left;
	}

	.services-section {
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.title {
		font-family: 'Instrument Sans', sans-serif;
		font-size: 48px;
		font-weight: 700;
		line-height: 1.2;
		margin-bottom: 3rem;
		color: #000;
		max-width: 600px;
	}

	.card-group {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.card {
		padding: 2rem;
		border-radius: 12px;
		transition: transform 0.2s ease;
	}

	.card:hover {
		transform: translateY(-5px);
	}

	.card h2 {
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.card p {
		font-size: 16px;
		line-height: 1.5;
		color: #4a4a4a;
	}

	.service-one {
		background-color: #cadef3; /* Light blue */
	}

	.service-two {
		background-color: #f3d4f3; /* Light purple */
	}

	.service-three {
		background-color: #f1cf96; /* Light orange/tan */
	}

	@media (max-width: 768px) {
		.title {
			font-size: 36px;
		}

		.card-group {
			grid-template-columns: 1fr;
		}
	}
</style>
