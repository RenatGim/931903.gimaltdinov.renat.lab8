function Create(){
  let string = document.createElement('tr');
  let arr =[];

  for (let i = 0; i < 5; i++) {
    arr.push(document.createElement('td'));
  }

  let butUp = document.createElement('button');
  butUp.className = 'Up';
  butUp.innerHTML = '&#8593;';
  butUp.addEventListener("click", MoveUp);
  
  let butDown = document.createElement('button');
  butDown.className = 'Down';
  butDown.innerHTML = '&#8595;';
  butDown.addEventListener("click", MoveDown);

  let butDelete = document.createElement('button');
  butDelete.className = 'Delete';
  butDelete.innerHTML = 'x';
  butDelete.addEventListener("click", DeleteStr);

  arr[0].append(document.createElement('input'));
  arr[1].append(document.createElement('input'));
  arr[2].append(butUp);
  arr[3].append(butDown);
  arr[4].append(butDelete);

  for (let i = 0; i < arr.length; i++) {
    string.append(arr[i]);
  }

  document.body.prepend(string);
}

function Save(){
  arr = document.querySelectorAll("input")
  document.body.append('{');

  for (let i = 0; i < arr.length; i+=2) {
    document.body.append('"' + arr[i].value+ '":');
    document.body.append('"' + arr[i+1].value+ '"');
    
    if (i+2 < arr.length)
      document.body.append(',');
  }

  document.body.append('}');
}

function MoveUp(event){
  let str = event.target.parentElement.parentElement;
  if (str.previousSibling.localName == 'tr')
    event.target.parentElement.parentElement.parentElement.insertBefore(str, str.previousSibling);
}

function MoveDown(event){
  let str = event.target.parentElement.parentElement;
  if (str.nextSibling.localName == 'tr')
    event.target.parentElement.parentElement.parentElement.insertBefore(str.nextSibling, str);
}

function DeleteStr(event){
  event.target.parentElement.parentElement.remove();
}