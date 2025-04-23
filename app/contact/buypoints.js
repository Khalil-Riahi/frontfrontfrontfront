export default function BuyPoints() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 p-10">
          <div className="flex-[2] gap-2 w-full text-gray-900">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
    
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom & Prénom"
                  className="border p-3 w-full placeholder-gray-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="border p-3 w-full placeholder-gray-500"
                  required
                />
              </div>
    
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                className="border p-3 w-full placeholder-gray-500"
                required
              />
    
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="border p-3 w-full placeholder-gray-500"
                required
              ></textarea>
    
              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-40 border-2 border-blue-500 text-blue-500 hover:bg-blue-100 transition px-6 py-3 uppercase tracking-widest"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      );
    }
    
