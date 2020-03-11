


class Contact {


   showContactsOrMessage() {
      let contacts = localstorage.getFromLocalStorage(key);

      if (contacts === null || contacts.length === 0) {
          return $contactListDiv.html($initialAppMessage);
      }

      genererHtml.createContactList(contacts);

      return genererHtml.addEventAndTextToCreatedContacts();
  }

   insertNewContact(contact) {
      let contacts = [];
      if (localstorage.getFromLocalStorage(key) !== null) {
          contacts = localstorage.getFromLocalStorage(key);
      }

      contacts.push(contact);
      localstorage.addToLocalStorage(key, contacts);
      $formUpdateState = false;
      genererHtml.generateHTML(contact, contacts.length - 1);

      $form.trigger('reset');
      $form.hide('slow');
      genererHtml.setShowFormButtonText();
  }

   updateContact() {
      $formUpdateState = true;
      $form.show('slow');

      let index = $(this)
          .parent()
          .attr($dataAttrName);

      let contacts = localstorage.getFromLocalStorage(key);

      for (let field of contacts[index]) {
          $(`input[name=${field.name}]`).val(field.value);
      }

      $form.attr($dataAttrName, index);
  }

   persistUpdate(contact, index) {
      let contacts = localstorage.getFromLocalStorage(key);
      contacts[index] = contact;

      localstorage.addToLocalStorage(key, contacts);

      let uls = Array.from($('ul'));

      this.updateHTML(uls, index, contact);

      $form.trigger('reset');
      $form.hide('slow');
      $formUpdateState = false;
      genererHtml.setShowFormButtonText();
  }

   updateHTML(uls, index, contact) {
      uls.forEach((ul) => {
          if ($(ul).attr($dataAttrName) == index) {
              this.updateList(ul, contact);
          }
      });
  }

   updateList(ul, contact) {
      let lis = Array.from($(ul).children());
      lis.forEach((li) => {
          this.updateMatchingListFields(li, contact);
      });
  }

   updateMatchingListFields(li, contact) {
      for (let field of contact) {
          if (field.name == $(li).data(field.name)) {
              return $(li).html(`<strong>${field.name}:</strong> ${field.value}`);
          }
      }
  }

   deleteContact() {
      let index = $(this)
          .parent()
          .parent()
          .attr($dataAttrName);

      let contacts = localstorage.getFromLocalStorage(key);

      contacts.splice(index, 1);

      localstorage.addToLocalStorage(key, contacts);

      $(this)
          .parent()
          .parent()
          .remove();

      genererHtml.resetListsDataAttr();

      if ($('ul').length == 0) {
          $contactList.html($initialAppMessage);
      }
  }

}
