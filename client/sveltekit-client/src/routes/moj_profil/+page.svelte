<script>
	import '../../app.css';
	import InsightMenu from '../../components/insightMenu.svelte';
</script>

<div class="grid h-screen grid-cols-6">
	<div class="h-full grid-cols-1 col-span-1 border-2 border-solid border-strongpurple">

	</div>
	<div class="fixed w-1/6 h-full grid-cols-1 border-2 border-solid border-strongpurple">
		<div class="top-0 flex w-full h-36 place-items-center">
			<img class="float-left w-16 ml-10 mr-3" src="./src/multimedia/Logo.png" alt="" />
			<h1 class="float-right mr-10 text-3xl">Insight</h1>
		</div>
		<div class="grid grid-cols-2 justify-items-center mb-2.5 mt-2.5">
			<img class="h-10" src="./src/multimedia/home-icon.svg" alt="" />
			<p class="h-full mt-2 mr-24 text-l">Pocetna</p>
		</div>
		<div class="grid grid-cols-2 justify-items-center mb-2.5 mt-2.5">
			<img class="h-10" src="./src/multimedia/library-icon.svg" alt="" />
			<p class="w-full h-full mt-2 mr-8 text-l">Moji kolegij</p>
		</div>
		<div class="grid grid-cols-2 justify-items-center mb-2.5 mt-2.5">
			<img class="h-12" src="./src/multimedia/my-groups-icon.svg" alt="" />
			<p class="w-full h-full mt-2 mr-8 text-l">Moje grupe</p>
		</div>
		<div class="grid grid-cols-2 justify-items-center mb-2.5 mt-2.5">
			<img class="h-10" src="./src/multimedia/chat-icon.svg" alt="" />
			<p class="w-full h-full mt-2 mr-8 text-l">Poruke</p>
		</div>
		<div class="fixed grid w-1/6 grid-cols-2 border-2 border-solid bottom-10 justify-items-center mt-72 border-strongpurple">
			<img
				class="w-12 border-2 border-solid rounded-full border-strongpurple"
				src="./src/multimedia/anonymous-user.webp"
				alt=""
			/>
			<p class="left-0 flex flex-col items-start justify-center w-full h-full border-2 border-solid text-l border-strongpurple">Ime Prezime</p>
		</div>
	</div>
	<div class="relative grid h-full col-span-3 grid-rows-4 border-2 border-black border-solid">
		<div class="h-64">
			<img class="w-full h-full" src="./src/multimedia/cover-photo.png" alt="" />
		</div>
		<img
			class="absolute z-10 w-32 border-4 border-solid rounded-full border-beige top-48 left-10"
			src="./src/multimedia/anonymous-user.webp"
			alt=""
		/>
		<div class="">
			<div class="float-left mt-20 ml-12">
				<p class="font-bold">Ime Prezime</p>
				<p>ime.prezime@uniri.hr</p>
				<div>
					<p class="float-left mr-1"><b>235</b> pratim</p>
					<p class="float-right ml-1"><b>375</b> pratitelja</p>
				</div>
			</div>
			<button
				class="float-right px-4 py-1 mt-5 mr-10 border-2 border-solid rounded-full border-strongpurple place-self-end text-strongpurple"
				>Uredi profil</button
			>
		</div>
	</div>
	<div class="h-full col-span-2 border-2 border-solid border-strongpurple">text</div>
</div>

<style>
	:global(html) {
		background-color: #f8f7f4;
	}
</style>
