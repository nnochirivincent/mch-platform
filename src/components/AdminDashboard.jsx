import React, { useState } from 'react';
import { BookOpen, FolderDown, PlusCircle, Settings, Trash2, Edit, Save } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('books');
  
  // Mock state for managing books & resources dynamically
  const [books, setBooks] = useState([
    { id: 1, title: 'The Face in the Mountain', series: 'Weaverton Series', price: '$12.99' },
    { id: 2, title: 'The Festival Shoes', series: 'Weaverton Series', price: '$12.99' },
    { id: 3, title: "Luna's Threads of Light", series: 'Blossom in Nature', price: '$14.50' },
    { id: 4, title: "Femi's Promise", series: 'Blossom in Nature', price: '$14.50' },
  ]);

  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookPrice, setNewBookPrice] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBookTitle && newBookPrice) {
      setBooks([...books, { id: Date.now(), title: newBookTitle, series: 'Custom Upload', price: newBookPrice }]);
      setNewBookTitle('');
      setNewBookPrice('');
    }
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#23461f] text-white p-8 rounded-3xl shadow-lg">
        <div>
          <span className="bg-emerald-800 text-emerald-200 text-xs px-3 py-1 rounded-full uppercase tracking-wider">Owner Control Center</span>
          <h1 className="text-3xl font-bold mt-2">MCH Platform Management</h1>
          <p className="text-emerald-100 text-sm mt-1">Upload new books, adjust pricing, and manage digital resources seamlessly.</p>
        </div>
        <div className="flex gap-2 bg-[#1c3919] p-1.5 rounded-xl border border-emerald-800">
          <button 
            onClick={() => setActiveTab('books')} 
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${activeTab === 'books' ? 'bg-emerald-600 text-white' : 'text-emerald-200 hover:text-white'}`}
          >
            Manage Books
          </button>
          <button 
            onClick={() => setActiveTab('resources')} 
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${activeTab === 'resources' ? 'bg-emerald-600 text-white' : 'text-emerald-200 hover:text-white'}`}
          >
            Upload Resources
          </button>
        </div>
      </div>

      {/* Tab Content 1: Manage Books */}
      {activeTab === 'books' && (
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Upload Form Box */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 space-y-4 h-fit">
            <h3 className="font-bold text-lg text-[#23461f] flex items-center gap-2">
              <PlusCircle size={20} className="text-emerald-600" /> Add New Book
            </h3>
            <form onSubmit={handleAddBook} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Book Title</label>
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
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Price ($)</label>
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
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Upload Cover Image</label>
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
              <BookOpen size={20} className="text-emerald-600" /> Existing Live Books ({books.length})
            </h3>
            <div className="divide-y divide-gray-100">
              {books.map((book) => (
                <div key={book.id} className="py-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#23461f]">{book.title}</h4>
                    <span className="text-xs bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-medium">{book.series}</span>
                    <span className="text-sm font-semibold text-gray-700 ml-3">{book.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-500 hover:text-emerald-700 transition"><Edit size={16} /></button>
                    <button onClick={() => handleDeleteBook(book.id)} className="p-2 text-red-500 hover:text-red-700 transition"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Tab Content 2: Upload Resources */}
      {activeTab === 'resources' && (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <FolderDown size={40} className="mx-auto text-emerald-600" />
            <h3 className="font-bold text-xl text-[#23461f]">Upload Digital Resource or Activity Book</h3>
            <p className="text-sm text-gray-600">Upload PDF worksheets, teacher guides, or audio storytelling clips for visitors to download.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Resource uploaded successfully!'); }} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Resource Title</label>
              <input type="text" placeholder="e.g. Nature Exploration Workbook Vol. 2" required className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-emerald-600" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Select PDF or Media File</label>
              <input type="file" required className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-[#23461f] hover:file:bg-emerald-100" />
            </div>
            <button type="submit" className="w-full bg-[#23461f] hover:bg-[#1c3919] text-white font-semibold py-3 rounded-lg transition">
              Upload and Make Live
            </button>
          </form>
        </div>
      )}

    </div>
  );
}