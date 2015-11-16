var readTime = {
  wpm: 0,
  configWPM: function(setWpm){
    readTime.wpm = setWpm;
  },
  getWPM: function(setWpm){
    return readTime.wpm;
  },
  convertToArray: function(target){
    var elements = [].slice.call(target);
    return elements;
  },
  getTextFromNodes: function(target){
    var arr = readTime.convertToArray(target);
    var newArr = [];
    _.each(arr, function(el){
      newArr += el.innerText.split(',');
    });
    return newArr;
  },
  removePunctuation: function(target){
    function punc(val){
      return (val != '!' && val != '?' && val != '.' && val != ',');
    }
    var returnStr = target.split('').filter(punc).join('');
    return returnStr;
  },
  countWords: function(target){
    var arr = target.split(' ');
    _.each(arr, function(el){
      readTime.removePunctuation(el);
    });
    var count = arr.length;
    return count;
  },
  calcWPM: function(target){
    return Math.round(target/readTime.wpm) + " minute read";
  },
  words: function(target){
    var wordsOnPage = readTime.countWords(readTime.getTextFromNodes(readTime.convertToArray(target)));
    return readTime.calcWPM(wordsOnPage);
  }
};
