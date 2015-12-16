angular.module('quoteBook').factory('dataService', function(){
    var service = {};
    var quotes = [
      {
          text: 'Life isn\'t about getting and having, it\'s about giving and being.',
          author: 'Kevin Kruse'
      },
      {
          text: 'Whatever the mind of man can conceive and believe, it can achieve',
          author: 'Napoleon Hill'
      },
      {
          text: 'Strive not to be a success, but rather to be of value.',
          author: 'Albert Einstein'
      },
      {
          text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
          author: 'Robert Frost'
      },
      {
          text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
          author: 'Amelia Earhart'
      },
      {
          text: 'Life is what happens to you while you\'re busy making other plans.',
          author: 'John Lennon'
      },
      {
          text: 'What even is a jQuery?',
          author: 'Tyler S. McGinnis'
      }
    ];

    service.getData = function(){
        return quotes;
    };
    service.addData = function(quoteObj){
        if(quoteObj && quoteObj.text && quoteObj.author && Object.keys(quoteObj).length === 2){
            quotes.unshift(quoteObj);
            return {};
        }
        return console.error("NO OBJECT PROVIDED!");
    };
    service.removeData = function(quoteObj){
        quotes.forEach(function(item, index, array){
            if(quoteObj.text === item.text){
                quotes.splice(index, 1);
                return console.log("Quote Removed: " + item.text);
            }
        });
    };

    return service;
});
