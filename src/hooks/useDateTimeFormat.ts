export const useDateTimeFormat = () => {
      const formatDate = (dateStr?: string) => {
        if (!dateStr) return "Date TBA";
        return new Date(dateStr).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      };

      const formatTime = (timeStr?: string) => {
        if (!timeStr) return "Time TBA";
        return new Date(`2000-01-01T${timeStr}`).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
      };

      return { formatDate, formatTime };
}