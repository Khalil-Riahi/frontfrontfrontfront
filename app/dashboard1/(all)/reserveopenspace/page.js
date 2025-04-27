'use client'

import { DateTime } from 'luxon';
import { useEffect, useState } from 'react'
import FloorPlanSVG from './../../../components/FloorPlanSvg'

export default function ReserveOpenSpace() {
    const tunisNow = DateTime.now().setZone('Africa/Tunis').toJSDate();
  const [reservations, setReservation] = useState([])
  const [showDatePicker, setShowDatePicker] = useState(false)
//   const [selectedDate, setSelectedDate] = useState(new Date())
const [selectedDate, setSelectedDate] = useState(tunisNow);
console.log('jj')
console.log(selectedDate)
const [startTime, setStartTime] = useState('15:30')
  const [endTime, setEndTime] = useState('16:30')
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "24:00"
  ];
  

  useEffect(() => {
    async function getCurrentReservations() {
      try {

        
        const response = await fetch(`http://localhost:8000/ELACO/table/getCurrentResevations`)

        if (!response.ok) {
          throw new Error("Error in fetchingReservations")
        }

        const resData = await response.json()
        console.log(resData.data)

        setReservation(resData.data)
      } catch (err) {
        console.log(err)
      }
    }
    getCurrentReservations()
  }, [selectedDate])



// useEffect(() => {
//     if (!reservations || reservations.length === 0) return;
  
//     const formatOnlyDate = (dateStr) => {
//       const dateObj = new Date(dateStr);
//       return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
//     };
  
//     const selectedFormatted = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
  
//     const filteredRes = reservations.filter((res) => {
//       const resFormatted = formatOnlyDate(res.date);
//       return resFormatted === selectedFormatted && (res.check_in > startTime || res.check_out < endTime);
//     });

//     console.log(filteredRes)
  
//     document.querySelectorAll('[data-table]')
//       .forEach((node) => node.setAttribute('fill', 'green'));
  
//     filteredRes.forEach(({ numTable }) => {
//       const tableNode = document.getElementById(numTable);
//       if (tableNode) {
//         tableNode.setAttribute('fill', 'red');
//       }
//     });
//   }, [reservations, selectedDate , startTime , endTime]);

useEffect(() => {
    if (!reservations || reservations.length === 0) return;
  
    const formatOnlyDate = (dateStr) => {
      const dateObj = new Date(dateStr);
      return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
    };
  
    const selectedFormatted = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
  
    const filteredRes = reservations.filter((res) => {
      const resFormatted = formatOnlyDate(res.date);
      const sameDate = resFormatted === selectedFormatted;
      const conflict = (res.check_in < endTime) && (startTime < res.check_out);
      return sameDate && conflict;
    });
  
    console.log('Conflicting reservations:', filteredRes);
  
    document.querySelectorAll('[data-table]')
      .forEach((node) => node.setAttribute('fill', '#d4edda'));
  
    filteredRes.forEach(({ numTable }) => {
      const tableNode = document.getElementById(numTable);
      if (tableNode) {
        tableNode.setAttribute('fill', '#f8d7da');
      }
    });
  }, [reservations, selectedDate, startTime, endTime]);

  const formatDateForAPI = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // add leading zero
    const day = String(date.getDate()).padStart(2, '0');        // add leading zero
    return `${year}-${month}-${day}`;  // example: 2027-03-11
  }

  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  const days = ['lu', 'ma', 'me', 'je', 've', 'sa', 'di']

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay() || 7 // Convert Sunday (0) to 7 for European calendar
  }

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth)
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth)
    const calendar = []

    // Add empty cells for days before the first day of the month
    for (let i = 1; i < firstDay; i++) {
      calendar.push(null)
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(i)
    }

    return calendar
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleDateSelect = (day) => {
    if (day) {
      const newDate = new Date(currentYear, currentMonth, day)
      setSelectedDate(newDate)
    }
  }

  const formatDate = (date) => {
    return `${date.getDate()} ${months[date.getMonth()].substring(0, 3)} ${date.getFullYear()}`
  }

  const applyDateSelection = () => {
    setShowDatePicker(false)
  }

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Reserve an OpenSpace</h1>
      
      <div className="mb-8 relative">
        <div 
          className="border border-gray-300 rounded-lg p-3 flex items-center cursor-pointer bg-white shadow-sm"
          onClick={toggleDatePicker}
        >
          <svg className="w-5 h-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span className="text-blue-500 font-medium">
  Date: {selectedDate.getDate()}/{selectedDate.getMonth() + 1}/{selectedDate.getFullYear()} {startTime} → {endTime}
</span>
        </div>

        {showDatePicker && (
          <div className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-full md:w-auto">
            <h3 className="font-medium mb-4">Date</h3>
            
            <div className="flex gap-6">
              <div className="calendar-section">
                <div className="flex justify-between items-center mb-4">
                  <button onClick={prevMonth} className="p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div>
                    <select 
                      value={months[currentMonth]} 
                      onChange={(e) => setCurrentMonth(months.indexOf(e.target.value))}
                      className="mr-2 p-1 border-none bg-transparent"
                    >
                      {months.map((month, index) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                    <select 
                      value={currentYear}
                      onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                      className="p-1 border-none bg-transparent"
                    >
                      {[currentYear - 1, currentYear, currentYear + 1, currentYear + 2].map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <button onClick={nextMonth} className="p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {days.map(day => (
                    <div key={day} className="text-center text-sm text-gray-500 py-1">{day}</div>
                  ))}
                  
                  {generateCalendar().map((day, index) => (
                    <div 
                      key={index} 
                      className={`text-center py-2 cursor-pointer rounded ${
                        day && selectedDate.getDate() === day && 
                        selectedDate.getMonth() === currentMonth && 
                        selectedDate.getFullYear() === currentYear
                          ? 'bg-blue-500 text-white' 
                          : day ? 'hover:bg-gray-100' : ''
                      }`}
                      onClick={() => day && handleDateSelect(day)}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              <div className="time-section">
                <div className="mb-4">
                  <h4 className="text-gray-500 mb-2">Horaire</h4>
                  <div className="relative">
                
                        <select 
  value={startTime}
  onChange={(e) => setStartTime(e.target.value)}
  className="block w-full p-2 bg-gray-100 rounded border-none"
>
  {timeSlots.map((time) => (
    <option key={time} value={time}>{time}</option>
  ))}
</select>

                    </div>
                    </div>
                    
                    <div className="mb-4">
                    <h4 className="text-gray-500 mb-2">Choisir le temps</h4>
                    <div className="relative">
                        
                    <select 
  value={endTime}
  onChange={(e) => setEndTime(e.target.value)}
  className="block w-full p-2 bg-gray-100 rounded border-none"
>
  {timeSlots
    .filter((time) => time > startTime) // show only times after selected startTime
    .map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ))}
</select>

                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={applyDateSelection}
              className="w-full mt-4 bg-blue-500 text-white py-3 px-4 rounded font-medium hover:bg-blue-600 transition-colors"
            >
              Appliquer
            </button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-center items-center border border-gray-200 rounded-lg p-4">
          <FloorPlanSVG />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-sm mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-sm mr-2"></div>
            <span>Reserved</span>
          </div>
        </div>
        
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
          Reserve Selected Space
        </button>
      </div>
    </div>
  )
}