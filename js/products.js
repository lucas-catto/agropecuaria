
// carroussel

function carroussel(index, name = '', images = [], modal = false) {

	var carrousselImages = '';

	images.forEach((image, i) => {
		carrousselImages += `
	    	<div class="carousel-item ${ i == 0 ? "active" : "" }">
	      		<img src="${image}?text=${name}+${"0"+(i+1)}" class="d-block w-100">
	    	</div>
		`;
	});

	return `
		<div id="carousel-${index}${modal == true ? "-modal" : "" }" class="carousel slide">
			<div class="carousel-inner">

				${carrousselImages}

			</div>

			<button class="carousel-control-prev" type="button" data-bs-target="#carousel-${index}${modal == true ? "-modal" : "" }" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>

			<button class="carousel-control-next" type="button" data-bs-target="#carousel-${index}${modal == true ? "-modal" : "" }" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	`;
}

// modal

function modal(index = 0, name = '', description = '', price = 0, amount = 0, categories = '', images = []) {
    return `
        <button type="button" class="btn btn-outline-success w-100" data-bs-toggle="modal" data-bs-target="#modal-index-${index}">Ver Mais</button>

        <div class="modal fade modal-xl" id="modal-index-${index}" tabindex="-1" aria-labelledby="modal-label-${index}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

					<div class="modal-header">
						<h1 class="modal-title fs-5" id="modal-label-${index}">${name}</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>

					<div class="modal-body pb-0">
					
						${carroussel(index, name, images, true)}

						<div class="p-2 d-flex justify-content-between align-items-center">
							<p class="p-0 m-0">${
								price.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL'
								})
							}</p>
							<p class="p-0 m-0">Quantidade: ${amount}</p>
						</div>

						<hr class="p-0 m-0">

						<p class="p-2 m-0">${description}</p>
						
					</div>

					<div class="modal-footer">
						<a class="btn btn-secondary d-flex align-items-center gap-1 btn-success">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                            </svg>
							<p class="p-0 m-0">Saiba Mais</p>
						</a>
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
					</div>
                </div>
            </div>
        </div>
    `;
}

// products array

const products = [
	{
		name: "Sementes de Milho",
		description: "Sementes de Milho de alta qualidade, com excelente germinação e vigor. São ideais para plantio extensivo, garantindo uma colheita abundante mesmo em condições adversas, graças à sua resistência e alto potencial produtivo.",
		price: 20,
		amount: 100,
		categories: ["Sementes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Ração para Bovinos",
		description: "Ração para Bovinos com fórmula balanceada e ingredientes selecionados que promovem o crescimento e a saúde do gado. Desenvolvida para aumentar a produtividade, esta ração fornece os nutrientes essenciais para o pleno desenvolvimento do rebanho.",
		price: 150,
		amount: 75,
		categories: ["Ração"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Fertilizante Orgânico",
		description: "Fertilizante Orgânico de alta performance que melhora significativamente a qualidade do solo e promove o crescimento saudável das plantas. Elaborado a partir de compostos naturais ricos em nutrientes, é ideal para culturas sustentáveis e para manter o equilíbrio ecológico do solo.",
		price: 50,
		amount: 200,
		categories: ["Fertilizantes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Trator 4x4",
		description: "Trator 4x4 robusto e de alta performance, projetado para enfrentar terrenos difíceis com facilidade. Equipado com tecnologia avançada, garante eficiência máxima, versatilidade e durabilidade em diversas operações agrícolas, tornando-o indispensável para grandes propriedades.",
		price: 25000,
		amount: 5,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Sementes de Soja",
		description: "Sementes de Soja selecionadas para oferecer alta produtividade e qualidade superior. Provenientes de cultivares comprovadas, garantem resistência a doenças e condições climáticas adversas, resultando em uma plantação mais robusta e rendimento elevado.",
		price: 30,
		amount: 120,
		categories: ["Sementes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Ração para Suínos",
		description: "Ração para Suínos com fórmula especial que promove um crescimento saudável e ganho de peso uniforme. Elaborada com nutrientes essenciais e digestibilidade otimizada, esta ração contribui significativamente para o desenvolvimento ideal dos animais.",
		price: 120,
		amount: 150,
		categories: ["Ração"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Arado Agrícola",
		description: "Arado Agrícola de alta robustez, projetado para o preparo eficiente e preciso do solo. Ideal para a agricultura moderna, este arado auxilia na implantação de um plantio uniforme e melhora a produtividade ao maximizar a aeração e a penetração do solo.",
		price: 3500,
		amount: 10,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Pulverizador Agrícola",
		description: "Pulverizador Agrícola ideal para a aplicação uniforme de defensivos e outros produtos. Desenvolvido com tecnologia de ponta, ele garante máxima eficiência na cobertura e proteção das culturas, minimizando perdas e otimizando o uso de insumos.",
		price: 1800,
		amount: 8,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Sementes de Feijão",
		description: "Sementes de Feijão de qualidade premium, escolhidas para oferecer alta produtividade e resistência. Cultivadas cuidadosamente, garantem excelente germinação e um rendimento significativo na colheita, elevando o padrão de produção.",
		price: 15,
		amount: 200,
		categories: ["Sementes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Mudas de Laranja",
		description: "Mudas de Laranja certificadas, preparadas para garantir uma produção consistente de frutas de alta qualidade. Apesar de serem mudas, neste contexto foram agrupadas como parte do segmento de Sementes, por representarem o início do ciclo produtivo.",
		price: 8,
		amount: 300,
		categories: ["Sementes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Adubo Químico",
		description: "Adubo Químico granulado de alta performance, formulado para oferecer uma nutrição balanceada ao solo. Comprovadamente eficaz, promove o desenvolvimento robusto das culturas e aumenta a produtividade com sua aplicação simples e resultados mensuráveis.",
		price: 70,
		amount: 150,
		categories: ["Fertilizantes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Colheitadeira",
		description: "Colheitadeira moderna e eficiente, projetada para otimizar o processo de colheita dos grãos. Oferece alta produtividade e precisão, reduzindo o tempo e o esforço necessários para a colheita, sendo indispensável para operações em larga escala.",
		price: 75000,
		amount: 3,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Irrigador",
		description: "Irrigador completo, ideal para a criação de sistemas de irrigação eficientes para diversas culturas. Proporciona uma distribuição uniforme da água, contribuindo para a economia de recursos hídricos e garantindo que o solo receba a quantidade ideal para o cultivo.",
		price: 2400,
		amount: 12,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Injetor de Fertilizante",
		description: "Injetor de Fertilizante projetado para a aplicação precisa de fertilizantes líquidos, garantindo uma nutrição equilibrada para as culturas. Sua tecnologia avançada permite uma dosagem controlada, otimizando o uso dos insumos e promovendo a eficiência agrícola.",
		price: 950,
		amount: 15,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Pesticida Orgânico",
		description: "Pesticida Orgânico elaborado com ingredientes naturais, ideal para o controle biológico de pragas. Neste contexto, por estarmos lidando apenas com quatro categorias, este produto foi classificado como Fertilizantes, agrupando insumos agroquímicos para controle e nutrição do solo.",
		price: 35,
		amount: 180,
		categories: ["Fertilizantes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Máquina de Enfardamento",
		description: "Máquina de Enfardamento de alta eficiência, projetada para compactar e enfardar feno ou palha com precisão. Ideal para operações agrícolas de grande escala, ela facilita o armazenamento e o transporte do material produzido, otimizando a logística.",
		price: 5000,
		amount: 6,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Bomba de Água",
		description: "Bomba de Água submersível robusta, ideal para sistemas de irrigação e drenagem. Projetada para alta durabilidade, ela garante um fluxo constante e confiável mesmo nas condições mais desafiadoras, assegurando o pleno funcionamento dos sistemas agrícolas.",
		price: 1200,
		amount: 20,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Sementes de Trigo",
		description: "Sementes de Trigo de qualidade premium, ideais para a produção de farinhas e pães, com alta taxa de germinação e vigor comprovado.",
		price: 25,
		amount: 150,
		categories: ["Sementes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Sementes de Cevada",
		description: "Sementes de Cevada selecionadas para oferecer bom rendimento e qualidade, perfeitas para a fabricação de cervejas artesanais e outras bebidas.",
		price: 22,
		amount: 130,
		categories: ["Sementes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Sementes de Girassol",
		description: "Sementes de Girassol ricas em óleos naturais, ideais para a produção de óleo e para uso em alimentação saudável, garantindo alto rendimento e qualidade.",
		price: 18,
		amount: 160,
		categories: ["Sementes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Ração para Aves",
		description: "Ração formulada especialmente para aves, garantindo energia e os nutrientes necessários para o crescimento saudável e desempenho ideal.",
		price: 80,
		amount: 100,
		categories: ["Ração"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Ração para Caprinos",
		description: "Ração nutritiva e balanceada para caprinos, promovendo o crescimento adequado e a produtividade tanto na produção de leite quanto de carne.",
		price: 90,
		amount: 90,
		categories: ["Ração"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Ração para Peixes",
		description: "Ração de alta digestibilidade, especialmente desenvolvida para peixes, que favorece o rápido crescimento e mantém a saúde dos animais em sistemas de aquacultura.",
		price: 60,
		amount: 200,
		categories: ["Ração"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Fertilizante Líquido",
		description: "Fertilizante Líquido concentrado, de fácil absorção e rápida ação, ideal para corrigir as deficiências nutricionais do solo de forma eficaz.",
		price: 55,
		amount: 180,
		categories: ["Fertilizantes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Fertilizante NPK",
		description: "Fertilizante NPK balanceado, com as proporções ideais de nitrogênio, fósforo e potássio, promovendo um crescimento vigoroso e sustentável das plantas.",
		price: 65,
		amount: 160,
		categories: ["Fertilizantes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Micronutrientes para Plantas",
		description: "Mistura de micronutrientes essenciais que complementa a nutrição do solo, aumentando a absorção de nutrientes e melhorando significativamente a produtividade das culturas.",
		price: 40,
		amount: 190,
		categories: ["Fertilizantes"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Secador de Grãos",
		description: "Secador de Grãos de alta eficiência, projetado para reduzir a umidade de forma rápida e segura, preservando a qualidade do produto final e otimizando o armazenamento.",
		price: 3200,
		amount: 7,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Enfardador Automático",
		description: "Enfardador Automático de última geração, que compacta feno ou palha com precisão, facilitando o armazenamento e transporte dos insumos agrícolas com eficiência.",
		price: 5200,
		amount: 5,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	},
	{
		name: "Descompactador de Solo",
		description: "Descompactador de Solo que melhora a aeração e penetração de água e nutrientes, permitindo um preparo mais adequado do terreno para o cultivo.",
		price: 2800,
		amount: 8,
		categories: ["Equipamentos"],
		images: [
			"https://placehold.co/600x400",
			"https://placehold.co/600x400",
			"https://placehold.co/600x400"
		]
	}
];

// cards

function cards(products = []) {
	var productsId = document.getElementById('products');
	var cards = [];

	products.forEach((product, index) => {
		cards += `
			<div class="col-12 col-sm-12 col-md-4 col-lg-3">
				<div class="card border-success overflow-hidden" data-categories="${product.categories}">

					${carroussel(index, product.name, product.images)}

					<div class="card-body">
						<h5 class="card-title text-truncate">${product.name}</h5>
						<p class="card-text text-truncate">${product.description}</p>

						<div class="d-flex justify-content-between align-items-center">
							<p>${
								product.price.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL'
								})
							}</p>
							<p>Quantidade: ${product.amount}</p>
						</div>

						${modal(
							index,
							product.name,
							product.description,
							product.price,
							product.amount,
							product.categories,
							product.images
						)}
					</div>
				</div>
			</div>
		`;
	});

	productsId.innerHTML = cards;
}

// filter

function filter(category = '') {
	
	if (category === 'all') {
		cards(products);
		return;
	}
	
	var cardsArray = [];

	products.forEach((product, index) => {

		if (product.categories.includes(category)) {

			cardsArray += `
				<div class="col-12 col-sm-12 col-md-4 col-lg-3">
					<div class="card border-success overflow-hidden" data-categories="${product.categories}">
		
						${carroussel(index, product.name, product.images)}
		
						<div class="card-body">
							<h5 class="card-title text-truncate">${product.name}</h5>
							<p class="card-text text-truncate">${product.description}</p>
		
							<div class="d-flex justify-content-between align-items-center">
								<p>${
									product.price.toLocaleString('pt-BR', {
										style: 'currency',
										currency: 'BRL'
									})
								}</p>
								<p>Quantidade: ${product.amount}</p>
							</div>
		
							${modal(
								index,
								product.name,
								product.description,
								product.price,
								product.amount,
								product.categories,
								product.images
							)}
						</div>
					</div>
				</div>
			`;
		}
	});

	document.getElementById('products').innerHTML = cardsArray;
}

// search

document.getElementById('submit-button').addEventListener('click', () => {

	var search = document.getElementById('search').value;
	search = search.toLowerCase();

	var correspondences = [];
	
	products.forEach(product => {

		if (product.name.toLowerCase().includes(search)) {
			correspondences.push(product);
		}
	});

	if (correspondences.length == 0) {
		alert("Sem correspondências.");
	}

	cards(correspondences);
});

// load cards when page load

document.addEventListener('DOMContentLoaded', () => {
	cards(products);
});
