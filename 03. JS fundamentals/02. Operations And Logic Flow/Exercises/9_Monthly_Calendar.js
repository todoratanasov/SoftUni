function calendar([day, month, year]) {


  let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  let html = [];

  html.push('<table>\n<tr>');

  for(let i = 0; i< days.length; i++) {
    html.push(`<th>${days[i]}</th>`);
  }
  html.push('</tr>\n  <tr>');
  
  let dOneIndex = new Date(year, month - 1, 1, 0, 0, 0, 0).getDay();
  let totalDaysInPreviousMonth = new Date(year, month - 1, 0).getDate();

  let daysToStart = totalDaysInPreviousMonth - dOneIndex + 1;

  for(let i = daysToStart; i <= totalDaysInPreviousMonth; i++) {
    html.push(`<td class="prev-month">${i}</td>`);
  }


  for(let i = 1; i <= 7 - dOneIndex; i++) {
    if(i === day) {
      html.push(`<td class="today">${i}</td>`);
    } else {
      html.push(`<td>${i}</td>`);
    }
  }

  html.push('</tr>\n  <tr>');

  let index = 7 - dOneIndex + 1;
  let totalNumberOfDaysInCurrentMonth = new Date(year, month, 0).getDate();
  let counter = 0;

  for(let i = index; i <= totalNumberOfDaysInCurrentMonth; i++) {
    if(counter % 7 == 0 && counter > 0) { 
      html.push('</tr>\n  <tr>');
    }

    if(i === day) {
      html.push(`<td class="today">${i}</td>`);
    } else {
      html.push(`<td>${i}</td>`);
    }
    
    counter++;
  }

  let dLastIndex = new Date(year, month - 1, totalNumberOfDaysInCurrentMonth, 0, 0, 0, 0).getDay();

  counter = 1;
  for(let i = dLastIndex + 1; i < 7; i++) {
    html.push(`<td class="next-month">${counter}</td>`);

    counter++;
  }

  html.push('</tr>');

  html.push('\n</table>');


  return html.join('');
}

console.log(calendar([1, 1, 1993]));