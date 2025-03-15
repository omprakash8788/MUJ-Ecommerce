### What
### Hero section is completed.
### Start from page 29. 



import { useState, useEffect } from "react";

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 600);

    return () => clearInterval(interval);
  }, []);

const OutlookRuleAnimation = () => {


  return (
    <div className="w-full max-w-md p-4 mx-auto mt-10 border rounded-lg shadow-lg bg-gray-100">
      <h2 className="text-lg font-semibold mb-2">Microsoft Office Outlook</h2>
      <div className="flex items-center justify-center space-x-4 my-4">
        <span className="text-yellow-500 text-3xl">📂</span>
        <span className="text-blue-400 text-3xl">✉️</span>
        <span className="text-yellow-500 text-3xl">📁</span>
      </div>
      <p className="text-gray-700 text-sm">Running rule OReilly Media</p>
      <p className="text-gray-600 text-sm mb-2">In Social</p>
      <div className="w-full bg-gray-300 h-4 rounded overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-500"
        
        ></div>
      </div>
      <p className="text-gray-700 text-sm mt-2">
         <!-- display here  -->
      </p>
      <button className="mt-4 w-full bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg">
        Cancel
      </button>
    </div>
  );
};

export default OutlookRuleAnimation;



// props , childern , nested component , 

<App value = {10}>
<App value={12}>
<Button>  | <Sidebar> | <Calling>
<Google>  |  <Footer>  | <Cart>
<App>