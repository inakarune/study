    var them_dogs = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}]
/*
    for (var i = 0; i < them_dogs.length; i++){
        console.log(them_dogs[i].name)
    }
*/
    var all_toy = [];
    var i = 0;

    while (i < them_dogs.length){

      for (var j = 0; j < them_dogs[i].toys.length; j++){
        all_toy.push( them_dogs[i].toys[j] );

      console.log(all_toy);
    }
    i++
  }

    function hang_dog (arr, toy){
      document.write(them_dogs[0].name + '가 ' + toy + '를 가지고 잇어요.')
    }

    hang_dog(them_dogs, 'tennis ball');
