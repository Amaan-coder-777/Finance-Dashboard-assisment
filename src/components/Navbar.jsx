function Navbar({ darkMode, setDarkMode, role, setRole }) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center transition-all">

            <h1 className="text-xl font-bold text-purple-600">
                Finance Dashboard
            </h1>

            <div className="flex gap-4 items-center">

                {/* Theme Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:scale-105 transition"
                >
                    {darkMode ? "☀ Light" : "🌙 Dark"}
                </button>

                {/* Role Dropdown */}
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border p-2 rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
                >
                    <option>Viewer</option>
                    <option>Admin</option>
                </select>

            </div>
        </div>
    );
}

export default Navbar;