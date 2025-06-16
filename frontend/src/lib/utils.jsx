export function formatDate(date) {
    return date.toLocaleDateString("en-us", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}