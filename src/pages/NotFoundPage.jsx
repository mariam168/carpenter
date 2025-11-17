// src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 | الصفحة غير موجودة</title>
        <meta
          name="description"
          content="عذرًا، الصفحة التي تبحث عنها غير موجودة. ارجع إلى الصفحة الرئيسية للموقع."
        />
      </Helmet>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold text-red-600 mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          الصفحة غير موجودة
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-md">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة إلى الصفحة الرئيسية.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition-colors"
        >
          العودة للرئيسية
        </Link>
      </main>
    </>
  );
};

export default NotFoundPage;
