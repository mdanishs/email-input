
const EMAIL_RGX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function EmailsInput(containerNode, options = {}) {

  if (!containerNode || !(containerNode instanceof Element)) {
    throw new Error('Invalid container node provided');
  }

  const _id = containerNode.id;
  let emails = [];
  let _nodeWrapper;
  let _chipContainer;
  let _textInput;

  function _initDomStructure() {
    _nodeWrapper = document.createElement('div');
    _nodeWrapper.setAttribute('id', _id + '-node-wrapper');
    _nodeWrapper.setAttribute('class', 'emails-input');
    containerNode.appendChild(_nodeWrapper);

    _chipContainer = document.createElement('div');
    _chipContainer.setAttribute('id', _id + '-chip-container');
    _chipContainer.setAttribute('class', 'chip-container');
    _nodeWrapper.appendChild(_chipContainer);

    _textInput = document.createElement('input');
    _textInput.setAttribute('id', _id + '-text-input');
    _textInput.setAttribute('type', 'text');
    _textInput.setAttribute('class', 'text-input');
    _textInput.setAttribute('placeholder', options.placeholder || '+ email');
    _chipContainer.appendChild(_textInput);

    _textInput.onblur = (event) => {
      if (event.target.value) {
        _addEmailChip(event.target.value);
        event.target.value = "";
      }
    }

    _textInput.onkeypress = (event) => {
      const code = event.key || event.keyCode;
      if (code === ',' || code === 'Enter' || code === 44 || code === 13) {
        if (event.target.value) {
          _addEmailChip(event.target.value);
          event.target.value = "";
        }
      }
    }

  }

  function _addEmailChip(email) {

    const chipId = _id + "-" + emails.length + "-email-chip";

    const isValidEmail = EMAIL_RGX.test(email);

    const newEmailChip = document.createElement('div');
    newEmailChip.setAttribute('id', chipId);
    newEmailChip.setAttribute('class', 'email-chip');
    newEmailChip.innerText = isValidEmail ? email : 'Invalid email';

    const crossButton = document.createElement('span');
    crossButton.innerHTML = '&#10005;'
    crossButton.setAttribute('class', 'cross-button');
    crossButton.onclick = _removeEmailChip.bind(this, chipId);

    newEmailChip.appendChild(crossButton);
    _chipContainer.insertBefore(newEmailChip, _textInput);

    emails.push({
      id: chipId,
      value: email,
    })

    if (options.onChange) {
      options.onChange(emails);
    }
  }

  function _removeEmailChip(id) {
    document.getElementById(id).remove();
    emails = emails.filter(function (emailObj) {
      return emailObj.id !== id;
    });
    if (options.onChange) {
      options.onChange(emails);
    }
  }

  this.addEmail = function () {
    const email = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
    _addEmailChip(email + '@sampleemail.com');
  }

  this.getEmailCount = function () {
    return emails.length;
  }
  _initDomStructure();

  return this;
}