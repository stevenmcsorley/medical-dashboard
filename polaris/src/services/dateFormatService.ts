export function formatDateTime(dateTime: string): string {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "2-digit" };
    const formattedDateTime = new Date(dateTime).toLocaleString("en-US", options);
    return formattedDateTime;
  }
  
  export function formatTime(dateTime: string): string {
    const options: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit" };
    const formattedDateTime = new Date(dateTime).toLocaleString("en-US", options);
    return formattedDateTime;
  }

  export const formatTimeNumeric = (time: string): string => {
    const options: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "numeric" };
    return new Date(time).toLocaleString("en-US", options);
  };
  
  export const isWithinNextMinutes = (startTime: string, currentTime: Date, minutes: number) => {
    const appointmentTime = new Date(startTime);
    const differenceInMinutes = Math.floor(
      (appointmentTime.getTime() - currentTime.getTime()) / (1000 * 60)
    );
    return differenceInMinutes <= minutes && differenceInMinutes >= 0;
  };
  