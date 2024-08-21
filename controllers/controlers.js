let formCreate = [];
let count = 1;

const defaultController = (req, res) => {
    res.render('index',{formCreate:formCreate});

}
const readFormController = (req,res) => {
    res.render('read',{formCreate:formCreate});
}
const addFormController = (req, res) => {
    console.log("hii");
    const todoObj = {
        id: count++,
        fname: req.body.fname,
        email: req.body.email,
        phone: req.body.phone,
        skills: req.body.skills
    }
   
    formCreate = [...formCreate, todoObj];
    console.log(req.body);
    res.redirect('/');
}

const editFormController = (req, res) => {
    console.log("edit controller");
    const id = req.params.id;
    const SingleRecord = formCreate.find(todos => todos.id == id); 
    console.log('SingleRecord');
    res.render('edit',{SingleRecord});
    
}

const updateFormController = (req, res) => {
    console.log("Updating todo with id:", req.params.id);

    const updateTodo = formCreate.map((todo) => {
        if (todo.id == req.params.id) {
            todo.fname = req.body.fname;

            return {
                ...todo,
                fname: req.body.fname,
                email: req.body.email,
                phone: req.body.phone,
                skills: req.body.skills
                
            }
        }else{
            return todo;
        }
    });

    formCreate = updateTodo;

    res.redirect('/');
};

const deleteFormController = (req, res) => {
    console.log("delete controller");
    const deleteTodo = formCreate.filter((todo) =>
         todo.id != req.params.id); 
    formCreate = deleteTodo;
    res.redirect('/');
}
module.exports = {defaultController, addFormController ,editFormController , updateFormController,deleteFormController,readFormController}
