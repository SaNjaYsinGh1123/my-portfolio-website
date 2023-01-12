module.exports.chatSockets = function(chatServer){
   // console.log('hi');
    let port = process.env.PORT || 8000;
    let io = require('socket.io')(chatServer,{
         cors:{
            origin:"https://my-portfolio-website-BEASTMODEON.vercel.app",
            methods:["GET","POST"]
        }

    });

    io.sockets.on('connection',function(socket){
        console.log('new connection received',socket.id);
        
        socket.on('disconnect',function(){
            console.log('socket disconnected');
        });

        socket.on('join_room',function(data){
            console.log('joining request recieved',data);

            socket.join(data.chatroom);

            io.in(data.chatroom).emit('someonejoin',data);
        })


        socket.on('send_message',function(data){
            io.in(data.chatroom).emit('receive_message',data);
        })

    });
}