import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const NotAuthorized: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-full">
              <Shield className="w-12 h-12 text-red-600 dark:text-red-400" />
            </div>
          </div>

          {/* Content */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('notAuthorized.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('notAuthorized.message')}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center space-x-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('notAuthorized.goBack')}</span>
            </button>
            <button
              onClick={() => navigate('/products')}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg font-medium"
            >
              <Home className="w-4 h-4" />
              <span>{t('notAuthorized.goToProducts')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};