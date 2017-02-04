(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	

	var tc = this;
	var todoService = new TodoService();
	
	// todoService.getTodos()
	// todoService.saveTodos(["J","W","T","O"])
	// todoService.getTodos()
	
			tm = new Vue({
			el: '#todo',
			data: {
				todo: [],
				inputToDo: ''
			},
			mounted: function(){this.drawTodos()},
			methods:
			{
				formSubmitted()
				{
					console.log("Inside draw form submitted with: ", this.inputToDo)
					todoObj = {text:this.inputToDo, status:"uncomp"}
					this.todo.push(todoObj)
					//console.log(this.todo)
				},
				drawTodos()
				{
					console.log("Inside draw Todos")
					this.todo = todoService.getTodos()
				},
				removeItem(index)
				{
					console.log("Inside remove item with ", index)
					//console.log(this.todo.length)
					//this.todo.splice(index,1)
					//console.log(this.todo.length)
					this.todo[index]['status'] = 'clicked'
				}
			}
		})

var t1 = {text:"Jump Rope", status:"uncomp"}
var t2 = {text:"Jump Logs", status:"uncomp"}
var t3 = {text:"Jump Fence", status:"uncomp"}
var t4 = {text:"Jump to Lake", status:"uncomp"}

todoService.saveTodos([t1,t2,t3,t4])


}())
