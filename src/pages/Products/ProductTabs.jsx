import React, { useState } from 'react'

const ProductTabs = ({ description, details, price }) => {
    const [activeTab, setActiveTab] = useState("description");

    const renderContent = () => {
        switch (activeTab) {
            case "description":
                return <p>{description}</p>
            
            case "details":
                return <ul>{details.map((d, i) => <li key={i}>• {d}</li>)}</ul>
            
            case "price":
                return <p className='text-xl font-bold'>R{price}</p>
            
            default:
                return null;
        }
    }
  return (
      <div className='mt-10'>
          <div className='grid grid-cols-3 justify-evenly bg-gray-200 p-2  mb-8 rounded-xl text-sm font-bold'>
              <button
                  onClick={() => setActiveTab("description")}
                  className={`p-3 text-xs  cursor-pointer ${activeTab === "description" ? " bg-white rounded-xl" : "text-gray-600"}`}
              >
                  Description
              </button>
              <button
                  onClick={() => setActiveTab("details")}
                  className={`p-3 cursor-pointer  ${activeTab === "details" ? " bg-white rounded-xl" : "text-gray-600"}`}
              >
                  Details
              </button>
              <button
                  onClick={() => setActiveTab("price")}
                  className={`p-3 cursor-pointer  ${activeTab === "price" ? " bg-white rounded-xl" : "text-gray-600"}`}
              >
                  Price
              </button>
          </div>

          <div className='text-gray-800'>{renderContent()}</div>
    </div>
  )
}

export default ProductTabs