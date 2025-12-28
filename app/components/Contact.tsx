export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>

      <p className="text-gray-400 mb-4">
        Reach out with a short description of your problem.
      </p>

      <div className="space-y-4">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:shariq.mle@gmail.com"
            className="underline hover:text-white"
          >
            shariq.mle@gmail.com
          </a>
        </p>

        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mohammad-shariq-249461280/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            LinkedIn Connect
          </a>
        </p>

        {/* Optional button-style email for better clicks */}
        <a
          href="mailto:shariq.mle@gmail.com"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
