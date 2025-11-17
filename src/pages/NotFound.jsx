import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4" dir="rtl">
      <Helmet>
        <title>صفحة غير موجودة | نجار البيت السعودي</title>
        <meta
          name="description"
          content="عذرًا، الصفحة التي تبحث عنها غير موجودة. عد إلى الصفحة الرئيسية أو تصفح خدماتنا."
        />
        <link rel="canonical" href="https://yourdomain.com/404" />
      </Helmet>
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        الصفحة التي تبحث عنها غير موجودة.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow hover:bg-green-800 transition-colors"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
