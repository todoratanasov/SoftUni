function attachEventsListeners() {
  document.getElementById('daysBtn').addEventListener('click', convert);
  document.getElementById('hoursBtn').addEventListener('click', convert);
  document.getElementById('minutesBtn').addEventListener('click', convert);
  document.getElementById('secondsBtn').addEventListener('click', convert);

  function convert(e) {
    let input;
    switch (e.target.id) {
      case 'daysBtn':
        input = +document.getElementById('days').value;
        document.getElementById('hours').value = input * 24;
        document.getElementById('minutes').value = input * 24 * 60;
        document.getElementById('seconds').value = input * 24 * 60 * 60;
        break;
      case 'hoursBtn':
        input = +document.getElementById('hours').value;
        document.getElementById('days').value = input / 24;
        document.getElementById('minutes').value = input * 60;
        document.getElementById('seconds').value = input * 60 * 60;
        break;
      case 'minutesBtn':
        input = +document.getElementById('minutes').value;
        document.getElementById('days').value = input / 60 / 24;
        document.getElementById('hours').value = input / 60;
        document.getElementById('seconds').value = input * 60;
        break;

      case 'secondsBtn':
        input = +document.getElementById('seconds').value;
        document.getElementById('days').value = input / 60 / 60 / 24;
        document.getElementById('hours').value = input / 60 / 60;
        document.getElementById('minutes').value = input / 60;
        break;
    }
  }
}