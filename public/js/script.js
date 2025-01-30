const socket = io();  

$(document).ready(function() {
    socket.on('receive_message', (data) => {
        $('.messages').append(  
            $('<div class="message text-left mt-2"></div>').html(`<strong>${data.user.username}:</strong> ${data.message}`)  
        );
    });
    $('#sendMessage').click(function() {  
      const messageText = $('#messageInput').val().trim();  
      
      if (messageText) {  
        $('.messages').append(  
          $('<div class="message text-right mt-2"></div>').html(`<strong>You:</strong> ${messageText}`)  
        );
        $('#messageInput').val('');  
        $('.messages').scrollTop($('.messages')[0].scrollHeight);
        socket.emit('send_message', {message: messageText, user_id: $('#user_id').val()});
      }  
    });  

    $('#messageInput').keypress(function(event) {  
      if (event.which === 13) {  
        $('#sendMessage').click();  
      }  
    });  
  }); 