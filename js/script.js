$(document).ready(function() {
  $.getJSON("questions-actions.json", function(data) {
    var questionsByCategory = data.questions;
    var actionsByCategory = data.actions;

    $("#truth").click(function() {
      var selectedCategory = $('#mode').text().split(': ')[1];
      var questions = questionsByCategory[selectedCategory];
      var question = questions[Math.floor(Math.random() * questions.length)];
      $("#question").text(question);
    });

    $("#dare").click(function() {
      var selectedCategory = $('#mode').text().split(': ')[1];
      var actions = actionsByCategory[selectedCategory];
      var action = actions[Math.floor(Math.random() * actions.length)];
      $("#question").text(action);
    });
  });
});
  
  function showCategories() {
    var categories = document.getElementById('categories');
    if (categories.style.display === 'none') {
      categories.style.display = 'block';
    } else {
      categories.style.display = 'none';
    }
  }

  function selectCategory(category) {
    var mode = document.getElementById('mode');
    mode.textContent = '▾category: ' + category;
    var categories = document.getElementById('categories');
    categories.style.display = 'none';
  }