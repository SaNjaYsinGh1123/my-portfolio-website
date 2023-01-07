const Task = require('../models/task_schema');


module.exports.todo =function(req,res){
     Task.find({email:req.user.email},function(err, tasks){
         if(err){
            console.log('error in finding req.user taks in db',err);
            return;
         }
         return res.render('todo',{
            tasks:tasks
         })
     });
}

module.exports.createTask = function(req,res){
    // console.log(req.body);
    Task.create(
        {
            email:req.user.email,
            discription: req.body.discription,
            category:req.body.category,
            date:req.body.date,       
    },function(err,task){
        if(err){
            console.log('error in adding task',err);
        }
    });
    return res.redirect('back');
}

module.exports.destroy =function(req,res){
    //  console.log(req.body.deltask.length);
     if(Array.isArray(req.body.deltask))
       {
        for(var i=0;i<req.body.deltask.length;i++)
        {
            console.log(i);
            Task.findById(req.body.deltask[i],function(err,task){
                if(err){
                    console.log('error in delete task',err);
                    return res.redirect('back');
                }
                else{
                    task.remove();
                }
            });
        }
        return res.redirect('back');
     }
      else if(req.body.deltask != undefined){
        Task.findById(req.body.deltask, function(err,task){
            if(err){
                console.log('error in delete task',err);
                    return res.redirect('back');
            }
            else{
                task.remove();
                return res.redirect('back');
            }
        });
      
      }
      else{        
          return res.redirect('back');
      }
    }  

     
    

