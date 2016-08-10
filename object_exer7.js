var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
    'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']
    var favorites = [];
    var obama_job = [];

    var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
}
/*
      for (var i = 0; famous.length; i++){
        var fa_el = famous[i];

        if (fa_el[0] === 'a'){
          favorites.push(fa_el);
        }
        console.log(favorites)
      }
      */

      for (var key in politicos){
        famous.push(politicos[key]);
        //console.log(famous)
      }

      for (var key in politicos){

        if (politicos[key].match('obama')){
          obama_job.push(politicos[key])
        }
      //  console.log(obama_job)
      }

      var b_named_politicos = {};

      for (var key in politicos){
        if (politicos[key].match(' b') || politicos[key][0].match('b')){
          b_named_politicos[key] = politicos[key]
        }
        //console.log(b_named_politicos)
      }

      var reverse_politico_lookup = {};

      for (var key in politicos){
        reverse_politico_lookup[politicos[key]] = [key];


      }
      console.log(reverse_politico_lookup)
