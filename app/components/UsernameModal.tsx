"use client"
import { useState } from "react"
import { motion } from "framer-motion"

interface UsernameModalProps  {
  onUsernameSet : (username: string) => void;
}

const UsernameModal: React.FC<UsernameModalProps> = ({onUsernameSet}) =>{
  const [username,setUsername] = useState("");
  const [error,setError] = useState<string | null>(null);
  const [isSubmitting,setIsSubmitting] = useState(false);


const handleSubmit = async (e: React.FormEvent)=>{
  e.preventDefault();
  if(!username.trim){
    setError("Username cannot be empty");
    return;
  }
  setIsSubmitting(true);
  setError(null);

  try {
    const response = await fetch (`https://codeiq-backend.onrender.com//api/users?username=${encodeURIComponent(username)}`);
    if(!response.ok){
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    const now = new Date().getTime();
    onUsernameSet(username);
    localStorage.setItem("username",username);
    localStorage.setItem("timestamp",now.toString());
  } catch (error) {
    setError("Failed to load user data. Please try again");
    console.error(error)
  } finally {
    setIsSubmitting(false);
  }
};
 return (
  <div className="fixed insert-0 flex w-full h-screen items-center justify-center bg-black bg-opacity-50 z-50 pt-4 pb-4 rounded">
    <motion.div
    initial={{opacity:0, scale: 0.0}}
    animate={{opacity:1, scale:1}}
    transition={{duration:  0.5}}
    className=" bg-white dark:bg-gray-800 p-8 rounded shadow-lg w-11/12 max-w-md mx-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Welcome!
      </h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Please enter your username:
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder="Your username"
        className="w-full p-2 border-gray-300 rounded mb-2 focus:outline-none focus:ring focus:border-blue-500" />
        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}
        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items center justify-center">
          {isSubmitting ? "Proceeding...": "Proceed"}
        </button>
      </form>

    </motion.div>
  </div>

 );
};

export default UsernameModal