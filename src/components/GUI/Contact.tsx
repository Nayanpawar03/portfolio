import '@/styles/contacts.css'
import Form from './Form'

export default function Contacts() {
  return (
    <section id="contact" className=" bgcolor section-padding">
      <div className="flex flex-wrap " style={{ placeContent: "space-between" }}>
        <div className="content pl-4 md:py-4">
          <h2 className="fs-200">GET IN TOUCH</h2>
          <h3 className="fs-600">Let’s Collaborate!</h3>
          <p>
            Whether you have a project idea, a question, or just want to say hello, I’m always open to connecting.
            Let’s create something amazing together!
          </p>
          <p className="coloraccent fs-400">📞 +91 98196 58897</p>
          <p className="coloraccent fs-400">📧 nayanpawar136@gmail.com</p>
          <div className="flex wrap social-links">
            <a href="https://www.linkedin.com/in/nayan-pawar03/" className="color" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <Form />
      </div>
    </section>
  )
}
