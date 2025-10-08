
export default function UtawalaLocationSection() {
  return (
    <section className="w-full bg-sky-100 dark:bg-gray-800 py-2 px-4 text-center">
      <div className="flex gap-4 flex-col-reverse items-center lg:flex-row lg:items-start lg:justify-center lg:space-x-2">
        {/* Map */}
        <div className="w-full mt-8 md:mt-0 lg:mt-0 h-96 rounded shadow dark:shadow-gray-700 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.421554914199!2d36.952422!3d-1.2927946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13d0d8b3a7c1%3A0x2b3a5b7e2b6d8b4e!2sUtawala%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1717735669321!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Utawala Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}