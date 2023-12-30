<script>
	import { goto } from '$app/navigation';
	import '../app.css';

	function LogIn(){
		console.log('====================================');
		console.log('Changing routes');
		console.log('====================================');
		window.location.assign('./moj_profil');
	}
</script>

<div class="relative flex items-center justify-center h-screen">
	<img class="absolute z-10 w-24 top-36" src="./src/multimedia/Logo.png" alt="Insight logo" />
	<form
		action=""
		class="absolute grid grid-cols-1 pb-6 space-y-6 place-items-center bg-beige rounded-xl w-80"
	>
		<h1 class="mt-16 text-2xl text-darkblue">Insight</h1>
		<div class="grid grid-cols-1 place-items-start">
			<label for="">Korisnicko ime:</label>
			<input type="text" class="px-3 py-1 bg-bgbrown rounded-xl" />
		</div>
		<div class="grid grid-cols-1 place-items-start">
			<label for="">Lozinka:</label>
			<input type="password" class="px-3 py-1 bg-bgbrown rounded-xl" />
		</div>
		<button class="px-20 py-1 bg-darkblue text-beige rounded-xl hover:bg-strongpurple" on:click={LogIn} type="submit">Log in</button>
	</form>
</div>

<style lang="postcss">
	:global(html) {
		background-image: linear-gradient(45deg, #e558fd, #cca7e4, #8f71e7);
	}
</style>
