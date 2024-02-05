//Exportem la classe Cicle
export class Cicle {
    constructor(nom, categoria, numAlumnes, abreviatura) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0;
        this.moduls = [];
    }
    //Resultat final
    toString() {
        // let modulStrings = this.moduls.map(modul => modul.toString()).join(", ");
        console.log(`Cicle: ${this.nom}, ${this.categoria}, ${this.numAlumnes}, ${this.abreviatura}`);
    }

    setNumEdicions() {
        this.numEdicions += 1;
        let data = new Date();
        console.log(`Num d'edicions: ${this.numEdicions}`);
        console.log(`Última edició: ${data}`);
    }

    addModul(modul) {
        this.moduls.push(modul);
    }

    calculHores() {
        let horesTotals = this.moduls.reduce((sum, modul) => sum + parseInt(modul.hores), 0);
        let count = this.moduls.length;
        console.log(`Hores totals: ${horesTotals}`);
        console.log(`Nombre de mòduls: ${count}`);
        let mitjana = horesTotals / count;
        console.log(`Calcul en hores: ${mitjana}`);
        alert("Calcul en hores: " + mitjana);
    }
}