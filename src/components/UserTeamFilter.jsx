import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UserTeamFilter = () => {
     //   const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  //   const handleButtonClick = (index, path) => {
  //     setActiveButton(index);
  
  //     navigate(path);
  //   };

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const buttons = [
    {
      label: "Teams",
      path: "/user-team",
      color: "from-pink-500 to-orange-400",
    },
    {
      label: "App Users",
      path: "/user-app",
      color: "from-blue-500 to-cyan-400",
    },
    
  ];
  return (
    <div className="flex flex-wrap justify-between mt-6 gap-4">
    {buttons.map((button, index) => (
      <button
        key={index}
        className={`w-full md:w-auto flex-1 py-2 px-4 text-white rounded-lg transition-all ${
          location.pathname === button.path
            ? `bg-gradient-to-r ${button.color} shadow-lg transform -translate-y-1`
            : "bg-blue-200"
        }`}
        onClick={() => handleButtonClick(button.path)}
      >
        {button.label}
      </button>
    ))}
  </div>
  )
}

export default UserTeamFilter