import React from 'react';
import Header from './Header';
import Hero from './Hero';
import TodoList from './TodoList';
import DoneList from './DoneList';
import ContactForm from './ContactForm';
import Footer from './Footer';
import BlogPost from './BlogPost';

const MainContent: React.FC = () => {
  const todoTasks = [
    "Develop the To-do list page",
    "Create the drag-and-drop function",
    "Add new tasks",
    "Delete items",
    "Erase all",
    "Checked item goes to Done list",
    "This item label may be edited",
    "Editing an item..."
  ];

  const doneTasks = [
    "Get FTP credentials",
    "Home Page Design",
    "E-mail John about the deadline",
    "Create a Google Drive folder",
    "Send a gift to the client"
  ];

  return (
    <main className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
        <div className="grow max-md:mt-5 max-md:max-w-full">
          <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/af5bff3ad2fdcb46526841dfef341139fffa2602c06385aead45fed74eceb63c?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4" />
          <Hero />
          <div className="flex gap-5 mt-11 max-w-full w-[1115px] max-md:mt-10">
            <TodoList tasks={todoTasks} />
            <DoneList tasks={doneTasks} />
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/48a537b3-a6c3-4c5e-8333-810c4a4c861d?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4" alt="" className="object-contain self-center mt-16 ml-5 max-w-full bg-green-500 rounded-xl aspect-[1.99] w-[1200px] max-md:mt-10" />
          <div className="flex gap-5 self-center mt-8 ml-5 max-w-full w-[127px]">
            <div className="flex shrink-0 bg-green-500 rounded-full h-[29px] w-[29px]" />
            <div className="flex shrink-0 rounded-full bg-stone-300 h-[29px] w-[29px]" />
            <div className="flex shrink-0 rounded-full bg-stone-300 h-[29px] w-[29px]" />
          </div>
          <ContactForm />
          <Footer />
        </div>
      </div>
      <aside className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
        <div className="self-stretch my-auto max-md:mt-10 max-md:max-w-full">
          <BlogPost
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f8b77b7e176dfe326d8fe40557efbb4e723e21bd43ebb6d6ff988d5c005c83af?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4"
            tag="function"
            title="Organize your daily job enhance your life performance"
          />
          Continuing from where we left off:

          <BlogPost
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4"
            tag="function"
            title="Mark one activity as done makes your brain understands the power of doing."
          />
          <BlogPost
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4"
            tag="function"
            title="Careful with missunderstanding the difference between a list of things and a list of desires."
          />
        </div>
      </aside>
    </main>
  );
};

export default MainContent;