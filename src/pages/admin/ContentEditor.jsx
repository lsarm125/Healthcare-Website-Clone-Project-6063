import React, { useState, useEffect } from 'react';
import { contentApi } from '../../lib/supabase';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSave, FiAlertCircle, FiCheckCircle, FiEdit, FiEye } = FiIcons;

const ContentEditor = () => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [notification, setNotification] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  // Fetch all website content on component mount
  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        const data = await contentApi.getContent();
        setContent(data);
        if (!activeSection && Object.keys(data).length > 0) {
          setActiveSection(Object.keys(data)[0]);
        }
      } catch (error) {
        console.error("Error fetching content:", error);
        showNotification("Failed to load website content", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const handleContentChange = (e, field) => {
    if (!activeSection) return;
    
    setContent(prev => ({
      ...prev,
      [activeSection]: {
        ...prev[activeSection],
        [field]: e.target.value
      }
    }));
  };

  const saveContent = async () => {
    if (!activeSection) return;
    
    setSaving(true);
    try {
      const sectionContent = content[activeSection];
      const updated = await contentApi.updateContent(activeSection, {
        title: sectionContent.title,
        subtitle: sectionContent.subtitle,
        content: sectionContent.content,
        cta_text: sectionContent.cta_text,
        updated_at: new Date()
      });
      
      if (updated) {
        showNotification(`${activeSection} content updated successfully`, "success");
      } else {
        showNotification("Failed to update content", "error");
      }
    } catch (error) {
      console.error("Error saving content:", error);
      showNotification("Error saving content: " + error.message, "error");
    } finally {
      setSaving(false);
    }
  };

  const showNotification = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  // If no content is available
  if (Object.keys(content).length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 my-8">
        <div className="flex items-center justify-center space-x-2 text-yellow-500">
          <SafeIcon icon={FiAlertCircle} className="w-6 h-6" />
          <h2 className="text-xl font-semibold">No Content Available</h2>
        </div>
        <p className="text-center mt-4">
          No website content has been configured yet or there was an error connecting to the database. 
          Please check your Supabase connection and ensure the website_content table exists.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Website Content Editor</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <SafeIcon icon={previewMode ? FiEdit : FiEye} className="w-5 h-5" />
            <span>{previewMode ? 'Edit Mode' : 'Preview Mode'}</span>
          </button>
          
          <button
            onClick={saveContent}
            disabled={saving || !activeSection}
            className={`flex items-center space-x-2 px-4 py-2 ${
              saving 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-primary-600 hover:bg-primary-700'
            } text-white rounded-md transition-colors`}
          >
            <SafeIcon icon={FiSave} className="w-5 h-5" />
            <span>{saving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>
      
      {/* Notification */}
      {notification && (
        <div className={`mb-6 p-4 rounded-md ${
          notification.type === 'success' ? 'bg-green-50 text-green-700' : 
          notification.type === 'error' ? 'bg-red-50 text-red-700' : 
          'bg-blue-50 text-blue-700'
        }`}>
          <div className="flex items-center space-x-2">
            <SafeIcon 
              icon={notification.type === 'success' ? FiCheckCircle : FiAlertCircle} 
              className="w-5 h-5" 
            />
            <span>{notification.message}</span>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section Navigation */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Page Sections</h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            {Object.keys(content).map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeSection === section 
                    ? 'bg-primary-100 text-primary-700 font-medium' 
                    : 'hover:bg-gray-200'
                }`}
              >
                {section.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content Editor */}
        <div className="lg:col-span-3">
          {activeSection ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 capitalize">
                {activeSection.replace(/_/g, ' ')}
              </h2>
              
              {previewMode ? (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">{content[activeSection].title}</h3>
                  <h4 className="text-xl text-gray-600 mb-4">{content[activeSection].subtitle}</h4>
                  <div className="prose max-w-none mb-6 whitespace-pre-wrap">
                    {content[activeSection].content}
                  </div>
                  {content[activeSection].cta_text && (
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-md">
                      {content[activeSection].cta_text}
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={content[activeSection].title || ''}
                      onChange={(e) => handleContentChange(e, 'title')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Subtitle
                    </label>
                    <input
                      type="text"
                      value={content[activeSection].subtitle || ''}
                      onChange={(e) => handleContentChange(e, 'subtitle')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Main Content
                    </label>
                    <textarea
                      value={content[activeSection].content || ''}
                      onChange={(e) => handleContentChange(e, 'content')}
                      rows={10}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CTA Button Text
                    </label>
                    <input
                      type="text"
                      value={content[activeSection].cta_text || ''}
                      onChange={(e) => handleContentChange(e, 'cta_text')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Last updated: {content[activeSection].updated_at 
                      ? new Date(content[activeSection].updated_at).toLocaleString() 
                      : 'Never'}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-500">Select a section to edit</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;