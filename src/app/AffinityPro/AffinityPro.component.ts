import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-AffinityPro',
  templateUrl: './AffinityPro.component.html',
  styleUrls: ['./AffinityPro.component.scss']
})
export class AffinityProComponent implements OnInit {
  itemSelected: any;
  imgSelected: string ="../../assets/control-negocio.png";
  pSelected: string = "";
  beneficios: any[] = [];
  modulos: any[] = [];
  moduloSelected: any;
  isDesktop: boolean = false;
  openBenefit: boolean = false;

  constructor() { }

  ngOnInit() {
    this.checkScreenSize();
    this.beneficios = [
  {
    urlImg: "../../assets/control-negocio.png",
    title: "Control de Negocio",
    data: [
      "Toda la información a disposición 24x7 con propio usuario.",
      "Generación de Campañas temporales e independientes de manera rápida.",
      "Muestra reportes estadísticos y de control de cartera.",
      "Desarrollo y disposición de cualquier reporte o estadísticas hecho a la medida.",
      "Muestra el perfil individual por cliente.",
      "Desarrollo de procesos nuevos, configuración de productos nuevos, etc."
    ]
  },
  {
    urlImg: "../../assets/multisistema.png",
    title: "Multisistema",
    data: [
      "Multiaseguradoras: Administra convenios con distintas compañías aseguradoras desde un solo entorno.",
      "Multicliente: Soporta múltiples empresas o intermediarios con configuraciones independientes.",
      "Multiproducto: Maneja diversos tipos de seguros, productos bancarios o servicios financieros.",
      "Multioperación: Opera múltiples flujos de negocio o campañas al mismo tiempo, sin interferencias.",
      "Multimoneda: Gestiona operaciones en diferentes monedas, facilitando la regionalización.",
      "Multicanal: Integra canales digitales, presenciales y telefónicos, garantizando una experiencia omnicanal."
    ]
  },
  {
    urlImg: "../../assets/acceso-sistema.png",
    title: "Acceso a Sistema",
    data: [
      "Permite que la aplicación sea accesible desde cualquier máquina que tenga acceso a internet o desde su intranet.",
    ]
  },
  {
    urlImg: "../../assets/interconexion.png",
    title: "Interconexión",
    data: [
      "Affinity Pro está desarrollado con arquitectura basada en servicios permitiendo la interconexión mediante archivos planos, web services, y API's con sistemas externos e internos.",
    ]
  },
  {
    urlImg: "../../assets/facil-parametrizacion.png",
    title: "Facil Configuración",
    data: [
      "Permite la facil configuración de productos, tomando en cuenta sus diferentes tipificaciones para cada uno.",
    ]
  },
  {
    urlImg: "../../assets/control-cumulos.png",
    title: "Control de Cúmulos",
    data: [
      "Maneja el control por persona, ya sea entre una sola cobertura o entre varias coberturas de acuerdo con las especificaciones de cada aseguradora.",
    ]
  },
  {
    urlImg: "../../assets/seguridad.png",
    title: "Seguridad",
    data: [
      "Administración de Usuarios Centralizada",
      "Acceso restringido a los servidores de base de datos y producción.",
      "Certificado digital licenciado.",
      "Cumplimiento de las normas de seguridad de la PCI.",
      "Respaldos diarios.",
      "Utilización de Inteligencia Artificial Cloudfare en el Data Center."
    ]
  }
  ];

  this.modulos = [
  {
    title: "Productos",
    description: "Este módulo es el corazón de todo el sistema, debido a que maneja la configuración de los productos.",
    data: [
      "Configura las pólizas para cada producto",
      "Configura los planes para cada póliza.",
      "Configura las coberturas para cada producto.",
      "Configura los documentos requeridos para cada cobertura."
    ]
  },
  {
    title: "Seguridad",
    description: "En este módulo se configura y administra los perfiles de usuarios.",
    data: [
      "Configura agencias por zonas y zonas por regiones, asignando usuarios a cada agencia.",
      "Permite controlar y supervisar ventas por agencia, región o zona.",
      "Define perfiles de usuario con accesos y autorizaciones específicos."
    ]
  },
  {
    title: "Clientes",
    description: "Es el módulo que permite guardar la información de los clientes. ",
    data: [
      "Se puede generar la consulta individual del cliente donde se muestra su perfil, cartera de productos y estado de cuenta.",
      "Permite también la modificación de datos claves como la tarjeta de crédito o débito de cobro, fechas de vencimiento, beneficiarios y datos personales.",
      "Además, este módulo lleva el control por separado de los productos, pólizas, cobranza, seguridad, siniestros y reportes por cada aseguradora.",
    ]
  },
  {
    title: "Ventas",
    description: "Está opción registra las transacciones del sistema como son:",
    data: [
      "Generación de nuevas pólizas en línea.",
      "Baja de pólizas.",
      "Inclusión y exclusión de beneficiarios o dependientes.",
      "Emisión y entrega de certificados digitales.",
      "Consulta de certificados.",
      "Generación masiva de pólizas y certificados."
    ]
  },
  {
    title: "Cobranza",
    description: "Es uno de los módulos más importantes, ya que es donde se controla que las ventas que se realicen se cobren debidamente.",
    data: [
      "Permite la generación de cuotas, generación de archivos de cobro, lectura y carga de archivos de cobro, control y registro de los depósitos que se realicen de lo cobrado a la aseguradora. ",
      "En la configuración se debe indicar si un producto debe nacer con una cuota pagada, o si se deben generar las cuotas por fecha de emisión de la póliza o por fecha de corte relacionado a un producto financiero.",
      "Se adapta a las necesidades de cualquier sistema de cobro, informándole la cuota, el monto, a quien se le debe deducir y el medio de cobro.",
      
    ]
  },
  {
    title: "Inteligencia de Negocio",
    description:"El sistema contiene una gran gama de reportes y estadísticas para el control, mantenimiento y recuperación de la cartera.",
    data: [
      "Genera reportes estadísticos para un mayor análisis del comportamiento de la cartera",
      "Para los reportes de ventas, tiene la capacidad de agregar regiones, zonas y agencias; asignando a cada agencia usuarios los cuales son los que realizan las ventas de las pólizas, y una gran gama de reportes por agencias, zonas y regiones.",
      "Genera reportes relacionadas a la cobranza como, cuotas pendientes, cobranza efectiva y no efectiva, motivo de rechazo de cobro, efectividad de cobranza.",
      "Reportes de post venta como, pólizas canceladas, vencimiento de pólizas, vencimiento de medio de cobro, recuperación de cartera, inventario de pólizas.",
      "Genera reportes de comisiones para vendedores, de acuerdo a los planes de incentivos establecidos.",
      "Genera reporte de éxito sobre las metas planificadas."
    ]
  },
  {
    title: "Cotizador",
    description: "Cotización de los siguientes productos entre las diferentes aseguradoras del mercado:",
    data: [
      "Autos.",
      "Incendio / Vida.",
      "Desempleo.",
      "Hipotecario / Consumo."
    ]
  }
];

  this.itemSelected = this.beneficios[0];
  this.moduloSelected = this.modulos[0];
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isDesktop = window.innerWidth > 768;
  }

  handleBenefitClick(beneficio: any): void {
    this.itemSelected = beneficio;
    if (!this.isDesktop) {
      this.openBenefit = true;
    }
  }

}
