<script>
    import "/src/styles.css";
    import Bending from "./Bending.svelte";
</script>

<div class="hero-contain">
    <Bending/>
    <h1>Connecting Through Code and Culinary</h1>
    <p>Freelance programmer based in Mankato, Minnesota. I specialize in crafting custom websites that help small businesses thrive.</p>
</div>


<style>
.hero-contain {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    max-width: 1200px;
    margin: 2rem auto;
    row-gap: 0.5em; /* Specific gap for rows */
}

/* Rest of the styles remain the same */

h1 {
    grid-column: 1;
    grid-row: 1;
    color: #0E0D0D;
    font-family: 'Instrument Sans', sans-serif;
    font-size: 68px;
    font-weight: 700;
    line-height: 1.28; /* Converted to relative unit */
    text-align: left;
    margin: 0;
    max-width: 600px; /* Added to control line length */
}

p {
    grid-column: 1;
    grid-row: 2; /* Changed to row 2 to place it under the heading */
    font-size: 18px;
    line-height: 1.6;
    margin-top: -100px;
    max-width: 500px; /* Added to control line length */
}

@media (max-width: 768px) {
    .hero-contain {
        grid-template-columns: 1fr;
        text-align: center;
    }

    h1 {
        font-size: 42px;
        line-height: 1.2;
    }

    p {
        margin: 0 auto; /* Centers the paragraph on mobile */
    }
}

    </style>
