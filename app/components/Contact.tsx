export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>

      <p className="text-gray-400 mb-4">
        Reach out with a short description of the problem.
      </p>

      <div className="space-y-2">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:shariq.mle@gmail.com"
            className="underline hover:text-white"
          >
            E-mail me 
          </a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mohammad-shariq-249461280/"
            target="_blank"
            className="underline hover:text-white"
          >
            Linedin Connect
          </a>
        </p>
      </div>
    </section>
  );
}
