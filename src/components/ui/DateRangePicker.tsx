import React, { useState } from 'react';

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
  minDate?: Date;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  minDate = new Date(),
}) => {
  const formatDateForInput = (date: Date | null) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    onStartDateChange(newDate);
    
    // If end date is before start date, update end date
    if (endDate && newDate > endDate) {
      const newEndDate = new Date(newDate);
      newEndDate.setDate(newDate.getDate() + 1);
      onEndDateChange(newEndDate);
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    onEndDateChange(newDate);
  };

  const minDateString = formatDateForInput(minDate);
  const minEndDateString = startDate 
    ? formatDateForInput(new Date(startDate.getTime() + 86400000)) // start date + 1 day
    : minDateString;

  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <div className="w-full sm:w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pick-up Date
        </label>
        <input
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          value={formatDateForInput(startDate)}
          onChange={handleStartDateChange}
          min={minDateString}
        />
      </div>
      <div className="w-full sm:w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Return Date
        </label>
        <input
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          value={formatDateForInput(endDate)}
          onChange={handleEndDateChange}
          min={minEndDateString}
          disabled={!startDate}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;