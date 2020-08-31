class lingkaran{
    constructor(r){
        this.r=r
}
luas = () => {
    return 3.14 * (this.r + this.r)
} 

keliling = () => {
    return 3.14 * (this.r * 2)
}
}

class tabung extends lingkaran{
    constructor(r,t){
     super(r,t)
     this.t=t
   
}
volume = () => {
    return (3.14 * (this.r*this.r)) * this.t
}
luasper = () => {
    return ((3.14 * (this.r * 2)* this.r) + (2*(3.14*(this.r*this.r))))
}
selimut = () => {
    return(3.14 *(this.r * 2 ))* this.t
}
}
class kerucut extends lingkaran{
    constructor(r,s,t){
    super(r)
    this.t=t
    this.s=s
    
    }
volume = () =>{
    return 3.14 * (this.r*this.r) * this.t / 3 // 3 diambil dari 1/3
}
luasper = () => {
    return 3.14 * this.r*this.r + 3.14 * this.r * this.s
}
selimut = () =>{
    return 3.14 * this.r * this.s
}
}

class bola extends lingkaran{
    constructor(r){
        super(r)
    }
volume = () =>{
    return 4/3 * 3.14 * this.r * this.r * this.r
}
luasper = () =>{
    return 4 * 3.14 * this.r * this.r
}
}

//Perhitungan
let satu=new tabung(15,50)
console.log("=== Tabung ===");
console.log("Volume tabung : " + satu.volume());
console.log("Luaspermukaan: " + satu.luasper());
console.log("LuasSelimut : " + satu.selimut());

console.log("");
let dua=new kerucut(20,40)
console.log("=== Kerucut ===");
console.log("Volume kerucut : " + dua.volume());
console.log("Luaspermukaan: " + dua.luasper());
console.log("LuasSelimut : " + dua.selimut());

console.log("");
let tiga =new bola(15)
console.log("=== Bola ===");
console.log("Volume bola: " + tiga.volume());
console.log("Luaspermukaan bola: " + tiga.luasper());
