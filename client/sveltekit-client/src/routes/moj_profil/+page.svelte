<script>
	import '../../app.css';
	import Calendar from '../../components/calendar.svelte';
	import InsightMenu from '../../components/insightMenu.svelte';
	import Post from '../../components/post.svelte';
</script>

<div class="grid h-screen grid-cols-6">
	<div class="h-full grid-cols-1 col-span-1 border-2 border-solid border-strongpurple">

	</div>
	<InsightMenu>

	</InsightMenu>
	<!--
	<div class="fixed w-1/6 h-full grid-cols-1 bg-white border-2 border-solid border-strongpurple">
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
	</div>-->
	<div class="relative grid h-full col-span-3 grid-rows-4 border-2 border-black border-solid">
		<div class="h-64 ">
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
				class="float-right px-4 py-1 mt-5 mr-10 bg-white border-2 border-solid rounded-full border-strongpurple place-self-end text-strongpurple"
				>Uredi profil</button
			>
		</div>
		<div class="relative w-5/6 place-self-center">
			<Post>
				
			</Post>
			<!--
			<div class="grid grid-cols-1 grid-rows-3">
				<div class="border-t-2 border-l-2 border-r-2 border-gray-500 border-solid rounded-t-full">
						<img src="./src/multimedia/anonymous-user.webp" class="float-left w-12 ml-10 mr-5 rounded-full" alt="">
						<div class="">
							<p>Vinko Milotić</p>
							<p>21.12.2023.</p>
						</div>
				</div>
				<div class="border-gray-500 border-solid border-x-2"></div>
				<div class="border-2 border-gray-500 border-solid rounded-b-full">
					<div class="flex items-center float-left h-full mx-3 ml-10 place-content-center">
						<p class="float-left mr-1">3</p>
						<img src="./src/multimedia/heart.svg" class="w-5" alt="">
					</div>
					<div class="flex items-center h-full ">
						<p class="float-left mr-1">4</p>
						<img src="./src/multimedia/chat-icon.svg" class="w-5" alt="">
					</div>
				</div>
			</div>
			-->
		</div>
	</div>
	<div class="col-span-2">

	</div>
	<div class="fixed right-0 grid w-1/3 h-full grid-rows-2 bg-white border-2 border-solid border-strongpurple">
		<div class="flex items-center justify-center text-2xl text-white h-1/5 bg-strongpurple">
			MOJ KALENDAR
		</div>
		<div class="w-5/6 border-2 border-solid h-3/4 border-strongpurple">
			<Calendar>
			
			</Calendar>
		</div>
		
	</div>
</div>

<style>
	:global(html) {
		background-color: #f8f7f4;
	}
</style>
