import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () =>{
  const navigate = useNavigate();
  const handlechoice = (e,path) => {
    e.preventDefault();
    navigate(path);
    console.log(path)
  };

  return(
    <div>

      <p className="font-bold">As the sun dipped below the horizon, casting long shadows across the quiet village, Nora stood at the edge of the forest, her heart racing. The ancient trees loomed before her, whispering secrets on the evening breeze. It had been years since anyone had ventured into the woods after dark, not since the rumors of strange lights and ghostly figures had begun. But tonight, she had no choice. The old map she found in her grandmother’s attic pointed to something hidden deep within — something that might change her fate forever. With a deep breath, she stepped into the twilight, the path ahead swallowed by darkness.</p>

      <button onClick={()=>handlechoice('/page1')}>1</button>
      <button onClick={()=>handlechoice('/page2')}>2</button>
      <button onClick={()=>handlechoice('/page3')}>3  </button>

    </div>
  );
};


export default HomePage;