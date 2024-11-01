import { ListCard } from "../ListCard"
import { ListItem } from "../ListItem"


export const TodoListSection = () => {

  const doneItems = [
    {
      id: '1',
      title: 'Get FTP credentials',
      done: true
    },
    {
      id: '2',
      title: 'Home Page Design',
      done: true
    },
    {
      id: '3',
      title: 'E-mail John about the deadline',
      done: true
    },
    {
      id: '4',
      title: 'Create a Google Drive folder',
      done: true
    },
    {
      id: '5',
      title: 'Send a gift to the client',
      done: true
    },
  ]

  const todoItems = [
    {
      id: '1',
      title: 'Develop the To-do list page',
      done: false
    },
    {
      id: '2',
      title: 'Create the drag-and-drop function',
      done: false
    },
    {
      id: '3',
      title: 'Add new tasks',
      done: false
    },
    {
      id: '4',
      title: 'Delete itens',
      done: false
    },
    {
      id: '5',
      title: 'Erase all',
      done: false
    },
    {
      id: '6',
      title: 'Checked item goes to Done list',
      done: false
    },
    {
      id: '7',
      title: 'This item label may be edited',
      done: false
    },
  ]

  return (
    <section id="todo-list">
      <header className="text-center before:-z-10 pt-[85px] pb-[96px] before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative">
        <h2 className="text-[50px] md:text-[60px] text-white font-semibold leading-[60px]">To-do List</h2>
        <hr className="w-[250px] md:w-[297px] mx-auto border-green-500 border-2" />
        <p className="w-full md:w-[600px] mx-auto mt-4 md:mt-8 text-white font-semibold text-[14px] md:text-[24px]">Drag and drop to set your main priorities, check when done and create what´s new.</p>
      </header>
      <div id="todo-screenshots" className="flex flex-wrap gap-4 justify-center items-start mt-10 md:mt-[80px] bg-white bg-[url('/bg-todo-section.png')] bg-no-repeat bg-left">
        <ListCard
          title="To-do"
          message="Take a breath. Start doing."
          color="bg-green-500"
          allowNew
          items={todoItems}
        >
          <ListItem title="Editing an item..." done={false} extraClasses="text-orange-500" id="123" />
        </ListCard>
        <ListCard
          title="Done"
          message="Congratulions!"
          count={5}
          color="bg-orange-500"
          items={doneItems}
        />
      </div>
    </section>
  )
}