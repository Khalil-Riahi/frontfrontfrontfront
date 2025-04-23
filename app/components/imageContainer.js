export default function ImageContainer({ room }) {
    return (
      <div className="flex justify-center flex-wrap gap-8 px-4 py-6">
        <div className="flex flex-col md:flex-row max-w-2xl bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 transition overflow-hidden">
          <img
            className="w-full md:w-64 h-40 object-cover"
            src={room.image}
            alt={room.title}
          />
          <div className="flex flex-col justify-between p-4 leading-relaxed">
            <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900">
              {room.title}
            </h5>
            <p className="text-gray-700 text-sm">
              {room.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  