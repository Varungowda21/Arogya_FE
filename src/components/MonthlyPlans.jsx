import React from 'react'
import { useNavigate } from 'react-router-dom'

const plans = [
  {
    name: 'Gold',
    price: '₹999/mo',
    route: '/plans/gold',
    circleColor: 'bg-yellow-400',
  },
  {
    name: 'Silver',
    price: '₹699/mo',
    route: '/plans/silver',
    circleColor: 'bg-gray-400',
  },
  {
    name: 'Platinum',
    price: '₹1499/mo',
    route: '/plans/platinum',
    circleColor: 'bg-blue-400',
  },
]

const MonthlyPlans = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full py-12 px-4 bg-gray-50 mt-6">
      <h2 className="text-3xl font-bold text-center mb-10">Monthly Plans</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            onClick={() => navigate(plan.route)}
            className={`
              w-full h-44 md:h-52 rounded-2xl cursor-pointer shadow-lg 
              hover:scale-105 transition-transform bg-white 
              flex flex-col items-center justify-center gap-3
              ${index === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto lg:col-span-1 lg:w-full lg:mx-0' : ''}
            `}
          >
            {/* Colored Circle */}
            <div className={`w-14 h-14 rounded-full ${plan.circleColor} shadow-inner`}></div>
            {/* Text */}
            <p className="text-lg font-bold text-gray-800">{plan.name}</p>
            <p className="text-sm text-gray-600">{plan.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonthlyPlans
