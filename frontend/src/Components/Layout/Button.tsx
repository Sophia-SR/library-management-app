import React, {ReactNode} from 'react'; 
        


interface ButtonProps {
onClick?: () => void;
children: ReactNode;

}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
return (
<button
className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800"
onClick={onClick}
>
{children}
</button>
);
};

export default Button;
  
