import React from 'react';
import { X } from 'lucide-react';

const DataGPTInterface = () => {
  return (
    <div className="min-w-[600px] max-w-7xl mx-auto p-4 bg-white rounded-xl  border border-blue-500 shadow min-h-[600px] flex flex-col relative">
      
    
      <div className="flex items-center justify-between border-b pb-4">
        
        <div>
          <div className="flex items-center gap-2">
            <img 
              src="https://media.licdn.com/dms/image/v2/D560BAQGd9CNgsgxDGg/company-logo_200_200/company-logo_200_200/0/1727775506558/dataplatrinc_logo?e=1737590400&v=beta&t=xlZevE4MSTzIU0gjtIWES1zw6puHpi_vf0Sa51lHvGA" // Replace with your image path
              alt="CareGPT"
              className="w-6 h-6" 
            />
            <span className="text-xl font-bold text-gray-800">CareGPT</span> 
          </div>
          {/* Current Connection */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-600">Current Connection:</span>
            <span className="font-medium">Bigquery</span>
          </div>
        </div>
        <button 
           className="ml-10 px-4 py-2 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-full text-sm font-medium text-gray-700 flex items-center gap-2"
        >
            + Add connection
        </button>
      </div>

      {/* Connection Modal */}
      <div className="absolute inset-0 bg-white z-10 rounded-xl flex-col hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-medium">Select Data Connection</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <div className="p-4 flex-1">
          <div className="space-y-3">
            <button className="w-full p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-between">
              <span className="font-medium">BigQuery</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGPTInterface;