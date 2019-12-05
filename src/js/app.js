/**
 * 
 *    I. Variables
 *    II. DOM Generation Variables
 *    III. Functions 
 *    IV. Date Range Picker
 *    V. Add logo
 *    VI. Preview Invoice
 *    VII.Create Form
 * 
 */

/**
*   I. Variables
*/
// Add invoice
const invoiceGeneratorInvoice = document.querySelector('.form-invoice-generator')
const dateInput = invoiceGeneratorInvoice.querySelector('#date')
const tvaCheckbox = invoiceGeneratorInvoice.querySelector('#is-tva')
const tvaSelectContainer = invoiceGeneratorInvoice.querySelector('.tva-type-container')
const tvaSelectInput = invoiceGeneratorInvoice.querySelector('#tva-type')
const tvaOtherContainer = invoiceGeneratorInvoice.querySelector('.tva-other-container')
const tvaOtherInput = invoiceGeneratorInvoice.querySelector('#tva-other')
const totalHTContainer = invoiceGeneratorInvoice.querySelector('.total-ht-container')
const totalHTInput = invoiceGeneratorInvoice.querySelector('#total-ht')
const totalTTCContainer = invoiceGeneratorInvoice.querySelector('.total-ttc-container')
const totalTTCInput = invoiceGeneratorInvoice.querySelector('#total-ttc')
const companyNameInput = invoiceGeneratorInvoice.querySelector('#company')
const invoiceNameInput = invoiceGeneratorInvoice.querySelector('#invoice-name')
const firstNameInput = invoiceGeneratorInvoice.querySelector('#first-name')
const lastNameInput = invoiceGeneratorInvoice.querySelector('#last-name')
const numberInvoiceInput = invoiceGeneratorInvoice.querySelector('#invoice-number')
const commentInput = invoiceGeneratorInvoice.querySelector('#invoice-comment')
const tvaNumberInput = invoiceGeneratorInvoice.querySelector('#tva-number')
const tvaSenderNumberInput = invoiceGeneratorInvoice.querySelector('#tva-number-sender')
const companySenderInput = invoiceGeneratorInvoice.querySelector('#sender-company')
const siretNumberInput = invoiceGeneratorInvoice.querySelector('#siret')
const nafInput = invoiceGeneratorInvoice.querySelector('#naf')
const addressInput = invoiceGeneratorInvoice.querySelector('#address')
const zipInput = invoiceGeneratorInvoice.querySelector('#zip')
const cityInput = invoiceGeneratorInvoice.querySelector('#city')
const countryInput = invoiceGeneratorInvoice.querySelector('#country')
const addElemButton = invoiceGeneratorInvoice.querySelector('.add-elem')
const elemContainerForm = invoiceGeneratorInvoice.querySelector('.product-container')
const saveInvoiceButton = invoiceGeneratorInvoice.querySelector('button[type=submit]')
const firstNameSenderInput = invoiceGeneratorInvoice.querySelector('#sender-first-name')
const lastNameSenderInput = invoiceGeneratorInvoice.querySelector('#sender-last-name')
const addressSenderInput = invoiceGeneratorInvoice.querySelector('#sender-address')
const zipSenderInput = invoiceGeneratorInvoice.querySelector('#sender-zip')
const citySenderInput = invoiceGeneratorInvoice.querySelector('#sender-city')
const countrySenderInput = invoiceGeneratorInvoice.querySelector('#sender-country')
const fileContainer = invoiceGeneratorInvoice.querySelector('.file-infos')
const sizeSpan = fileContainer.querySelector('.size')
const nameSpan = fileContainer.querySelector('.name')
const logoInput = invoiceGeneratorInvoice.querySelector('#logo')

// Invoice Preview

const previewInvoice = invoiceGeneratorInvoice.querySelector('.preview')
const companyNameInvoice = previewInvoice.querySelector('.provider-infos .company-name')
const providerNameInvoice = previewInvoice.querySelector('.provider-infos .name')
const addressInvoice = previewInvoice.querySelector('.provider-infos .address')
const companyNameSenderInvoice = previewInvoice.querySelector('.store-infos .company-name')
const nameSenderInvoice = previewInvoice.querySelector('.store-infos .name')
const addressSenderInvoice = previewInvoice.querySelector('.store-infos .address')
const tvaNumberinvoice= previewInvoice.querySelector('.tva')
const dateInvoice = previewInvoice.querySelector('.invoice-date p')
const invoiceNumber = previewInvoice.querySelector('.invoice-number p')
const nameInvoice = previewInvoice.querySelector('.invoice-name')
const companySenderInvoice = previewInvoice.querySelector('.sender-company')
const siretInvoice = previewInvoice.querySelector('.sender-siret')
const nafInvoice = previewInvoice.querySelector('.sender-naf')
const tvaSenderInvoice = previewInvoice.querySelector('.sender-tva')
const productContainerInvoice = previewInvoice.querySelector('.product-container')
const summHT = previewInvoice.querySelector('.summ-ht .summ')
const summTTCContainer = previewInvoice.querySelector('.summ-ttc')
const summTTC = summTTCContainer.querySelector('.summ')
const commentInvoice = previewInvoice.querySelector('.comment span')
const logoContainer = previewInvoice.querySelector('.img')
const imgContainer = previewInvoice.querySelector('.invoice-header .img')

/**
*   II.Dom Generation Variables
*/
let numberOfElem = 0
// DOM Generation
// Form
const div = document.createElement('div')
const input = document.createElement('input')
input.classList.add('form-control')
const formRow = div.cloneNode()
formRow.classList.add('form-row')
const nameInput = input.cloneNode()
nameInput.setAttribute('type', 'text')
nameInput.setAttribute('placeholder', 'Elément')
nameInput.setAttribute('required', '')
const qtyInput = input.cloneNode()
qtyInput.setAttribute('type', 'number')
qtyInput.setAttribute('placeholder', '1')
qtyInput.setAttribute('required', '')
const elemNumberP = document.createElement('p')
elemNumberP.classList.add('btn', 'btn-outline-info', 'disabled')
const deleteButton = document.createElement('i')
deleteButton.classList.add('btn', 'btn-danger', 'fa-trash-alt', 'fas')
formRow.appendChild(elemNumberP)
formRow.appendChild(nameInput)
formRow.appendChild(qtyInput)
formRow.appendChild(deleteButton)
// Invoice
const span = document.createElement('span')
const productRow = div.cloneNode()
productRow.classList.add('product')
const productNameInvoice = span.cloneNode()
productNameInvoice.classList.add('description')
const productQtyInvoice = span.cloneNode()
productQtyInvoice.classList.add('qty')
productRow.appendChild(productNameInvoice)
productRow.appendChild(productQtyInvoice)

/**
*   III. Functions
*/

// Show an element depending of selected option
const showInputFromSelect = (select, elemToDisplay, array) => {
  if (array.includes(select.value)) {
    elemToDisplay.classList.remove('d-none')
  }
  else{
    elemToDisplay.classList.add('d-none')
  }
}
// Display an element depending of a checkbox
const showInputFromCheckbox = (input, elemToDisplay) => {
  if (input.checked) {
    elemToDisplay.classList.remove('d-none')
  }
  else{
    elemToDisplay.classList.add('d-none')
  }
}
// Calculate TTC
const calcTTC = (ht, tva) => {
  ht = parseFloat(ht)
  tva = 1 + parseFloat(tva)
  return ht * tva
}
// Calculate HT
const calcHT = (ttc, tva) => {
  ttc = parseFloat(ttc)
  tva = parseFloat(tva)
  return ttc / (1+tva)

}
// return the tva percent
const returnTva = () => {
  // if it's others calculate it
  if (tvaSelectInput.value == 'other') {
    return parseFloat(tvaOtherInput.value) / 100
  }
  else{
    return tvaSelectInput.value
  }
}
// Add an element to the form 
const addElemToForm = () => {
  let elemForm = formRow.cloneNode(true)
  let elemInvoice = productRow.cloneNode(true)
  // set elem number
  let specificNumber = parseInt(numberOfElem) + 1
  elemForm.querySelector('.disabled').innerHTML = specificNumber
  // append
  elemContainerForm.appendChild(elemForm)
  productContainerInvoice.appendChild(elemInvoice)
  // increment
  numberOfElem++
  // delete on click 
  elemForm.querySelector('i').addEventListener('click', () => {
    elemForm.remove()
    elemInvoice.remove()
    sortElemNumber()
  })
  let nameInput = elemForm.querySelector('input[type=text]')
  let qtyInput = elemForm.querySelector('input[type=number]')
  // On type => transfer to invoice
  nameInput.addEventListener('input', () => {
    elemInvoice.querySelector('.description').innerHTML = nameInput.value
  })
  qtyInput.addEventListener('input', () => {
    elemInvoice.querySelector('.qty').innerHTML = qtyInput.value
  })
}
// Sort elems on delete
const sortElemNumber = () => {
  numberOfElem--
  let elems = [...elemContainerForm.querySelectorAll('.form-row')]
  for (const key in elems) {
    let specificNumber = parseInt(key) + 1
    elems[key].querySelector('.disabled').innerHTML = specificNumber
  }
}
// Save the invoice
const save = (elemSelector, name,button, quality = 3 ) => {
  let element = document.querySelector(elemSelector)
  // Make a screenshot
  html2canvas(element, {scale: quality, allowTaint : true})
  .then(canvas => {
    // create the PDF
    let pdf = new jsPDF('p', 'mm', 'a4')
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', -1, -1, 212, 299)
    pdf.save(name+'.pdf')
    button.classList.remove('d-none')
    button.nextElementSibling.classList.add('d-none')
  })
}
// validate a file typee
const validFileType = (file) => {
  const fileTypes = [
    'image/gif',
    'image/x-icon',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/tiff'
  ]
  for(var i = 0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      return true;
    }
  }
  return false;
}
// Return a file Size
const returnFileSize = (number) => {
  if(number < 1024) {
    return number + ' octets';
  }
  else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + ' Ko';
  } 
  else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + ' Mo';
  }
}



/**
*   IV. Date Range Picker
*/
// init the date range picker
$(dateInput).daterangepicker({
  singleDatePicker: true,
  opens: "center",
  autoUpdateInput: true,
  locale : {
    "format": "DD/MM/YYYY",
    "monthNames": [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ],
    "daysOfWeek": [
      "Dim",
      "Lun",
      "Mar",
      "Mer",
      "Jeu",
      "Ven",
      "Sam"
    ],
  }
})
// Init 
dateInvoice.innerHTML = `Date :  ${dateInput.value}`
// On change apply to invoice
$(dateInput).on('apply.daterangepicker', function(ev, picker) {
  dateInvoice.innerHTML = `Date :  ${picker.endDate.format('DD/MM/YYYY')}`
});

/**
 *   V. Logo
 */
// On logo addeed to input
logoInput.addEventListener('change', () => {
  // check if logo
  if (logoInput.files.length != 0) {
    // check logo type
    if (validFileType(logoInput.files[0])) {
      // display logo infos
      fileContainer.classList.remove('d-none')
      // Set name and size
      nameSpan.innerHTML = logoInput.files[0].name
      sizeSpan.innerHTML = returnFileSize(logoInput.files[0].size)
      // Create image
      let img = new Image()
      logoContainer.appendChild(img)
      // append in preview
      img.src = window.URL.createObjectURL(logoInput.files[0]);
    }
  }
  // erase input
  else{
    fileContainer.classList.add('d-none')
    // remove img
    logoContainer.querySelector('img').remove()
  }
})

/**
*   VI. Preview Invoice
*/
// init
showInputFromCheckbox(tvaCheckbox, totalTTCContainer)
showInputFromCheckbox(tvaCheckbox, tvaSelectContainer)
showInputFromCheckbox(tvaCheckbox, summTTCContainer)
showInputFromSelect(tvaSelectInput,tvaOtherContainer, ['other'])

// display or ot elem depend of if tva or else
tvaSelectInput.addEventListener('change', () => {
  totalTTCInput.value = ""
  totalHTInput.value = ""
  summHT.innerHTML = ""
  summTTC.innerHTML = ""
  showInputFromSelect(tvaSelectInput,tvaOtherContainer, ['other'])
})
tvaCheckbox.addEventListener('change', () => {
  showInputFromCheckbox(tvaCheckbox, totalTTCContainer)
  showInputFromCheckbox(tvaCheckbox, tvaSelectContainer)
  showInputFromCheckbox(tvaCheckbox, summTTCContainer)
})
// Calc tva or ht
totalTTCInput.addEventListener('input', () => {
  if (isNaN(returnTva())) {
    $(tvaOtherInput).popover('enable')
    $(tvaOtherInput).popover('show')
    totalHTInput.value = 0
    totalTTCInput.value = 0
  }
  else{
    totalHTInput.value = calcHT(totalTTCInput.value, returnTva()).toFixed(2)
    summHT.innerHTML = `${totalHTInput.value} €`
    summTTC.innerHTML = `${totalTTCInput.value} €`
  }
})
totalHTInput.addEventListener('input', () => {
  if (isNaN(returnTva())) {
    $(tvaOtherInput).popover('enable')
    $(tvaOtherInput).popover('show')
    totalHTInput.value = 0
    totalTTCInput.value = 0
  }
  else{
    totalTTCInput.value = calcTTC(totalHTInput.value, returnTva()).toFixed(2)
    summHT.innerHTML = `${totalHTInput.value} €`
    summTTC.innerHTML = `${totalTTCInput.value} €`
  }
})

// Add value inputs on user keywords input to preview
companyNameInput.addEventListener('input', () => {
  companyNameInvoice.innerHTML = `${companyNameInput.value}`
})
firstNameInput.addEventListener('input', () => {
  providerNameInvoice.innerHTML = `${firstNameInput.value} ${lastNameInput.value}`
})
lastNameInput.addEventListener('input', () => {
  providerNameInvoice.innerHTML = `${firstNameInput.value} ${lastNameInput.value}`
})
zipInput.addEventListener('input', () => {
  addressInvoice.innerHTML = `${addressInput.value}, ${zipInput.value}, ${cityInput.value}, ${countryInput.value}`
})
cityInput.addEventListener('input', () => {
  addressInvoice.innerHTML = `${addressInput.value}, ${zipInput.value}, ${cityInput.value}, ${countryInput.value}`
})
countryInput.addEventListener('input', () => {
  addressInvoice.innerHTML = `${addressInput.value}, ${zipInput.value}, ${cityInput.value}, ${countryInput.value}`
})
addressInput.addEventListener('input',() => {
  addressInvoice.innerHTML = `${addressInput.value}`
})
companySenderInput.addEventListener('input', () => {
  companyNameSenderInvoice.innerHTML = `${companySenderInput.value}`
})
firstNameSenderInput.addEventListener('input', () => {
  nameSenderInvoice.innerHTML = `${firstNameSenderInput.value} ${lastNameSenderInput.value}`
})
lastNameSenderInput.addEventListener('input', () => {
  nameSenderInvoice.innerHTML = `${firstNameSenderInput.value} ${lastNameSenderInput.value}`
})
zipSenderInput.addEventListener('input', () => {
  addressSenderInvoice.innerHTML = `${addressSenderInput.value}, ${zipSenderInput.value}, ${citySenderInput.value}, ${countrySenderInput.value}`
})
citySenderInput.addEventListener('input', () => {
  addressSenderInvoice.innerHTML = `${addressSenderInput.value}, ${zipSenderInput.value}, ${citySenderInput.value}, ${countrySenderInput.value}`
})
countrySenderInput.addEventListener('input', () => {
  addressSenderInvoice.innerHTML = `${addressSenderInput.value}, ${zipSenderInput.value}, ${citySenderInput.value}, ${countrySenderInput.value}`
})
addressSenderInput.addEventListener('input',() => {
  addressSenderInvoice.innerHTML = `${addressSenderInput.value}`
})
tvaNumberInput.addEventListener('input',() => {
  tvaNumberinvoice.innerHTML = `${tvaNumberInput.value}`
})
numberInvoiceInput.addEventListener('input',() => {
  invoiceNumber.innerHTML = `Facture N° ${numberInvoiceInput.value}`
})
invoiceNameInput.addEventListener('input',() => {
  nameInvoice.innerHTML = `${invoiceNameInput.value}`
})
commentInput.addEventListener('input',() => {
  commentInvoice.innerHTML = `${commentInput.value}`
})
tvaSenderNumberInput.addEventListener('input',() => {
  tvaSenderInvoice.innerHTML = `TVA : ${tvaSenderNumberInput.value}`
})
nafInput.addEventListener('input',() => {
  nafInvoice.innerHTML = `NAF/APE : ${nafInput.value}`
})
siretNumberInput.addEventListener('input',() => {
  siretInvoice.innerHTML = `SIRET : ${siretNumberInput.value}`
})
companySenderInput.addEventListener('input',() => {
  companySenderInvoice.innerHTML = `${companySenderInput.value}`
})

// Add Elem
addElemButton.addEventListener('click', () => {
  addElemToForm(numberOfElem)
})

/**
 *  VII.Create Form
 */
// on submmit Form
invoiceGeneratorInvoice.addEventListener('submit', (e) => {
  // Don't submit the form
  e.preventDefault()
  // if there is at least one element
  if (elemContainerForm.querySelector('.form-row')) {
    saveInvoiceButton.classList.add('d-none')
    saveInvoiceButton.nextElementSibling.classList.remove('d-none')
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    setTimeout(() => {
      save('.preview-container .preview',numberInvoiceInput.value, saveInvoiceButton)
    }, 2500);
  }
  // Else show popover to say to add an element
  else{
    $(addElemButton).popover('enable')
    $(addElemButton).popover('show')
    setTimeout(() => {
    $(addElemButton).popover('hide')
    }, 2000);
  }
})