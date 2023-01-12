//console.log('hellomunna');

const  el = document.getElementById('chat-messages-list');


function  autoScroll(){
    if(el){
        el.scrollTop =el.scrollHeight;
        el.getElementsByTagName('img')[0].style.Repeat ="repeat-y";
    }
}



let chatBoxId = document.getElementById('user-chat-box');
// console.log(chatBoxId);

class ChatEngine{
    constructor(userName){
       // console.log(userEmail,chatBoxId);
        this.chatBoxId = chatBoxId;
        this.userName = userName;

        this.socket = io.connect('https://my-portfolio-website-sanjay.vercel.app/:5000');
        if(this.userName){
        this.connectionHandler();
        }
    }
    
    connectionHandler(){
        let self = this;

       this.socket.on('connect',function(){
        console.log('connection established using sockets...!');
 
        self.socket.emit('join_room' ,{
            user_name: self.userName,
            chatroom: 'project-chat'
        });

        self.socket.on('someonejoin',function(data){
              console.log('somebody joined',data)
        });

        $('#send-message').click(function(){
            let msg= $('#chat-message-input').val();
             $('#chat-message-input').val('');
                
            if(msg != ''){
                self.socket.emit('send_message',{
                    message: msg,
                    user_name: self.userName,
                    chatroom: 'project-chat'
                });
                autoScroll();
            }
        });

        self.socket.on('receive_message',function(data){
            console.log('message received :',data.message);
            audio.play();
            let kin = $('#send-message')
            let newMessage = $("<li>");

            let messageType = 'other-message';

            if(data.user_name == self.userName){
                messageType ='self-message';
            }

            newMessage.attr('class',messageType);

            if(messageType == 'other-message'){
                newMessage.append($("<sub>",{"html" : data.user_name }).addClass('username'));
            }else{
                newMessage.append($("<sub>",{"html" : 'you ' }).addClass('username'));
            }
            newMessage.append($("<span>",{"html" : data.message }));

            console.log(newMessage);
            console.log(kin);

            $('#chat-messages-list').append(newMessage);
            autoScroll();
 
        });

           

       })
   
   
   
   
   
    }




}