document.addEventListener('DOMContentLoaded', function () {
  var outputDiv = document.getElementById('output');
  var output = '';

  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += 'Amazon';
    } else if (i % 3 === 0) {
      output += 'Google';
    } else if (i % 5 === 0) {
      output += 'Facebook';
    } else {
      output += i;
    }

    output += '<br>';
  }

  outputDiv.innerHTML = output;
});
