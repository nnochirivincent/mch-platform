import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  FolderDown,
  PlusCircle,
  Users,
  Trash2,
  Edit
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('books');

  // Mock state for managing books & resources dynamically
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Face in the Mountain',
      series: 'Weaverton Series',
      price: '$12.99'
    },
    {
      id: 2,
      title: 'The Festival Shoes',
      series: 'Weaverton Series',
      price: '$12.99'
    },
    {
      id: 3,
      title: "Luna's Threads of Light",
      series: 'Blossom in Nature',
      price: '$14.50'
    },
    {
      id: 4,
      title: "Femi's Promise",
      series: 'Blossom in Nature',
      price: '$14.50'
    }
  ]);

  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookPrice, setNewBookPrice] = useState('');

  // Subscribers state from MongoDB
  const [subscribers, setSubscribers] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(false);

  // Fetch subscribers when the Subscribers tab becomes active
  useEffect(() => {
    if (activeTab === 'subscribers') {
      fetchSubscribers();
    }
  }, [activeTab]);

  const fetchSubscribers = async () => {
    setLoadingSubs(true);

    try {
      const response = await fetch(
        'http://localhost:5000/api/admin/subscribers'
      );

      const data = await response.json();

      if (response.ok) {
        setSubscribers(data);
      }
    } catch (error) {
      console.error('Failed to fetch subscribers:', error);
    } finally {
      setLoadingSubs(false);
    }
  };

  // Add new book
  const handleAddBook = (e) => {
    e.preventDefault();

    if (newBookTitle && newBookPrice) {
      setBooks([
        ...books,
        {
          id: Date.now(),
          title: newBookTitle,
          series: 'Custom Upload',
          price: newBookPrice
        }
      ]);

      setNewBookTitle('');
      setNewBookPrice('');
    }
  };

  // Delete book
  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#23461f] text-white p-8 rounded-3xl shadow-lg">

        <div>
          <span className="bg-emerald-800 text-emerald-200 text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Owner Control Center
          </span>

          <h1 className="text-3xl font-bold mt-2">
            MCH Platform Management
          </h1>

          <p className="text-emerald-100 text-sm mt-1">
            Upload books, manage digital resources, and view live activity book subscribers.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 bg-[#1c3919] p-1.5 rounded-xl border border-emerald-800">

          <button
            onClick={() => setActiveTab('books')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeTab === 'books'
                ? 'bg-emerald-600 text-white'
                : 'text-emerald-200 hover:text-white'
            }`}
          >
            Manage Books
          </button>

          <button
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeTab === 'resources'
                ? 'bg-emerald-600 text-white'
                : 'text-emerald-200 hover:text-white'
            }`}
          >
            Upload Resources
          </button>

          <button
            onClick={() => setActiveTab('subscribers')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeTab === 'subscribers'
                ? 'bg-emerald-600 text-white'
                : 'text-emerald-200 hover:text-white'
            }`}
          >
            Subscribers ({subscribers.length})
          </button>

        </div>
      </div>


      {/* ========================================= */}
      {/* TAB 1: MANAGE BOOKS */}
      {/* ========================================= */}

      {activeTab === 'books' && (
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Upload Form */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 space-y-4 h-fit">

            <h3 className="font-bold text-lg text-[#23461f] flex items-center gap-2">
              <PlusCircle size={20} className="text-emerald-600" />
              Add New Book
            </h3>

            <form
              onSubmit={handleAddBook}
              className="space-y-4"
            >

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Book Title
                </label>

                <input
                  type="text"
                  value={newBookTitle}
                  onChange={(e) => setNewBookTitle(e.target.value)}
                  placeholder="e.g. Whispers of the Forest"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Price ($)
                </label>

                <input
                  type="text"
                  value={newBookPrice}
                  onChange={(e) => setNewBookPrice(e.target.value)}
                  placeholder="e.g. $15.00"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Upload Cover Image
                </label>

                <input
                  type="file"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-[#23461f] hover:file:bg-emerald-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#23461f] hover:bg-[#1c3919] text-white font-semibold py-2.5 rounded-lg transition text-sm"
              >
                Publish Book
              </button>

            </form>
          </div>


          {/* Active Books List */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 space-y-4">

            <h3 className="font-bold text-lg text-[#23461f] flex items-center gap-2">
              <BookOpen size={20} className="text-emerald-600" />
              Existing Live Books ({books.length})
            </h3>

            <div className="divide-y divide-gray-100">

              {books.map((book) => (
                <div
                  key={book.id}
                  className="py-4 flex items-center justify-between"
                >

                  <div>
                    <h4 className="font-bold text-[#23461f]">
                      {book.title}
                    </h4>

                    <span className="text-xs bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-medium">
                      {book.series}
                    </span>

                    <span className="text-sm font-semibold text-gray-700 ml-3">
                      {book.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">

                    <button className="p-2 text-gray-500 hover:text-emerald-700 transition">
                      <Edit size={16} />
                    </button>

                    <button
                      onClick={() => handleDeleteBook(book.id)}
                      className="p-2 text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      )}


      {/* ========================================= */}
      {/* TAB 2: UPLOAD RESOURCES */}
      {/* ========================================= */}

      {activeTab === 'resources' && (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 max-w-2xl mx-auto space-y-6">

          <div className="text-center space-y-2">

            <FolderDown
              size={40}
              className="mx-auto text-emerald-600"
            />

            <h3 className="font-bold text-xl text-[#23461f]">
              Upload Digital Resource or Activity Book
            </h3>

            <p className="text-sm text-gray-600">
              Upload PDF worksheets, teacher guides, or audio storytelling clips for visitors to download.
            </p>

          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Resource uploaded successfully!');
            }}
            className="space-y-4"
          >

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                Resource Title
              </label>

              <input
                type="text"
                placeholder="e.g. Nature Exploration Workbook Vol. 2"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                Select PDF or Media File
              </label>

              <input
                type="file"
                required
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-[#23461f] hover:file:bg-emerald-100"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#23461f] hover:bg-[#1c3919] text-white font-semibold py-3 rounded-lg transition"
            >
              Upload and Make Live
            </button>

          </form>
        </div>
      )}


      {/* ========================================= */}
      {/* TAB 3: SUBSCRIBERS */}
      {/* ========================================= */}

      {activeTab === 'subscribers' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-emerald-100 space-y-6">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

            <div>

              <h3 className="font-bold text-xl text-[#23461f] flex items-center gap-2">
                <Users size={22} className="text-emerald-600" />
                Activity Book Subscribers
              </h3>

              <p className="text-sm text-gray-600">
                Live list of names and emails retrieved directly from your database.
              </p>

            </div>

            <button
              onClick={fetchSubscribers}
              className="bg-emerald-50 hover:bg-emerald-100 text-[#23461f] font-semibold text-xs px-4 py-2 rounded-lg transition border border-emerald-200"
            >
              Refresh List
            </button>

          </div>


          {/* Loading */}
          {loadingSubs ? (

            <p className="text-center py-8 text-gray-500 text-sm">
              Loading subscribers from database...
            </p>

          ) : subscribers.length === 0 ? (

            /* Empty state */
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl space-y-2">

              <Users
                size={32}
                className="mx-auto text-gray-300"
              />

              <p className="text-gray-600 font-medium">
                No subscribers found in database.
              </p>

              <p className="text-xs text-gray-400">
                Submit a name and email on your Resources page to test it out!
              </p>

            </div>

          ) : (

            /* Subscribers Table */
            <div className="overflow-x-auto">

              <table className="w-full text-left border-collapse">

                <thead>

                  <tr className="border-b border-gray-200 text-xs uppercase text-gray-500 bg-emerald-50/50">

                    <th className="py-3 px-4 font-bold">
                      #
                    </th>

                    <th className="py-3 px-4 font-bold">
                      Name
                    </th>

                    <th className="py-3 px-4 font-bold">
                      Email Address
                    </th>

                    <th className="py-3 px-4 font-bold">
                      Date Subscribed
                    </th>

                  </tr>

                </thead>


                <tbody className="divide-y divide-gray-100 text-sm">

                  {subscribers.map((sub, index) => (

                    <tr
                      key={sub._id || index}
                      className="hover:bg-gray-50/50"
                    >

                      <td className="py-3.5 px-4 text-gray-500">
                        {index + 1}
                      </td>

                      <td className="py-3.5 px-4 font-medium text-[#23461f]">
                        {sub.name || 'N/A'}
                      </td>

                      <td className="py-3.5 px-4 font-medium text-[#23461f]">
                        {sub.email}
                      </td>

                      <td className="py-3.5 px-4 text-gray-600">
                        {sub.dateSubscribed
                          ? new Date(sub.dateSubscribed).toLocaleDateString()
                          : 'N/A'}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>
      )}

    </div>
  );
}