import './App.css';
import { useState } from 'react';
import Content from './Modal/Content';
import Modal from './Modal/Modal';

function App() {

const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && 
      <Modal setIsOpen={setIsOpen}>
       <Content setIsOpen={setIsOpen}/>
      </Modal>
      }

    </div>
  );
}

export default App;
