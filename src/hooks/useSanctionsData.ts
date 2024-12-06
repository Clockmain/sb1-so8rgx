import { useState, useEffect } from 'react';
import { Sanction } from '../types/sanction';

export function useSanctionsData() {
  const [data, setData] = useState<Sanction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated data - replace with actual API call
    const mockData: Sanction[] = [
      {
        id: 1,
        organizer: "Liga Principal",
        type: "Disciplinaria",
        sanctions: ["Amonestación", "Multa", "Suspensión", "", "", "", ""],
        match: {
          home: "Equipo A",
          away: "Equipo B",
          date: "2024-03-15"
        },
        dates: {
          start: "2024-03-16",
          end: "2024-06-16"
        },
        durationYears: 0.25
      },
      {
        id: 2,
        organizer: "Copa Nacional",
        type: "Técnica",
        sanctions: ["Suspensión", "Inhabilitación", "", "", "", "", ""],
        match: {
          home: "Equipo C",
          away: "Equipo D",
          date: "2024-03-18"
        },
        dates: {
          start: "2024-03-19",
          end: "2024-09-19"
        },
        durationYears: 0.5
      },
      {
        id: 3,
        organizer: "Torneo Regional",
        type: "Administrativa",
        sanctions: ["Multa", "", "", "", "", "", ""],
        match: {
          home: "Equipo E",
          away: "Equipo F",
          date: "2024-03-20"
        },
        dates: {
          start: "2024-03-21",
          end: "2024-04-21"
        },
        durationYears: 0.08
      }
    ];

    // Simulate API delay
    setTimeout(() => {
      setData(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);

  return { data, isLoading };
}