<script>
	import '../app.css';
</script>

<div class="relative flex justify-center items-center h-screen">
	<img class="absolute z-10 w-24 top-36" src="./src/multimedia/Logo.png" alt="Insight logo" />
	<form
		action=""
		class="absolute grid grid-cols-1 place-items-center space-y-6 bg-beige rounded-xl w-80 pb-6"
	>
		<h1 class="text-darkblue text-2xl mt-16">Insight</h1>
		<div class="grid grid-cols-1 place-items-start">
			<label for="">Korisnicko ime:</label>
			<input type="text" class="bg-bgbrown px-3 py-1 rounded-xl" />
		</div>
		<div class="grid grid-cols-1 place-items-start">
			<label for="">Lozinka:</label>
			<input type="password" class="bg-bgbrown px-3 py-1 rounded-xl" />
		</div>
		<button class="bg-darkblue text-beige px-20 py-1 rounded-xl hover:bg-strongpurple"
			>Log in</button
		>
	</form>
</div>

<style lang="postcss">
	:global(html) {
		background-image: linear-gradient(45deg, #e558fd, #cca7e4, #8f71e7);
	}
</style>
