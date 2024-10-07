import React from "react";

// pages/terms-of-service.js
export default function TermsOfService() {
  return (
    <div className="min-h-screen py-12 px-6 sm:px-10 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Terms of Service</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">1. Access Rights and Users</h2>
          <p className="text-gray-600 leading-relaxed">
            You are permitted to access <span className="font-semibold">AcademikAI</span> based on the subscription tier you choose, which outlines the number of authorized users. You agree to use the service within these limits. If the number of users exceeds the agreed amount, <span className="font-semibold">AcademikAI</span> reserves the right to charge additional fees or suspend access until compliance is restored. Deliberate violation may result in termination of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">2. Data Ownership</h2>
          <p className="text-gray-600 leading-relaxed">
            All data that you upload to <span className="font-semibold">AcademikAI</span> remains your property. <span className="font-semibold">AcademikAI</span> does not claim ownership of your data but reserves the right to process it as needed to deliver the services outlined in your contract. By using <span className="font-semibold">AcademikAI</span>, you grant us a license to access and use your data solely for service delivery, system improvements, and troubleshooting purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">3. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            Both <span className="font-semibold">AcademikAI</span> and you, the user, have responsibilities regarding data security:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>
              <span className="font-semibold">AcademikAI&apos;s Responsibilities:</span> We will employ industry-standard encryption methods, backup solutions, and security protocols to protect your data.
            </li>
            <li>
              <span className="font-semibold">Your Responsibilities:</span> You are responsible for safeguarding your login credentials and ensuring that users authorized under your account comply with security best practices. <span className="font-semibold">AcademikAI</span> cannot be held liable for data breaches due to negligence or unauthorized access from your side.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">4. License Scope</h2>
          <p className="text-gray-600 leading-relaxed">
            When you subscribe to <span className="font-semibold">AcademikAI</span>, you are granted a non-transferable, non-exclusive, limited license to use our platform. This license is subject to the scope of rights described in your subscription plan and cannot be sublicensed or shared beyond authorized users. Any breach of this limitation may result in service suspension or termination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">5. Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold">AcademikAI</span> accepts no responsibility for any indirect, incidental, or consequential damages resulting from the use of our services. The company’s liability is limited to the amount paid under your subscription for the preceding 12 months. We are not responsible for data loss, security breaches, or downtime beyond the guarantees outlined in this contract.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">6. Warranties</h2>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold">AcademikAI</span> guarantees a minimum uptime of 99.5%, barring circumstances of force majeure or scheduled maintenance. While we aim for high performance and reliability, we do not guarantee specific results from the use of our platform. We disclaim all warranties, expressed or implied, regarding the performance or availability of the service beyond what is specified here.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">7. Pricing and Subscription Plans</h2>
          <p className="text-gray-600 leading-relaxed">
            Pricing for <span className="font-semibold">AcademikAI</span> services is based on the subscription tier chosen at the time of purchase. Payment schedules and amounts are outlined during the checkout process and reflected on the invoice. Additional fees may apply for any overages or changes to your subscription. Failure to make timely payments may result in suspension or termination of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">8. Term, Termination, and Renewal</h2>
          <p className="text-gray-600 leading-relaxed">
            Your subscription to <span className="font-semibold">AcademikAI</span> services will last for the duration agreed upon at the time of purchase. Subscriptions are automatically renewed unless canceled before the renewal date. You may cancel your subscription at any time, but early termination may result in penalties as outlined in the contract. Any unpaid fees at the time of termination will be due immediately.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Need Help? Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you have any questions, concerns, or need support with our platform, please do not hesitate to reach out to us. We&apos;re here to help and will respond as quickly as possible.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support Email</h3>
            <p className="text-gray-600">
              You can email us directly at:
              <a
                href="mailto:info@academikai.com"
                className="text-blue-600 hover:underline ml-1"
              >
                info@academikai.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
