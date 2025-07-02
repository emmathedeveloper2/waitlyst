

export const getInitials = (text: string) => text.split(" ").map(w => w[0]).join('').toUpperCase()