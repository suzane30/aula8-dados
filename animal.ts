class Cachorro {
    public altura : String;
    public  ano : number;
    public  cor: String;
    public raca: String;
    public genero : String;
    public peso : String;

    constructor (altura, ano, cor, raca, genero, peso){
        this.altura = altura;
        this.ano = ano;
        this.cor = cor;
        this.raca = raca;
        this.genero = genero;
        this.peso = peso;


    }

    latir () {
        console.log("auauauau")

    }
    correr () {
        console.log("rumrumrur")

    }
    comer () {

    }
    dormir () {

    }
    brincar (){

    }


}

const cachorro = new Cachorro ('grande', 2025, 'preto', 'pudou', 'maculino', 45)
const cachorro1 = new Cachorro ('pequeno', 2024, 'marrom', 'pastoralemao',' feminino', 62 )
const cachorro2 = new Cachorro ('gigante', 2022, 'preto', 'rotivale', 'masculino', 79)


 cachorro.latir();
 cachorro.correr();
 console.log(cachorro.ano);

 cachorro2.latir();