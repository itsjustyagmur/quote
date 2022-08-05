var quotes = [
    "The resistance to the unpleasant situation is the root of suffering. ― Ram Dass", "Do not let the behavior of others destroy your inner peace. ― Dalai Lama",
    "What the superior man seeks is in himself; what the small man seeks is in others. ― Confucius","If you realize you have enough, you are truly rich. ― Lao Tzu", "To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself. ― Thích Nhất Hạnh",
    "Trying to define yourself is like trying to bite your own teeth. ― Alan Watts",
    "Nothing ever exists entirely alone. Everything is in relation to everything else. – Buddha", "Old friends pass away, new friends appear. It is just like the days. An old day passes, a new day arrives. The important thing is to make it meaningful: a meaningful friend – or a meaningful day. ― Dalai Lama",
    "Surrender to what is. Let go of what was. Have faith in what will be. – Sonia Ricotti", "Wise men don’t judge – they seek to understand  ― Wei Wu Wei", "Wherever you are, it’s the place you need to be. ― Maxime Lagacé ", "Life is a balance of holding on and letting go ― RUMI ", "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment  ― Buddha "
  ]
  function newQuote(){
  var randomNumber = Math.floor(Math.random() *(quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });