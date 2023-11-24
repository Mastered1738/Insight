<script>
	import '../app.css';
</script>

<div class="flex justify-center items-center h-screen">
	<form action="" class="grid grid-cols-1 place-items-center space-y-6 bg-beige rounded-xl w-80">
		<img class="" src="./src/multimedia/Logo.png" alt="Insight logo" />
		<h1 class="text-darkblue text-2xl">Insight</h1>
		<div class="grid grid-cols-1 place-items-start">
			<label for="">Korisnicko ime:</label>
			<input type="text" class="bg-bgbrown" />
		</div>
		<div class="grid grid-cols-1 place-items-start">
			<label for="">Lozinka:</label>
			<input type="password" class="bg-bgbrown" />
		</div>
		<button class="bg-darkblue text-beige px-8">Log in</button>
	</form>
</div>

<style lang="postcss">
	:global(html) {
		background-image: linear-gradient(45deg, #e558fd, #cca7e4, #8f71e7);
	}
</style>
