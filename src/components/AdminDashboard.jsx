
import React, { useState, useEffect, useCallback } from 'react';

import {
  BookOpen,
  FolderDown,
  PlusCircle,
  Users,
  Trash2,
  Edit,
  Mail,
  LogOut,
  RefreshCw,
  ShieldCheck,
  UserPlus
} from 'lucide-react';

// =====================================
// BACKEND URL
// =====================================

const API_URL =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'
    : 'https://mch-platform-1.onrender.com';

// =====================================
// READ ACCOUNT TYPE FROM LOGIN TOKEN
// =====================================

function getLoggedInAccountType() {
  try {
    const token = sessionStorage.getItem('mchAdminToken');

    if (!token) return '';

    const payload = token.split('.')[1];

    if (!payload) return '';

    const base64 = payload
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const decoded = JSON.parse(
      atob(base64)
    );

    return decoded.accountType || '';

  } catch (error) {
    console.error('Unable to read administrator account type:', error);
    return '';
  }
}

export default function AdminDashboard({
  adminEmail,
  onLogout
}) {
  const [activeTab, setActiveTab] = useState('books');

  const accountType = getLoggedInAccountType();

  const isProgrammer = accountType === 'programmer';

  // =====================================
  // BOOKS
  // =====================================

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

  // =====================================
  // SUBSCRIBERS
  // =====================================

  const [subscribers, setSubscribers] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(false);
  const [subscriberError, setSubscriberError] = useState('');

  // =====================================
  // CONTACT MESSAGES
  // =====================================

  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [messageError, setMessageError] = useState('');

  // =====================================
  // OWNER ACCOUNT CREATION
  // =====================================

  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPassword, setOwnerPassword] = useState('');
  const [confirmOwnerPassword, setConfirmOwnerPassword] = useState('');

  const [creatingOwner, setCreatingOwner] = useState(false);
  const [ownerCreated, setOwnerCreated] = useState(false);
  const [ownerError, setOwnerError] = useState('');
  const [ownerSuccess, setOwnerSuccess] = useState('');

  // =====================================
  // AUTHENTICATION HEADERS
  // =====================================

  const getAuthHeaders = () => {
    const token = sessionStorage.getItem('mchAdminToken');

    return {
      Authorization: `Bearer ${token}`
    };
  };

  // =====================================
  // FETCH SUBSCRIBERS
  // =====================================

  const fetchSubscribers = useCallback(async () => {
    setLoadingSubs(true);
    setSubscriberError('');

    try {
      const response = await fetch(
        `${API_URL}/api/admin/subscribers`,
        {
          headers: getAuthHeaders()
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        onLogout?.();
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.error || data.message || 'Failed to load subscribers.'
        );
      }

      setSubscribers(Array.isArray(data) ? data : []);

    } catch (error) {
      console.error('Failed to fetch subscribers:', error);

      setSubscriberError(
        error.message || 'Unable to load subscribers.'
      );
    } finally {
      setLoadingSubs(false);
    }
  }, [onLogout]);

  // =====================================
  // FETCH CONTACT MESSAGES
  // =====================================

  const fetchMessages = useCallback(async () => {
    setLoadingMessages(true);
    setMessageError('');

    try {
      const response = await fetch(
        `${API_URL}/api/admin/messages`,
        {
          headers: getAuthHeaders()
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        onLogout?.();
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.error || data.message || 'Failed to load contact messages.'
        );
      }

      setMessages(Array.isArray(data) ? data : []);

    } catch (error) {
      console.error('Failed to fetch contact messages:', error);

      setMessageError(
        error.message || 'Unable to load contact messages.'
      );
    } finally {
      setLoadingMessages(false);
    }
  }, [onLogout]);

  // =====================================
  // LOAD DATA WHEN TAB OPENS
  // =====================================

  useEffect(() => {
    if (activeTab === 'subscribers') {
      fetchSubscribers();
    }

    if (activeTab === 'messages') {
      fetchMessages();
    }
  }, [activeTab, fetchSubscribers, fetchMessages]);

  // =====================================
  // CREATE OWNER ACCOUNT
  // =====================================

  const handleCreateOwner = async (e) => {
    e.preventDefault();

    setOwnerError('');
    setOwnerSuccess('');

    const cleanEmail = ownerEmail.trim().toLowerCase();

    if (!cleanEmail || !ownerPassword || !confirmOwnerPassword) {
      setOwnerError('Please complete all the fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setOwnerError('Please enter a valid email address.');
      return;
    }

    if (ownerPassword.length < 12 || ownerPassword.length > 128) {
      setOwnerError('The password must be between 12 and 128 characters.');
      return;
    }

    if (ownerPassword !== confirmOwnerPassword) {
      setOwnerError('The passwords do not match.');
      return;
    }

    setCreatingOwner(true);

    try {
      const response = await fetch(
        `${API_URL}/api/admin/create-owner`,
        {
          method: 'POST',

          headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            email: cleanEmail,
            password: ownerPassword
          })
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        onLogout?.();
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.message || 'Unable to create the owner account.'
        );
      }

      setOwnerCreated(true);

      setOwnerSuccess(
        data.message || 'Organisation owner account created successfully.'
      );

      setOwnerEmail('');
      setOwnerPassword('');
      setConfirmOwnerPassword('');

    } catch (error) {
      console.error('Owner account creation error:', error);

      setOwnerError(
        error.message || 'Something went wrong. Please try again.'
      );

    } finally {
      setCreatingOwner(false);
    }
  };

  // =====================================
  // ADD NEW BOOK
  // =====================================

  const handleAddBook = (e) => {
    e.preventDefault();

    if (!newBookTitle.trim() || !newBookPrice.trim()) {
      return;
    }

    setBooks((previousBooks) => [
      ...previousBooks,
      {
        id: Date.now(),
        title: newBookTitle.trim(),
        series: 'Custom Upload',
        price: newBookPrice.trim()
      }
    ]);

    setNewBookTitle('');
    setNewBookPrice('');
  };

  // =====================================
  // DELETE BOOK
  // =====================================

  const handleDeleteBook = (id) => {
    setBooks((previousBooks) =>
      previousBooks.filter((book) => book.id !== id)
    );
  };

  // =====================================
  // FORMAT DATES
  // =====================================

  const formatDate = (date) => {
    if (!date) return 'N/A';

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return 'N/A';
    }

    return parsedDate.toLocaleString();
  };

  // =====================================
  // DASHBOARD
  // =====================================

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

      {/* DASHBOARD HEADER */}

      <div className="bg-[#23461f] text-white p-6 sm:p-8 rounded-3xl shadow-lg space-y-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">

          <div>
            <span className="bg-emerald-800 text-emerald-200 text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              Owner Control Center
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold mt-3">
              MCH Platform Management
            </h1>

            <p className="text-emerald-100 text-sm mt-2">
              Manage books, resources, subscribers and contact messages.
            </p>

            {adminEmail && (
              <p className="text-emerald-200 text-xs mt-3">
                Signed in as: {adminEmail}
              </p>
            )}

          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition"
          >
            <LogOut size={17} />
            Logout
          </button>

        </div>

        {/* DASHBOARD TABS */}

        <div className="flex flex-wrap gap-2 bg-[#1c3919] p-2 rounded-xl border border-emerald-800">

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

          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeTab === 'messages'
                ? 'bg-emerald-600 text-white'
                : 'text-emerald-200 hover:text-white'
            }`}
          >
            Contact Messages ({messages.length})
          </button>

          {isProgrammer && (
            <button
              onClick={() => setActiveTab('owner')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'owner'
                  ? 'bg-emerald-600 text-white'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              Create Owner Account
            </button>
          )}

        </div>

      </div>

      {/* ========================================= */}
      {/* TAB 1: MANAGE BOOKS */}
      {/* ========================================= */}

      {activeTab === 'books' && (

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ADD BOOK FORM */}

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
                  accept="image/*"
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

          {/* EXISTING BOOKS */}

          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 space-y-4">

            <h3 className="font-bold text-lg text-[#23461f] flex items-center gap-2">
              <BookOpen size={20} className="text-emerald-600" />
              Existing Live Books ({books.length})
            </h3>

            <div className="divide-y divide-gray-100">

              {books.map((book) => (

                <div
                  key={book.id}
                  className="py-4 flex items-center justify-between gap-3"
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

                    <button
                      type="button"
                      title="Edit book"
                      className="p-2 text-gray-500 hover:text-emerald-700 transition"
                    >
                      <Edit size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteBook(book.id)}
                      title="Delete book"
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
              alert('Resource upload is not connected to cloud storage yet.');
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
                Names and email addresses retrieved from your database.
              </p>
            </div>

            <button
              onClick={fetchSubscribers}
              disabled={loadingSubs}
              className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 disabled:opacity-50 text-[#23461f] font-semibold text-xs px-4 py-2 rounded-lg transition border border-emerald-200"
            >
              <RefreshCw size={14} />
              Refresh List
            </button>

          </div>

          {subscriberError && (
            <p className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
              {subscriberError}
            </p>
          )}

          {loadingSubs ? (

            <p className="text-center py-8 text-gray-500 text-sm">
              Loading subscribers from database...
            </p>

          ) : subscribers.length === 0 ? (

            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl space-y-2">

              <Users
                size={32}
                className="mx-auto text-gray-300"
              />

              <p className="text-gray-600 font-medium">
                No subscribers found in database.
              </p>

              <p className="text-xs text-gray-400">
                Submit a name and email on your Resources page to test it.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full text-left border-collapse">

                <thead>
                  <tr className="border-b border-gray-200 text-xs uppercase text-gray-500 bg-emerald-50/50">

                    <th className="py-3 px-4 font-bold">#</th>
                    <th className="py-3 px-4 font-bold">Name</th>
                    <th className="py-3 px-4 font-bold">Email Address</th>
                    <th className="py-3 px-4 font-bold">Date Subscribed</th>

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
                        {formatDate(sub.dateSubscribed)}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      )}

      {/* ========================================= */}
      {/* TAB 4: CONTACT MESSAGES */}
      {/* ========================================= */}

      {activeTab === 'messages' && (

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-emerald-100 space-y-6">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

            <div>

              <h3 className="font-bold text-xl text-[#23461f] flex items-center gap-2">
                <Mail size={22} className="text-emerald-600" />
                Contact Messages
              </h3>

              <p className="text-sm text-gray-600">
                Messages submitted through the MCH Contact page.
              </p>

            </div>

            <button
              onClick={fetchMessages}
              disabled={loadingMessages}
              className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 disabled:opacity-50 text-[#23461f] font-semibold text-xs px-4 py-2 rounded-lg transition border border-emerald-200"
            >
              <RefreshCw size={14} />
              Refresh Messages
            </button>

          </div>

          {messageError && (
            <p className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
              {messageError}
            </p>
          )}

          {loadingMessages ? (

            <p className="text-center py-8 text-gray-500 text-sm">
              Loading contact messages...
            </p>

          ) : messages.length === 0 ? (

            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl space-y-2">

              <Mail
                size={34}
                className="mx-auto text-gray-300"
              />

              <p className="text-gray-600 font-medium">
                No contact messages found.
              </p>

              <p className="text-xs text-gray-400">
                Messages submitted through your Contact page will appear here.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {messages.map((message) => (

                <div
                  key={message._id}
                  className="border border-emerald-100 rounded-2xl p-5 hover:shadow-sm transition"
                >

                  <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">

                    <div>
                      <h4 className="font-bold text-[#23461f] text-lg">
                        {message.firstName} {message.lastName}
                      </h4>

                      <a
                        href={`mailto:${message.email}`}
                        className="text-sm text-emerald-700 hover:underline break-all"
                      >
                        {message.email}
                      </a>
                    </div>

                    <div className="sm:text-right">

                      <span className="inline-block bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {message.topic}
                      </span>

                      <p className="text-xs text-gray-400 mt-2">
                        {formatDate(message.dateSubmitted)}
                      </p>

                    </div>

                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">

                    <p className="text-xs font-bold uppercase text-gray-500 mb-2">
                      Message
                    </p>

                    <p className="text-sm text-gray-700 whitespace-pre-wrap break-words leading-relaxed">
                      {message.message}
                    </p>

                  </div>

                  <div className="mt-4">
                    <a
                      href={`mailto:${message.email}?subject=${encodeURIComponent(
                        `Re: ${message.topic || 'Your message to MCH'}`
                      )}`}
                      className="inline-flex items-center gap-2 bg-[#23461f] hover:bg-[#1c3919] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition"
                    >
                      <Mail size={14} />
                      Reply by Email
                    </a>
                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      )}

      {/* ========================================= */}
      {/* TAB 5: CREATE OWNER ACCOUNT */}
      {/* ========================================= */}

      {activeTab === 'owner' && isProgrammer && (

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-emerald-100 max-w-2xl mx-auto space-y-6">

          <div className="text-center space-y-3">

            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto">

              <ShieldCheck
                size={34}
                className="text-emerald-700"
              />

            </div>

            <h3 className="font-bold text-xl text-[#23461f]">
              Create Organisation Owner Account
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Create the second and final administrator account for the organisation owner.
              The owner will use these credentials to log in independently.
            </p>

          </div>

          {ownerCreated ? (

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">

              <ShieldCheck
                size={36}
                className="mx-auto text-emerald-700"
              />

              <h4 className="font-bold text-emerald-800">
                Owner Account Created Successfully
              </h4>

              <p className="text-sm text-emerald-700">
                The organisation owner can now log in using her email and password.
              </p>

              <p className="text-xs text-emerald-700">
                Registration for the second account is now complete.
              </p>

            </div>

          ) : (

            <form
              onSubmit={handleCreateOwner}
              className="space-y-5"
            >

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">

                <p className="text-sm text-emerald-900 leading-relaxed">
                  <strong>Important:</strong> Let the organisation owner enter her own password privately.
                  You do not need to know or record her password.
                </p>

              </div>

              <div>

                <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                  Owner Email Address
                </label>

                <input
                  type="email"
                  value={ownerEmail}
                  onChange={(e) => setOwnerEmail(e.target.value)}
                  placeholder="Enter the organisation owner's email"
                  autoComplete="email"
                  required
                  disabled={creatingOwner}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-emerald-600 disabled:bg-gray-100"
                />

              </div>

              <div>

                <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                  Owner Password
                </label>

                <input
                  type="password"
                  value={ownerPassword}
                  onChange={(e) => setOwnerPassword(e.target.value)}
                  placeholder="Owner enters her private password"
                  autoComplete="new-password"
                  minLength={12}
                  maxLength={128}
                  required
                  disabled={creatingOwner}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-emerald-600 disabled:bg-gray-100"
                />

                <p className="text-xs text-gray-500 mt-2">
                  Use a password between 12 and 128 characters.
                </p>

              </div>

              <div>

                <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                  Confirm Owner Password
                </label>

                <input
                  type="password"
                  value={confirmOwnerPassword}
                  onChange={(e) => setConfirmOwnerPassword(e.target.value)}
                  placeholder="Enter the password again"
                  autoComplete="new-password"
                  minLength={12}
                  maxLength={128}
                  required
                  disabled={creatingOwner}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-emerald-600 disabled:bg-gray-100"
                />

              </div>

              {ownerError && (

                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm">
                  {ownerError}
                </div>

              )}

              {ownerSuccess && (

                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-sm">
                  {ownerSuccess}
                </div>

              )}

              <button
                type="submit"
                disabled={creatingOwner}
                className="w-full flex items-center justify-center gap-2 bg-[#23461f] hover:bg-[#1c3919] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition"
              >

                {creatingOwner ? (

                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    Creating Owner Account...
                  </>

                ) : (

                  <>
                    <UserPlus size={18} />
                    Create Owner Account
                  </>

                )}

              </button>

            </form>

          )}

        </div>

      )}

    </div>
  );
}
