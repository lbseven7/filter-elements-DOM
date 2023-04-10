const filterElement = document.querySelector('header input')

const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterCards)

function filterCards() {
  let foundMatch = false;
  if (filterElement.value != '') {
    for (let card of cards) { 
      let title = card.querySelector('h2')
      title = title.textContent.toLowerCase()
       let filterText = filterElement.value.toLowerCase()
       if (!title.includes(filterText)) {
            card.style.display = 'none'
       }
       else { 
         card.style.display = 'block'
         foundMatch = true;
       }
       const message = document.getElementById('message');
       if (!foundMatch) { 
         message.textContent = `No results found for "${filterText}"`
      } else {
        message.textContent = `Found results for "${filterText}"`; 
      }
    }
  } else {
    for (let card of cards) { 
      card.style.display = 'block'
    }
    document.getElementById('message').textContent = ''; 
  }
}
