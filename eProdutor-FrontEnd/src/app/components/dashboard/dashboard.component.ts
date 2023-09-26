import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GraphicsService } from 'src/app/services/graphics.service';


import { Chart, ChartType, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  @ViewChild('pieChartEstado', { static: true }) pieChartEstado: ElementRef | undefined;
  @ViewChild('pieChartCulturaPlantada', { static: true }) pieChartCulturaPlantada: ElementRef | undefined;
  @ViewChild('pieChartUsoSolo', { static: true }) pieChartUsoSolo: ElementRef | undefined;

  chartData!: any;
  areaTotalData: any[] = [];
  areaAgricultavelData: any[] = [];
  areaVegetacaoData: any[] = [];

  dados!: any;



  constructor(
    private grafico: GraphicsService,
  ) { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.CULTURASPLANTADAS();
    this.ESTADOS();
    this.USOSOLO();
  }


  CULTURASPLANTADAS() {
    this.grafico.obterDados().subscribe(info => {
      this.dados = info;


      //#CulturaPlantada
      const ctxCulturaPlantada = this.pieChartCulturaPlantada?.nativeElement.getContext('2d');
      const labels = this.dados.culturasPlantadas.map((item: any) => item.label);
      const data = this.dados.culturasPlantadas.map((item: any) => item.value);

      this.culturasPlantadas(ctxCulturaPlantada, labels, data);
    });
  }

  culturasPlantadas(ctx: CanvasRenderingContext2D, labels: string[], data: number[]): void {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgb(255, 227, 130)',
            'rgb(200, 160, 62)',
            'rgb(238, 152, 29)',
            'rgb(87, 168, 221)',
            'rgb(71, 24, 32)',
          ],
        }]
      },
    });
  }



  ESTADOS() {
    this.grafico.obterDados().subscribe(info => {
      this.dados = info;
      console.log('//////', this.dados);

      const ctxEstados = this.pieChartEstado?.nativeElement.getContext('2d');
      const labels = this.dados.estados.map((item: any) => item.label);
      const data = this.dados.estados.map((item: any) => item.value);


      this.estados(ctxEstados, labels, data);
    });
  }

  estados(ctx: CanvasRenderingContext2D, labels: string[], data: number[]): void {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgb(240, 0, 94)',
            'rgb(254, 171, 204)',
            'rgb(170, 1, 69)',
          ],
        }]
      },
    });
  }


  USOSOLO() {
    this.grafico.obterDados().subscribe(info => {
      this.dados = info;

      const ctxUsoSolo = this.pieChartUsoSolo?.nativeElement.getContext('2d');
      const labels = this.dados.usoSolo.map((item: any) => item.label);
      const data = this.dados.usoSolo.map((item: any) => item.value);

      this.usoSolo(ctxUsoSolo, labels, data);
    });
  }

  usoSolo(ctx: CanvasRenderingContext2D, labels: string[], data: number[]): void {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgb(152, 169, 67)',
            'rgb(101, 94, 50)',
          ],
        }]
      },
    });
  }

}
