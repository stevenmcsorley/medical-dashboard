import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PatientsByCityChartProps {
  appointments: {
    id: string;
    patientId: string;
    doctorId: string;
    clinicId: string;
    type: string;
    startTime: string;
    endTime: string;
    location: string;
    status: string;
  }[];
  sortType: string;
}

const PatientsByCityChart: React.FC<PatientsByCityChartProps> = ({ appointments, sortType }) => {
  const [sortedData, setSortedData] = useState(appointments);

  useEffect(() => {
    // Sort the data based on the selected sort option
    const sorted = [...appointments].sort((a, b) => {
      const countA = countAppointmentsByCity(a.location);
      const countB = countAppointmentsByCity(b.location);

      if (sortType === 'asc') {
        return countA - countB;
      } else if (sortType === 'desc') {
        return countB - countA;
      }
      return 0;
    });
    setSortedData(sorted);
  }, [appointments, sortType]);

  // Count the number of appointments by city
  const countAppointmentsByCity = (city: string): number => {
    return appointments.filter(appointment => appointment.location === city && appointment.status === 'completed').length;
  };

  const cityCounts = sortedData.reduce((counts: Record<string, number>, appointment) => {
    const { location, status } = appointment;
    if (status === 'completed') {
      counts[location] = (counts[location] || 0) + 1;
    }
    return counts;
  }, {});

  const data = Object.entries(cityCounts).map(([city, count]) => ({ name: city, patients: count }));
  
  const formatCityName = (name: string): string => {
    if (name.length > 3) {
      return name.substring(0, 3) + '';
    }
    return name;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 30, bottom: 20 }}>
        <CartesianGrid strokeDasharray="1 0" strokeOpacity={0.3} vertical={false} />
        <XAxis dataKey="name" label="" tick={{ fill: 'var(--color-neutral-gray-light)' }} strokeOpacity={0} tickMargin={15} tickFormatter={formatCityName} />
        <YAxis label="" tick={{ fill: 'var(--color-neutral-gray-light)' }} strokeOpacity={0} tickMargin={15} tickCount={6} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="patients"
          stroke="var(--color-green-brand)"
          fill="var(--color-green-brand)"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PatientsByCityChart;
