<script>
	import '../../app.css';
	import Calendar from '../../components/calendar.svelte';
	import InsightMenu from '../../components/insightMenu.svelte';
	import Post from '../../components/post.svelte';
</script>

<div class="grid h-screen grid-cols-6">
	<div class="h-full grid-cols-1 col-span-1">
	</div>
	<InsightMenu>
	</InsightMenu>
	<div class="relative grid col-span-3 grid-rows-4 h-4/6">
		<div class="absolute top-0 w-full h-64 border-2 border-black border-solid">
			<img class="w-full h-full" src="./src/multimedia/cover-photo.png" alt="" />
		</div>
		<img
			class="absolute z-10 w-32 border-4 border-black border-solid rounded-full top-48 left-10"
			src="./src/multimedia/anonymous-user.webp"
			alt=""
		/>
		<div class="absolute w-full top-64">
			<div class="float-left mt-20 ml-12">
				<p class="font-bold">Ime Prezime</p>
				<p>ime.prezime@uniri.hr</p>
				<div>
					<p class="float-left mr-1"><b>235</b> pratim</p>
					<p class="float-right ml-1"><b>375</b> pratitelja</p>
				</div>
			</div>
			<button class="float-right px-4 py-1 mt-5 mr-10 bg-white border-2 border-solid rounded-full border-strongpurple place-self-end text-strongpurple">
				Uredi profil
			</button>
		</div>
		<div class="absolute w-5/6 top-[32rem] place-self-center">
			<Post>
			</Post>
			<Post>
				
			</Post>
		</div>
	</div>
	<div class="col-span-2">
	</div>
	<div class="fixed right-0 flex flex-col w-1/3 h-full bg-white">
		<div class="flex items-center justify-center text-2xl text-white h-1/6 bg-strongpurple">
			MOJ KALENDAR
		</div>
		<div class="w-full grid-rows-3 overflow-y-auto border-2 border-solid h-5/6 border-strongpurple">
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
