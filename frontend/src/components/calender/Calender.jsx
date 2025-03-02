import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate] = useState(new Date());
  
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const renderCalendarDays = () => {
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-12 border border-gray-100" />
      );
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === new Date().getDate() && 
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear();
        
      days.push(
        <div
          key={day}
          className={`h-12 border border-gray-100 p-2 cursor-pointer hover:bg-gray-50
            ${isToday ? 'bg-blue-50 font-semibold text-blue-600' : ''}`}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Transaction Calendar
      </h2>
      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-7 gap-0">
          {weekDays.map(day => (
            <div
              key={day}
              className="h-12 flex items-center justify-center font-medium text-gray-600 border-b"
            >
              {day}
            </div>
          ))}
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;