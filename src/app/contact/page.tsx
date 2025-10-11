


export default function ContactPage() {


  return (
    <>

      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <header className="text-center mb-16">
            <h1 className=" text-gold text-4xl font-semibold  mb-4">Contact Us</h1>
            <p className="text-xl ">Salah Mohamed</p>
          </header>


          {/* Map Section */}
          <section className="grid gap-5">


            <p className="">
              Phone: <a href="tel:+201220000538" className="hover:text-gray-300 transition-colors">+2 01220000538 <span className="bg-button px-5 py-1 rounded-2xl">Call</span></a>
            </p>
            <p className="">
              Whatsapp: <a href="https://wa.me/201220000538" className="hover:text-gray-300 transition-colors">+2 01220000538 <span className="bg-button px-5 py-1 rounded-2xl">Send Message</span></a>
            </p>

          </section>
        </div>
      </div>
    </>
  );
}