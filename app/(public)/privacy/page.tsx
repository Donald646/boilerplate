import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-blue-600 text-white">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Draftly Privacy Policy</h1>
            <Link href="/" className="flex items-center text-white hover:text-blue-200 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to Draftly (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our AI-integrated study tool.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">2.1 Personal Information</h3>
            <p className="text-gray-700">We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Educational institution</li>
              <li>Study preferences and habits</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">2.2 Usage Data</h3>
            <p className="text-gray-700">We automatically collect certain information about your use of Draftly, including:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Log data (e.g., IP address, browser type, pages visited)</li>
              <li>Device information (e.g., device type, operating system)</li>
              <li>Study patterns and engagement with our AI tools</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">2.3 AI-Generated Data</h3>
            <p className="text-gray-700">Our AI tools may generate and collect data based on your interactions, including:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Study recommendations</li>
              <li>Performance analytics</li>
              <li>Personalized learning paths</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>To provide and maintain our service</li>
              <li>To personalize your study experience</li>
              <li>To improve our AI algorithms and study tools</li>
              <li>To communicate with you about service updates and offers</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Service providers who assist in our operations</li>
              <li>Educational institutions (with your consent)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700">We implement industry-standard security measures to protect your data, including:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits</li>
              <li>Strict access controls for our employees</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of certain data collection practices</li>
              <li>Export your data in a machine-readable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Data Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes via email or through our platform. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@Draftly.com" className="text-blue-600 hover:underline">info@Draftly.com</a>
            </p>
          </section>
        </div>
        <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;