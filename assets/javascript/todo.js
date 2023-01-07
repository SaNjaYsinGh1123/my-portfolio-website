const category = document.querySelectorAll('.category-box span');

console.log(category[0].innerText);

for(var i=0;i <= category.length; i++){
  if(category[i].innerText == 'Personal')
  {
    category[i].style.backgroundColor = 'rgb(82, 82, 233)';
  }
  else if(category[i].innerText == 'Work')
  {
    category[i].style.backgroundColor = 'rgba(218, 165, 32, 0.86)';
  }
  else if(category[i].innerText == 'School')
  {
    category[i].style.backgroundColor = 'purple';
  }
  else if(category[i].innerText == 'Cleaning')
  {
    category[i].style.backgroundColor = 'rgb(234, 46, 46)';
  }
  else if(category[i].innerText == 'other')
  {
    category[i].style.backgroundColor = 'grey';
  }
}

