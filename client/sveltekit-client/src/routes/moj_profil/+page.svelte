<script>
	import '../../app.css';
</script>

<div class="h-screen grid grid-cols-6">
	<div class="border-2 border-solid border-strongpurple h-full col-span-1 grid-cols-1">
		<div class="top-0 h-36 w-full place-items-center flex">
			<img class="w-16 float-left ml-10 mr-3" src="./src/multimedia/Logo.png" alt="" />
			<h1 class="float-right mr-10 text-3xl">Insight</h1>
		</div>
		<div class="grid grid-cols-2 justify-items-center mb-2.5 mt-2.5">
			<img class="h-10" src="./src/multimedia/home-icon.svg" alt="" />
			<p class="h-full mr-24 text-l mt-2">Pocetna</p>
		</div>
		<div class="grid grid-cols-2 justify-items-center mb-2.5 mt-2.5">
			<img class="h-10" src="./src/multimedia/library-icon.svg" alt="" />
			<p class="h-full mr-8 text-l mt-2 w-full">Moji kolegij</p>
		</div>
		<div class="grid grid-cols-2 justify-items-center mb-2.5 mt-2.5">
			<img class="h-12" src="./src/multimedia/my-groups-icon.svg" alt="" />
			<p class="h-full mr-8 text-l mt-2 w-full">Moje grupe</p>
		</div>
		<div class="grid grid-cols-2 justify-items-center mb-2.5 mt-2.5">
			<img class="h-10" src="./src/multimedia/chat-icon.svg" alt="" />
			<p class="h-full mr-8 text-l mt-2 w-full">Poruke</p>
		</div>
		<div class="grid grid-cols-2 justify-items-center mt-72">
			<img
				class="rounded-full w-12 border-2 border-solid border-strongpurple"
				src="./src/multimedia/anonymous-user.webp"
				alt=""
			/>
			<p class="h-full mr-8 text-l mt-2 w-full">Ime Prezime</p>
		</div>
	</div>
	<div class="border-2 border-solid border-black h-full col-span-3 grid grid-rows-4 relative">
		<div class="h-64">
			<img class="w-full h-full" src="./src/multimedia/cover-photo.png" alt="" />
		</div>
		<img
			class="border-4 z-10 border-solid border-beige rounded-full w-32 absolute top-48 left-10"
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
				class="border-strongpurple float-right mt-5 mr-10 border-solid border-2 rounded-full place-self-end px-4 py-1 text-strongpurple"
				>Uredi profil</button
			>
		</div>
	</div>
	<div class="border-2 border-solid border-strongpurple h-full col-span-2">text</div>
</div>

<style>
	:global(html) {
		background-color: #f8f7f4;
	}
</style>
