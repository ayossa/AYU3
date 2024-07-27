class Animal{
    constructor(breed='red',talkingStyle='brrr'){
    this.breed= breed;
    this.talkingStyle= talkingStyle ;
  
}
  talk(){
      console.log(this.talkingStyle);
  }
  showUp(whereX=100,whereY=100) {
    stroke(this.breed);
    strokeWeight(50);
      point(whereX, whereY);
  }
}

function setup() {
    createCanvas(640,640);
    background('green');
  
  let mrMonkey=new Animal('yellow',"hah-ha!");
  mrMonkey.talk();
  mrMonkey.showUp(200,200);
}