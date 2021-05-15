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

  var btnReplaceEmails = document.getElementById('replace-emails');
  btnReplaceEmails.onclick = function () {
    emailsInput2.replaceEmails(['danish@gmail.com', 'mdanish@gmail.com']);
  };
}