
  $(document).ready(function() {
    $('select').material_select();

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
     $('#modal1').closeModal();
  });
            
