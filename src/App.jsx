import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  useNavigate
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import About from './components/About';
import CharacterwithNature from './components/CharacterwithNature';
import Books from './components/Books';
import Collaboration from './components/Collaboration';
import Resources from './components/Resources';
import Contact from './components/Contact';
import CwnComingSoon from './components/CwnComingSoon';

// =====================================
// BACKEND URL
// =====================================

const API_URL =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'
    : 'https://mch-platform-1.onrender.com';

// =====================================
// SCROLL TO TOP
// =====================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// =====================================
// PUBLIC WEBSITE LAYOUT
// =====================================

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#11240f]">
      <Navbar />

      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
    </div>
  );
}

// =====================================
// LOADING SCREEN
// =====================================

function AdminLoading() {
  return (
    <div className="min-h-screen bg-[#11240f] flex items-center justify-center p-6">
      <div className="text-center text-white">
        <div className="w-10 h-10 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin mx-auto mb-4" />

        <p className="text-emerald-100">
          Checking administrator access...
        </p>
      </div>
    </div>
  );
}

// =====================================
// FIRST ADMIN SETUP PAGE
// =====================================

function AdminSetupPage() {
  const navigate = useNavigate();

  const [checking, setChecking] = useState(true);
  const [setupRequired, setSetupRequired] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setupKey, setSetupKey] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    let active = true;

    const checkSetup = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/admin/setup-status`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || 'Unable to check administrator setup.'
          );
        }

        if (active) {
          setSetupRequired(data.setupRequired);
        }
      } catch (err) {
        if (active) {
          setError(
            'Unable to connect to the server. Please refresh and try again.'
          );
        }
      } finally {
        if (active) {
          setChecking(false);
        }
      }
    };

    checkSetup();

    return () => {
      active = false;
    };
  }, []);

  const handleSetup = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (password.length < 12) {
      setError('Your password must contain at least 12 characters.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/admin/setup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password,
            setupKey
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Administrator setup failed.'
        );
      }

      setSuccess(
        'Administrator account created successfully. You can now log in.'
      );

      setPassword('');
      setSetupKey('');

      setTimeout(() => {
        navigate('/admin/login', { replace: true });
      }, 1800);

    } catch (err) {
      setError(err.message || 'Unable to create administrator account.');
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return <AdminLoading />;
  }

  if (!setupRequired && !error) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#11240f] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-7 sm:p-10">

        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#23461f] flex items-center justify-center mx-auto mb-4 text-3xl">
            🔐
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#23461f]">
            Administrator Setup
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Create the first authorised MCH administrator account.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-sm mb-5">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-sm mb-5">
            {success}
          </div>
        )}

        {setupRequired && (
          <form onSubmit={handleSetup} className="space-y-5">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Administrator Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your official email"
                required
                autoComplete="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Create Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 12 characters"
                minLength={12}
                maxLength={128}
                required
                autoComplete="new-password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 outline-none focus:border-emerald-600"
              />

              <p className="text-xs text-gray-500 mt-2">
                Choose a strong password and keep it private.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                One-Time Setup Key
              </label>

              <input
                type="password"
                value={setupKey}
                onChange={(e) => setSetupKey(e.target.value)}
                placeholder="Enter the private setup key"
                required
                autoComplete="off"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 outline-none focus:border-emerald-600"
              />

              <p className="text-xs text-gray-500 mt-2">
                Obtain this key from the person responsible for setting up the website.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#23461f] hover:bg-[#1c3919] disabled:opacity-60 text-white font-bold py-3 rounded-xl transition"
            >
              {loading ? 'Creating Account...' : 'Create Administrator Account'}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}

// =====================================
// ADMIN LOGIN PAGE
// =====================================

function AdminLoginPage() {
  const navigate = useNavigate();

  const [checking, setChecking] = useState(true);
  const [setupRequired, setSetupRequired] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    const checkSetup = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/admin/setup-status`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error('Unable to check administrator setup.');
        }

        if (active) {
          setSetupRequired(data.setupRequired);
        }
      } catch (err) {
        if (active) {
          setError(
            'Unable to connect to the server. Please try again.'
          );
        }
      } finally {
        if (active) {
          setChecking(false);
        }
      }
    };

    checkSetup();

    return () => {
      active = false;
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/admin/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Login failed.'
        );
      }

      if (!data.token) {
        throw new Error('The server did not return a login token.');
      }

      sessionStorage.setItem('mchAdminToken', data.token);
      sessionStorage.setItem(
        'mchAdminEmail',
        data.admin?.email || email
      );

      navigate('/admin', { replace: true });

    } catch (err) {
      setError(err.message || 'Unable to log in.');
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return <AdminLoading />;
  }

  if (setupRequired) {
    return <Navigate to="/admin/setup" replace />;
  }

  return (
    <div className="min-h-screen bg-[#11240f] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-7 sm:p-10">

        <div className="text-center mb-8">

          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#23461f] flex items-center justify-center mx-auto mb-4 text-3xl">
            🔑
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#23461f]">
            MCH Admin Login
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Sign in to manage the MCH Platform.
          </p>

        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-sm mb-5">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Administrator email"
              required
              autoComplete="username"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 outline-none focus:border-emerald-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#23461f] hover:bg-[#1c3919] disabled:opacity-60 text-white font-bold py-3 rounded-xl transition"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

        </form>

        <p className="text-center text-xs text-gray-400 mt-7">
          Authorised administrators only.
        </p>

      </div>
    </div>
  );
}

// =====================================
// PROTECT ADMIN DASHBOARD
// =====================================

function AdminGate() {
  const navigate = useNavigate();

  const [status, setStatus] = useState('checking');
  const [adminEmail, setAdminEmail] = useState('');

  useEffect(() => {
    let active = true;

    const checkAccess = async () => {
      const token = sessionStorage.getItem('mchAdminToken');

      try {
        if (token) {
          const response = await fetch(
            `${API_URL}/api/admin/verify`,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );

          const data = await response.json();

          if (response.ok && data.success) {
            if (active) {
              setAdminEmail(data.admin?.email || '');
              setStatus('authorized');
            }

            return;
          }

          sessionStorage.removeItem('mchAdminToken');
          sessionStorage.removeItem('mchAdminEmail');
        }

        const setupResponse = await fetch(
          `${API_URL}/api/admin/setup-status`
        );

        const setupData = await setupResponse.json();

        if (!setupResponse.ok) {
          throw new Error('Unable to verify administrator setup.');
        }

        if (active) {
          setStatus(
            setupData.setupRequired ? 'setup' : 'login'
          );
        }

      } catch (err) {
        if (active) {
          setStatus('error');
        }
      }
    };

    checkAccess();

    return () => {
      active = false;
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('mchAdminToken');
    sessionStorage.removeItem('mchAdminEmail');

    navigate('/admin/login', { replace: true });
  };

  if (status === 'checking') {
    return <AdminLoading />;
  }

  if (status === 'setup') {
    return <Navigate to="/admin/setup" replace />;
  }

  if (status === 'login') {
    return <Navigate to="/admin/login" replace />;
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-[#11240f] flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-8 max-w-md text-center">
          <h2 className="text-xl font-bold text-[#23461f]">
            Unable to verify access
          </h2>

          <p className="text-gray-600 text-sm mt-3">
            Please check your internet connection and try again.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 bg-[#23461f] text-white px-6 py-3 rounded-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <AdminDashboard
      adminEmail={adminEmail}
      onLogout={handleLogout}
    />
  );
}

// =====================================
// MAIN APP
// =====================================

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>

        {/* ADMIN PAGES - NO PUBLIC NAVBAR */}

        <Route
          path="/admin/setup"
          element={<AdminSetupPage />}
        />

        <Route
          path="/admin/login"
          element={<AdminLoginPage />}
        />

        <Route
          path="/admin"
          element={<AdminGate />}
        />

        {/* STANDALONE CWN PAGES */}

        <Route
          path="/cwn/laws"
          element={<CwnComingSoon />}
        />

        <Route
          path="/cwn/programmes"
          element={<CwnComingSoon />}
        />

        {/* PUBLIC WEBSITE */}

        <Route element={<PublicLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/character-with-nature"
            element={<CharacterwithNature />}
          />

          <Route path="/books" element={<Books />} />

          <Route
            path="/collaboration"
            element={<Collaboration />}
          />

          <Route path="/resources" element={<Resources />} />

          <Route path="/contact" element={<Contact />} />

        </Route>

        {/* UNKNOWN ROUTES */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </Router>
  );
}