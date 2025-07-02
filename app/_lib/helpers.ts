

export const getInitials = (text: string) => text.split(" ").map(w => w[0]).join('').toUpperCase()

export const formatToCurrency = (amount: number) => Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN'
}).format(amount).replace('.00' , '')