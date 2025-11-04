interface WhatsAppData {
  type: 'rfq' | 'inquiry' | 'product-detail';
  productName?: string;
  category?: string;
  customerName?: string;
  phone?: string;
  email?: string;
  company?: string;
  location?: string;
  brand?: string;
  grade?: string;
  quantity?: string;
  specifications?: string;
}

export const formatWhatsAppMessage = (data: WhatsAppData): string => {
  const timestamp = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata'
  });

  let message = '*New Request - MaterialMatrix*\n\n';

  if (data.type === 'product-detail') {
    message += `📦 *Product:* ${data.productName || 'N/A'}\n`;
    message += `🏷️ *Category:* ${data.category || 'N/A'}\n`;
    message += `🏭 *Brand:* ${data.brand || 'N/A'}\n`;
    message += `⚙️ *Grade:* ${data.grade || 'N/A'}\n`;
    message += `📊 *Quantity:* ${data.quantity || 'N/A'}\n\n`;
    message += `📍 *Source:* Product Detail Page\n`;
  } else if (data.type === 'inquiry') {
    message += `🔍 *Product Inquiry:* ${data.productName || 'N/A'}\n`;
    message += `👤 *Name:* ${data.customerName || 'N/A'}\n`;
    message += `📞 *Phone:* ${data.phone || 'N/A'}\n`;
    message += `📧 *Email:* ${data.email || 'N/A'}\n`;
    message += `📊 *Quantity:* ${data.quantity || 'N/A'}\n`;
    if (data.specifications) {
      message += `📝 *Specifications:*\n${data.specifications}\n`;
    }
    message += `\n📍 *Source:* Product Search (Not Found)\n`;
  } else if (data.type === 'rfq') {
    message += `👤 *Name:* ${data.customerName || 'N/A'}\n`;
    message += `🏢 *Company:* ${data.company || 'N/A'}\n`;
    message += `📍 *Location:* ${data.location || 'N/A'}\n`;
    message += `📧 *Email:* ${data.email || 'N/A'}\n`;
    message += `📞 *Phone:* ${data.phone || 'N/A'}\n\n`;
    message += `📍 *Source:* RFQ Form\n`;
  }

  message += `\n⏰ *Time:* ${timestamp}`;

  return message;
};

export const sendToWhatsApp = (data: WhatsAppData): void => {
  const phoneNumber = '919136242706';
  const message = formatWhatsAppMessage(data);
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const formatEmailBody = (data: WhatsAppData): string => {
  const timestamp = new Date().toLocaleString('en-IN', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Asia/Kolkata'
  });

  let body = 'New Request from MaterialMatrix Website\n\n';
  body += '═'.repeat(50) + '\n\n';

  if (data.type === 'product-detail') {
    body += `Product: ${data.productName || 'N/A'}\n`;
    body += `Category: ${data.category || 'N/A'}\n`;
    body += `Brand: ${data.brand || 'N/A'}\n`;
    body += `Grade: ${data.grade || 'N/A'}\n`;
    body += `Quantity: ${data.quantity || 'N/A'}\n\n`;
    body += `Source: Product Detail Page\n`;
  } else if (data.type === 'inquiry') {
    body += `Product Inquiry: ${data.productName || 'N/A'}\n`;
    body += `Customer Name: ${data.customerName || 'N/A'}\n`;
    body += `Phone: ${data.phone || 'N/A'}\n`;
    body += `Email: ${data.email || 'N/A'}\n`;
    body += `Quantity: ${data.quantity || 'N/A'}\n`;
    if (data.specifications) {
      body += `\nSpecifications:\n${data.specifications}\n`;
    }
    body += `\nSource: Product Search (Not Found)\n`;
  } else if (data.type === 'rfq') {
    body += `Customer Name: ${data.customerName || 'N/A'}\n`;
    body += `Company: ${data.company || 'N/A'}\n`;
    body += `Location: ${data.location || 'N/A'}\n`;
    body += `Email: ${data.email || 'N/A'}\n`;
    body += `Phone: ${data.phone || 'N/A'}\n\n`;
    body += `Source: RFQ Form\n`;
  }

  body += `\nTimestamp: ${timestamp}\n`;
  body += '\n' + '═'.repeat(50);

  return body;
};

export const sendEmail = (data: WhatsAppData): void => {
  const subject = data.type === 'inquiry' 
    ? `Product Inquiry - ${data.productName || 'MaterialMatrix'}` 
    : `RFQ Request - ${data.productName || 'MaterialMatrix'}`;
  
  const body = formatEmailBody(data);
  const mailtoLink = `mailto:support@materialmatrix.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};
