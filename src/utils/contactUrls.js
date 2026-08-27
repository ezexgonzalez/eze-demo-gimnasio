export function createWhatsAppUrl(number, message) {
  const baseUrl = `https://wa.me/${number}`

  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl
}
