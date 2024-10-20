function validateForm() {
  const form = document.forms['pet-info-form'];
  // TODO: Add checks here.

  const bordetellaChecked = document.getElementById('bordetella').checked;
  const dhlppChecked = document.getElementById('dhlpp').checked;
  const rabiesChecked = document.getElementById('rabies').checked;
  const comments = form['other-info-text-area'].value;

  document.getElementById('mobileErr').innerHTML = '';

  if (!bordetellaChecked || !dhlppChecked || !rabiesChecked) {
    if (comments == '') {
      document.getElementById('mobileErr').innerHTML =
        'Please specify below why your pet is not vaccinated with all of the above vaccinations.';
      return false;
    }
  }

  const name = form['name'].value;
  const age = form['age'].value;
  const email = form['email'].value;
  const phone = form['phone'].value;
  const gender = form['pet-gender'].value;

  let vaccines = [];
  const checkboxes = document.getElementsByName('vaccines');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      vaccines.push(checkboxes[i].value);
    }
  }

  const dataPreview = `You've entered the following details: 
Pet Name: ${name}
Pet Age: ${age}
Email Address: ${email}
Mobile Number: ${phone}
Pet Gender: ${gender}
Pet Vaccination(s): ${vaccines.join(', ')}`;

  alert(dataPreview);
  return true;
}
