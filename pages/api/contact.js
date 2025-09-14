export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const { name, email, message } = req.body
    
    // Here you would typically save the contact form data to a database
    // or send it via email using a service like SendGrid
    
    console.log('Contact form submission:', { name, email, message })
    
    res.status(200).json({ message: 'Message received successfully!' })
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}