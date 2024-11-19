<script>
	import { 
	  Linkedin,
	  Facebook, 
	  Instagram, 
	  Twitter, 
	  Youtube, 
	  Github

	} from 'lucide-svelte';
  </script>
  
  <div class="connect-container">
	<div class="left-content">
	  <h1>Lets Connect</h1>
	  
	  <div class="content">
		<p class="project-text">Have a project in Mind?</p>
		<p class="chat-text">
		  I am always open for a chat, so get in touch to
		  find out how we can help.
		</p>
	  </div>
	</div>
  
	<div class="right-content">
	  <div class="links">
		<a href="#linkedin" class="link">Linkedin</a>
		<a href="#resume" class="link">Resume</a>
		<a href="mailto:reutershawn45@gmail.com" class="link">reutershawn45@gmail.com</a>
	  </div>
  
	  <div class="social-icons">
		<a href="#linkedin" class="icon"><Linkedin size={24} /></a>
		<a href="#github" class="icon"><Github size={24} /></a>
	  </div>
	</div>
  </div>
  
  <style>
	.connect-container {
	  background-color: #4ade80;
	  min-height: 100vh;
	  padding: 4rem;
	  display: grid;
	  grid-template-columns: 1fr 1fr;
	  gap: 2rem;
	}
  
	.left-content {
	  display: flex;
	  flex-direction: column;
	  gap: 2rem;
	  padding-right: 2rem;
	}
  
	.right-content {
	  display: flex;
	  flex-direction: column;
	  justify-content: flex-end;
	  align-items: flex-start;
	  gap: 2rem;
	  padding-left: 2rem;
	}
  
	h1 {
	  font-size: 4rem;
	  font-weight: 900;
	  color: #000;
	  margin-bottom: 1rem;
	  line-height: 1.1;
font-family: Instrument Sans;
font-size: 76px;
font-weight: 700;
line-height: 91.2px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

	}
  
	.content {
	  max-width: 600px;
	}
  
	.project-text {
	  font-size: 1.75rem;
	  margin-bottom: 1rem;
	  font-weight: 500;
	}
  
	.chat-text {
	  max-width: 80%;
	  font-family: Instrument Sans;
font-size: 24px;
font-weight: 500;
line-height: 28.8px;
text-align: left;
text-decoration-skip-ink: none;

	}
  
	.links {
	  display: flex;
	  flex-direction: column;
	  gap: 1.25rem;
	  margin-bottom: 2rem;
	}
  
	.link {
	  color: #000;
	  text-decoration: none;
	  font-size: 1.25rem;
	  transition: opacity 0.2s;
	  font-weight: 500;
	}
  
	.link:hover {
	  opacity: 0.8;
	}
  
	.social-icons {
	  display: flex;
	  gap: 1.5rem;
	}
  
	.icon {
	  color: #000;
	  transition: opacity 0.2s;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
  
	.icon:hover {
	  opacity: 0.8;
	}
  
	@media (max-width: 1024px) {
	  .connect-container {
		grid-template-columns: 1fr;
		padding: 2rem;
	  }
  
	  .right-content {
		padding-left: 0;
	  }
  
	  .left-content {
		padding-right: 0;
	  }
  
	  h1 {
		font-size: 3rem;
	  }
  
	  .project-text {
		font-size: 1.5rem;
	  }
  
	  .chat-text {
		font-size: 1.125rem;
		max-width: 100%;
	  }
	}
  
	@media (max-width: 640px) {
	  .connect-container {
		padding: 1.5rem;
	  }
  
	  h1 {
		font-size: 2.5rem;
	  }
  
	  .project-text {
		font-size: 1.25rem;
	  }
  
	  .chat-text {
		font-size: 1rem;
	  }
	}
  </style>