window.onload = (event) => {
  var containerNode = document.getElementById('emails-input');
  let emailsInput = new EmailsInput(containerNode, {
    placeholder: 'add more people',
    onChange: function (emails) {
      //subscribe to email changes here
      console.log(emails);
    }
  });

  var btnAddEmail = document.getElementById('add-email');
  btnAddEmail.onclick = function () {
    emailsInput.addEmail();
  };

  var btnGetEmailCount = document.getElementById('get-email-count');
  btnGetEmailCount.onclick = function () {
    alert('Number of emails added: ' + emailsInput.getEmailCount());
  };

  var containerNode2 = document.getElementById('emails-input-2');
  let emailsInput2 = new EmailsInput(containerNode2, {
    placeholder: 'add more people'
  });

  var btnAddEmail2 = document.getElementById('add-email-2');
  btnAddEmail2.onclick = function () {
    emailsInput2.addEmail();
  };

  var btnGetEmailCount2 = document.getElementById('get-email-count-2');
  btnGetEmailCount2.onclick = function () {
    alert('Number of emails added: ' + emailsInput2.getEmailCount());
  };
}