const socket = io();  
socket.on('test', (data) => {
    console.log(data);
})
$(document).ready(function() {
    socket.on('receive_message', (data) => {
        $('.messages').append(  
            $('<div class="message text-left mt-2"></div>').html(`<strong>Amir:</strong> ${data.message}`)  
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
        socket.emit('send_message', {message: messageText});
      }  
    });  

    $('#messageInput').keypress(function(event) {  
      if (event.which === 13) {  
        $('#sendMessage').click();  
      }  
    });  
  }); 