import {mydata} from './choice_data.json';
document.addEventListener(
    'DOMContentLoaded',
    () => {
      //test replace inner
      document.getElementsByClassName('myformajax')[0].textContent ='Hello';
      let html = '';
      html +=  JSON.stringify(mydata[0]['step1col']);
      html += '<hr>';
      html +=  JSON.stringify(mydata[0]['step2row']);
      html += '<hr>';
      html +=  JSON.stringify(mydata[0]['datalist']);
      html += '<hr>';
      html += '<form>';
      mydata[0]['step1col'].forEach(val => {
        html += '<br><input type="radio" name="'  +  val.name  + '" id="' +  val.id  + '">' + '<label for="' + val.id + '">' + val.label + '</label>';
      });
      html += '<br><input type="submit" id="gostep2" value="Go Step 2">';
      html += '</form>';
      
      html += '<hr>';
      html += '<form>';
      mydata[0]['step2row'].forEach(val => {
        html += '<br><input type="radio" name="'  +  val.name  + '" id="' +  val.id  + '">' + '<label for="' + val.id + '">' + val.label + '</label>';
      });
      html += '<br><input type="submit" id="goresult" value="Go Result">';
      html += '</form>';

      html += '<hr>';
      mydata[0]['datalist'].forEach(val => {
        html+='<div class="itemshow"><input type="checkbox"><div class="imgwrap">';
        html +=`<img src="${'./content/' + val.url}" alt="${val.name}" title="${val.name}">`;
        html+=`</div><p>${val.name}</p></div>`;
      });
      document.getElementsByClassName('myformajax')[0].innerHTML = html;
    });
