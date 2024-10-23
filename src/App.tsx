
import React from 'react';
import DataGPTInterface from './components/DataGPTInterface';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <DataGPTInterface/>
    </div>
  );
};

export default App;


// /or create a new repository on the command line
// echo "# chatbot" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Navya11shree/chatbot.git
// git push -u origin main
// …or push an existing repository from the command line
// git remote add origin https://github.com/Navya11shree/chatbot.git
// git branch -M main
// git push -u origin main