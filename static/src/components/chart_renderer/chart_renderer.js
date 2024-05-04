/** @odoo-module */

import { registry } from "@web/core/registry"
import { loadJS } from "@web/core/assets"
const { Component, onWillStart, useRef, onMounted } = owl

export class ChartRenderer extends Component {
    setup(){
        this.chartRef = useRef("chart")
        onWillStart(async () => {
			await loadJS('/jekdoo/static/src/lib/chartjs4/chart4.js');
			await loadJS('/jekdoo/static/src/lib/chartjs4/chart4-label.js');
		});

        onMounted(()=>this.renderChart())
    }

    renderChart(){
		const chart_type = this.props.type;

		let data_donut = {
			labels: ['Maritime Cyber Security', 'DPA ISM Code', 'IMDG Code'],
			datasets: [
				{
					label: 'Penjualan Bulan Lalu',
					data: [300, 50, 100],
					backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(255, 205, 86)',
						'rgb(54, 162, 235)',
					],
					hoverOffset: 4,
				},
			],
		};

		let data_pie = {
			labels: ['Aktif', 'Tidak Aktif', 'Belum Konfirmasi'],
			datasets: [
				{
					label: 'Jumlah Peserta',
					data: [100, 50, 30],
					backgroundColor: [
                        'rgb(54, 162, 235)',
						'rgb(255, 99, 132)',
						'rgb(255, 205, 86)',
					],
					hoverOffset: 4,
				},
			],
		};

		let data_bar = {
			labels: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'Mei',
				'Jun',
				'Jul',
				'Agu',
				'Sep',
				'Okt',
				'Nov',
				'Des',
			],
			datasets: [
				{
					label: '2023',
					data: [
						300, 50, 100, 200, 150, 175, 200, 400, 500, 300, 250,
						300,
					],
					hoverOffset: 4,
				},
				{
					label: '2024',
					data: [200, 150, 200, 150, 20, 0, 0, 0, 0, 0, 0, 0],
					hoverOffset: 4,
				},
			],
		};

		/*
#24A2EB
Pastel Blue: #9DC3E6
Pastel Pink: #FFB6C1
Pastel Green: #A1D490
Pastel Yellow: #FAE29C
Pastel Purple: #B59ED4
Pastel Orange: #FFCCB6
Pastel Turquoise: #A0E6E6
Pastel Lavender: #D0D0FF
Pastel Peach: #FFD8BF
Pastel Mint: #A7FFC9
Darker Pastel Blue: #7BA9D4
Darker Pastel Pink: #FFA7B2
Darker Pastel Green: #8AC97A
Darker Pastel Yellow: #F0D79D
Darker Pastel Purple: #9F88C6
Darker Pastel Orange: #FFB099
Darker Pastel Turquoise: #7CBEBE
Darker Pastel Lavender: #B6B6FF
Darker Pastel Peach: #FFC8A3
Darker Pastel Mint: #8AFFBB
*/

		let data_all = {
			labels: ['Minggu 1', 'Minggu 2', 'Minggu 3'],
			datasets: [
				{
					label: 'Bulan Lalu',
					data: [300, 50, 100],
					hoverOffset: 4,
					backgroundColor: '#FFB6C1', // Bar chart specific options
					borderColor: '#FFB6C1', // Bar chart specific options
				},
				{
					label: 'Bulan Ini',
					data: [100, 70, 150],
					hoverOffset: 4,
					backgroundColor: '#A0E6E6', // Bar chart specific options
					borderColor: '#A0E6E6', // Bar chart specific options
				},
			],
		};

		const plugin_doughnut = {
			id: 'customCanvasBackgroundColor',
			beforeDraw: (chart, args, options) => {
				const { ctx } = chart;
				ctx.save();
				ctx.globalCompositeOperation = 'destination-over';
				ctx.fillStyle = options.color || 'pink' || '#99ffff';
				ctx.fillRect(0, 0, chart.width, chart.height);
				ctx.restore();
			},
		};

		let option_all = {
			responsive: true,
			plugins: {
				legend: {
					position: 'bottom',
				},
				title: {
					display: true,
					text: this.props.title,
					position: 'bottom',
				},
			},
		};


		let option_pie = {
			responsive: true,
			plugins: {
				legend: {
					position: 'bottom',
				},
				title: {
					display: true,
					text: this.props.title,
					position: 'bottom',
				},
				customCanvasBackgroundColor: {
					color: 'red',
				},
				labels: {
					render: function (args) {
						if (chart_type == 'pie') {
							return `${args.value}\n${args.percentage}%`;
						} else {
							return '';
						}
					},
				},
			},
		};

		let data = data_all;
		if (chart_type == 'pie') {
			data = data_pie;
		} else if (chart_type == 'doughnut') {
			data = data_donut;
		}

		let options = option_all;
		// if (['pie', 'doughnut', 'line',].indexOf(chart_type) !== false) {

		let config = {
			type: chart_type,
			data: data,
			options: options,
		};


        let data_bar_line = {
			labels: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'Mei',
				'Jun',
				'Jul',
				'Agu',
				'Sep',
				'Okt',
				'Nov',
				'Des',
			],
			datasets: [
				{
					label: '', // here i want to hide this label only
					data: [
						300, 50, 100, 200, 150, 175, 200, 400, 500, 300, 250,
						300,
					],
					type: 'line', // Set the type to line for this dataset
					fill: '#24A2EB', // Line chart specific options
					// borderColor: '#24A2EB', // Line chart specific options
					borderColor: '#FFB6C1', // Line chart specific options
					borderWidth: 1, // Line chart specific options
					hidden: false,
				},
				{
					label: '2023',
					data: [
						300, 50, 100, 200, 150, 175, 200, 400, 500, 300, 250,
						300,
					],
					backgroundColor: '#FFB6C1', // Bar chart specific options
					borderColor: '#FFB6C1', // Bar chart specific options
					hoverOffset: 4,
				},
				{
					label: '2024',
					data: [200, 150, 200, 150, 20, 0, 0, 0, 0, 0, 0, 0],
					backgroundColor: '#A0E6E6', // Bar chart specific options
					borderColor: '#A0E6E6', // Bar chart specific options
					hoverOffset: 4,
				},
			],
		};
        let config_for_bar_and_line = {
			type: 'bar',
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'bottom',
						labels: {
                            filter: item => !!item.text,
							// Custom legend callback function
						// 	generateLabels: function (chart) {
						// 		let labels =
						// 			Chart.defaults.plugins.legend.labels.generateLabels(
						// 				chart
						// 			);
								
                        //         if (
						// 			chart.legend.legendItems &&
						// 			chart.legend.legendItems
						// 		.length > 0) {
						// 			chart.legend.legendItems =
						// 				chart.legend.legendItems.filter(
						// 					(item) => !!item.text
						// 				);

                        //             console.log(
						// 				'chart.legend.legendItems: ',
						// 				chart.legend.legendItems
						// 			);
						// 		}


						// 			return labels;
						// 	},
						},
					},
					title: {
						display: true,
						text: this.props.title,
						position: 'bottom',
					},
				},
			},
			data: data_bar_line,
		};


		let config_pie = {
			type: chart_type,
			data: data,
			options: option_pie,
		};

		if (chart_type == 'custom_plugin') {
			config = {
				type: chart_type,
				data: data_donut,
				options: {
					plugins: {
						customCanvasBackgroundColor: {
							color: 'red',
						},
					},
				},
				plugins: [plugin_doughnut],
			};
		}

		const el = this.chartRef.el;

		if (['pie'].indexOf(chart_type) >= 0) {
			new Chart(el, config_pie);
		} else if (['bar'].indexOf(chart_type) >= 0) {
			new Chart(el, config_for_bar_and_line);
		} else {
			new Chart(el, config);
		}
	}
}

ChartRenderer.template = 'jekdoo.ChartRenderer';