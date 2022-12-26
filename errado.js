function Locadora(marca, modelo, ano, km) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.km = km
}

let carro = new Locadora[
    {marca: 'fiat', modelo: 'uno', ano: 2019, km: 120000},
    {marca: 'ford', modelo: 'ranger', ano: 2020, km: 1200},
    {marca: 'Hyunday', modelo: 'i30', ano: 2012, km: 68000},
    {marca: 'mercedes', modelo: 'C180', ano: 2023, km: 0}
]

console.log(carro.[1]);