(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	
	var todoService = new TodoService();
	
			tm = new Vue({
			el: '#todo',
			data: {
				todo: [],
				inputToDo: '',
				numtodo: 1,
				show_Todos : true,
				show_TodosButton : false
			},
			mounted: function(){this.drawTodos()},
			methods:
			{
				formSubmitted()
				{
					todoObj = {text:this.inputToDo, status:1}
					this.todo.push(todoObj)
				},
				drawTodos()
				{
					this.todo = todoService.getTodos()
				},
				checkItem(obj_item)
				{
					console.assert(typeof obj_item == 'object')
					console.assert(obj_item.status == 1 || obj_item.status == 2)
					if (obj_item.status == 1)
						{obj_item.status = 2}
					else
						{obj_item.status = 1}
				},
				clearCompleated()
				{			
					console.log("in clear compleated.")
					for (i = this.todo.length-1;i>=0; i--)
					{
						var element = this.todo[i];
						if (element.status == 2)
						{
							this.todo.splice(i,1)
						}
					}
				todoService.saveTodos(this.todo)
				},
				hideTodos()
				{			
					this.show_Todos = false;
					this.show_TodosButton = true;
				},
				showToDos()
				{			
					this.show_Todos = true;
					this.show_TodosButton = false;
				}
			},
			computed:
			{
				numtodo: function()
				{
					var sum = 0
					for (i = 0; i < this.todo.length; i++)
					{
						element = this.todo[i];
						if (element.status == 1)
						{
						sum = sum + 1;
						}
					}
					return sum
				},

				arr_todos_pending: function()
				{
					var arr_pending = []
					console.log(this.todo)
					for (i = 0; i < this.todo.length; i++)
					{
						element = this.todo[i];
						console.assert(typeof element == 'object')
						if (1 == 1)
						{
							arr_pending.push(element)
						}
					}
					return arr_pending
				}
			}
		})
}())
