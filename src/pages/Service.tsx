function Service() {
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-700 mb-6">
          We offer a wide range of services to help you achieve your goals.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Digital Marketing</li>
          <li>Consulting Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Service;
